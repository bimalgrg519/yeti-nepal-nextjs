import { Metadata } from "next";

import { ClientGrid } from "../_components/Clients";
import ContactForm from "./_ContactForm";

export const metadata: Metadata = {
  title: "Contact — Yeti Nepal",
  description:
    "Get in touch with Yeti Nepal. Tell us about your project and let's build something together.",
};

const listItems = [
  { label: "Tell us about your work", sub: "What are you building?" },
  { label: "Share your goals", sub: "What does success look like?" },
  { label: "Set a timeline", sub: "When do you need it?" },
  { label: "Let's find the budget", sub: "We work across all ranges." },
];

export default function ContactPage() {
  return (
    <div className="mt-40">
      <div className="px-margin-x pb-24">
        <div className="mb-16 flex items-center gap-8 sm:flex-row">
          <h1 className="bg-amber-700 pr-2 text-6xl font-black tracking-tighter text-white uppercase md:text-[9vw]">
            Let&apos;s{" "}
            <span
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              Talk.
            </span>
          </h1>
          <div className="flex flex-col gap-1 pt-2">
            <a
              href="mailto:hello@yetinepal.com"
              className="font-mono text-sm text-white/60 transition-colors hover:text-white"
            >
              hello@yetinepal.com
            </a>
            <span className="font-mono text-sm text-white/40">
              +977 9700886505
            </span>
            <span className="mt-1 font-mono text-xs tracking-widest text-white/30 uppercase">
              Lamachour, Pokhara · Nepal
            </span>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-16 lg:grid lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-6">
            <p className="max-w-md text-base leading-relaxed text-white/50">
              We partner with ambitious founders and teams to build digital
              products that actually work. Drop us a message and we&apos;ll
              respond within one business day.
            </p>

            <ul className="flex flex-col gap-0">
              {listItems.map((item, i) => (
                <li key={item.label} className="py-1">
                  <p className="text-sm font-normal tracking-wide text-white">
                    - {item.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="mb-4 font-mono text-[12px] tracking-[0.2em] text-white/60 uppercase">
                Trusted by
              </p>
              <ClientGrid />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
