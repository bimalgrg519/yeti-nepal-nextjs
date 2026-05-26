import Link from "next/link";

const studio = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
const services = ["Website", "Mobile Apps", "SEO"];

export default function Footer() {
  return (
    <footer className="relative flex flex-col overflow-hidden bg-[#070707] pb-12 text-white">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-0.05em] bottom-20 z-0 text-[12rem] leading-none font-black tracking-[-0.04em] text-transparent select-none md:text-[28rem] xl:text-[52rem]"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
      >
        YN
      </span>

      <div aria-hidden="true" />

      <div className="relative z-[1] flex flex-1 flex-col">
        <div className="px-margin-x flex flex-1 flex-col bg-lime-600 py-32">
          <div className="flex w-full flex-col items-center gap-3 min-[1256px]:flex-row md:items-center md:justify-between">
            <div>
              <Link href="/contact" className="flex w-fit items-end gap-2">
                <h2 className="md:[text-8rem] text-[5rem] leading-[0.88] font-light tracking-[-0.03em] text-white lg:text-[9.5rem]">
                  Let&apos;s talk
                </h2>
                <span className="items-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </Link>
              <div className="mt-[clamp(2rem,4vh,3.5rem)] flex flex-wrap items-baseline gap-[clamp(1.5rem,4vw,4rem)]">
                <span className="text-base font-light tracking-[0.1em] uppercase max-sm:max-w-[23ch]">
                  Lamachour, Pokhara · +977 9700886505
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-12 md:flex-row">
              <Link
                href="/#services"
                className="btn-outline border-black bg-black px-10 py-5 text-2xl font-light sm:text-3xl"
              >
                See what we do
              </Link>
              <Link
                href="/contact"
                className="btn-outline px-10 py-5 text-2xl font-light max-md:w-full sm:text-3xl"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>

        <div className="px-margin-x mt-8 mb-10 flex items-center gap-6 px-[clamp(1.5rem,5vw,5rem)]">
          <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_0%,rgba(0,113,227,0.25)_50%,rgba(255,255,255,0.03)_100%)]" />
          <span className="shrink-0 text-[0.6rem] tracking-[0.2em] text-white/80 uppercase">
            PKR
          </span>
        </div>

        <div className="px-margin-x grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-x-12 gap-y-8 px-[clamp(1.5rem,5vw,5rem)] pb-[clamp(3rem,6vh,4.5rem)]">
          <div>
            <p className="mb-4 text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
              Studio
            </p>
            <ul className="m-0 list-none p-0">
              {studio.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[16px] tracking-tight text-[#999] transition-colors duration-200 hover:text-[#bbb] hover:underline"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
              Services
            </p>
            <ul className="m-0 list-none p-0">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-[16px] tracking-tight text-[#999] transition-colors duration-200 hover:text-[#bbb] hover:underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
              Social
            </p>
            <ul className="m-0 list-none p-0">
              {["Facebook"].map((s) => (
                <li key={s}>
                  <Link
                    href="https://www.facebook.com/@theyetinepal"
                    className="text-[16px] tracking-tight text-[#999] transition-colors duration-200 hover:text-[#bbb] hover:underline"
                    target="_blank"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative col-span-1 border border-white/[0.06] bg-white/[0.02] px-6 py-5">
            <p className="mb-3 text-[0.6rem] tracking-[0.2em] text-white/40 uppercase">
              Location
            </p>
            <p className="text-[0.95rem] leading-[1.4] text-white/70">
              Lamachour
              <br />
              Pokhara, Nepal
            </p>
            <span
              aria-hidden="true"
              className="absolute right-4 bottom-3 text-2xl text-[rgba(0,113,227,0.4)]"
            >
              ◈
            </span>
          </div>
        </div>

        <div className="px-margin-x flex flex-wrap items-end justify-between gap-2 border-t border-white/[0.05] px-[clamp(1.5rem,5vw,5rem)] pt-5 pb-6">
          <span className="text-[0.65rem] tracking-[0.12em] text-white/40 uppercase">
            © 2026 Yeti Nepal
          </span>
          <div className="flex flex-col items-center justify-center gap-10 px-[clamp(1.5rem,5vw,5rem)] pt-[10rem] pb-8">
            <Link
              href="/"
              className="mt-10 flex items-center gap-4 text-white select-none"
            >
              <span className="text-[4rem] leading-none font-bold tracking-[-0.03em] uppercase">
                Yeti Nepal
              </span>
            </Link>
          </div>
          <span className="text-[0.65rem] tracking-[0.12em] text-white/40 uppercase">
            From the himalayas to the world.
          </span>
        </div>
      </div>
    </footer>
  );
}
