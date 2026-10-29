import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import StarToy from "./StarToy";

const links = [
  { label: "Home", to: "/" },
  { label: "About Me", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Work", to: "/work" },
];

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `link-u ${isActive ? "is-active" : ""}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Frosted bar once content scrolls beneath it; state only flips at the threshold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 z-10 flex w-full flex-row items-center justify-between px-5 py-4 transition-[background-color,backdrop-filter] duration-300 sm:px-8 sm:py-5 ${
          scrolled ? "bg-[#b9b8b6]/70 backdrop-blur-md" : ""
        }`}>
        {/* Logo */}
        <div className="flex flex-row items-center gap-3">
          <Link
            to="/"
            className="text-[21px] tracking-tight text-black sm:text-[26px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Alishan®
          </Link>
          <StarToy />
        </div>

        {/* Desktop nav links */}
        <nav className="hidden flex-row text-[23px] text-black md:flex">
          {links.map((l, i) => (
            <span key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} className={desktopLinkClass}>
                {l.label}
              </NavLink>
              {i < links.length - 1 && <span>,&nbsp;</span>}
            </span>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="link-u is-active hidden text-[23px] text-black md:block"
        >
          Get in touch
        </Link>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-[#b9b8b6]/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            onClick={() => setOpen(false)}
            className="text-[32px] font-medium text-black"
          >
            {l.label}
          </NavLink>
        ))}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="text-[32px] font-medium text-black underline underline-offset-2"
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
