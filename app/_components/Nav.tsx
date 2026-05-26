"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "./Logo";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const toggleTheme = () => {
  //   const next = theme === "dark" ? "light" : "dark";
  //   document.documentElement.setAttribute("data-theme", next);
  //   setTheme(next);
  // };

  const pathname = usePathname();
  const anchor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const close = () => setOpen(false);

  const links = [
    { label: "Work", href: anchor("#work") },
    { label: "Services", href: anchor("#services") },
    { label: "Career", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`px-margin-x fixed top-0 right-0 left-0 z-50 flex h-18 items-center transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      <nav className="relative flex w-full max-w-[1920px] items-center justify-between">
        <Link href="/">
          <Logo className="text-white" />
        </Link>
        <ul className="font-base hidden gap-6 text-sm text-white uppercase md:flex">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <div className="flex items-center gap-4 border border-white/40 px-2 py-2 md:px-3">
            <a
              href="https://www.youtube.com/@theyetinepal/playlists"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Playlists"
              className="text-white transition-opacity hover:opacity-75"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-4 border border-white/40 px-1 py-px md:hidden">
            <button
              className="text-white"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[49] bg-black/50"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-0 z-[51] w-full flex-col bg-[var(--color-black)] ${open ? "flex" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="px-margin-x flex h-18 items-center justify-between">
          <Link href="/" onClick={close}>
            <Logo className="text-white" />
          </Link>
          <button
            className="flex h-10 w-10 items-center justify-center bg-white/[.12] text-white hover:bg-white/20"
            onClick={close}
            aria-label="Close menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav className="px-margin-x flex flex-col gap-8 border-t border-white/[.15] pt-8">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={close}
              className="text-xl tracking-wider text-white uppercase opacity-80 hover:opacity-100"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
