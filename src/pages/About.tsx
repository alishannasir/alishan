import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Pill from "../components/Pill";

const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST & WebSockets"],
  },
  {
    label: "Craft",
    items: ["Performance", "Accessibility", "Animations", "Design Systems", "Three.js", "WebGL", "GLSL Shaders"],
  },
];

const experience = [
  {
    year: "2025 — Now",
    role: "Three.js & WebGL Developer",
    place: "Freelance · React Three Fiber, Shaders",
  },
  {
    year: "2024 — Now",
    role: "Full-Stack Developer",
    place: "uconnect / Freelance",
  },
  {
    year: "2022 — 2024",
    role: "Frontend Developer",
    place: "Freelance",
  },
];

const marqueeText = Array.from({ length: 4 })
  .map(
    () =>
      "Available for new projects \u2733\ufe0e Full-stack development \u2733\ufe0e alishannasirwork@gmail.com \u2733\ufe0e "
  )
  .join("");

export default function About() {
  return (
    <PageTransition>
      <main className="min-h-screen px-5 pb-24 pt-28 sm:px-8 md:px-10 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p
              className="pointer-events-none select-none text-black"
              style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.3, filter: "blur(1px)" }}
            >
              About me ✳︎ the human behind the commits
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
              Full-stack developer with a designer's eye.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-black/80 sm:text-[21px]">
              I'm Alishan. For the last few years I've been designing and engineering web products
              end to end — from database schemas and APIs to the last 4px of a hover state. I also
              work with Three.js, WebGL, and custom shaders when a project needs immersive 3D on the
              web. I care about fast pages, honest interfaces, and the details most people only feel.
            </p>
          </Reveal>

          {/* Skills */}
          <section className="mt-20" aria-label="Skills">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.label} delay={gi * 0.05}>
                <div className="flex flex-col gap-2 border-t border-black/10 py-6 md:flex-row md:items-baseline md:gap-10">
                  <span className="w-40 shrink-0 text-[13px] uppercase tracking-widest text-black/60">
                    {g.label}
                  </span>
                  <p className="text-[21px] leading-snug text-black sm:text-[26px]">
                    {g.items.map((item, i) => (
                      <span key={item} className="transition-opacity hover:opacity-60">
                        {item}
                        {i < g.items.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-black/10" />
          </section>

          {/* Experience */}
          <section className="mt-20" aria-label="Experience">
            <Reveal>
              <h2 className="text-[13px] uppercase tracking-widest text-black/60">Experience</h2>
            </Reveal>
            <div className="mt-6">
              {experience.map((e, i) => (
                <Reveal key={e.role} delay={i * 0.05}>
                  <div className="flex flex-col justify-between gap-1 border-t border-black/10 py-6 transition-all duration-300 hover:pl-3 sm:flex-row sm:items-baseline">
                    <span className="text-[15px] text-black/65 sm:w-44 sm:shrink-0">{e.year}</span>
                    <span
                      className="flex-1 text-[21px] text-black sm:text-[26px]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {e.role}
                    </span>
                    <span className="text-[15px] text-black/65">{e.place}</span>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-black/10" />
            </div>
          </section>

          {/* CTA */}
          <Reveal>
            <div className="mt-20 flex flex-wrap gap-y-1">
              <Pill to="/projects">See my projects</Pill>
              <Pill href="mailto:alishannasirwork@gmail.com">Send a brief hello</Pill>
            </div>
          </Reveal>
        </div>
      </main>

      {/* Marquee */}
      <div className="overflow-hidden border-t border-black/10 py-4">
        <div className="animate-marquee flex w-max whitespace-nowrap text-[21px] text-black">
          <span>{marqueeText}</span>
          <span aria-hidden>{marqueeText}</span>
        </div>
      </div>
    </PageTransition>
  );
}
