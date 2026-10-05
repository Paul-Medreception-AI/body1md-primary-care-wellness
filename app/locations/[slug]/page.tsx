import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import { AREAS } from '@/lib/data/locations'
import { SITE } from '@/lib/site'

export function generateStaticParams() {
  return AREAS.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const a = AREAS.find((x) => x.slug === slug)
  if (!a) return {}
  return {
    title: a.metaTitle,
    description: a.description,
    alternates: { canonical: `/locations/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.description, url: `https://body1md.com/locations/${a.slug}`, siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: a.image.src }] },
    twitter: { card: 'summary_large_image', title: a.metaTitle, description: a.description, images: [a.image.src] },
  }
}

const OFFER = [
  'Visits designed to last up to an hour',
  'Direct access to Dr. Hemmen, available 24/7 most of the year',
  'Same- or next-day appointments in most cases',
  'Primary care membership: $100/month under 50, $150/month age 50+',
  'Month-to-month, no annual contract, no concierge retainer',
  'No insurance billing: you pay the practice directly',
]

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const a = AREAS.find((x) => x.slug === slug)
  if (!a) notFound()

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: `${SITE.url}/locations` },
      { '@type': 'ListItem', position: 3, name: a.name, item: `${SITE.url}/locations/${a.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <PageHero
        title={a.headline}
        subtitle={`Serving ${a.short} and ${a.county} from our office in Los Ranchos de Albuquerque.`}
        image={a.image.src}
        alt={a.image.alt}
        crumbs={[{ href: '/locations', label: 'Areas We Serve' }, { label: a.short }]}
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            {a.intro.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="space-y-3 pt-2">
              {OFFER.map((o) => (
                <li key={o} className="flex items-start gap-3 text-base">
                  <svg className="w-6 h-6 text-[var(--color-teal)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full h-[30rem] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dr-hemmen-portrait.jpg" alt="Dr. Andrew Hemmen, MD" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/office-reception.jpg" alt="The Body1MD office in Los Ranchos de Albuquerque" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">Getting here</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">{a.gettingHere}</p>
            <div className="space-y-1 text-sm text-[var(--color-muted)] mb-8">
              {SITE.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">Get directions</a>
              <a href={SITE.phoneHref} className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold text-sm">Call {SITE.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl mb-6">Also serving</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.filter((x) => x.slug !== a.slug).map((x) => (
              <Link key={x.slug} href={`/locations/${x.slug}`} className="px-5 py-2 rounded-full border border-white/30 hover:bg-white/10 text-sm transition-colors">{x.name}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
