import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Our Solutions · Voxiant Solutions' }

/* ─────────────────────────────────────
   Voxiant brand accents (navy, cyan, aqua, orange cycle)
───────────────────────────────────── */
const services = [
  {
    num: '01',
    accent: '#023e8a',
    title: 'Web Strategy',
    text: 'Roadmaps that line up growth goals with how people discover and move through your site, so every build earns its budget.',
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
    accent: '#00b4d8',
    title: 'Website Development',
    text: 'Fast, resilient sites engineered for clarity and conversion, with structure and UX that invite trust on first glance.',
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
    text: 'Campaigns across search, social, and inbox that reflect how people browse today, with reporting you can actually use.',
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
    accent: '#0077b6',
    title: 'Ecommerce Solutions',
    text: 'Storefront design, catalog logic, and marketing pull through, so carts feel effortless and merchandise gets seen.',
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
    accent: '#0891b2',
    title: 'Search Engine Optimization',
    text: 'Technical and content SEO that respects how search works now, so qualified traffic finds you, not just impressions.',
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
    accent: '#f5a834',
    title: 'Brand Identity',
    text: 'Logos, systems, print, and verbal identity that read as one story, so audiences remember you on every touchpoint.',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" width="24" height="24" aria-hidden="true">
        <path d="M22 4l5 11 12 1-9 8 3 12-11-7-11 7 3-12-9-8 12-1z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '07',
    accent: '#48cae4',
    title: 'Graphic Design',
    text: 'Campaigns, signage, packaging, and collateral with the same craft as your digital work: always on brand.',
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
    accent: '#074c6d',
    title: 'Social Media',
    text: 'Tone, cadence, and creative tailored to each platform: bridging your feed, site, and broader brand story.',
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
          <span className="sol-hero-eyebrow" data-reveal="up">Voxiant Solutions</span>
          <h1 data-reveal="up">What We Build<br />With You</h1>
          <p data-reveal="up">
            Strategy, design, development, and growth in one disciplined partner. We assemble the right specialists for
            your goals, not a bloated roster, so timelines stay clear and outcomes stay measurable.
          </p>
          <div className="sol-hero-actions" data-reveal="up">
            <Link href="/contact" className="sol-hero-btn-primary">Start a conversation</Link>
            <Link href="/our-process" className="sol-hero-btn-ghost">How we work</Link>
          </div>
        </div>

        <div className="sol-hero-badges" aria-hidden="true">
          <span className="sol-badge">8 disciplines</span>
          <span className="sol-badge sol-badge--accent">Strategy to launch</span>
          <span className="sol-badge">One coordinated team</span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="sol-cards-section">
        <div className="sol-cards-inner">

          <div className="sol-section-header" data-reveal="up">
            <h2>A full-stack partner, assembled for clarity</h2>
            <p>
              Pick a single discipline or weave several together. We plan scope, sequencing, and ownership so your
              project never feels fragmented.
            </p>
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
                  Talk to us about this
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
            alt="Portfolio of digital design work: app screens and brand projects"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            loading="lazy"
          />
        </div>
        <div className="elevate-content" data-reveal="right">
          <div className="elevate-content-inner">
            <span className="elevate-eyebrow">Next step</span>
            <h2>Tell us what you&apos;re solving for</h2>
            <div className="elevate-line" />
            <p>
              We&apos;ll reply with honest fit, timeline, and a practical path, from a focused sprint to a longer
              roadmap, matched to how your <strong>team</strong> actually works.
            </p>
            <div className="elevate-btns">
              <Link href="/contact" className="btn btn-white">Book an intro call</Link>
              <Link href="/our-process" className="btn btn-ghost-white">Our process</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
