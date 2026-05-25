"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { applyAction, ApplyState } from "../../actions/apply";

const initialState: ApplyState = { status: "idle" };

const roleColors: Record<string, string> = {
  Intern: "#b5ff4d",
  "Frontend Developer": "#ff6b6b",
  "SEO Specialist": "#a78bfa",
};

export default function ApplyForm({
  roles,
  defaultRole,
}: {
  roles: string[];
  defaultRole: string;
}) {
  const [state, formAction, pending] = useActionState(
    applyAction,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedRole, setSelectedRole] = useState(defaultRole);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  const accentColor = roleColors[selectedRole] ?? "#b5ff4d";

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-white/60">
          Role
        </label>
        <div className="relative">
          <select
            name="role"
            defaultValue={defaultRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/10 text-white px-4 py-3 font-mono text-sm uppercase tracking-wide appearance-none cursor-pointer focus:outline-none focus:border-white/30 transition-colors"
          >
            {roles.map((role) => (
              <option key={role} value={role} className="bg-[#0b0b0b]">
                {role}
              </option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs">
            ▾
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-[10px] uppercase tracking-widest text-white/60"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="bg-white/[0.04] border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-[10px] uppercase tracking-widest text-white/60"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="bg-white/[0.04] border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>

      {/* CV Link */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="cvLink"
          className="font-mono text-[10px] uppercase tracking-widest text-white/60"
        >
          CV Link
        </label>
        <input
          id="cvLink"
          name="cvLink"
          type="url"
          required
          placeholder="https://drive.google.com/..."
          className="bg-white/[0.04] border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
        />
        <p className="font-mono text-[10px] text-white/60 leading-relaxed pt-1">
          Upload to <span className="text-white/80">Google Drive</span> or{" "}
          <span className="text-white/80">Google Docs</span>, then set sharing
          to <span className="text-white/80">Anyone with the link</span> and
          paste the URL above.
        </p>
      </div>

      {state.status === "error" && (
        <p className="font-mono text-xs text-red-400 border border-red-400/30 px-4 py-3">
          {state.message}
        </p>
      )}

      {state.status === "success" && (
        <p
          className="font-mono text-xs px-4 py-3 border"
          style={{ color: accentColor, borderColor: accentColor + "44" }}
        >
          {`Application received. We'll be in touch.`}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="font-black text-sm uppercase tracking-widest px-8 py-4 transition-all duration-200 border-2 disabled:opacity-50"
        style={{
          background: pending ? "transparent" : accentColor,
          borderColor: accentColor,
          color: pending ? accentColor : "#0b0b0b",
        }}
      >
        {pending ? "Sending..." : "Send Application →"}
      </button>

      <p className="font-mono text-[10px] text-white/60 leading-relaxed">
        Your application goes to hello@yetinepal.com — a real human will read
        it.
      </p>
    </form>
  );
}
