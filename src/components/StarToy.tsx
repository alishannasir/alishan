import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Mode = "home" | "held" | "dropped";

const STAR = "✳︎";
const SIZE_CLASS = "text-[25px] sm:text-[30px]";

// The logo star. Click to pick it up, it follows the cursor, click again to
// drop it where it is. Click it once more to pick it back up; Esc sends it home.
export default function StarToy() {
  const [mode, setMode] = useState<Mode>("home");
  const [hint, setHint] = useState(false);
  const [idleHint, setIdleHint] = useState(false);
  const homeRef = useRef<HTMLSpanElement>(null);
  const flyRef = useRef<HTMLButtonElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const place = () => {
    const el = flyRef.current;
    if (el) el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
  };

  const pickUp = (from?: { x: number; y: number }) => {
    const r = homeRef.current?.getBoundingClientRect();
    const start = from ?? (r ? { x: r.left + r.width / 2, y: r.top + r.height / 2 } : pos.current);
    pos.current = { ...start };
    target.current = { ...start };
    setMode("held");
  };

  // Follow the pointer while held; the next click drops it.
  useEffect(() => {
    if (mode !== "held") return;
    place();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = () => {
      const k = reduce ? 1 : 0.28;
      pos.current.x += (target.current.x - pos.current.x) * k;
      pos.current.y += (target.current.y - pos.current.y) * k;
      place();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    const drop = (e: MouseEvent) => {
      // Settle exactly where the click happened.
      pos.current = { x: e.clientX, y: e.clientY };
      place();
      setMode("dropped");
    };
    // Registered a tick later so the click that picked it up doesn't also drop it.
    const t = window.setTimeout(() => window.addEventListener("click", drop, { once: true }), 0);

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("click", drop);
    };
  }, [mode]);

  // While carried, a hint shows for 3s out of every 10s, starting right away.
  useEffect(() => {
    if (mode !== "held") {
      setHint(false);
      return;
    }
    let timer = 0;
    const cycle = (on: boolean) => {
      setHint(on);
      timer = window.setTimeout(() => cycle(!on), on ? 3000 : 7000);
    };
    cycle(true);
    return () => clearTimeout(timer);
  }, [mode]);

  // Idle star in the logo: a "Grab me" nudge, 3s on / 7s off, first one after 2s.
  useEffect(() => {
    if (mode !== "home") {
      setIdleHint(false);
      return;
    }
    let timer = 0;
    const cycle = (on: boolean) => {
      setIdleHint(on);
      timer = window.setTimeout(() => cycle(!on), on ? 3000 : 7000);
    };
    timer = window.setTimeout(() => cycle(true), 2000);
    return () => clearTimeout(timer);
  }, [mode]);

  // Keep a dropped star in place after render, and let Esc send it home.
  useEffect(() => {
    if (mode === "dropped") place();
    if (mode === "home") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMode("home");
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode]);

  return (
    <>
      {/* Home slot: keeps the layout the same while the star is away. */}
      <span ref={homeRef} className={`relative inline-flex h-[1em] w-[1em] items-center justify-center ${SIZE_CLASS}`}>
        {mode === "home" && (
          <button
            type="button"
            onClick={() => pickUp()}
            aria-label="Pick up the star, then click anywhere to drop it"
            className={`animate-spin-slow inline-block cursor-grab select-none leading-none text-black transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${SIZE_CLASS}`}
          >
            {STAR}
          </button>
        )}
        {/* Sits below the star: it's at the very top of the screen. */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute left-1/2 top-full mt-1 whitespace-nowrap rounded-full bg-black px-3 py-1 text-[12px] leading-none text-white transition-opacity duration-300 ${
            idleHint ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: "translateX(-50%)" }}
        >
          Grab me
        </span>
      </span>

      {mode !== "home" &&
        createPortal(
          <button
            ref={flyRef}
            type="button"
            onClick={(e) => {
              if (mode === "dropped") {
                e.stopPropagation();
                pickUp({ ...pos.current });
              }
            }}
            aria-label={mode === "held" ? "Click anywhere to drop the star" : "Pick the star up again"}
            className={`fixed left-0 top-0 z-[60] select-none leading-none text-black ${SIZE_CLASS} ${
              mode === "held" ? "pointer-events-none" : "cursor-grab"
            }`}
            style={{ willChange: "transform" }}
          >
            {/* Scale and spin live on inner elements: a CSS animation would override the button's positioning transform. */}
            <span
              className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: mode === "held" ? "scale(5)" : "scale(1)" }}
            >
              <span className={`inline-block ${mode === "held" ? "star-held" : "animate-spin-slow"}`}>{STAR}</span>
            </span>
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute left-1/2 whitespace-nowrap rounded-full bg-black px-3 py-1 text-[12px] leading-none text-white transition-opacity duration-300 ${
                hint ? "opacity-100" : "opacity-0"
              }`}
              style={{ bottom: "calc(100% + 68px)", transform: "translateX(-50%)" }}
            >
              Click to drop
            </span>
          </button>,
          document.body
        )}
    </>
  );
}
