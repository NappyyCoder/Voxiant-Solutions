import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollTopButton from '@/components/ScrollTopButton'

export const metadata: Metadata = { title: 'Our Process — Voxiant Solutions' }

export default function OurProcessPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero hero-process">
        <h1>Our Process</h1>
      </div>

      {/* ── SECTION 1: Image LEFT | Text RIGHT ── */}
      <div className="process-section">
        <div className="proc-img" data-reveal="left">
          <Image
            src="/work-uxui-3.png"
            alt="Voxiant team collaborating on strategy"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            loading="lazy"
          />
        </div>
        <div className="proc-content" data-reveal="right">
          <div className="proc-content-inner">
            <h2>Meet our digital strategy experts</h2>
            <div className="proc-line" />
            <p>
              We&apos;re a team of experts in web development, graphic design, email
              marketing, branding, advertisement creation and social media — with
              more than <strong>13 years of experience</strong>. We infuse our talents
              into modern, user-friendly, well thought-out solutions for every project.
            </p>
            <Link href="/solutions" className="btn btn-outline-white">Where we specialize</Link>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: Text LEFT | Image RIGHT ── */}
      <div className="process-section">
        <div className="proc-content" data-reveal="left">
          <div className="proc-content-inner">
            <h2>Built for performance &amp; brand growth</h2>
            <div className="proc-line" />
            <p>
              Voxiant specializes in developing top-notch, responsive, modern websites —
              infused with today&apos;s social-media platforms and custom functionality
              tailored to your needs. We&apos;ve helped entrepreneurs, small businesses
              and non-profit organizations establish a profound web presence and a
              competitive edge in their industry.
            </p>
            <Link href="/our-work" className="btn btn-outline-white">See our work</Link>
          </div>
        </div>
        <div className="proc-img" data-reveal="right">
          <Image
            src="/work-truck-1.png"
            alt="Designers and developers working together"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            loading="lazy"
          />
        </div>
      </div>

      {/* ── SECTION 3: Image LEFT | Text RIGHT ── */}
      <div className="process-section" style={{ position: 'relative' }}>
        <div className="proc-img" data-reveal="left">
          <Image
            src="/work-corec-1.png"
            alt="Planning and strategy at Voxiant"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
            loading="lazy"
          />
        </div>
        <div className="proc-content" data-reveal="right" style={{ position: 'relative' }}>
          <ScrollTopButton />
          <div className="proc-content-inner">
            <h2>Stay present, visible &amp; future-ready</h2>
            <div className="proc-line" />
            <p>
              Our mission is to help businesses and organizations establish a profound
              online presence and grow with modern technology and premiere branding.
              We keep you in tune with the tools that matter — mobile-responsive
              websites, blogs, social-media integration and web applications that
              drive your business to the next level.
            </p>
            <Link href="/contact" className="btn btn-outline-white">Start a project</Link>
          </div>
        </div>
      </div>
    </>
  )
}
