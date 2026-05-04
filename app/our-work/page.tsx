import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from './projects'

export const metadata: Metadata = { title: 'Our Work — Voxiant Solutions' }

export default function OurWorkPage() {
  return (
    <div className="portfolio-page">

      {/* ── Hero ── */}
      <div className="portfolio-hero">
        <div className="portfolio-hero-blobs" aria-hidden="true">
          <div className="ph-blob-1" />
          <div className="ph-blob-2" />
        </div>
        <div className="portfolio-hero-inner">
          <span className="cs-eyebrow">What We&apos;ve Done</span>
          <h1>Our Work</h1>
          <div className="cs-divider" />
          <p>
            Years of experience crafting digital experiences that put users first
            and clients ahead of the competition. Click any project to see the full process.
          </p>
        </div>
      </div>

      {/* ── Project Grid ── */}
      <section className="portfolio-grid-section">
        <div className="portfolio-all-grid">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/our-work/${project.slug}`}
              className="project-card"
              data-reveal="up"
              data-delay={String((i % 3) + 1)}
            >
              <div className="project-card-img">
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  fill
                  sizes="(max-width:600px) 100vw, (max-width:900px) 50vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div className="project-card-overlay">
                  <span className="project-card-cta">
                    View Process
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M3 7H11M7 3L11 7L7 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="project-card-body">
                <span
                  className="project-card-cat"
                  style={{ '--accent': project.accentColor } as React.CSSProperties}
                >
                  {project.category}
                </span>
                <h3>{project.title}</h3>
                <p>{project.tagline}</p>
                <span className="project-card-steps">{project.steps.length} process steps</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2 data-reveal="up">Have a Project in Mind?</h2>
        <div className="cta-line" data-reveal="scale" data-delay="1" />
        <p data-reveal="up" data-delay="2">
          Share your idea and we&apos;ll show you featured samples that match your vision.
        </p>
        <Link href="/contact" className="btn btn-outline" data-reveal="up" data-delay="3">
          Get in touch
        </Link>
      </section>

    </div>
  )
}
