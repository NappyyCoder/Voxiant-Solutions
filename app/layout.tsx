import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlobBackground from '@/components/BlobBackground'
import AnimationProvider from '@/components/AnimationProvider'
import BackToTop from '@/components/BackToTop'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Voxiant Solutions — Web, Branding & Marketing',
  description:
    'Voxiant Solutions delivers value-added web, branding and marketing solutions — responsive websites, e-commerce, SEO, graphic design and social media built around your business and your customers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <BlobBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <AnimationProvider />
      </body>
    </html>
  )
}
