import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Our Solutions — Voxiant Solutions' }

/* ─────────────────────────────────────
   Service data with accent color + icon
───────────────────────────────────── */
const services = [
  {
    num: '01',
    accent: '#0096c7',
    title: 'Web Strategy',
    text: 'Strategically planned web approaches that meet both your business goals and your users\u2019 expectations.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <circle cx="22" cy="22" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="22" cy="22" r="3" fill="currentColor"/>
        <path d="M22 4v8M22 32v8M4 22h8M32 22h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    accent: '#0a8f7a',
    title: 'Website Development',
    text: 'Strong, fast, user-centered websites with information structured to appeal at first glance.',
    icon: (
      <svg viewBox="0 0 48 36" fill="none" width="28" height="22" aria-hidden="true">
        <rect x="3" y="3" width="42" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M3 11h42" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 19l-4 4 4 4M32 19l4 4-4 4M27 18l-6 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    accent: '#f77f00',
    title: 'Online Marketing',
    text: 'Social-media, search-engine and email-marketing campaigns built for current marketing trends.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <path d="M6 18v8l24 8V10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M30 14h6M30 22h8M30 30h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M10 26v8h6v-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    accent: '#7c3aed',
    title: 'E-Commerce Solutions',
    text: 'Beautifully designed online stores that grow your sales — paired with marketing to amplify reach.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <path d="M6 8h6l4 22h22l4-16H14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="36" r="3" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="32" cy="36" r="3" stroke="currentColor" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    num: '05',
    accent: '#0096c7',
    title: 'Search Engine Optimization',
    text: 'Proven SEO techniques that make your website highly visible across all major search engines.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <circle cx="19" cy="19" r="11" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M27 27l11 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 21l4-4 3 3 4-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '06',
    accent: '#e07b00',
    title: 'Brand Identity',
    text: 'Distinct logos, business cards, brochures and brand systems that set you apart from competitors.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <path d="M22 4l5 11 12 1-9 8 3 12-11-7-11 7 3-12-9-8 12-1z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '07',
    accent: '#0a8f7a',
    title: 'Graphic Design',
    text: 'User-centered graphic content from logos to large-scale posters — creative, refined, on-message.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <path d="M22 4C12 4 4 12 4 22s8 18 18 18c2.5 0 4-1.5 4-4 0-1.5-1-2.5-1-4s1-3 3-3h4c4 0 8-3 8-8 0-9-8-17-18-17z" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="12" cy="20" r="2.5" fill="currentColor"/>
        <circle cx="18" cy="12" r="2.5" fill="currentColor"/>
        <circle cx="28" cy="12" r="2.5" fill="currentColor"/>
        <circle cx="34" cy="20" r="2.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    num: '08',
    accent: '#7c3aed',
    title: 'Social Media',
    text: 'Strong, consistent social presence woven into your website and broader brand experience.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <circle cx="11" cy="13" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="33" cy="13" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="22" cy="32" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 16l6 13M30 16l-6 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <div className="sol-hero">
        {/* decorative blobs */}
        <div className="sol-hero-blob sol-hero-blob--1" aria-hidden="true" />
        <div className="sol-hero-blob sol-hero-blob--2" aria-hidden="true" />
        <div className="sol-hero-blob sol-hero-blob--3" aria-hidden="true" />

        <div className="sol-hero-inner">
          <span className="sol-hero-eyebrow" data-reveal="up">What We Offer</span>
          <h1 data-reveal="up">Solutions Built to<br />Grow Your Business</h1>
          <p data-reveal="up">
            Eight focused services — strategy, design, development and marketing —
            all under one roof, all built around <strong>your</strong> goals.
          </p>
          <div className="sol-hero-actions" data-reveal="up">
            <Link href="/contact" className="sol-hero-btn-primary">Start a Project</Link>
            <Link href="/our-work" className="sol-hero-btn-ghost">See Our Work</Link>
          </div>
        </div>

        {/* pill count badges */}
        <div className="sol-hero-badges" aria-hidden="true">
          <span className="sol-badge">8 Services</span>
          <span className="sol-badge">Strategy → Launch</span>
          <span className="sol-badge">Brand + Web + Marketing</span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="sol-cards-section">
        <div className="sol-cards-inner">

          <div className="sol-section-header" data-reveal="up">
            <h2>Everything You Need Under One Roof</h2>
            <p>Choose one service or build a complete digital presence — we scale with you.</p>
          </div>

          <div className="sol-grid">
            {services.map(({ num, accent, title, text, icon }) => (
              <div
                key={title}
                className="sol-card"
                style={{ '--sol-accent': accent } as React.CSSProperties}
                data-reveal="up"
              >
                <div className="sol-card-top">
                  <div className="sol-card-icon" aria-hidden="true">{icon}</div>
                  <span className="sol-card-num">{num}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href="/contact" className="sol-card-link">
                  Get started
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M7.5 3.5L11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          ELEVATE CTA
      ══════════════════════════════════════ */}
      <div className="elevate-section">
        <div className="elevate-img" data-reveal="left">
          <Image
            src="/work-uxui-5.png"
            alt="Portfolio of digital design work — app screens and brand projects"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            loading="lazy"
          />
        </div>
        <div className="elevate-content" data-reveal="right">
          <div className="elevate-content-inner">
            <span className="elevate-eyebrow">Ready to get started?</span>
            <h2>Elevate Your Brand Today</h2>
            <div className="elevate-line" />
            <p>
              Let&apos;s bring your vision to life with tailored digital solutions
              built just for your <strong>business.</strong>
            </p>
            <div className="elevate-btns">
              <Link href="/contact" className="btn btn-white">Get a Free Quote</Link>
              <Link href="/our-work" className="btn btn-ghost-white">View Our Work</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
