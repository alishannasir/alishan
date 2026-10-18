import { Link, useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Pill from "../components/Pill";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? projects[index] : undefined;

  if (!project) {
    return (
      <PageTransition>
        <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-5">
          <p className="text-[21px] text-black">That project doesn't exist (yet).</p>
          <Pill to="/projects">Back to all projects</Pill>
        </main>
      </PageTransition>
    );
  }

  const next = projects[(index + 1) % projects.length];

  return (
    <PageTransition>
      <main className="min-h-screen bg-white px-5 pb-24 pt-28 sm:px-8 md:px-10 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link
              to="/projects"
              className="text-[15px] text-black underline underline-offset-2 transition-opacity hover:opacity-60"
            >
              ← All projects
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p
              className="pointer-events-none mt-8 select-none text-black"
              style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.3, filter: "blur(1px)" }}
            >
              {project.category} ✳︎ {project.year}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-4 tracking-tight text-black"
              style={{
                fontSize: "clamp(40px, 9vw, 110px)",
                lineHeight: 1.0,
                fontFamily: "var(--font-heading)",
              }}
            >
              {project.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-black/70 sm:text-[21px]">
              {project.description}
            </p>
          </Reveal>

          {/* Hero visual */}
          <Reveal delay={0.15}>
            <div className="relative mt-12 overflow-hidden rounded-2xl border border-black/10">
              <div className="flex items-center gap-2 border-b border-black/10 bg-black/[0.03] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="ml-3 rounded-md bg-black/[0.05] px-3 py-1 text-[11px] text-black/50">
                  {project.link.replace("https://", "")}
                </span>
              </div>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                decoding="async"
                className="block w-full object-cover object-top"
              />
            </div>
          </Reveal>

          {(project.images?.length ?? 0) > 1 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.images!.slice(1).map((src, i) => (
                <Reveal key={src} delay={0.05 * (i + 1)}>
                  <div className="overflow-hidden rounded-2xl border border-black/10">
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 2}`}
                      loading="lazy"
                      decoding="async"
                      className="block w-full object-cover object-top"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Meta */}
          <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
            <Reveal>
              <p className="text-[13px] uppercase tracking-widest text-black/40">Role</p>
              <p className="mt-2 text-[17px] text-black">{project.role}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-[13px] uppercase tracking-widest text-black/40">Stack</p>
              <p className="mt-2 text-[17px] text-black">{project.stack.join(", ")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-[13px] uppercase tracking-widest text-black/40">Year</p>
              <p className="mt-2 text-[17px] text-black">{project.year}</p>
            </Reveal>
          </div>

          {/* Overview */}
          <div className="mt-16 grid gap-6 md:grid-cols-[200px_1fr] md:gap-10">
            <Reveal>
              <p className="text-[13px] uppercase tracking-widest text-black/40">Overview</p>
            </Reveal>
            <div className="space-y-6 text-[18px] leading-relaxed text-black/80 sm:text-[21px]">
              {project.overview.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-16">
            <Reveal>
              <p className="text-[13px] uppercase tracking-widest text-black/40">Highlights</p>
            </Reveal>
            <div className="mt-6">
              {project.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.05}>
                  <div className="flex gap-6 border-t border-black/10 py-5 text-[17px] text-black sm:text-[19px]">
                    <span className="text-black/40">0{i + 1}</span>
                    <p>{h}</p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-black/10" />
            </div>
          </div>

          {/* CTAs */}
          <Reveal>
            <div className="mt-16 flex flex-wrap gap-y-1">
              <Pill href={project.link}>Visit live site</Pill>
              <Pill href="mailto:alishannasirwork@gmail.com">Build something like this</Pill>
            </div>
          </Reveal>

          {/* Next project */}
          <Reveal>
            <Link to={`/projects/${next.slug}`} className="group mt-24 block border-t border-black/10 pt-10">
              <p className="text-[13px] uppercase tracking-widest text-black/40">
                Next project ✳︎
              </p>
              <p
                className="mt-3 tracking-tight text-black transition-opacity duration-300 group-hover:opacity-60"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 6vw, 72px)" }}
              >
                {next.title}{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </p>
            </Link>
          </Reveal>
        </div>
      </main>
    </PageTransition>
  );
}
