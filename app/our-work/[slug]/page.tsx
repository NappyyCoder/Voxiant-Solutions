import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '../projects'

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Our Work — Voxiant Solutions`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const totalSteps = project.steps.length

  return (
    <div className="project-page">

      {/* ── Hero ── */}
      <div className="project-hero" style={{ '--accent': project.accentColor } as React.CSSProperties}>
        <div className="project-hero-blobs" aria-hidden="true">
          <div className="prj-blob-1" />
          <div className="prj-blob-2" />
        </div>
        <div className="project-hero-inner">
          <Link href="/our-work" className="project-back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Our Work
          </Link>
          <span className="project-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-tagline">{project.tagline}</p>
        </div>
        <div className="project-hero-cover">
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            priority
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
          <div className="project-hero-cover-overlay" />
        </div>
      </div>

      {/* ── Description ── */}
      <div className="project-intro">
        <div className="project-intro-inner">
          <p>{project.description}</p>
          <div className="project-meta">
            <span className="project-meta-label">Category</span>
            <span className="project-meta-value">{project.category}</span>
            <span className="project-meta-label">Total Steps</span>
            <span className="project-meta-value">{totalSteps} phases</span>
          </div>
        </div>
      </div>

      {/* ── Process Steps ── */}
      <section className="project-process">
        <div className="process-header" data-reveal="up">
          <span className="portfolio-tag">The Process</span>
          <h2>How We Made It Happen</h2>
        </div>

        <div className="process-steps">
          {project.steps.map((step, i) => (
            <div
              key={step.image}
              className={`process-step ${i % 2 === 1 ? 'process-step--flip' : ''}`}
              data-reveal="up"
            >
              <div className="process-step-img">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width:900px) 100vw, 55vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div className="process-step-content">
                <span className="process-step-num">
                  {String(i + 1).padStart(2, '0')}
                  <span className="process-step-total">/{String(totalSteps).padStart(2, '0')}</span>
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <h2 data-reveal="up">Want Something Like This?</h2>
        <div className="cta-line" data-reveal="scale" data-delay="1" />
        <p data-reveal="up" data-delay="2">
          Tell us about your project and we&apos;ll outline scope, timeline, and next steps.
        </p>
        <div className="project-cta-btns" data-reveal="up" data-delay="3">
          <Link href="/contact" className="btn btn-outline">Get in touch</Link>
          <Link href="/our-work" className="btn btn-outline">More work</Link>
        </div>
      </section>

    </div>
  )
}
