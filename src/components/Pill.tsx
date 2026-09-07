import type { MouseEventHandler, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "light" | "outline";
}

const base =
  "mx-[0.2em] mb-[0.4em] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border px-4 py-[0.3em] text-[13px] transition-colors duration-200 sm:gap-3 sm:px-5 sm:text-[15px]";

const styles: Record<NonNullable<Props["variant"]>, string> = {
  light: `${base} border-black/10 bg-white text-black hover:bg-black hover:text-white`,
  outline: `${base} border-white bg-transparent text-white hover:bg-white hover:text-black`,
};

export default function Pill({ children, to, href, onClick, variant = "light" }: Props) {
  const cls = styles[variant];

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
