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
        <div className="mb-16 flex items-center flex-col sm:flex-row gap-8">
          <h1 className="text-6xl md:text-[9vw] bg-amber-700 font-black text-white tracking-tighter uppercase">
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
              className="text-white/60 text-sm hover:text-white transition-colors font-mono"
            >
              hello@yetinepal.com
            </a>
            <span className="text-white/40 text-sm font-mono">
              +977 9700886505
            </span>
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest mt-1">
              Lamachour, Pokhara · Nepal
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col gap-6">
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              We partner with ambitious founders and teams to build digital
              products that actually work. Drop us a message and we&apos;ll
              respond within one business day.
            </p>

            <ul className="flex flex-col gap-0">
              {listItems.map((item, i) => (
                <li key={item.label} className="py-1">
                  <p className="text-white font-normal text-sm tracking-wide">
                    - {item.label}
                  </p>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/60 mb-4">
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
