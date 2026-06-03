import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ════════════════════════════════════
          HERO — Welcome to Voxiant Solutions
      ════════════════════════════════════ */}
      <div className="home-hero-wrap">
        {/* Decorative blobs — orange + light blue, alternate L/R */}
        <div className="hero-blobs-wrap" aria-hidden="true">
          <div className="hero-blob-1" />
          <div className="hero-blob-2" />
          <div className="hero-blob-3" />
          <div className="hero-blob-4" />
        </div>
        <div className="home-hero">
          <div className="home-hero-content">
            <span className="hero-eyebrow" data-reveal="up">Creative Digital Agency</span>
            <h1 data-reveal="up">Voxiant<br />Clear thinking. Powerful brands.</h1>
            <p data-reveal="up">
              Strategy and design work together: brand identity, responsive websites, and SEO—built around your goals, not a one-size-fits-all plan.
            </p>
            <div className="hero-meta" data-reveal="up">
              <span>50+ Projects</span>
              <span className="hero-meta-sep" aria-hidden="true" />
              <span>8 Services</span>
              <span className="hero-meta-sep" aria-hidden="true" />
              <span>Brand to Launch</span>
            </div>
          </div>
          <div className="home-hero-graphic">
            <Link href="/contact" className="hero-logo-cta">
              {/* logo + rings + orbit */}
              <div className="hero-logo-wrap">
                {/* soft glow plate behind logo */}
                <span className="hero-logo-glow" aria-hidden="true" />

                {/* pulsing rings */}
                <div className="hero-logo-cta-visual" aria-hidden="true">
                  <span className="hero-logo-ring hero-logo-ring--1" />
                  <span className="hero-logo-ring hero-logo-ring--2" />
                  <span className="hero-logo-ring hero-logo-ring--3" />
                </div>

                {/* static orbit ring */}
                <span className="hero-orbit-ring" aria-hidden="true" />

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

              {/* CTA pill */}
              <span className="hero-cta-pill">
                <span className="hero-cta-live-dot" aria-hidden="true" />
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
            <h2>Services That Fit Your Business</h2>
          </div>

          {/* 4-column icon grid */}
          <div className="home-services-grid">

            <div className="home-service-card" data-reveal="up" data-delay="1">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path d="M9 21H17L35 12V40L17 31H9V21Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                  <path d="M17 31V38C17 39.1 17.9 40 19 40H22C23.1 40 24 39.1 24 38V34" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M40 19C43 22 43 30 40 33" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Marketing</h3>
              <p>We plan campaigns and messaging with you, then turn them into content and channels you can run.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

            <div className="home-service-card" data-reveal="up" data-delay="2">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <path d="M26 8C15 8 8 15 8 25C8 33 14 39 22 39C24.2 39 26 37.2 26 35C26 33.3 27.3 32 29 32H33C39 32 44 27.5 44 21.5C44 13.5 36 8 26 8Z" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round"/>
                  <circle cx="16" cy="23" r="2.2" fill="currentColor"/>
                  <circle cx="22" cy="16" r="2.2" fill="currentColor"/>
                  <circle cx="31" cy="16" r="2.2" fill="currentColor"/>
                  <circle cx="37" cy="22" r="2.2" fill="currentColor"/>
                </svg>
              </div>
              <h3>Branding</h3>
              <p>We build logos, color systems, and brand guidelines that look consistent across your website, print, and social channels.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

            <div className="home-service-card" data-reveal="up" data-delay="3">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect x="8" y="10" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2.4"/>
                  <path d="M8 19H44" stroke="currentColor" strokeWidth="2.4"/>
                  <circle cx="13" cy="14.5" r="1.3" fill="currentColor"/>
                  <circle cx="17.5" cy="14.5" r="1.3" fill="currentColor"/>
                  <path d="M21 24L34 29.5L28.5 31.5L31.5 38L28 39.5L25 33L21 36V24Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>UX / UI</h3>
              <p>We design clear layouts and flows so people can find what they need quickly on web and mobile.</p>
              <span className="hsc-hover-line" aria-hidden="true" />
            </div>

            <div className="home-service-card" data-reveal="up" data-delay="4">
              <div className="hsc-icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
                  <rect x="6" y="11" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2.4"/>
                  <path d="M6 19H46" stroke="currentColor" strokeWidth="2.4"/>
                  <circle cx="11.5" cy="15" r="1.3" fill="currentColor"/>
                  <circle cx="16" cy="15" r="1.3" fill="currentColor"/>
                  <circle cx="20.5" cy="15" r="1.3" fill="currentColor"/>
                  <path d="M22 26L18 30.5L22 35" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 26L34 30.5L30 35" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M27.5 24L24.5 37" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Web Applications</h3>
              <p>We build web apps from planning through launch, with features scoped to your workflow and goals.</p>
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
            <p>We build websites that load fast, read clearly, and help visitors take the next step—on phones, tablets, and desktops.</p>
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
              <span /><p>Graphic Design, Email Marketing, Print &amp; More</p>
            </div>
            <p>From logos to posters, we design materials that match your audience and stay on brand.</p>
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
        <h2 data-reveal="up">Ready to Start Your Project?</h2>
        <div className="cta-line" data-reveal="scale" data-delay="1" />
        <p data-reveal="up" data-delay="2">Contact us to talk through your goals, timeline, and budget.</p>
        <Link href="/contact" className="btn btn-outline" data-reveal="up" data-delay="3">
          Get in touch
        </Link>
      </section>
    </>
  )
}
