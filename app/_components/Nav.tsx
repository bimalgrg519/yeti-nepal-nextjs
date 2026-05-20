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
      className={`fixed px-margin-x top-0 left-0 right-0 z-50 h-14 flex items-center transition-colors duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}
    >
      <nav className="relative max-w-[1920px] w-full flex justify-between items-center">
        <Link href="#" className="text-2xl font-black tracking-wider">
          <span className="brand-mark" aria-hidden="true" />
          Yeti Nepal
        </Link>
        <ul className="hidden md:flex gap-6 uppercase text-sm font-medium">
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
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-8 h-8 flex items-center justify-center rounded-full border opacity-70 hover:opacity-100 transition-opacity ${theme === "dark" ? "border-white text-white" : "border-current"}`}
          >
            {theme === "dark" ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zM4.22 5.64a1 1 0 0 1 1.42-1.42l1.41 1.42a1 1 0 0 1-1.41 1.41L4.22 5.64zm12.73 12.73a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 0 1-1.42 1.42l-1.41-1.42zM3 12a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zm16 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zM4.22 18.36l1.41-1.41a1 1 0 0 1 1.42 1.41l-1.42 1.42a1 1 0 0 1-1.41-1.42zm12.73-12.73 1.41-1.42a1 1 0 0 1 1.42 1.42l-1.42 1.41a1 1 0 0 1-1.41-1.41z" />
              </svg>
            )}
          </button>
          <Link href="#services" className="btn btn-primary">
            See what we do
          </Link>
          {/* <button
            className="md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button> */}
        </div>
      </nav>

      {/* <div className={`drawer${open ? " open" : ""}`}>
        <button
          className="drawer-close"
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
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <Link href="#services" onClick={close}>
          Services
        </Link>
        <Link href="#work" onClick={close}>
          Work
        </Link>
        <Link href="#why" onClick={close}>
          Approach
        </Link>
        <Link href="#voices" onClick={close}>
          Voices
        </Link>
        <Link href="#about" onClick={close}>
          Studio
        </Link>
        <Link href="#contact" onClick={close}>
          Contact
        </Link>
      </div> */}
    </header>
  );
}
