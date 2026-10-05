import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { AREAS } from '@/lib/data/locations'
import { SITE } from '@/lib/site'

const TITLE = 'Areas We Serve | Body1MD Direct Primary Care, Albuquerque Area'
const DESC = 'Body1MD serves Los Ranchos de Albuquerque, Albuquerque, Corrales and Rio Rancho from one office at 7203 4th St NW in the North Valley.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/locations' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/locations', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/locations/areas-we-serve.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/locations/areas-we-serve.jpg'] },
}

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="Areas we serve"
        subtitle={`One office in the North Valley, serving the greater Albuquerque area: ${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.postal}.`}
        image="/images/locations/areas-we-serve.jpg"
        alt="The Sandia Mountains above Albuquerque at sunset"
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Areas We Serve' }]}
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
          {AREAS.map((a) => (
            <Link key={a.slug} href={`/locations/${a.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full h-56">
                <Image src={a.image.src} alt={a.image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h2 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)]">{a.name}</h2>
                <p className="text-sm text-[var(--color-muted)] mt-1">{a.county}</p>
                <span className="block mt-5 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">Primary care for {a.short} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
