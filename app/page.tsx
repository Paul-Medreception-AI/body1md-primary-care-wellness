import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

const TITLE = 'Body1MD | Direct Primary Care in Albuquerque, NM'
const DESC = 'Direct primary care from Dr. Andrew Hemmen, a board-certified internal medicine physician in Los Ranchos de Albuquerque. Visits up to an hour, direct access, and a monthly membership from $100.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/og-image.png'] },
}

const CHECK = (
  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-teal)] flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CARE = [
  {
    title: 'Primary Care',
    body: 'Primary care to support your health at every stage. From preventive screenings to managing complex conditions, with direct access to a physician who stays involved.',
    href: '/services',
    img: '/images/dr-hemmen-exam-room.jpg',
    alt: 'Dr. Andrew Hemmen in a Body1MD exam room',
  },
  {
    title: 'Wellness & Performance',
    body: 'Focused on body composition, fitness, motivation, and overall well-being. Personalized plans support sustainable lifestyle changes, improved energy, and long-term health.',
    href: '/services/wellness-and-performance',
    img: '/images/couple-running.jpg',
    alt: 'Two people running outdoors',
  },
  {
    title: 'Specialized Care',
    body: 'An internal medicine approach to advanced, patient-centered care. Comprehensive evaluations and tailored strategies help optimize health and guide your path forward.',
    href: '/services/internal-medicine',
    img: '/images/exam-room.jpg',
    alt: 'A private Body1MD exam room with a large display screen',
  },
]

