import Link from 'next/link'

export default function Services() {
  return (
    <section id="services" data-screen-label="02 Services">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Capabilities, in rectangles.</h2>
          <div className="right">Nine things we do well. Hire us for one or for all of them.</div>
        </div>

        <div className="grid">
          {/* 01 Product */}
          <Link href="#" className="tile ink span-4 reveal">
            <span className="label">01</span>
            <div className="tile-head">
              <h3>Product design &amp; engineering</h3>
              <p>Research, design and full-stack engineering from a single backlog. Web, mobile, internal tools.</p>
            </div>
            <div className="visual">
              <div className="v-stack">
                <div className="row"><span>Discovery sprint</span><span className="v">2 wk</span></div>
                <div className="row"><span>Design system</span><span className="v">4 wk</span></div>
                <div className="row"><span>v1 to production</span><span className="v">11 wk</span></div>
              </div>
            </div>
            <div className="footer">
              <span className="more">Read more →</span>
            </div>
          </Link>

          {/* 02 SEO */}
          <Link href="#" className="tile tint span-2 reveal">
            <span className="label">02</span>
            <div className="tile-head">
              <h3>SEO &amp; organic growth</h3>
              <p>Technical SEO, content architecture and Core Web Vitals work that lifts traffic — and keeps it lifted.</p>
            </div>
            <div className="visual">
              <div className="v-search">
                <div className="input">trekking holidays nepal</div>
                <div className="result">
                  <span className="pos">1</span><span>yetinepal.com</span><span className="delta">↑ 14</span>
                </div>
                <div className="result dim">
                  <span className="pos">2</span><span>competitor.com</span><span />
                </div>
                <div className="result dim">
                  <span className="pos">3</span><span>directory.np</span><span />
                </div>
              </div>
            </div>
            <div className="footer"><span className="more">Read more →</span></div>
          </Link>

          {/* 03 Brand */}
          <Link href="#" className="tile warm span-2 reveal">
            <span className="label">03</span>
            <div className="tile-head">
              <h3>Brand &amp; identity</h3>
              <p>Names, marks, voice, and the visual systems that hold them together as you scale.</p>
            </div>
            <div className="visual">
              <div className="v-grid">
                <span className="fill" /><span /><span className="acc" /><span />
                <span /><span className="fill" /><span /><span className="fill" />
              </div>
            </div>
            <div className="footer"><span className="more">Read more →</span></div>
          </Link>

          {/* 04 AI */}
          <Link href="#" className="tile span-2 reveal">
            <span className="label">04</span>
            <div className="tile-head">
              <h3>Applied AI &amp; ML</h3>
              <p>RAG, agents and the unglamorous data plumbing that makes them ship.</p>
            </div>
            <div className="visual">
              <div className="v-orbit">
                <svg viewBox="0 0 200 120" fill="none">
                  <circle cx="100" cy="60" r="44" stroke="#1d1d1f" strokeWidth="1" />
                  <circle cx="100" cy="60" r="28" stroke="#1d1d1f" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="144" cy="60" r="5" fill="#0066cc" />
                  <circle cx="72" cy="46" r="3" fill="#1d1d1f" />
                  <circle cx="80" cy="80" r="3" fill="#1d1d1f" />
                  <circle cx="100" cy="60" r="6" fill="#1d1d1f" />
                </svg>
              </div>
            </div>
            <div className="footer"><span className="more">Read more →</span></div>
          </Link>

          {/* 05 Growth */}
          <Link href="#" className="tile span-2 reveal">
            <span className="label">05</span>
            <div className="tile-head">
              <h3>Growth &amp; performance</h3>
              <p>Activation, retention, and revenue work tied to instrumentation you can trust.</p>
            </div>
            <div className="visual">
              <div className="v-bars">
                <span className="dim" style={{ height: '25%' }} />
                <span className="dim" style={{ height: '40%' }} />
                <span style={{ height: '55%' }} />
                <span style={{ height: '65%' }} />
                <span style={{ height: '48%' }} />
                <span style={{ height: '78%' }} />
                <span style={{ height: '72%' }} />
                <span className="acc" style={{ height: '96%' }} />
              </div>
            </div>
            <div className="footer"><span className="more">Read more →</span></div>
          </Link>

          {/* 06 Platform */}
          <Link href="#" className="tile ink span-2 reveal">
            <span className="label" style={{ color: 'rgba(255,255,255,0.4)' }}>06</span>
            <div className="tile-head">
              <h3>Platform &amp; DevOps</h3>
              <p>Cloud-native infrastructure, CI/CD, observability and security — handed off clean.</p>
            </div>
            <div className="visual">
              <div className="v-stat">
                <span className="bignum">
                  99.99<span style={{ fontSize: 32 }}>%</span>
                </span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 8 }}>
                Production uptime across 22 platforms we run.
              </p>
            </div>
          </Link>

          {/* 07 Analytics */}
          <Link href="#" className="tile tint span-2 reveal">
            <span className="label">07</span>
            <div className="tile-head">
              <h3>Analytics &amp; insight</h3>
              <p>Event tracking, dashboards, funnels — the difference between shipped and working.</p>
            </div>
            <div className="visual">
              <div className="v-pulse">
                <svg viewBox="0 0 200 60" fill="none">
                  <path
                    d="M0 40 L20 40 L28 20 L40 50 L60 30 L80 36 L100 12 L120 36 L140 30 L160 44 L180 32 L200 40"
                    stroke="#0066cc" strokeWidth="1.6" fill="none"
                  />
                </svg>
                <div className="ln" />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6e6e73' }}>
                  <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
              </div>
            </div>
            <div className="footer"><span className="more">Read more →</span></div>
          </Link>

          {/* 08 Strategy */}
          <Link href="#" className="tile span-2 reveal">
            <span className="label">08</span>
            <div className="tile-head">
              <h3>Strategy &amp; advisory</h3>
              <p>Fractional product and design leadership for teams between founder and full org.</p>
            </div>
            <div className="visual">
              <div className="v-stat">
                <span className="bignum">
                  9<span style={{ fontSize: 32, fontWeight: 500, color: '#6e6e73' }}>yr</span>
                </span>
              </div>
              <p style={{ marginTop: 8 }}>Median tenure of senior staff on every engagement.</p>
            </div>
          </Link>

          {/* 09 Care */}
          <Link href="#" className="tile warm span-6 reveal">
            <span className="label">09</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'center', flex: 1 }}>
              <div>
                <h3 style={{ fontSize: 32 }}>Long-term care &amp; SLA support.</h3>
                <p style={{ marginTop: 14, maxWidth: '46ch', fontSize: 15 }}>
                  SLA-backed maintenance, upgrades and on-call coverage long after launch day.
                  We stay around to keep what we built honest.
                </p>
                <div style={{ marginTop: 22 }}>
                  <span className="btn btn-primary">Talk to support →</span>
                </div>
              </div>
              <div style={{ background: '#fff', borderRadius: 14, padding: 22, display: 'grid', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6e6e73' }}>
                  <span>Uptime · 30d</span><span style={{ fontWeight: 600, color: '#1d1d1f' }}>100%</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6e6e73' }}>
                  <span>Mean response</span><span style={{ fontWeight: 600, color: '#1d1d1f' }}>14 min</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6e6e73' }}>
                  <span>P95 resolution</span><span style={{ fontWeight: 600, color: '#1d1d1f' }}>4.2 hrs</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#6e6e73' }}>
                  <span>Tickets handled</span><span style={{ fontWeight: 600, color: '#1d1d1f' }}>3,418</span>
                </div>
                <div style={{ background: '#f5f5f7', borderRadius: 8, height: 80, marginTop: 6, display: 'flex', alignItems: 'end', gap: 3, padding: 10 }}>
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '30%' }} />
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '45%', opacity: 0.5 }} />
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '60%', opacity: 0.5 }} />
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '42%', opacity: 0.5 }} />
                  <span style={{ flex: 1, background: '#0066cc', borderRadius: 2, height: '85%' }} />
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '55%', opacity: 0.5 }} />
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '38%', opacity: 0.5 }} />
                  <span style={{ flex: 1, background: '#1d1d1f', borderRadius: 2, height: '72%', opacity: 0.5 }} />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
