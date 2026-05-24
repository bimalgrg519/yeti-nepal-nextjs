"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
  };

  const pathname = usePathname();
  const anchor = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed px-margin-x top-0 left-0 right-0 z-50 h-18 flex items-center transition-colors duration-300 ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      <nav className="relative max-w-[1920px] w-full flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight uppercase text-white"
        >
          <span aria-hidden="true" />
          Yeti &nbsp;Nepal
        </Link>
        <ul className="hidden md:flex gap-6 uppercase text-sm font-base text-white">
          <li>
            <Link href={anchor("#work")}>Work</Link>
          </li>
          <li>
            <Link href={anchor("#services")}>Services</Link>
          </li>
          <li>
            <Link href="/careers">Career</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4 border border-white/40 px-3 py-1">
          <a
            href="https://www.youtube.com/@theyetinepal/playlists"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Playlists"
            className="text-white hover:opacity-75 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <button
            className="md:hidden text-white"
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
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[49]"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed inset-0 w-full bg-[var(--color-black)] z-[51] flex-col ${open ? "flex" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between px-margin-x h-18">
          <Link
            href="#"
            className="text-3xl font-bold tracking-tight uppercase text-white"
          >
            <span aria-hidden="true" />
            Yeti &nbsp;Nepal
          </Link>
          <button
            className="flex items-center justify-center w-10 h-10 bg-white/[.12] text-white hover:bg-white/20"
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
        <nav className="flex flex-col gap-8 px-margin-x pt-8 border-t border-white/[.15]">
          <Link
            href={anchor("#services")}
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Services
          </Link>
          <Link
            href={anchor("#work")}
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Work
          </Link>
          <Link
            href={anchor("#why")}
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Approach
          </Link>
          <Link
            href={anchor("#voices")}
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Voices
          </Link>
          <Link
            href={anchor("#about")}
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Studio
          </Link>
          <Link
            href="/contact"
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
