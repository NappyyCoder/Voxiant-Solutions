'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { Project } from './projects'

const CATEGORY_ORDER = [
  'Web Design',
  'Brand Identity',
  'UX / UI',
  'Graphic Design',
  'Digital Design',
  'Print Design',
  'Marketing',
  'Social Media',
  'Motion Graphics',
]

function orderCategories(categories: string[]): string[] {
  const present = Array.from(new Set(categories))
  const ranked = present.sort((a, b) => {
    const ia = CATEGORY_ORDER.indexOf(a)
    const ib = CATEGORY_ORDER.indexOf(b)
    if (ia === -1 && ib === -1) return a.localeCompare(b)
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })
  return ['All', ...ranked]
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All')

  const filters = useMemo(
    () => orderCategories(projects.map((p) => p.category)),
    [projects]
  )

  const visible = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active, projects]
  )

  return (
    <>
      <div className="work-filter" role="tablist" aria-label="Filter projects by category">
        {filters.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            className={`work-filter-btn${active === cat ? ' is-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="work-empty">No projects in this category yet. Check back soon.</p>
      ) : (
        <div className="portfolio-all-grid" key={active}>
          {visible.map((project, i) => (
            <Link
              key={project.slug}
              href={`/our-work/${project.slug}`}
              className="project-card work-card"
              style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
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
      )}
    </>
  )
}
