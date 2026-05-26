import type React from "react";

// export function LogoMark({
//   className,
//   style,
// }: {
//   className?: string;
//   style?: React.CSSProperties;
// }) {
//   return (
//     <svg
//       viewBox="0 0 40 32"
//       fill="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//       className={className}
//       style={style}
//       aria-hidden="true"
//     >
//       <path d="M0 32L12 8L20 16L28 2L40 32H0Z" />
//     </svg>
//   );
// }

export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="Yeti Nepal"
    >
      {/* <LogoMark className="h-6 w-auto" /> */}
      <span
        style={{
          fontSize: "1.2rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          lineHeight: 1,
        }}
      >
        Yeti Nepal
      </span>
    </div>
  );
}
