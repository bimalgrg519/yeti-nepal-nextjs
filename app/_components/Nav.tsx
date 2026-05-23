"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed px-margin-x top-0 left-0 right-0 z-50 h-18 flex items-center transition-colors duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}
    >
      <nav className="relative max-w-[1920px] w-full flex justify-between items-center">
        <Link
          href="#"
          className="text-3xl font-bold tracking-tight uppercase text-white"
        >
          <span aria-hidden="true" />
          Yeti &nbsp;Nepal
        </Link>
        <ul className="hidden md:flex gap-6 uppercase text-sm font-base text-white">
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#work">Work</Link>
          </li>
          <li>
            <Link href="#why">Approach</Link>
          </li>
          <li>
            <Link href="#voices">Voices</Link>
          </li>
          <li>
            <Link href="#about">Studio</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
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
            href="#services"
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Services
          </Link>
          <Link
            href="#work"
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Work
          </Link>
          <Link
            href="#why"
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Approach
          </Link>
          <Link
            href="#voices"
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Voices
          </Link>
          <Link
            href="#about"
            onClick={close}
            className="text-white text-xl uppercase tracking-[0.05em] opacity-80 hover:opacity-100"
          >
            Studio
          </Link>
          <Link
            href="#contact"
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
