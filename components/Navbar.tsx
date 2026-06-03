'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',            label: 'Home' },
  { href: '/solutions',   label: 'Our Solutions' },
  { href: '/our-process', label: 'Our Process' },
  { href: '/our-work',    label: 'Our Work' },
  { href: '/contact',     label: 'Contact Us' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]      = useState(false)
  const [searchOpen, setSearchOpen]  = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo">
          <Link href="/">
            <Image src="/blue-voxiant-logo.png" alt="Voxiant Solutions" width={1345} height={505} priority style={{ height: '46px', width: 'auto' }} />
          </Link>
        </div>

        <ul className="nav-links">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-icons">
          <button
            className="nav-icon-btn"
            aria-label="Search"
            onClick={() => setSearchOpen(v => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button
            className="nav-icon-btn nav-hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="search-bar-wrap">
          <input
            ref={searchRef}
            type="search"
            placeholder="Search Voxiant Solutions..."
            onKeyDown={e => e.key === 'Escape' && setSearchOpen(false)}
          />
        </div>
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-panel" onClick={e => e.stopPropagation()}>
            <button className="mobile-menu-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="mobile-menu-links">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} className={pathname === href ? 'active' : ''}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
