import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { getPosts } from '@/lib/blog'

const TITLE = 'Health Articles & Patient Education | Body1MD Albuquerque'
const DESC = 'Patient education from Body1MD, a direct primary care practice in Los Ranchos de Albuquerque: prevention, chronic disease, sleep, weight, and getting the most from primary care.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/blog' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/blog', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/doctor-desk.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/doctor-desk.jpg'] },
}

const COMPARE = [
  { href: '/compare/direct-primary-care-vs-traditional-insurance', label: 'Direct Primary Care vs. Traditional Insurance' },
  { href: '/compare/concierge-medicine-vs-direct-primary-care', label: 'Concierge Medicine vs. Direct Primary Care' },
  { href: '/compare/urgent-care-vs-primary-care', label: 'Urgent Care vs. Primary Care' },
  { href: '/compare/annual-physical-vs-sick-visits', label: 'Annual Physical vs. Sick Visits' },
  { href: '/compare/telemedicine-vs-in-person-visits', label: 'Telemedicine vs. In-Person Visits' },
]

export default function BlogPage() {
  const posts = getPosts()
  return (
    <>
      <PageHero
        title="Health articles & patient education"
        subtitle="Clear, practical information to help you make informed decisions about your health."
        image="/images/doctor-desk.jpg"
        alt="A physician reviewing notes at a desk"
        crumbs={[{ label: 'Resources' }]}
      />

      <section className="bg-white py-14 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mb-6">Comparison guides</h2>
          <div className="flex flex-wrap gap-3">
            {COMPARE.map((c) => (
              <Link key={c.href} href={c.href} className="px-5 py-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-cream)] text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">{c.label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="relative w-full h-48 bg-[var(--color-light)]">
                {p.image && (
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
              </div>
              <div className="p-7">
                <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] leading-snug">{p.title}</h2>
                {p.description && <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 line-clamp-3">{p.description}</p>}
                <span className="block mt-5 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
