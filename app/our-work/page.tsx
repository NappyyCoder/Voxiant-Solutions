import type { Metadata } from 'next'
import Link from 'next/link'
import { projects } from './projects'
import WorkGrid from './WorkGrid'
import HeroBlobs from '@/components/HeroBlobs'

export const metadata: Metadata = { title: 'Our Work — Voxiant Solutions' }

export default function OurWorkPage() {
  return (
    <div className="portfolio-page">

      {/* ── Hero ── */}
      <div className="page-hero">
        <HeroBlobs />
        <div className="page-hero-inner">
          <span className="page-hero-eyebrow">What We&apos;ve Done</span>
          <h1>Our Work</h1>
          <p className="page-hero-sub">
            Selected projects showing our process from concept to delivery.
            Click any project to see how we built it.
          </p>
        </div>
      </div>

      {/* ── Project Grid ── */}
      <section className="portfolio-grid-section">
        <WorkGrid projects={projects} />
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2 data-reveal="up">Have a Project in Mind?</h2>
        <div className="cta-line" data-reveal="scale" data-delay="1" />
        <p data-reveal="up" data-delay="2">
          Tell us about your project and we&apos;ll share relevant examples from our portfolio.
        </p>
        <Link href="/contact" className="btn btn-outline" data-reveal="up" data-delay="3">
          Get in touch
        </Link>
      </section>

    </div>
  )
}
