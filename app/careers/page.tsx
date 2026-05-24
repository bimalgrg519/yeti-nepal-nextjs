import { Metadata } from "next";
import ApplyForm from "./_ApplyForm";
import Link from "next/link";

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
          <h1 className="text-6xl md:text-[9vw] font-black text-white leading-none tracking-tighter uppercase">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Openings list */}
          <div className="flex flex-col gap-0">
            {openings.map((job) => (
              <div
                key={job.id}
                className="border-t border-white/10 py-8 last:border-b"
              >
                <div className="flex items-start gap-4 mb-3">
                  <span
                    className="font-mono text-xs mt-1"
                    style={{ color: job.color }}
                  >
                    {job.label}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3 mb-1">
                      <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                        {job.id}
                      </h2>
                      <span
                        className="font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-0.5"
                        style={{ background: job.color, color: "#0b0b0b" }}
                      >
                        {job.weirdTitle}
                      </span>
                    </div>
                    <p className="text-white/50 text-sm mb-3">{job.tagline}</p>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.perks.map((perk) => (
                        <span
                          key={perk}
                          className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border"
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

          {/* Application form */}
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
