import { useEffect, useRef } from "react";

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
      const hit = nearest(Math.round(current));
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
    };

    const tick = () => {
      current += (target - current) * EASE;
      if (Math.abs(target - current) < 0.01) current = target;
      draw();
      raf = current === target ? 0 : requestAnimationFrame(tick);
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
    const onMouse = (e: MouseEvent) => move(e.clientX);
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

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
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
