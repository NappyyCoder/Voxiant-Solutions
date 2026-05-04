import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════
          HERO — Welcome to Voxiant Solutions
      ════════════════════════════════════ */}
      <div className="home-hero-wrap">
        {/* Decorative blobs — 4 corners */}
        <div className="hero-blobs-wrap" aria-hidden="true">
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
          <div className="hero-blob-3" />
          <div className="hero-blob-4" />
        </div>
        <div className="home-hero">
          <div className="home-hero-content">
            <h1>Welcome to<br />Voxiant Solutions</h1>
            <p>
              We offer value-added solutions that drive your business to the next level.
              We create strong brand identity, design clean responsive websites with
              e-commerce and blog enhancements, and rank you high with search-engine
              optimization. Unlike generic marketing firms, our solutions are designed
              around <strong>you</strong> — to meet your needs and your customers&apos; needs.
            </p>
          </div>
          <div className="home-hero-graphic">
            <Link href="/contact" className="hero-logo-cta">
              {/* logo + symmetric rings wrapped together */}
              <div className="hero-logo-wrap">
                <div className="hero-logo-cta-visual" aria-hidden="true">
                  <span className="hero-logo-ring hero-logo-ring--1" />
                  <span className="hero-logo-ring hero-logo-ring--2" />
                  <span className="hero-logo-ring hero-logo-ring--3" />
                </div>
                <Image
                  src="/3-D-Voxiant-logo.png"
                  alt="Voxiant Solutions — click to get in touch"
                  width={500}
                  height={500}
                  className="hero-logo-float"
                  priority
                  style={{ width: '220px', height: '220px', objectFit: 'contain' }}
                />
              </div>

              {/* CTA pill — always visible */}
              <span className="hero-cta-pill">
                <span className="hero-cta-pill-shimmer" aria-hidden="true" />
                <span className="hero-cta-pill-text">Start Your Project</span>
                <svg className="hero-cta-pill-arrow" width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
                  <path d="M3.5 8.5H13.5M9 4L13.5 8.5L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          OUR SERVICES
      ════════════════════════════════════ */}
      <div className="site-rule" aria-hidden="true" />

      <section className="home-services-section">
        <div className="home-services-inner">

          {/* heading */}
          <div className="home-services-header" data-reveal="up">
            <span className="home-services-eyebrow">What We Do</span>
            <h2>Built for Every Stage of Your Business</h2>
          </div>

          {/* 4-column icon grid */}
          <div className="home-services-grid">

            <div className="home-service-card" data-reveal="up" data-delay="1">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path d="M30 4L12 28H24L20 48L40 24H28L30 4Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Marketing</h3>
              <p>We fuel creativity with collaborative brainstorming, transforming raw ideas into actionable strategies for your brand.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

            <div className="home-service-card" data-reveal="up" data-delay="2">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path d="M6 26C6 26 14 13 26 13C38 13 46 26 46 26C46 26 38 39 26 39C14 39 6 26 6 26Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                  <circle cx="26" cy="26" r="5.5" stroke="currentColor" strokeWidth="2.4"/>
                  <path d="M16 19L14 14M22 16L21 11M30 16L31 11M36 19L38 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Branding</h3>
              <p>Discover the power of innovative thinking and stand out in any market with cutting-edge solutions that inspire brilliance.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

            <div className="home-service-card" data-reveal="up" data-delay="3">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path d="M8 14L20 26L8 38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 14L33 26L21 38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M34 14L46 26L34 38" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>UX / UI</h3>
              <p>Our innovative solutions combine technology and creativity to help you stay ahead in a competitive world.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

            <div className="home-service-card" data-reveal="up" data-delay="4">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path d="M10 10L42 42M42 10L10 42" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
                  <circle cx="26" cy="26" r="18" stroke="currentColor" strokeWidth="2.2"/>
                </svg>
              </div>
              <h3>Web Applications</h3>
              <p>From strategy to execution, we craft solutions that are both innovative and practical, delivering measurable outcomes.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

          </div>

          {/* more services CTA */}
          <div className="home-services-more" data-reveal="up">
            <p>We also offer <strong>SEO, Graphic Design, E-Commerce, Social Media</strong> and more.</p>
            <Link href="/solutions" className="hsc-more-btn">
              Explore all services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M8.5 3.5L13 8L8.5 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>

      <div className="site-rule" aria-hidden="true" />
      {/* ════════════════════════════════════
          WEB SOLUTIONS — image left, text right
      ════════════════════════════════════ */}
      <div className="split-section web-solutions-section">
        <div className="split-img" style={{ position: 'relative' }} data-reveal="left">
          <Image
            src="/work-responsive-1.png"
            alt="Responsive web design shown across multiple devices"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            loading="lazy"
          />
        </div>
        <div className="split-content" style={{ background: '#caf0f8' }} data-reveal="right">
          <div className="web-solutions-card split-content-inner">
            <div className="split-label-line">
              <span /><p>Modern Websites, Blogs, E-Commerce &amp; More</p>
            </div>
            <h2>Web Solutions</h2>
            <p>We build strong websites that load fast, are user-centered, and structured to appeal at first glance — giving your business a real competitive advantage online.</p>
            <Link href="/solutions" className="btn btn-outline">More information</Link>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          GRAPHIC SOLUTIONS — text left, image right
      ════════════════════════════════════ */}
      <div className="split-section graphic-solutions-section">
        <div className="split-content" style={{ background: '#f5f5f5' }} data-reveal="left">
          <div className="split-content-inner">
            <h2>Graphic Solutions</h2>
            <div className="split-label-line" style={{ marginTop: 10 }}>
              <span /><p>Stunning Graphic Design, Email Marketing, Print &amp; More</p>
            </div>
            <p>From logos to large-scale posters, we design user-centered graphic content with a creativity targeted to address your audience and elevate your brand.</p>
            <Link href="/solutions" className="btn btn-outline">More information</Link>
          </div>
        </div>
        <div className="split-img graphic-img-wrap" data-reveal="right">
          <Image
            src="/work-poster-1.png"
            alt="Movie poster billboard — creative graphic design"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            loading="lazy"
          />
          <div className="yellow-accent" />
        </div>
      </div>

      {/* ════════════════════════════════════
          CTA — Hire Voxiant
      ════════════════════════════════════ */}
      <section className="cta-section">
        <h2 data-reveal="up">Hire Voxiant &amp; Get the Job Done Right</h2>
        <div className="cta-line" data-reveal="scale" data-delay="1" />
        <p data-reveal="up" data-delay="2">Contact us today to begin your next project.</p>
        <Link href="/contact" className="btn btn-outline" data-reveal="up" data-delay="3">
          Get in touch
        </Link>
      </section>
    </>
  )
}
