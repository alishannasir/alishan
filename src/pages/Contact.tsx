import { useState } from "react";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Pill from "../components/Pill";

const EMAIL = "alishannasirwork@gmail.com";

const socials = [
  { name: "Email", handle: EMAIL, href: `mailto:${EMAIL}` },
  { name: "GitHub", handle: "@alishannasir", href: "https://github.com/alishannasir" },
  {
    name: "LinkedIn",
    handle: "Ali Shan",
    href: "https://www.linkedin.com/in/ali-shan-a85721272/",
  },
  {
    name: "Upwork",
    handle: "Freelancer profile",
    href: "https://www.upwork.com/freelancers/~01108fa2a3313a6ad2",
  },
  {
    name: "Instagram",
    handle: "@iamleshan_",
    href: "https://www.instagram.com/iamleshan_/",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-white px-5 pb-24 pt-28 sm:px-8 md:px-10 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_320px] md:gap-16">
            {/* Intro */}
            <div>
              <Reveal>
                <p
                  className="pointer-events-none select-none text-black"
                  style={{ fontSize: "clamp(18px, 4vw, 26px)", lineHeight: 1.3, filter: "blur(1px)" }}
                >
                  Get in touch ✳︎ no forms, just humans
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
                  Let's build something together.
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-8 max-w-xl text-[18px] leading-relaxed text-black/70 sm:text-[21px]">
                  Have a project, a role, or just a good idea? My inbox is open. Pick whichever
                  channel feels right — they all reach the same person.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap gap-y-1">
                  <Pill href={`mailto:${EMAIL}`}>Send an email</Pill>
                  <Pill onClick={copyEmail}>{copied ? "Copied ✓" : "Copy email"}</Pill>
                </div>
              </Reveal>
            </div>

            {/* Portrait */}
            <Reveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-black/10">
                <img
                  src="/images/alishan.jpeg"
                  alt="Portrait of Alishan"
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-3 left-3 rounded-full border border-black/10 bg-white/90 px-4 py-1.5 text-[13px] text-black backdrop-blur-sm">
                  Alishan ✳︎ Full-stack developer
                </div>
              </div>
            </Reveal>
          </div>

          {/* Socials index */}
          <section className="mt-20" aria-label="Social links">
            <Reveal>
              <h2 className="text-[13px] uppercase tracking-widest text-black/40">Elsewhere</h2>
            </Reveal>
            <div className="mt-6">
              {socials.map((s, i) => {
                const external = s.href.startsWith("http");
                return (
                  <Reveal key={s.name} delay={i * 0.05}>
                    <a
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="group flex items-baseline gap-4 border-t border-black/10 py-7 transition-all duration-300 hover:pl-3 sm:gap-8"
                    >
                      <span className="text-[14px] text-black/40">0{i + 1}</span>
                      <span
                        className="flex-1 tracking-tight text-black transition-opacity duration-300 group-hover:opacity-60"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "clamp(28px, 5vw, 56px)",
                          lineHeight: 1.05,
                        }}
                      >
                        {s.name}
                      </span>
                      <span className="hidden text-[15px] text-black/50 sm:block sm:text-[17px]">
                        {s.handle}
                      </span>
                      <span className="self-center text-[24px] text-black transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-2">
                        ↗
                      </span>
                    </a>
                  </Reveal>
                );
              })}
              <div className="border-t border-black/10" />
            </div>
          </section>

          <Reveal>
            <p className="mt-16 text-[15px] text-black/40">
              Usually replies within 24 hours ✳︎ Open to freelance & full-time ✳︎ Based on the
              internet
            </p>
          </Reveal>
        </div>
      </main>
    </PageTransition>
  );
}
