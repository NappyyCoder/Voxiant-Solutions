import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <Image
        src="/voxiant-logo-footer.png"
        alt="Voxiant Solutions"
        width={500}
        height={188}
        className="footer-logo"
        style={{ height: '86px', width: 'auto' }}
      />
      <p className="footer-desc">
        Voxiant Solutions delivers web, branding, and marketing built around your
        business and your customers—from responsive sites and e-commerce to SEO,
        design, and social media.
      </p>
      <div className="footer-social">
        <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </Link>
      </div>
      <p className="footer-copy">© 2025 Voxiant Solutions, All Rights Reserved</p>
    </footer>
  )
}
