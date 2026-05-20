import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" data-screen-label="07 Contact">
      <div className="wrap">
        <div className="cta-band reveal">
          <div>
            <span className="small-label" style={{ color: 'rgba(255,255,255,0.55)' }}>
              START A PROJECT
            </span>
            <h2 style={{ marginTop: 14 }}>
              Tell us what you&rsquo;re trying to build. We&rsquo;ll reply within 24 hours.
            </h2>
            <p>
              Most engagements begin with a 30-minute scoping call and a written quote inside
              five business days.
            </p>
          </div>
          <div className="actions">
            <Link href="mailto:hello@yetinepal.com" className="btn">hello@yetinepal.com</Link>
            <Link href="#" className="btn outline">Book a call →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
