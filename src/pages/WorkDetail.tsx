import { Link, useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Pill from "../components/Pill";
import { works, type Block } from "../data/works";

function BlockView({ b }: { b: Block }) {
  if ("h" in b) {
    return b.level === 2 ? (
      <h2
        className="pt-8 text-[32px] tracking-tight text-black sm:text-[40px]"
        style={{ fontFamily: "var(--font-heading)", lineHeight: 1.1 }}
      >
        {b.h}
      </h2>
    ) : (
      <h3 className="pt-4 text-[22px] font-medium text-black">{b.h}</h3>
    );
  }
  if ("table" in b) {
    const [head, ...rows] = b.table;
    return (
      <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white/40">
        <table className="w-full min-w-[420px] text-left text-[15px] text-black/80">
          <thead>
            <tr className="border-b border-black/10 text-[13px] uppercase tracking-widest text-black/60">
              {head.map((c, i) => (
                <th key={i} className="px-4 py-3 font-normal">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-b border-black/10 last:border-0">
                {r.map((c, j) => (
                  <td key={j} className="px-4 py-2.5">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return <p className="break-words text-[18px] leading-relaxed text-black/80 sm:text-[20px]">{b.p}</p>;
}

export default function WorkDetail() {
  const { slug } = useParams();
  const index = works.findIndex((w) => w.slug === slug);

  if (index === -1) {
    return (
      <PageTransition>
        <main className="flex min-h-screen flex-col items-start justify-center px-5 sm:px-8 md:px-10">
          <h1 className="text-[40px] text-black" style={{ fontFamily: "var(--font-heading)" }}>
            Work not found
          </h1>
          <div className="mt-6">
            <Pill to="/work">← All work</Pill>
          </div>
        </main>
      </PageTransition>
    );
  }

  const w = works[index];
  const next = works[(index + 1) % works.length];
  const isDirectVideo = w.video && /\.(mp4|webm|ogg)$/i.test(w.video);

  return (
    <PageTransition>
      <main className="min-h-screen px-5 pb-24 pt-28 sm:px-8 md:px-10 md:pt-36">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Link to="/work" className="link-u text-[16px] text-black">
              ← All work
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <p
              className="pointer-events-none mt-10 select-none capitalize text-black"
              style={{ fontSize: "clamp(18px, 4vw, 26px)", filter: "blur(1px)" }}
            >
              {w.type} ✳︎ {w.date}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="mt-4 tracking-tight text-black"
              style={{
                fontSize: "clamp(40px, 9vw, 110px)",
                lineHeight: 1.02,
                fontFamily: "var(--font-heading)",
              }}
            >
              {w.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-3xl text-[18px] text-black/80 sm:text-[21px]">{w.summary}</p>
          </Reveal>

          {w.description && w.type !== "article" && (
            <div className="mt-6 max-w-3xl space-y-3">
              {w.description.map((d, i) => (
                <Reveal key={i} delay={0.2 + i * 0.05}>
                  <p className="text-[16px] text-black/65 sm:text-[18px]">{d}</p>
                </Reveal>
              ))}
            </div>
          )}

          {w.type === "video" && w.video && (
            <Reveal delay={0.1} className="mt-12">
              <div className="aspect-video overflow-hidden rounded-2xl border border-black/10 bg-black">
                {isDirectVideo ? (
                  <video src={w.video} poster={w.cover} controls className="h-full w-full" />
                ) : (
                  <iframe
                    src={w.video}
                    title={w.title}
                    className="h-full w-full"
                    allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </div>
            </Reveal>
          )}

          {w.type === "photo" && (
            <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6">
              {(w.images ?? [w.cover]).map((src, i) => (
                <Reveal key={src} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid md:mb-6">
                  <div className="group overflow-hidden rounded-2xl border border-black/10">
                    <img
                      src={src}
                      alt={`${w.title} ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {w.type === "article" && (
            <>
              <Reveal delay={0.1} className="mt-12">
                <div className="overflow-hidden rounded-2xl border border-black/10">
                  <img src={w.cover} alt="" className="max-h-[560px] w-full object-cover" />
                </div>
              </Reveal>
              <div className="mt-12 max-w-3xl space-y-6">
                {(w.body ?? []).map((b, i) => (
                  <Reveal key={i}>
                    <BlockView b={b} />
                  </Reveal>
                ))}
              </div>
            </>
          )}

          {w.link && (
            <Reveal className="mt-12">
              <Pill href={w.link}>{w.linkLabel ?? "Open original ↗"}</Pill>
            </Reveal>
          )}

          <Reveal className="mt-20">
            <Link
              to={`/work/${next.slug}`}
              className="group flex items-center justify-between gap-6 border-t border-black/10 pt-8"
            >
              <div>
                <p className="text-[13px] uppercase tracking-widest text-black/60">Next ✳︎</p>
                <p
                  className="mt-2 text-black transition-opacity duration-300 group-hover:opacity-60"
                  style={{ fontSize: "clamp(28px, 5vw, 64px)", fontFamily: "var(--font-heading)" }}
                >
                  {next.title}
                </p>
              </div>
              <span className="text-[32px] text-black transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </main>
    </PageTransition>
  );
}
