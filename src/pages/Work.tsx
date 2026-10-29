import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import { works, workTypes, type WorkType } from "../data/works";

const typeIcon: Record<WorkType, string> = { article: "✎", photo: "◐", video: "▶" };

export default function Work() {
  const [filter, setFilter] = useState<WorkType | "all">("all");
  const list = filter === "all" ? works : works.filter((w) => w.type === filter);

  return (
    <PageTransition>
      <main className="min-h-screen px-5 pb-24 pt-28 sm:px-8 md:px-10 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p
              className="pointer-events-none select-none text-black"
              style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.3, filter: "blur(1px)" }}
            >
              Writing, photos, films ✳︎ everything I make
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
              Work <sup className="align-super text-[0.3em] text-black/60">({works.length})</sup>
            </h1>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
            {workTypes
              .filter((t) => t.id === "all" || works.some((w) => w.type === t.id))
              .map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setFilter(t.id)}
                className="relative rounded-full border border-black/10 px-5 py-1.5 text-[15px] text-black transition-colors duration-200 hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {filter === t.id && (
                  <motion.span
                    layoutId="work-filter"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
              ))}
          </Reveal>

          <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((w, i) => (
                <motion.div
                  layout
                  key={w.slug}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/work/${w.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03]">
                      <img
                        src={w.cover}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[13px] capitalize text-black">
                        {typeIcon[w.type]} {w.type}
                      </span>
                      <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-black text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        →
                      </span>
                    </div>
                    <h2
                      className="mt-4 text-[26px] tracking-tight text-black transition-opacity duration-300 group-hover:opacity-60"
                      style={{ fontFamily: "var(--font-heading)", lineHeight: 1.1 }}
                    >
                      {w.title}
                    </h2>
                    <p className="mt-1 text-[15px] text-black/65">
                      {w.date} — {w.summary}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {list.length === 0 && <p className="mt-12 text-black/60">Nothing here yet.</p>}
        </div>
      </main>
    </PageTransition>
  );
}
