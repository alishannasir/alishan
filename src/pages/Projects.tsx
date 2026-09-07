import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white px-5 pb-24 pt-28 sm:px-8 md:px-10 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p
              className="pointer-events-none select-none text-black"
              style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.3, filter: "blur(1px)" }}
            >
              Selected work ✳︎ things I've shipped
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              className="mt-6 tracking-tight text-black"
              style={{
                fontSize: "clamp(40px, 8vw, 96px)",
                lineHeight: 1.02,
                fontFamily: "var(--font-heading)",
              }}
            >
              Projects{" "}
              <sup className="align-super text-[0.3em] text-black/40">({projects.length})</sup>
            </h1>
          </Reveal>

          <div className="mt-16">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  to={`/projects/${p.slug}`}
                  className="group flex items-baseline gap-4 border-t border-black/10 py-8 transition-all duration-300 hover:pl-3 sm:gap-8"
                >
                  <span className="text-[14px] text-black/40">0{i + 1}</span>
                  <div className="flex-1">
                    <h2
                      className="tracking-tight text-black transition-opacity duration-300 group-hover:opacity-60"
                      style={{
                        fontSize: "clamp(28px, 5vw, 64px)",
                        fontFamily: "var(--font-heading)",
                        lineHeight: 1.05,
                      }}
                    >
                      {p.title}
                    </h2>
                    <p className="mt-2 text-[15px] text-black/50 sm:text-[17px]">
                      {p.category} — {p.year}
                    </p>
                  </div>
                  <span className="hidden h-14 w-20 shrink-0 self-center overflow-hidden rounded-xl border border-black/10 sm:block">
                    <img
                      src={p.image}
                      alt=""
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <span className="self-center text-[24px] text-black transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
