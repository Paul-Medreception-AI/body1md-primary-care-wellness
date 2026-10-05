import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { SERVICES } from '@/lib/data/services'

const TITLE = 'Services | Body1MD Direct Primary Care in Albuquerque'
const DESC = 'Comprehensive primary care, internal medicine, preventive care, chronic disease management, weight loss and metabolic health, and wellness and performance at Body1MD in Los Ranchos de Albuquerque.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/services' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/services', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/doctor-patient-consult.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/doctor-patient-consult.jpg'] },
}

const PILLARS = [
  { n: '1.', title: 'Comprehensive Primary Care', body: 'Personalized, relationship-driven care that covers everything from routine checkups to managing complex and chronic conditions.' },
  { n: '2.', title: 'Preventive and Diagnostic Care', body: 'Preventive screenings, lipid management, and blood pressure control, so preventable problems do not become serious ones.' },
  { n: '3.', title: 'Metabolic Health and Performance', body: 'Medically guided weight management, nutrition, and exercise planning to help you feel stronger and more energized.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Reliable, long-term health results."
        subtitle="Our approach combines primary care with wellness, delivering personalized care to improve how you feel today while supporting your long-term health."
        image="/images/couple-running.jpg"
        alt="Two people running outdoors together"
        crumbs={[{ label: 'Services' }]}
      />

      <section className="bg-white py-20 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <p className="font-cormorant text-5xl text-[var(--color-teal)]">{p.n}</p>
              <h2 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mt-2">{p.title}</h2>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-5xl text-center mb-4 text-[var(--color-ink)]">Our services</h2>
          <p className="text-[var(--color-muted)] text-center mb-16 max-w-2xl mx-auto">
            From comprehensive primary care to advanced wellness and performance, our services are designed to support every stage of your health, no matter where you start.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative w-full h-52 bg-[var(--color-light)]">
                  {s.heroImage && (
                    <Image src={s.heroImage.src} alt={s.heroImage.alt} fill style={{ objectPosition: s.heroImage.focus }} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{s.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3 line-clamp-3">{s.description}</p>
                  <span className="block mt-6 text-[var(--color-primary)] font-semibold text-sm group-hover:underline">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not sure where to start?</h2>
          <p className="text-white/80 mb-8">Whether you&apos;re managing complex conditions or working toward optimal performance, our services are built to help you feel better, move forward, and live at your best.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/new-patients" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-bold px-8 py-4 rounded-xl transition-colors">Membership &amp; Pricing</Link>
            <Link href="/conditions" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Conditions we treat</Link>
          </div>
        </div>
      </section>
    </>
  )
}
