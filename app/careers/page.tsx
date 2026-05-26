import { Metadata } from "next";

import ApplyForm from "./_ApplyForm";

export const metadata: Metadata = {
  title: "Careers — Yeti Nepal",
  description:
    "Join Yeti Nepal. We're hiring an Intern, Frontend Developer, and SEO Specialist.",
};

const openings = [
  {
    id: "Intern",
    label: "001",
    weirdTitle: "BABY YETI",
    tagline: "You don't know much. That's fine. Neither did we.",
    description:
      "Fresh brain. No bad habits yet. You'll touch real projects on day one — no coffee fetching, no fake tasks. We'll break you in properly.",
    perks: ["Real projects", "Mentorship", "Free chaos"],
    color: "#b5ff4d",
  },
  {
    id: "Frontend Developer",
    label: "002",
    weirdTitle: "PIXEL CHEF",
    tagline: "You make things look alive. Buttons that feel like butter.",
    description:
      "We need someone who obsesses over 1px misalignments at 2am. Someone who has arguments with Figma. Someone who ships and doesn't hide.",
    perks: ["React / Next.js", "Tailwind CSS", "Design collaboration"],
    color: "#ff6b6b",
  },
  {
    id: "SEO Specialist",
    label: "003",
    weirdTitle: "GOOGLE WHISPERER",
    tagline: "You speak algorithm. Google listens when you talk.",
    description:
      "You understand intent, structure, backlinks, and why that one blog post ranks even though it's terrible. You fix that. You make things climb.",
    perks: ["Full ownership", "Technical + creative", "Real metrics"],
    color: "#a78bfa",
  },
];

export default async function CareersPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role } = await searchParams;
  const selectedRole =
    openings.find((o) => o.id === role)?.id ?? openings[0].id;

  return (
    <div className="mt-40">
      <div className="px-margin-x pb-32">
        <div className="mb-20">
          <h1 className="text-6xl leading-none font-black tracking-tighter text-white uppercase md:text-[9vw]">
            Work with{" "}
            <span
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              us.
            </span>
          </h1>
        </div>

        <div className="flex flex-col-reverse gap-20 lg:grid lg:grid-cols-2 lg:gap-32">
          <div className="flex flex-col gap-0">
            {openings.map((job) => (
              <div
                key={job.id}
                className="border-t border-white/10 py-8 last:border-b"
              >
                <div className="mb-3 flex items-start gap-4">
                  <span
                    className="mt-1 font-mono text-xs"
                    style={{ color: job.color }}
                  >
                    {job.label}
                  </span>
                  <div>
                    <div className="mb-1 flex items-baseline gap-3">
                      <h2 className="text-2xl leading-none font-black tracking-tighter text-white uppercase md:text-3xl">
                        {job.id}
                      </h2>
                      <span
                        className="px-2 py-0.5 font-mono text-[9px] font-bold tracking-widest uppercase"
                        style={{ background: job.color, color: "#0b0b0b" }}
                      >
                        {job.weirdTitle}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-white/50">{job.tagline}</p>
                    <p className="mb-4 text-sm leading-relaxed text-white/40">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.perks.map((perk) => (
                        <span
                          key={perk}
                          className="border px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase"
                          style={{
                            borderColor: job.color + "44",
                            color: job.color,
                          }}
                        >
                          {perk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="sticky top-8">
              <ApplyForm
                roles={openings.map((o) => o.id)}
                defaultRole={selectedRole}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
