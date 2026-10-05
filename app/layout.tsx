import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  title: 'Body1MD Primary Care & Wellness | Primary Care Reimagined for Your Busy Life',
  description: 'Experience Direct Primary Care where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.',
  metadataBase: new URL('https://body1md.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'Body1MD Primary Care & Wellness | Primary Care Reimagined for Your Busy Life',
    description: 'Experience Direct Primary Care where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.',
    url: 'https://body1md.com',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body1MD Primary Care & Wellness | Primary Care Reimagined for Your Busy Life',
    description: 'Experience Direct Primary Care where you get same-day appointments, 24/7 access to your doctor, and unhurried visits. A simple monthly membership replaces copays, deductibles, and insurance hassles.',
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[var(--color-cream)] text-[var(--color-ink)]">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="/" className="font-cormorant text-xl font-semibold text-[var(--color-primary)]">
              Body1MD Primary Care & Wellness
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/services" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Services</a>
              <a href="/conditions" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Conditions</a>
              <a href="/about" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">About</a>
              <a href="/team" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Team</a>
              <a href="/contact" className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors">Contact</a>
              <a href="/contact" className="ml-8 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition-colors">Schedule Your Consultation</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[var(--color-ink)] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <span className="font-cormorant text-xl font-semibold text-white block mb-4">Body1MD Primary Care & Wellness</span>
                <p className="text-gray-300 text-sm leading-relaxed">Exceptional primary care that prioritizes your health, your time, and your peace of mind.</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                  <li><a href="/conditions" className="text-gray-300 hover:text-white transition-colors">Conditions</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="/team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                  <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* TODO(optimize): fill real footer NAP before launch */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>[Address to be added]</li>
                  <li>[Phone to be added]</li>
                  <li>[Email to be added]</li>
                  <li>[Hours to be added]</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-sm text-gray-400 mb-4">This website does not collect protected health information. All clinical intake is handled through a secure patient portal.</p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Body1MD Primary Care & Wellness</p>
                <div className="flex gap-4">
                  <a href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</a>
                  <span>|</span>
                  <a href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</a>
                  <span>|</span>
                  <a href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}