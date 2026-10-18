import { useEffect, useRef } from "react";

// A very soft light that trails the cursor. One composited element, moved with
// transform only; not rendered on touch devices or with reduced motion.
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let tx = window.innerWidth / 2, ty = window.innerHeight / 2, x = tx, y = ty, raf = 0;

    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      el.style.transform = `translate3d(${x - 260}px, ${y - 260}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      el.style.opacity = "1";
      if (!raf) raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[520px] w-[520px] rounded-full opacity-0 transition-opacity duration-700"
      style={{
        background: "radial-gradient(closest-side, rgba(255,255,255,0.28), rgba(255,255,255,0) 70%)",
        willChange: "transform",
      }}
    />
  );
}
