import { useEffect, useRef } from "react";
import { EYES } from "../data/eyes";

// Frames extracted from the original clip (every 2nd frame, 2400px wide WebP).
// Scrubbing a <video> by currentTime forces a decoder seek per mouse move,
// which is slow on desktop and worse on phones; drawing a decoded frame to a
// canvas is instant.
const FRAME_COUNT = 49;
const frameSrc = (i: number) => `/frames/f${String(i + 1).padStart(3, "0")}.webp`;

const SENSITIVITY = 0.8;
const OBJECT_POSITION_X = 0.7; // same as the old object-position: 70% center
const EASE = 0.18;

export default function BackgroundVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: false });
    if (!canvas || !ctx) return;

    const frames: (HTMLImageElement | undefined)[] = new Array(FRAME_COUNT);
    let target = 0; // where the pointer wants to be, in frames
    let current = 0; // eased position actually shown
    let drawn = -1;
    let lid = 0; // 0 = eyes open, 1 = shut
    let blinkTimer = 0;
    let blinking = false;
    let py = 0; // vertical pointer, -1..1 (target) and eased value
    let cy = 0;
    let lastInput = performance.now();
    let sway = 0; // 0..1 how much idle sway is applied
    let swayOffset = 0;
    // Idle sway and parallax need a cursor; skip them on touch / reduced motion.
    const ambient =
      !window.matchMedia("(pointer: coarse)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let prevX: number | null = null;
    let disposed = false;

    // Nearest decoded frame to `index`, so scrubbing works while still loading.
    const nearest = (index: number) => {
      for (let d = 0; d < FRAME_COUNT; d++) {
        const a = frames[index - d];
        if (a) return { img: a, i: index - d };
        const b = frames[index + d];
        if (b) return { img: b, i: index + d };
      }
      return null;
    };

    const draw = (force = false) => {
      const hit = nearest(Math.round(current + swayOffset));
      if (!hit || (!force && hit.i === drawn)) return;
      drawn = hit.i;
      const { width: cw, height: ch } = canvas;
      const { naturalWidth: iw, naturalHeight: ih } = hit.img;
      const scale = Math.max(cw / iw, ch / ih); // object-fit: cover
      const w = iw * scale;
      const h = ih * scale;
      const ox = (cw - w) * OBJECT_POSITION_X;
      const oy = (ch - h) / 2;
      ctx.drawImage(hit.img, ox, oy, w, h);
      if (lid > 0.01) drawLids(hit.i, ox, oy, w, h);
    };

    // The eyes are baked into the frames, so a blink paints the screen colour
    // over each eye and then a vertically squashed eye on top.
    const drawLids = (i: number, ox: number, oy: number, w: number, h: number) => {
      const eyes = EYES[i];
      if (!eyes) return;
      for (const [cx, cy, rx, ry, br, bg, bb, er, eg, eb] of eyes) {
        ctx.save();
        ctx.translate(ox + cx * w, oy + cy * h);
        ctx.scale(rx * w, ry * h);
        const cover = ctx.createRadialGradient(0, 0, 0, 0, 0, 1.5);
        cover.addColorStop(0.85, `rgb(${br},${bg},${bb})`);
        cover.addColorStop(1, `rgba(${br},${bg},${bb},0)`);
        ctx.fillStyle = cover;
        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.scale(1, Math.max(1 - lid, 0.06));
        const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        glow.addColorStop(0.7, `rgb(${er},${eg},${eb})`);
        glow.addColorStop(1, `rgba(${er},${eg},${eb},0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0, 0, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const tick = (now = performance.now()) => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.01) current = target;

      if (ambient) {
        // After a moment without input the head drifts gently, like it's breathing.
        const idle = now - lastInput > 2500 && !document.hidden;
        sway += ((idle ? 1 : 0) - sway) * 0.03;
        swayOffset = Math.sin(now / 1400) * 0.9 * sway;
        cy += (py - cy) * 0.08;
        canvas.style.transform = `translate3d(0, ${(-cy * 6).toFixed(2)}px, 0) scale(1.02)`;
      }

      draw();
      const settled = current === target && (!ambient || (sway < 0.001 && Math.abs(py - cy) < 0.001));
      raf = settled ? 0 : requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      // Resizing the canvas resets context state; downscaling 2400px frames needs the good filter.
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      draw(true);
    };

    const move = (x: number) => {
      if (prevX !== null) {
        const delta = x - prevX;
        target = Math.min(
          Math.max(target + (delta / window.innerWidth) * SENSITIVITY * (FRAME_COUNT - 1), 0),
          FRAME_COUNT - 1
        );
        kick();
      }
      prevX = x;
    };
    const onMouse = (e: MouseEvent) => {
      lastInput = performance.now();
      py = (e.clientY / window.innerHeight) * 2 - 1;
      move(e.clientX);
      kick();
    };
    const onTouch = (e: TouchEvent) => move(e.touches[0].clientX);
    const onTouchEnd = () => {
      prevX = null;
    };

    // Load first frame first so something shows immediately, then the rest.
    const load = (i: number) => {
      const img = new Image();
      img.decoding = "async";
      img.src = frameSrc(i);
      img.onload = () => {
        if (disposed) return;
        frames[i] = img;
        if (i === 0) draw(true);
        else if (Math.round(current) === i || drawn === -1) draw(true);
      };
    };
    load(0);
    const idle = (window as any).requestIdleCallback ?? ((fn: () => void) => setTimeout(fn, 200));
    idle(() => {
      for (let i = 1; i < FRAME_COUNT; i++) load(i);
    });

    const BLINK_MS = 220;
    const blink = () => {
      blinking = true;
      const start = performance.now();
      const step = (now: number) => {
        if (disposed) return;
        const t = Math.min((now - start) / BLINK_MS, 1);
        lid = Math.sin(t * Math.PI); // shut then open
        draw(true);
        if (t < 1) requestAnimationFrame(step);
        else {
          lid = 0;
          blinking = false;
          draw(true);
          schedule();
        }
      };
      requestAnimationFrame(step);
    };
    const schedule = () => {
      clearTimeout(blinkTimer);
      blinkTimer = window.setTimeout(blink, 2500 + Math.random() * 3000);
    };
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) schedule();

    // Click the model (anywhere that isn't a link or button) to make it blink.
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, input, textarea")) return;
      if (blinking) return;
      clearTimeout(blinkTimer);
      blink();
    };
    // Wake the idle sway loop once the pointer has been still for a while.
    const idleCheck = ambient
      ? window.setInterval(() => {
          if (!raf && performance.now() - lastInput > 2500 && !document.hidden) kick();
        }, 1000)
      : 0;

    resize();
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      disposed = true;
      clearTimeout(blinkTimer);
      cancelAnimationFrame(raf);
      clearInterval(idleCheck);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full"
      style={{ background: "#b9b8b6" }}
    />
  );
}
