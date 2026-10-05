import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { SITE } from '@/lib/site'

const TITLE = 'Patient Experiences | Body1MD Albuquerque'
const DESC = 'What patients and colleagues say about Dr. Andrew Hemmen and Body1MD, a direct primary care practice in Los Ranchos de Albuquerque.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/reviews' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/reviews', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/friends-outdoors.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/friends-outdoors.jpg'] },
}

// Quoted exactly as they appear on body1md.com. Nothing here is written by us, and there are no
// star ratings or counts because the practice has published none. Add real Google reviews here
// verbatim once the practice has them.
const QUOTES = [
  {
    text: 'I had the privilege of working alongside Dr. Hemmen in the hospital setting for years where I witnessed firsthand the exceptional care he provided. It was an extra level of attention, compassion and care he gave every patient. His excellent bedside manner and genuine compassion made a lasting impression on everyone he cared for.',
    name: 'Vanetia A.',
  },
  {
    text: 'Dr. Andy takes the time to listen and explain everything clearly. From routine checkups to more complex concerns, I always feel in good hands. His knowledge stands out.',
    name: 'Blake M.',
  },
]

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Patient experiences"
        subtitle="The true measure of care is the impact it has on people's lives. These experiences reflect the trust and dedication our patients value most."
        image="/images/friends-outdoors.jpg"
        alt="Friends laughing together outdoors"
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Patient Reviews' }]}
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {QUOTES.map((q) => (
            <figure key={q.name} className="bg-white rounded-2xl p-10 border border-[var(--color-border)] shadow-sm">
              <svg className="w-10 h-10 text-[var(--color-teal)] mb-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <blockquote className="text-lg leading-relaxed text-[var(--color-ink)]">{q.text}</blockquote>
              <figcaption className="mt-6 font-semibold text-[var(--color-primary)]">{q.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image src="/images/dr-hemmen-white-coat.jpg" alt="Dr. Andrew Hemmen" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <div>
            <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-4">Share your experience</h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 leading-relaxed">
              Body1MD is a new office, built one patient at a time. If you have experienced our care, a Google review helps neighbors in the Albuquerque area find us. It takes about a minute.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={SITE.reviewHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-xl font-bold transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                Leave a Google review
              </a>
              <Link href="/contact" className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
