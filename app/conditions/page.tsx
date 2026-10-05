import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { CONDITIONS } from '@/lib/data/conditions'

const TITLE = 'Conditions We Treat | Body1MD Albuquerque'
const DESC = 'Internal medicine care for high blood pressure, diabetes, cholesterol, thyroid disorders, weight, sleep, allergies and more, from Dr. Andrew Hemmen in Los Ranchos de Albuquerque.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/conditions' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/conditions', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/stethoscope-exam.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/stethoscope-exam.jpg'] },
}

export default function ConditionsPage() {
  return (
    <>
      <PageHero
        title="Conditions we treat"
        subtitle="Internists treat patients as a whole. There are few conditions too simple or too complex for an internal medicine physician to evaluate, manage, and coordinate."
        image="/images/dr-hemmen-imaging-review.jpg"
        alt="Dr. Hemmen reviewing a chest X-ray on a large display"
        crumbs={[{ label: 'Conditions' }]}
        position="object-right"
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Whether you are managing a long-term condition or something new has come up, Dr. Hemmen takes the time to understand the full picture and build a plan with you. Choose a condition to learn more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONDITIONS.map((c) => (
              <Link key={c.slug} href={`/conditions/${c.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-48 bg-[var(--color-light)]">
                  {c.heroImage && (
                    <Image src={c.heroImage.src} alt={c.heroImage.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="p-7">
                  <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{c.title}</h2>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 line-clamp-3">{c.description}</p>
                  <span className="block mt-5 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Questions about your health?</h2>
          <p className="text-white/80 mb-8">Members have direct access to Dr. Hemmen and same- or next-day appointments in most cases.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold px-8 py-4 rounded-xl transition-colors">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
