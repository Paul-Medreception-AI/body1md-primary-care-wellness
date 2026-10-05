import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - Body1MD Primary Care & Wellness',
  description: 'The page you are looking for does not exist. Return to Body1MD Primary Care & Wellness homepage or contact us for assistance.',
  alternates: { canonical: '/not-found' },
  openGraph: {
    title: 'Page Not Found - Body1MD Primary Care & Wellness',
    description: 'The page you are looking for does not exist. Return to Body1MD Primary Care & Wellness homepage or contact us for assistance.',
    url: 'https://body1md.com/not-found',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found - Body1MD Primary Care & Wellness',
    description: 'The page you are looking for does not exist. Return to Body1MD Primary Care & Wellness homepage or contact us for assistance.',
    images: ['/og-image.png'],
  },
}

export default function NotFound() {
  return (
    <div className="bg-[var(--color-cream)] min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="font-cormorant text-9xl text-[var(--color-primary)] opacity-20 font-bold leading-none">
          404
        </div>
        <h1 className="font-cormorant text-4xl text-[var(--color-ink)] mt-4 font-semibold">
          Page Not Found
        </h1>
        <p className="text-[var(--color-muted)] mt-2 text-lg">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[var(--color-accent)] text-white rounded-md font-medium hover:bg-[var(--color-accent-dark)] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-[var(--color-border)] text-[var(--color-ink)] rounded-md font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}