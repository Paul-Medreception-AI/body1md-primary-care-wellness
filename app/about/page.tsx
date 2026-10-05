import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

const TITLE = 'About Body1MD | Direct Primary Care in Albuquerque'
const DESC = 'Body1MD is a direct primary care practice in Los Ranchos de Albuquerque led by Dr. Andrew Hemmen, a board-certified internal medicine physician. Time, access, and partnership.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/about' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/about', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/dr-hemmen-white-coat.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/dr-hemmen-white-coat.jpg'] },
}

const POINTS = [
  'Direct access to your personal physician',
  'Extensive experience from complex conditions to enhancing performance',
  'Personalized, one-on-one care for every patient',
  'Focus on long-term health and prevention',
  'Same- or next-day availability in most cases',
  'Month-to-month membership',
]

const APPROACH = [
  { title: 'Understand Your Health', body: 'We take the time to truly understand your body, your history, and your goals.' },
  { title: 'Build Your Plan', body: 'From primary care to advanced wellness therapies, we create a personalized strategy.' },
  { title: 'Stay Accountable', body: 'Real progress comes from consistency. We provide ongoing support and guidance.' },
  { title: 'Move Forward Stronger', body: 'We continue to refine your plan, helping you build strength and confidence for the long run.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Healthcare at a higher level."
        subtitle="Helping you achieve lasting wellness, vitality, and peak performance, with the time, attention, and personalized care you deserve."
        image="/images/office-reception.jpg"
        alt="The Body1MD office in Los Ranchos de Albuquerque"
        crumbs={[{ label: 'About' }]}
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)]">Our care philosophy</h2>
            <p>At Body1MD, we believe exceptional healthcare begins with time, access, and partnership.</p>
            <p>
              Your initial and follow-up visits are designed to last up to an hour, giving us the opportunity to understand your health, answer your questions, and develop a personalized action plan focused on your wellness, vitality, and long-term performance.
            </p>
            <p>
              Dr. Andrew Hemmen is more than your physician. He is your dedicated healthcare partner, committed to helping you achieve your healthiest future. As a Direct Primary Care member, you will enjoy direct access to your doctor and the confidence of having a trusted advocate by your side.
            </p>
            <p>
              Need to be seen? We make it happen. With three comfortable exam rooms and a deliberately limited patient panel, we can almost always offer same-day or next-day appointments.
            </p>
          </div>
          <div className="relative w-full h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dr-hemmen-white-coat.jpg" alt="Dr. Andrew Hemmen in his white coat at Body1MD" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image src="/images/couple-laptop.jpg" alt="A couple reviewing information together on a laptop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-6">No insurance hassles</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              We operate outside of traditional insurance models, limiting the practice size, which allows for more personalized, ongoing care. A board-certified internal medicine physician with more than two decades of complex-care experience, delivering concierge-level access through a straightforward monthly direct primary care membership.
            </p>
            <ul className="space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[var(--color-ink)]">
                  <svg className="w-6 h-6 text-[var(--color-teal)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center mb-16">A partner in your progress</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPROACH.map((a) => (
              <div key={a.title} className="rounded-2xl border border-white/15 p-8">
                <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-teal)]">{a.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { href: '/team', label: 'Meet Dr. Hemmen', img: '/images/dr-hemmen-portrait.jpg', alt: 'Dr. Andrew Hemmen' },
            { href: '/office', label: 'Tour our office', img: '/images/exam-room.jpg', alt: 'A Body1MD exam room' },
            { href: '/new-patients', label: 'Membership & pricing', img: '/images/smiling-man.jpg', alt: 'A smiling man outdoors' },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="group block rounded-2xl overflow-hidden bg-white border border-[var(--color-border)] hover:shadow-xl transition-shadow">
              <div className="relative w-full h-48">
                <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="p-5 font-semibold text-[var(--color-primary)]">{c.label} →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
