import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollTopButton from '@/components/ScrollTopButton'
import HeroBlobs from '@/components/HeroBlobs'

export const metadata: Metadata = { title: 'Our Process — Voxiant Solutions' }

export default function OurProcessPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero">
        <HeroBlobs />
        <div className="page-hero-inner">
          <span className="page-hero-eyebrow">How We Work</span>
          <h1>Our Process</h1>
          <p className="page-hero-sub">
            A clear, collaborative path from first conversation to launch and beyond.
          </p>
        </div>
      </div>

      {/* ── SECTION 1: Image LEFT | Text RIGHT ── */}
      <div className="process-section">
        <div className="proc-img" data-reveal="left">
          <Image
            src="/work-uxui-1.png"
            alt="Voxiant team collaborating on strategy"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            className="proc-img-photo"
            loading="lazy"
          />
        </div>
        <div className="proc-content" data-reveal="right">
          <div className="proc-content-inner">
            <h2>How we plan and build your project</h2>
            <div className="proc-line" />
            <p>
              We&apos;re a team of experts in web development, graphic design, email
              marketing, branding, advertising, and social media, with
              more than <strong>13 years of experience</strong>. We apply those skills
              to build practical, user-friendly solutions for each project.
            </p>
            <Link href="/solutions" className="btn btn-outline-white">Where we specialize</Link>
          </div>
        </div>
      </div>

      {/* ── SECTION 2: Text LEFT | Image RIGHT ── */}
      <div className="process-section">
        <div className="proc-content" data-reveal="left">
          <div className="proc-content-inner">
            <h2>Sites built for speed, usability, and brand consistency</h2>
            <div className="proc-line" />
            <p>
              We build responsive websites with social integration and custom features
              matched to your needs. We&apos;ve helped entrepreneurs, small businesses,
              and non-profit organizations build a strong online presence in their
              markets.
            </p>
            <Link href="/our-work" className="btn btn-outline-white">See our work</Link>
          </div>
        </div>
        <div className="proc-img" data-reveal="right">
          <Image
            src="/work-responsive-1.png"
            alt="Responsive website design across devices"
            fill
            sizes="(max-width:900px) 100vw, 50vw"
            className="proc-img-photo"
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
            className="proc-img-photo"
            loading="lazy"
          />
        </div>
        <div className="proc-content" data-reveal="right" style={{ position: 'relative' }}>
          <ScrollTopButton />
          <div className="proc-content-inner">
            <h2>Keep your site current, findable, and easy to maintain</h2>
            <div className="proc-line" />
            <p>
              Our mission is to help businesses and organizations build a strong
              online presence with up-to-date tools and consistent branding.
              That includes mobile-friendly websites, blogs, social media integration,
              and web applications that support how you work today.
            </p>
            <Link href="/contact" className="btn btn-outline-white">Start a project</Link>
          </div>
        </div>
      </div>
    </>
  )
}
