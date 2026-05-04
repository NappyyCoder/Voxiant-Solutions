'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationProvider() {
  const pathname = usePathname()

  useEffect(() => {
    // Short delay so the new page's DOM is fully painted before observing
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll('[data-reveal]')
      if (!reveals.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )

      reveals.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
