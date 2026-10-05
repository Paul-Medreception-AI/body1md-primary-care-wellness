import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import { SITE } from '@/lib/site'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-cormorant' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-dm-sans' })


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const PRACTICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: SITE.fullName,
  url: SITE.url,
  logo: SITE.url + '/logo.png',
  image: SITE.url + '/images/office-reception.jpg',
  telephone: '+1-505-645-5451',
  faxNumber: '+1-505-645-8530',
  email: SITE.email,
  medicalSpecialty: 'PrimaryCare',
  address: { '@type': 'PostalAddress', streetAddress: SITE.street, addressLocality: SITE.city, addressRegion: SITE.region, postalCode: SITE.postal, addressCountry: 'US' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' }],
  employee: { '@type': 'Physician', name: 'Andrew Hemmen, MD', medicalSpecialty: 'InternalMedicine' },
  areaServed: ['Los Ranchos de Albuquerque', 'Albuquerque', 'Corrales', 'Rio Rancho'],
}


export const metadata: Metadata = {
  title: 'Body1MD | Direct Primary Care in Albuquerque, NM',
  description: 'Direct primary care from Dr. Andrew Hemmen, a board-certified internal medicine physician in Los Ranchos de Albuquerque. Visits up to an hour, direct access, and a simple monthly membership.',
  metadataBase: new URL('https://body1md.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    apple: '/favicon.png'
  },
  openGraph: {
    title: 'Body1MD | Direct Primary Care in Albuquerque, NM',
    description: 'Direct primary care from Dr. Andrew Hemmen, a board-certified internal medicine physician in Los Ranchos de Albuquerque. Visits up to an hour, direct access, and a simple monthly membership.',
    url: 'https://body1md.com',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body1MD | Direct Primary Care in Albuquerque, NM',
    description: 'Direct primary care from Dr. Andrew Hemmen, a board-certified internal medicine physician in Los Ranchos de Albuquerque. Visits up to an hour, direct access, and a simple monthly membership.',
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRACTICE_LD) }} />
        <SiteHeader />

        <main>{children}</main>

        <SiteFooter />
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}