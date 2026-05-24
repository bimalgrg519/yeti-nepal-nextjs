import Link from "next/link";

const studio = ["About", "Work", "Careers", "Press"];
const services = ["Website", "Mobile Apps", "SEO"];

export default function Footer() {
  return (
    <footer
      style={{
        minHeight: "100vh",
        background: "#070707",
        color: "white",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-0.05em",
          bottom: "5rem",
          fontSize: "clamp(12rem, 38vw, 52rem)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.05)",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        YN
      </span>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "30%",
          top: "40%",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding:
              "clamp(3rem, 7vh, 5rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 5vh, 4rem)",
          }}
          className="bg-lime-600"
        >
          <div className="flex gap-3 flex-col md:flex-row justify-between w-full">
            <Link
              href="/contact"
              className="flex gap-2 items-center"
              style={{ width: "fit-content" }}
            >
              <h2
                style={{
                  fontSize: "clamp(3.5rem, 10.5vw, 9.5rem)",
                  fontWeight: 300,
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  margin: 0,
                  color: "white",
                }}
              >
                Let&apos;s talk
              </h2>
              <span
                className="footer-arrow text-black"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 6rem)",
                  lineHeight: 1,
                  marginTop: "auto",
                  alignSelf: "flex-end",
                }}
              >
                ↗
              </span>
            </Link>
            <div className="flex gap-3 flex-col md:flex-row py-12">
              <Link
                href="/#services"
                className="btn-outline bg-black border-black text-2xl sm:text-3xl px-10 py-5 font-light"
              >
                See what we do
              </Link>
              <Link
                href="/contact"
                className="btn-outline text-2xl sm:text-3xl px-10 py-5 font-light"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "clamp(1.5rem, 4vw, 4rem)",
              marginTop: "clamp(2rem, 4vh, 3.5rem)",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:hello@yetinepal.com"
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: "0.15rem",
                letterSpacing: "0.01em",
                transition: "color 0.2s, border-color 0.2s",
              }}
            >
              hello@yetinepal.com
            </a>
            <span
              style={{
                fontSize: "1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Lamachour, Pokhara · +977 9700886505
            </span>
          </div>
        </div>

        {/* ── Divider with decorative number ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            padding: "0 clamp(1.5rem, 5vw, 5rem)",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              flex: 1,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.08) 0%, rgba(0,113,227,0.25) 50%, rgba(255,255,255,0.03) 100%)",
            }}
          />
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)",
              flexShrink: 0,
            }}
          >
            PKR
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "2rem 3rem",
            padding: "0 clamp(1.5rem, 5vw, 5rem) clamp(3rem, 6vh, 4.5rem)",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Studio
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {studio.map((s) => (
                <li key={s}>
                  <Link
                    href="#"
                    className="text-[#999] text-[16px] tracking-tight hover:text-[#bbb] hover:underline transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="#services"
                    className="text-[#999] text-[16px] tracking-tight hover:text-[#bbb] hover:underline transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Social
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Facebook"].map((s) => (
                <li key={s}>
                  <Link
                    href="https://www.facebook.com/@theyetinepal"
                    className="text-[#999] text-[16px] tracking-tight hover:text-[#bbb] hover:underline transition-colors duration-200"
                    target="_blank"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              gridColumn: "span 1",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "1.25rem 1.5rem",
              position: "relative",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "0.75rem",
              }}
            >
              Location
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.4,
              }}
            >
              Lamachour
              <br />
              Pokhara, Nepal
            </p>
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "0.75rem",
                right: "1rem",
                fontSize: "1.5rem",
                color: "rgba(0,113,227,0.4)",
              }}
            >
              ◈
            </span>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding:
              "1.25rem clamp(1.5rem, 5vw, 5rem) 1.5rem clamp(1.5rem, 5vw, 5rem)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © 2026 Yeti Nepal
          </span>
          <div
            style={{
              padding: "10rem clamp(1.5rem, 5vw, 5rem) 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <span
              className="text-white mt-10"
              style={{
                fontFamily: "var(--font-geist-sans), sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                userSelect: "none",
                lineHeight: 1,
              }}
            >
              Yeti Nepal
            </span>
          </div>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            From the himalayas to the world.
          </span>
        </div>
      </div>
    </footer>
  );
}
