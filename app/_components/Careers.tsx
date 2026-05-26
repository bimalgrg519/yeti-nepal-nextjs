"use client";

import Link from "next/link";
import { useState } from "react";

const openings = [
  {
    id: "intern",
    label: "001",
    title: "Intern",
    weirdTitle: "BABY YETI",
    tagline: "You don't know much. That's fine. Neither did we.",
    description:
      "Fresh brain. No bad habits yet. You'll touch real projects on day one — no coffee fetching, no fake tasks. We'll break you in properly.",
    perks: ["Real projects", "Mentorship", "Free chaos"],
    vibe: "FAST LEARNER MODE",
    color: "#b5ff4d",
    rotation: "-rotate-1",
  },
  {
    id: "frontend",
    label: "002",
    title: "Frontend Developer",
    weirdTitle: "PIXEL CHEF",
    tagline: "You make things look alive. Buttons that feel like butter.",
    description:
      "We need someone who obsesses over 1px misalignments at 2am. Someone who has arguments with Figma. Someone who ships and doesn't hide.",
    perks: ["React / Next.js", "Tailwind CSS"],
    vibe: "INTERFACE SCIENTIST",
    color: "#ff6b6b",
    rotation: "rotate-1",
  },
  {
    id: "seo",
    label: "003",
    title: "SEO Specialist",
    weirdTitle: "GOOGLE WHISPERER",
    tagline: "You speak algorithm. Google listens when you talk.",
    description:
      "You understand intent, structure, backlinks, and why that one blog post ranks even though it's terrible. You fix that. You make things climb.",
    perks: ["Full ownership", "Technical + creative", "Real metrics"],
    vibe: "SEARCH ENGINE MONK",
    color: "#a78bfa",
    rotation: "-rotate-1",
  },
];

export default function Careers() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="px-margin-x overflow-hidden bg-[#0b0b0b] py-12 md:py-24">
      <div className="max-w-[1920px]">
        <div className="relative mb-20">
          <h2 className="text-6xl leading-none font-black tracking-tighter text-white uppercase md:text-[10vw]">
            Join the{" "}
            <span
              className="inline-block"
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              journey.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light text-white/50 md:text-2xl">
            Three spots. Infinite weirdness allowed.
            <br />
            Normal people need not apply.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {openings.map((job) => (
            <div
              key={job.id}
              onMouseEnter={() => setHovered(job.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative cursor-crosshair border-t border-white/10 py-6 transition-all duration-500 sm:py-10 ${hovered === job.id ? "bg-white/[0.03]" : ""} `}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-0">
                <div className="shrink-0 md:w-24">
                  <span
                    className="font-mono text-sm transition-colors duration-300"
                    style={{ color: hovered === job.id ? job.color : "#ddd" }}
                  >
                    {job.label}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
                    <h3 className="text-4xl leading-none font-black tracking-tighter text-white uppercase md:text-6xl">
                      {job.title}
                    </h3>
                    <span
                      className={`self-start px-2 py-1 font-mono text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${job.rotation} ${hovered === job.id ? "opacity-100" : "opacity-0"} `}
                      style={{
                        background: job.color,
                        color: "#0b0b0b",
                      }}
                    >
                      {job.weirdTitle}
                    </span>
                  </div>

                  <p
                    className="mb-4 text-lg font-light transition-colors duration-300 md:text-xl"
                    style={{
                      color:
                        hovered === job.id
                          ? job.color
                          : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {job.tagline}
                  </p>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${hovered === job.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}
                  >
                    <p className="mb-5 max-w-2xl text-base leading-relaxed text-white/60">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.perks.map((perk) => (
                        <span
                          key={perk}
                          className="border px-3 py-1 font-mono text-xs tracking-widest uppercase"
                          style={{
                            borderColor: job.color + "55",
                            color: job.color,
                          }}
                        >
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex shrink-0 items-start justify-start md:w-64 md:justify-end">
                  <div
                    className={`flex flex-col items-start gap-2 transition-all duration-500 md:items-end`}
                  >
                    <span
                      className={`font-mono text-[11px] tracking-[0.3em] uppercase transition-colors duration-300 ${hovered === job.id ? "opacity-100" : "opacity-60"} `}
                      style={{ color: job.color }}
                    >
                      {job.vibe}
                    </span>
                    <Link
                      href={`/careers?role=${encodeURIComponent(job.title)}`}
                      className={`border-2 px-6 py-3 text-sm font-black tracking-wider uppercase transition-all duration-300 ${hovered === job.id ? "block translate-y-0 opacity-100" : "hidden translate-y-2 opacity-0"} `}
                      style={{
                        background: job.color,
                        borderColor: job.color,
                        color: "#0b0b0b",
                      }}
                    >
                      Apply →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t border-white/10" />
        </div>

        <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
          <p className="font-mono text-sm text-white/50">
            Not finding your role but you&apos;re interesting?
          </p>
          <a
            href="mailto:hello@yetinepal.com?subject=Hey, I'm interesting"
            className="group inline-flex items-center gap-2 font-mono text-sm text-white/80 underline underline-offset-4 transition-colors duration-200 hover:text-white"
          >
            hello@yetinepal.com
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
