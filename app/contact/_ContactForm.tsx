"use client";

import { useActionState, useEffect, useRef } from "react";
import { contactAction, ContactState } from "../../actions/contact";

const initialState: ContactState = { status: "idle" };

const sourceOptions = [
  "Google Search",
  "Social Media",
  "Word of Mouth",
  "YouTube",
  "A Friend / Colleague",
  "Other",
];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    contactAction,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors";
  const labelClass =
    "font-mono text-[10px] uppercase tracking-widest text-white/50";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-[#0071e3]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClass}>
            Work Email <span className="text-[#0071e3]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Your company name"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-[#0071e3]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="source" className={labelClass}>
          Where did you find us?
        </label>
        <div className="relative">
          <select
            id="source"
            name="source"
            defaultValue=""
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled className="bg-[#0b0b0b]">
              Select an option
            </option>
            {sourceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0b0b0b]">
                {opt}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">
            ▾
          </span>
        </div>
      </div>

      {state.status === "error" && (
        <p className="font-mono text-xs text-red-400 border border-red-400/30 px-4 py-3">
          {state.message}
        </p>
      )}

      {state.status === "success" && (
        <p className="font-mono text-xs px-4 py-3 border border-[#0071e3]/40 text-[#0071e3]">
          Message received. We&apos;ll be in touch soon.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200 border-2 border-[#0071e3] disabled:opacity-50 mt-1"
        style={{
          background: pending ? "transparent" : "#0071e3",
          color: pending ? "#0071e3" : "#fff",
        }}
      >
        {pending ? "Sending..." : "Send Message →"}
      </button>

      <p className="font-mono text-[10px] text-white/40 leading-relaxed">
        Your message goes to hello@yetinepal.com — a real human will read it.
      </p>
    </form>
  );
}
