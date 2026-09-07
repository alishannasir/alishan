import { useEffect, useState } from "react";
import useTypewriter from "../hooks/useTypewriter";
import Pill from "./Pill";

const TYPE_TEXT =
  "Glad you stopped in. I design and build modern web experiences, end to end. Now, what are we building?";

const EMAIL = "alishannasirwork@gmail.com";

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPE_TEXT);
  const [showPills, setShowPills] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setShowPills(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
  };

  return (
    <section className="relative z-[1] flex h-screen flex-col justify-end overflow-hidden px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
      <div className="relative z-10 max-w-xl">
        {/* Blurred intro label */}
        <div
          className="pointer-events-none mb-5 select-none sm:mb-6"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.3,
            fontWeight: 400,
            color: "#000",
            filter: "blur(1px)",
          }}
        >
          Hey there, I'm Alishan,
          <br />
          a full-stack developer crafting digital products
        </div>

        {/* Typewriter text */}
        <p
          className="mb-5 text-black sm:mb-6"
          style={{
            fontSize: "clamp(18px, 4vw, 26px)",
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: "54px",
          }}
        >
          {displayed}
          {!done && (
            <span className="blink-cursor ml-[2px] inline-block h-[1.1em] w-[2px] bg-black align-middle" />
          )}
        </p>

        {/* Action pill buttons */}
        <div
          className="flex flex-wrap gap-y-1"
          style={{
            opacity: showPills ? 1 : 0,
            transform: showPills ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          <Pill to="/projects">See my projects</Pill>
          <Pill to="/about">About me</Pill>
          <Pill href={`mailto:${EMAIL}`}>Send a brief hello</Pill>
          <Pill variant="outline" onClick={copyEmail}>
            <span>
              Reach me: <span className="underline underline-offset-1">{EMAIL}</span>
            </span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="0.5" y="0.5" width="8" height="8" rx="1" stroke="currentColor" />
              <rect x="3.5" y="3.5" width="8" height="8" rx="1" stroke="currentColor" />
            </svg>
          </Pill>
        </div>
      </div>
    </section>
  );
}