const STEPS = [
  { n: '01', title: 'Personalized Health Assessment', body: 'We take the time to understand your full health picture, history, lifestyle, and goals, so your care starts with clarity and purpose.' },
  { n: '02', title: 'Ongoing Care & Support', body: 'Consistent, proactive care keeps you on track. We monitor progress, adjust when needed, and stay connected to support your health.' },
  { n: '03', title: 'Long-Term Wellness Plan', body: 'Your health is not a quick fix. We build a sustainable plan focused on prevention, longevity, and helping you feel your best.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero: the practice's real front desk */}
      <section className="relative min-h-[88vh] flex items-center text-white overflow-hidden">
        <Image src="/images/office-reception.jpg" alt="The Body1MD front desk and waiting area in Los Ranchos de Albuquerque" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/80 to-primary/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.2em] text-sm text-[var(--color-teal)] font-semibold mb-5">Direct Primary Care in Los Ranchos de Albuquerque</p>
            <h1 className="font-cormorant text-6xl sm:text-7xl font-light leading-tight">Your body comes first.</h1>
            <p className="text-xl text-white/90 mt-6 leading-relaxed">
              Direct Primary Care from a board-certified Internal Medicine physician. Longer visits. Direct access. Monthly membership. No annual concierge retainer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/new-patients" className="text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-colors">
                Become a Founding Member
              </Link>
              <a href={SITE.phoneHref} className="text-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {['Board-certified internal medicine physician', 'Visits up to an hour', 'Same- or next-day in most cases', 'Month-to-month, no annual contract'].map((t) => (
            <div key={t} className="flex items-center gap-3">{CHECK}<span className="font-semibold text-sm text-[var(--color-ink)]">{t}</span></div>
          ))}
        </div>
      </section>

      {/* Meet Dr. Hemmen */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-[30rem] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dr-hemmen-portrait.jpg" alt="Dr. Andrew Hemmen, MD, founder of Body1MD" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">Dr. Andrew Hemmen, MD</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] leading-tight mb-6">Medicine practiced further upstream.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              After 20 years treating people when they were sick enough to be in the hospital, Dr. Hemmen decided to practice medicine further upstream.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              Body1MD was built to give patients more time with their doctor, faster access, and a proactive plan designed to help keep preventable problems from becoming serious ones.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Your initial and follow-up visits are designed to last up to an hour, and with a deliberately limited patient panel we can almost always offer same-day or next-day appointments.
            </p>
            <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold hover:underline">Meet Dr. Hemmen →</Link>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="bg-white py-24" id="membership">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">Membership Pricing</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-5">A better primary care relationship.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Join Body1MD&apos;s Founding 50 and get direct access to an experienced internal medicine physician, without a large annual concierge fee. We operate outside traditional insurance, which keeps the practice small and the care personal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[{ who: 'Under 50', price: '$100' }, { who: 'Age 50+', price: '$150' }].map((p) => (
              <div key={p.who} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-cream)] p-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">Primary Care, {p.who}</p>
                <p className="font-cormorant text-6xl text-[var(--color-primary)] mt-4">{p.price}<span className="text-2xl text-[var(--color-muted)]">/month</span></p>
                <p className="text-sm text-[var(--color-muted)] mt-4">Month-to-month. No annual contract.</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[var(--color-muted)] mt-8 max-w-2xl mx-auto">
            Join by December 31, 2026, or before all 50 founder memberships are taken. Founding-member pricing is protected as long as your membership is active. Optional wellness and performance services are separately contracted and priced.
          </p>
          <div className="text-center mt-10">
            <Link href="/new-patients" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-10 py-4 rounded-xl font-bold transition-colors">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Care that moves you forward */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">Care that moves you forward</h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Whether you are managing complex health conditions or looking to optimize how you feel every day, your care is built around you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {CARE.map((c) => (
              <Link key={c.title} href={c.href} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-56">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)]">{c.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{c.body}</p>
                  <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[var(--color-dark)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center mb-4">How it works</h2>
          <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">Every step is focused on creating lasting improvements in your health and overall well-being.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="font-cormorant text-7xl text-[var(--color-teal)] opacity-80 mb-4">{s.n}</div>
                <h3 className="font-cormorant text-2xl mb-4">{s.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">Visit Our Office</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-6">Where your care comes first.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Body1MD was designed to feel different from the moment you walk through the door. Private exam and procedure rooms with large-format displays let you and Dr. Andy review imaging and results together, in a calm and welcoming setting.
            </p>
            <div className="space-y-2 text-[var(--color-ink)] mb-8">
              <p className="font-semibold">{SITE.street}, {SITE.city}, {SITE.region} {SITE.postal}</p>
              {SITE.hours.map((h) => <p key={h.days} className="text-sm text-[var(--color-muted)]">{h.days}: {h.time}</p>)}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/office" className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">Tour the office</Link>
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold text-sm">Get directions</a>
            </div>
          </div>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/dr-hemmen-imaging-review.jpg" alt="Dr. Hemmen reviewing imaging on a large in-room display" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* A real quote from the practice's own site, shown as written. */}
      <section className="bg-[var(--color-light)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-primary)] font-semibold mb-6">Built on Trust, Focused on Results</p>
          <blockquote className="font-cormorant text-3xl leading-snug text-[var(--color-ink)]">
            &ldquo;I had the privilege of working alongside Dr. Hemmen in the hospital setting for years where I witnessed firsthand the exceptional care he provided. It was an extra level of attention, compassion and care he gave every patient. His excellent bedside manner and genuine compassion made a lasting impression on everyone he cared for.&rdquo;
          </blockquote>
          <p className="mt-6 font-semibold text-[var(--color-primary)]">Vanetia A.</p>
          <Link href="/reviews" className="inline-block mt-6 text-sm text-[var(--color-primary)] font-semibold hover:underline">Read more →</Link>
        </div>
      </section>

      <section className="relative py-24 text-white text-center overflow-hidden">
        <Image src="/images/friends-outdoors.jpg" alt="Friends smiling together outdoors" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="relative max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl font-light mb-6">Health care at a higher level.</h2>
          <p className="text-white/85 mb-10">Contact us to learn more about membership and how we can support your health goals.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold px-10 py-4 rounded-xl transition-colors">Contact Us</Link>
            <a href={SITE.phoneHref} className="border-2 border-white text-white font-semibold px-10 py-4 rounded-xl hover:bg-white/10 transition-colors">Call {SITE.phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
