"use client";

import { useState } from "react";
import Link from "next/link";

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
    vibe: "LEARNING ANIMAL",
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
    <section className="px-margin-x py-32 bg-[#0b0b0b] overflow-hidden">
      <div className="max-w-[1920px]">
        <div className="mb-20 relative">
          <h2 className="text-6xl md:text-[10vw] font-black text-white leading-none tracking-tighter uppercase">
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
          <p className="mt-6 text-white/50 text-lg md:text-2xl font-light max-w-xl">
            Three spots. Infinite weirdness allowed.
            <br />
            Normal people need not apply.
          </p>
        </div>

        <div className="flex flex-col gap-0">
          {openings.map((job, i) => (
            <div
              key={job.id}
              onMouseEnter={() => setHovered(job.id)}
              onMouseLeave={() => setHovered(null)}
              className={`
                group relative border-t border-white/10 py-10 cursor-crosshair
                transition-all duration-500
                ${hovered === job.id ? "bg-white/[0.03]" : ""}
              `}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
                <div className="md:w-24 shrink-0">
                  <span
                    className="font-mono text-sm transition-colors duration-300"
                    style={{ color: hovered === job.id ? job.color : "#ddd" }}
                  >
                    {job.label}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-3">
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase leading-none tracking-tighter">
                      {job.title}
                    </h3>
                    <span
                      className={`
                        font-mono text-[10px] font-bold tracking-widest uppercase px-2 py-1
                        transition-all duration-300 self-start
                        ${job.rotation}
                        ${hovered === job.id ? "opacity-100" : "opacity-0"}
                      `}
                      style={{
                        background: job.color,
                        color: "#0b0b0b",
                      }}
                    >
                      {job.weirdTitle}
                    </span>
                  </div>

                  <p
                    className="text-lg md:text-xl font-light mb-4 transition-colors duration-300"
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
                    className={`
                      overflow-hidden transition-all duration-500
                      ${hovered === job.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="text-white/60 text-base leading-relaxed mb-5 max-w-2xl">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.perks.map((perk) => (
                        <span
                          key={perk}
                          className="text-xs uppercase tracking-widest font-mono px-3 py-1 border"
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

                <div className="md:w-64 shrink-0 flex items-start justify-start md:justify-end">
                  <div
                    className={`
                      flex flex-col items-start md:items-end gap-2
                      transition-all duration-500
                    `}
                  >
                    <span
                      className={`
                        font-mono text-[9px] tracking-[0.3em] uppercase transition-colors duration-300
                        ${hovered === job.id ? "opacity-100" : "opacity-30"}
                      `}
                      style={{ color: job.color }}
                    >
                      {job.vibe}
                    </span>
                    <Link
                      href={`/careers?role=${encodeURIComponent(job.title)}`}
                      className={`
                        font-black text-sm uppercase tracking-wider px-6 py-3
                        transition-all duration-300 border-2
                        ${hovered === job.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      `}
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

        <div className="mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <p className="text-white/50 text-sm font-mono">
            Not finding your role but you&apos;re interesting?
          </p>
          <a
            href="mailto:hello@yetinepal.com?subject=Hey, I'm interesting"
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 text-sm font-mono underline underline-offset-4"
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
