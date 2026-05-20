'use client'

import { useRef } from 'react'

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = sliderRef.current
    if (!el) return
    const card = (el.firstElementChild?.getBoundingClientRect().width ?? 460) + 14
    el.scrollBy({ left: dir * card, behavior: 'smooth' })
  }

  return (
    <section id="voices" data-screen-label="05 Voices">
      <div className="wrap">
        <div className="section-head reveal">
          <h2>Words from the people who signed the invoices.</h2>
          <div className="slider-ctl">
            <button onClick={() => scroll(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button onClick={() => scroll(1)} aria-label="Next">
              <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        <div className="testi-slider reveal" ref={sliderRef}>
          <article className="quote">
            <p className="q">&ldquo;They didn&rsquo;t ask us to redo our process to fit theirs. They learned ours in a week and were shipping into staging on day eleven.&rdquo;</p>
            <div className="who">
              <div className="av">MR</div>
              <div>
                <div className="name">Mira Rauch</div>
                <div className="role">VP Engineering · Halcyon Health</div>
              </div>
            </div>
          </article>
          <article className="quote">
            <p className="q">&ldquo;Easily the most senior team I&rsquo;ve worked with at this price point. The architecture in the first scoping doc was disarming.&rdquo;</p>
            <div className="who">
              <div className="av">DK</div>
              <div>
                <div className="name">Daniel Kvist</div>
                <div className="role">CTO · Norden Logistics</div>
              </div>
            </div>
          </article>
          <article className="quote">
            <p className="q">&ldquo;Took a brand we&rsquo;d outgrown and made it feel like a public company without losing what made us us. We&rsquo;ve been quoting their work for a year.&rdquo;</p>
            <div className="who">
              <div className="av">AT</div>
              <div>
                <div className="name">Aanya Thapa</div>
                <div className="role">Founder · Saral Pay</div>
              </div>
            </div>
          </article>
          <article className="quote">
            <p className="q">&ldquo;The Friday demo cadence changed it for our board. By month two we were debating real product, not slideware.&rdquo;</p>
            <div className="who">
              <div className="av">JO</div>
              <div>
                <div className="name">Jordan Okafor</div>
                <div className="role">Head of Product · Kestrel.io</div>
              </div>
            </div>
          </article>
          <article className="quote">
            <p className="q">&ldquo;They wrote a one-page runbook on day one and updated it weekly. When the engagement ended we kept running. That&rsquo;s rare.&rdquo;</p>
            <div className="who">
              <div className="av">EL</div>
              <div>
                <div className="name">Elif Lima</div>
                <div className="role">Head of Eng · Almanac Studios</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
