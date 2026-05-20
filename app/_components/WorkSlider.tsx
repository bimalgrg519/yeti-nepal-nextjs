'use client'

import { useRef } from 'react'
import Link from 'next/link'

export default function WorkSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = sliderRef.current
    if (!el) return
    const card = (el.firstElementChild?.getBoundingClientRect().width ?? 540) + 14
    el.scrollBy({ left: dir * card, behavior: 'smooth' })
  }

  return (
    <section id="work" data-screen-label="04 Work">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Selected work.</h2>
          <div className="slider-ctl">
            <button onClick={() => scroll(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button onClick={() => scroll(1)} aria-label="Next">
              <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        <div className="slider-wrap reveal">
          <div className="slider" ref={sliderRef}>

            <Link className="slide" href="#">
              <div className="thumb dk">
                <svg viewBox="0 0 320 240" fill="none">
                  <rect x="36" y="36" width="248" height="168" rx="10" fill="rgba(255,255,255,0.06)" />
                  <rect x="56" y="56" width="100" height="10" rx="2" fill="rgba(255,255,255,0.5)" />
                  <rect x="56" y="74" width="60" height="8" rx="2" fill="rgba(255,255,255,0.25)" />
                  <rect x="56" y="98" width="208" height="84" rx="6" fill="rgba(255,255,255,0.04)" />
                  <path d="M68 170 C 100 150, 130 90, 170 100 S 230 70, 264 110" stroke="#5EE0E6" strokeWidth="2" />
                  <circle cx="170" cy="100" r="4" fill="#5EE0E6" />
                </svg>
              </div>
              <div className="body">
                <div className="tag">FINTECH · CASE STUDY</div>
                <h3>Realtime treasury for a Series-B neobank.</h3>
                <p>Replaced an end-of-day batch system with streaming reconciliation. 11-week build, zero downtime cutover.</p>
              </div>
            </Link>

            <Link className="slide" href="#">
              <div className="thumb bl">
                <svg viewBox="0 0 320 240" fill="none">
                  <circle cx="160" cy="120" r="68" stroke="#1d1d1f" strokeWidth="1.5" strokeOpacity="0.2" />
                  <circle cx="160" cy="120" r="68" stroke="#0066cc" strokeWidth="6" fill="none"
                    strokeDasharray="280 430" strokeLinecap="round" transform="rotate(-90 160 120)" />
                  <text x="160" y="126" textAnchor="middle" fill="#1d1d1f" fontFamily="Inter" fontSize="32" fontWeight="600">82%</text>
                  <text x="160" y="148" textAnchor="middle" fill="#6e6e73" fontFamily="Inter" fontSize="10" letterSpacing="2">ADHERENCE</text>
                </svg>
              </div>
              <div className="body">
                <div className="tag">HEALTHTECH</div>
                <h3>Patient-flow OS across 11 hospitals.</h3>
                <p>Replaced fax-based handoffs with a shared timeline. Adherence to discharge protocols up 22 points.</p>
              </div>
            </Link>

            <Link className="slide" href="#">
              <div className="thumb wm">
                <svg viewBox="0 0 320 240" fill="none">
                  <path d="M40 180 L90 110 L150 160 L210 70 L280 110" stroke="#1d1d1f" strokeWidth="2.5" />
                  <circle cx="40" cy="180" r="6" fill="#1d1d1f" />
                  <circle cx="90" cy="110" r="6" fill="#1d1d1f" />
                  <circle cx="150" cy="160" r="6" fill="#1d1d1f" />
                  <circle cx="210" cy="70" r="8" fill="#0066cc" />
                  <circle cx="280" cy="110" r="6" fill="#1d1d1f" />
                  <rect x="36" y="36" width="80" height="8" rx="2" fill="#1d1d1f" fillOpacity="0.6" />
                  <rect x="36" y="52" width="120" height="10" rx="2" fill="#1d1d1f" fillOpacity="0.3" />
                </svg>
              </div>
              <div className="body">
                <div className="tag">TRAVEL · BRAND &amp; APP</div>
                <h3>Booking platform for premium trekking.</h3>
                <p>Full brand reset and an app that took bookings from email-back-and-forth to same-day confirmed.</p>
              </div>
            </Link>

            <Link className="slide" href="#">
              <div className="thumb gr">
                <svg viewBox="0 0 320 240" fill="none">
                  <g fill="#1d1d1f">
                    <rect x="40" y="160" width="22" height="50" rx="2" fillOpacity="0.4" />
                    <rect x="72" y="120" width="22" height="90" rx="2" fillOpacity="0.55" />
                    <rect x="104" y="80" width="22" height="130" rx="2" fillOpacity="0.7" />
                    <rect x="136" y="110" width="22" height="100" rx="2" fillOpacity="0.55" />
                    <rect x="168" y="60" width="22" height="150" rx="2" fillOpacity="0.85" />
                    <rect x="200" y="90" width="22" height="120" rx="2" fillOpacity="0.7" />
                    <rect x="232" y="40" width="22" height="170" rx="2" fill="#0066cc" fillOpacity="1" />
                  </g>
                  <rect x="40" y="36" width="80" height="10" rx="2" fill="#1d1d1f" fillOpacity="0.6" />
                </svg>
              </div>
              <div className="body">
                <div className="tag">DATA PLATFORM</div>
                <h3>12-year data warehouse, replatformed to streaming.</h3>
                <p>3.4M+ events/day, sub-second freshness, and a finance team that finally trusts the numbers.</p>
              </div>
            </Link>

            <Link className="slide" href="#">
              <div className="thumb dk">
                <svg viewBox="0 0 320 240" fill="none">
                  <rect x="36" y="48" width="248" height="40" rx="6" fill="rgba(255,255,255,0.08)" />
                  <rect x="48" y="62" width="120" height="10" rx="2" fill="rgba(255,255,255,0.7)" />
                  <rect x="36" y="100" width="120" height="100" rx="6" fill="rgba(255,255,255,0.06)" />
                  <rect x="164" y="100" width="120" height="48" rx="6" fill="#5EE0E6" fillOpacity="0.9" />
                  <rect x="164" y="156" width="120" height="44" rx="6" fill="rgba(255,255,255,0.06)" />
                  <rect x="48" y="118" width="60" height="8" rx="2" fill="rgba(255,255,255,0.5)" />
                  <rect x="48" y="134" width="80" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
                </svg>
              </div>
              <div className="body">
                <div className="tag">SaaS · ONBOARDING</div>
                <h3>Onboarding that converts trial users at 38%.</h3>
                <p>Two-week design sprint, four-week build. Conversion lifted from 19% to 38% in the first month.</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
