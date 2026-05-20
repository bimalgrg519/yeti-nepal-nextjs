import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Link href="#" className="nav-brand">
              <span className="brand-mark" />
              Yeti Nepal
            </Link>
            <p className="foot-blurb">
              A senior digital studio designing and building software, brands and infrastructure
              from Kathmandu, Nepal — for teams worldwide.
            </p>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#work">Work</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>
          <div>
            <h5>Services</h5>
            <ul>
              <li><Link href="#services">Product</Link></li>
              <li><Link href="#services">SEO</Link></li>
              <li><Link href="#services">Brand</Link></li>
              <li><Link href="#services">Platform</Link></li>
              <li><Link href="#services">Applied AI</Link></li>
            </ul>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><Link href="#">Journal</Link></li>
              <li><Link href="#">Open source</Link></li>
              <li><Link href="#">Brand assets</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><Link href="mailto:hello@yetinepal.com">hello@yetinepal.com</Link></li>
              <li><Link href="#">Naxal, Kathmandu</Link></li>
              <li><Link href="#">+977 1 4000000</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Yeti Nepal · All rights reserved</span>
          <span>Built in Kathmandu · Shipped worldwide</span>
        </div>
      </div>
    </footer>
  )
}
