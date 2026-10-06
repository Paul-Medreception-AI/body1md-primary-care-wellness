import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

const TITLE = 'Direct Primary Care in Albuquerque, NM | Body1MD'
const DESC = 'Primary care without the rush. A board-certified internal medicine physician in Los Ranchos de Albuquerque: visits up to 60 minutes, same- or next-day in most cases, membership from $100/month.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/dr-hemmen-with-patient.jpg', width: 1440, height: 900 }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/dr-hemmen-with-patient.jpg'] },
}

// Conversion order (Paul, 2026-10-05): what is this, why is it better, how much, can I get in,
// THEN who the physician is. Every fact below is the practice's own (body1md.com, the offers@
// summary, Studio's confirmed facts); the "traditional" column is a description of what is
// typical in insurance-based primary care, not a claim about any practice.

const CHECK = (
  <svg stroke="currentColor" strokeWidth={2} fill="none" viewBox="0 0 24 24" className="w-6 h-6 text-[var(--color-teal)] flex-shrink-0" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const PROOF = [
  'Board-certified Internal Medicine physician',
  'Visits up to 60 minutes',
  'Same- or next-day appointments',
  'No long-term contract',
]

const PILLARS = [
  { title: 'More Time', body: "Appointments that aren't rushed. Initial and follow-up visits are designed to last up to an hour.", icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Better Access', body: 'Same- or next-day visits when available, which is most of the time with a deliberately limited patient panel.', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
  { title: 'Direct Relationship', body: 'Reach your physician without navigating layers of bureaucracy. Dr. Hemmen is available 24/7 most of the year.', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
]

const COMPARE = [
  { them: '10 to 15 minute visits', us: 'Visits up to 60 minutes' },
  { them: 'Weeks to get an appointment', us: 'Same- or next-day in most cases' },
  { them: 'Large patient panels', us: 'A smaller membership practice' },
  { them: 'Insurance-driven billing, copays and surprise bills', us: 'One simple monthly membership' },
  { them: 'Multiple layers of staff between you and your doctor', us: 'Direct access to your physician' },
]

const STEPS = [
  { n: '1', title: 'Join', body: 'Book your first visit online in a few minutes, or call the practice. Membership is month-to-month, with no annual contract and no concierge retainer.' },
  { n: '2', title: 'Your first visit', body: 'A comprehensive consultation of up to an hour, looking at your health from head to toe: your history, your goals, and your preventive care.' },
  { n: '3', title: 'Ongoing care and direct access', body: 'A personalized plan, same- or next-day visits when you need them, and a physician you can reach directly who stays involved.' },
]

const CARE = [
  { title: 'Primary Care', body: 'Primary care to support your health at every stage. From preventive screenings to managing complex conditions, with direct access to a physician who stays involved.', href: '/services', img: '/images/dr-hemmen-spine-model.jpg', alt: 'Dr. Andrew Hemmen in a Body1MD exam room', pos: 'object-top' },
  { title: 'Wellness & Performance', body: 'Focused on body composition, fitness, motivation, and overall well-being. Personalized plans support sustainable lifestyle changes, improved energy, and long-term health.', href: '/services/wellness-and-performance', img: '/images/couple-running.jpg', alt: 'Two people running outdoors', pos: 'object-[center_30%]' },
  { title: 'Internal Medicine', body: 'An internal medicine approach to more complex care. Comprehensive evaluations and tailored strategies help optimize your health and guide your path forward.', href: '/services/internal-medicine', img: '/images/exam-room.jpg', alt: 'A private Body1MD exam room with a large display screen', pos: 'object-center' },
]

const FAQ = [
  { q: 'What is direct primary care (DPC)?', a: 'Direct primary care is a membership model: you pay your physician a simple monthly fee instead of running primary care through insurance. In exchange you get longer visits, easier scheduling, and direct access to your doctor. Body1MD is a direct primary care practice in Los Ranchos de Albuquerque.' },
  { q: 'How much does Body1MD cost?', a: 'Primary care membership is $100 a month if you are under 50 and $150 a month at age 50 and over. It is month-to-month with no annual contract. Founding-member pricing is available to those who join by December 31, 2026, or before all 50 founder memberships are taken, and is protected as long as your membership stays active. Optional wellness and performance services are priced separately.' },
  { q: 'Do you take insurance?', a: 'Body1MD does not bill insurance; members pay the practice directly. Many people keep insurance, or a high-deductible plan, for hospital, specialist and emergency care.' },
  { q: 'How quickly can I be seen?', a: 'With a deliberately limited patient panel and three exam rooms, we can almost always offer same-day or next-day appointments.' },
  { q: 'Who is my physician?', a: 'Dr. Andrew Hemmen, MD, a board-certified internal medicine physician who has cared for patients in New Mexico since 2008, including more than 20 years of hospital medicine.' },
  { q: 'Where are you located?', a: `${SITE.street}, ${SITE.city}, ${SITE.region} ${SITE.postal}, in Albuquerque's North Valley. Members come from across Albuquerque, Corrales and Rio Rancho. Hours are Monday to Friday 8am to 5pm, Saturday by appointment.` },
]

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

function JoinButtons({ light = false }: { light?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/book" className="text-center bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3.5 rounded-xl shadow-xl transition-colors">
        <span className="block font-bold text-lg">Join for $100/month</span>
        <span className="block text-xs text-white/85">Age 50+: $150/month · month-to-month</span>
      </Link>
      <a href={SITE.phoneHref} className={`text-center border-2 px-8 py-3.5 rounded-xl transition-colors ${light ? 'border-white text-white hover:bg-white/10' : 'border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-light)]'}`}>
        <span className="block font-bold text-lg">Call the Practice</span>
        <span className={`block text-xs ${light ? 'text-white/80' : 'text-[var(--color-muted)]'}`}>{SITE.phone}</span>
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }} />

      {/* 1. Hero: the physician with a patient, beside the text, never under it. */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1>
              <span className="block uppercase tracking-[0.2em] text-sm text-[var(--color-teal)] font-semibold mb-5">Direct Primary Care in Albuquerque</span>
              <span className="block font-cormorant text-6xl sm:text-7xl font-light leading-[1.05]">Primary care without the rush.</span>
            </h1>
            <p className="text-xl text-white/90 mt-6 leading-relaxed">
              Direct access to a board-certified Internal Medicine physician, longer visits, and same- or next-day appointments in most cases. Right here in Los Ranchos de Albuquerque.
            </p>
            <p className="font-cormorant italic text-2xl text-[var(--color-teal)] mt-4">Your body comes first.</p>
            <div className="mt-9"><JoinButtons light /></div>
          </div>
          <div>
            <Image src="/images/dr-hemmen-with-patient.jpg" alt="Dr. Andrew Hemmen explaining heart anatomy to a patient on a large exam-room display at Body1MD" width={1440} height={900} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      {/* 2. Proof bar */}
      <section className="bg-white py-7 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROOF.map((t) => (
            <div key={t} className="flex items-center gap-3 justify-center lg:justify-start">{CHECK}<span className="font-semibold text-[var(--color-ink)]">{t}</span></div>
          ))}
        </div>
      </section>

      {/* 3. What DPC is */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">What is direct primary care (DPC)?</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-5">Primary care, redesigned.</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              One simple monthly membership gives you direct access to your physician, longer appointments, easier scheduling, and care without the usual insurance-driven primary care experience. Concierge-style access, without a large annual concierge fee.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
                <svg className="w-10 h-10 text-[var(--color-teal)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={p.icon} /></svg>
                <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)] mt-5">{p.title}</h3>
                <p className="text-[var(--color-muted)] leading-relaxed mt-3">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">Why members choose DPC in Albuquerque</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)]">Body1MD vs. traditional primary care</h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <div className="grid grid-cols-2 bg-[var(--color-light)] text-sm font-semibold uppercase tracking-widest">
              <div className="p-5 text-[var(--color-muted)]">Traditional primary care</div>
              <div className="p-5 text-[var(--color-primary)] border-l border-[var(--color-border)]">Body1MD</div>
            </div>
            {COMPARE.map((r, i) => (
              <div key={r.us} className={`grid grid-cols-2 ${i % 2 ? 'bg-[var(--color-cream)]' : 'bg-white'}`}>
                <div className="p-5 text-[var(--color-muted)] flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  {r.them}
                </div>
                <div className="p-5 font-semibold text-[var(--color-ink)] border-l border-[var(--color-border)] flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-teal)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {r.us}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--color-muted)] mt-4 text-center">The traditional column describes what is typical in insurance-based primary care, not any particular practice.</p>
        </div>
      </section>

      {/* 5. How membership works */}
      <section className="bg-[var(--color-dark)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center mb-4">How membership works</h2>
          <p className="text-center text-white/70 mb-16 max-w-2xl mx-auto">Three steps from joining to having a physician who knows you.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full border-2 border-[var(--color-teal)] flex items-center justify-center font-cormorant text-3xl text-[var(--color-teal)] mb-6">{s.n}</div>
                <h3 className="font-cormorant text-3xl mb-4">{s.title}</h3>
                <p className="text-white/75 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="bg-white py-24" id="membership">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">Membership pricing</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-5">One simple monthly membership.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Join Body1MD&apos;s Founding 50 and get direct access to an experienced internal medicine physician, without a large annual concierge fee. We operate outside traditional insurance, which keeps the practice small and the care personal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[{ who: 'Under 50', price: '$100' }, { who: 'Age 50+', price: '$150' }].map((p) => (
              <div key={p.who} className="rounded-3xl border-2 border-[var(--color-border)] bg-[var(--color-cream)] p-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">Primary care, {p.who}</p>
                <p className="font-cormorant text-7xl text-[var(--color-primary)] mt-4">{p.price}<span className="text-2xl text-[var(--color-muted)]">/month</span></p>
                <p className="text-sm text-[var(--color-muted)] mt-4">Month-to-month. No annual contract.</p>
              </div>
            ))}
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto mt-10">
            {['Direct access to Dr. Hemmen, available 24/7 most of the year', 'Visits designed to last up to an hour', 'Same- or next-day appointments in most cases', 'No insurance billing: you pay the practice directly'].map((b) => (
              <li key={b} className="flex items-start gap-3 text-[var(--color-ink)]">{CHECK}<span>{b}</span></li>
            ))}
          </ul>
          <p className="text-center text-sm text-[var(--color-muted)] mt-8 max-w-2xl mx-auto">
            Founding-member pricing is for those who join by December 31, 2026, or before all 50 founder memberships are taken, and is protected as long as your membership is active. Optional wellness and performance services are separately contracted and priced.
          </p>
          <div className="flex justify-center mt-10"><JoinButtons /></div>
        </div>
      </section>

      {/* 7. The physician */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <Image src="/images/dr-hemmen-exam-room-suit.jpg" alt="Dr. Andrew Hemmen, MD, in a Body1MD exam room" width={1800} height={1354} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto rounded-3xl shadow-2xl" />
          <div>
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-teal)] font-semibold mb-4">Dr. Andrew Hemmen, MD</p>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] leading-tight mb-6">Your Albuquerque internal medicine physician.</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-5">
              After 20 years treating people when they were sick enough to be in the hospital, Dr. Hemmen decided to practice medicine further upstream. He has served New Mexico since 2008, including as Chief Hospitalist during the opening of Presbyterian Rust Medical Center.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              Body1MD was built to give patients more time with their doctor, faster access, and a proactive plan designed to help keep preventable problems from becoming serious ones.
            </p>
            <Link href="/team" className="inline-block text-[var(--color-primary)] font-semibold hover:underline">Meet Dr. Hemmen →</Link>
          </div>
        </div>
      </section>

      {/* 8. Services */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-4">Care that moves you forward</h2>
          <p className="text-center text-[var(--color-muted)] mb-16 max-w-2xl mx-auto">
            Primary care, internal medicine, and wellness in Los Ranchos de Albuquerque. Whether you are managing complex health conditions or looking to optimize how you feel every day, your care is built around you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {CARE.map((c) => (
              <Link key={c.title} href={c.href} className="group bg-[var(--color-cream)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-80 overflow-hidden">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${c.pos} group-hover:scale-105 transition-transform duration-500`} />
                </div>
                <div className="p-8">
                  <h3 className="font-cormorant text-3xl font-semibold text-[var(--color-ink)]">{c.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{c.body}</p>
                  <span className="inline-block text-[var(--color-primary)] font-semibold text-sm mt-6 group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-10"><Link href="/services" className="text-[var(--color-primary)] font-semibold hover:underline">See all services →</Link></p>
        </div>
      </section>

      {/* 9. Testimonial: quoted exactly as on body1md.com */}
      <section className="bg-[var(--color-light)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-primary)] font-semibold mb-6">Built on trust, focused on results</p>
          <blockquote className="font-cormorant text-3xl leading-snug text-[var(--color-ink)]">
            &ldquo;I had the privilege of working alongside Dr. Hemmen in the hospital setting for years where I witnessed firsthand the exceptional care he provided. It was an extra level of attention, compassion and care he gave every patient. His excellent bedside manner and genuine compassion made a lasting impression on everyone he cared for.&rdquo;
          </blockquote>
          <p className="mt-6 font-semibold text-[var(--color-primary)]">Vanetia A.</p>
          <Link href="/reviews" className="inline-block mt-6 text-sm text-[var(--color-primary)] font-semibold hover:underline">Read more →</Link>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center text-[var(--color-ink)] mb-12">Questions about direct primary care</h2>
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-lg text-[var(--color-ink)]">
                  {f.q}
                  <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="text-center mt-8"><Link href="/faq" className="text-[var(--color-primary)] font-semibold hover:underline">More questions →</Link></p>
        </div>
      </section>

      {/* 11. Final CTA, with the office */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cormorant text-5xl font-light mb-6">A different kind of primary care experience.</h2>
            <p className="text-white/85 mb-4 leading-relaxed">
              Private exam rooms with large displays where you and Dr. Andy review your results together, in a calm office designed around comfort and privacy.
            </p>
            <p className="text-white/85 mb-1">{SITE.street}, {SITE.city}, {SITE.region} {SITE.postal}</p>
            <p className="text-white/70 text-sm mb-8">Monday to Friday 8am to 5pm · Saturday by appointment</p>
            <JoinButtons light />
          </div>
          <Image src="/images/reception-logo-wall.jpg" alt="The Body1MD reception desk and logo wall" width={1800} height={1344} sizes="(max-width: 1024px) 100vw, 50vw" className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/10" />
        </div>
      </section>
    </>
  )
}
