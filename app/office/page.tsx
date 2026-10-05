import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { SITE } from '@/lib/site'

const TITLE = 'Our Office | Body1MD in Los Ranchos de Albuquerque'
const DESC = 'Tour the Body1MD office at 7203 4th St NW in Los Ranchos de Albuquerque: private exam and procedure rooms designed for calm, unrushed primary care.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/office' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/office', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/office-reception.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/office-reception.jpg'] },
}

const FEATURES = [
  {
    title: 'Visual Communication',
    body: "At Body1MD, technology doesn't make healthcare feel more clinical. It makes it more personal. Our exam and procedure rooms feature large-format displays where you and Dr. Andy can explore imaging, test results, and other health information together.",
    img: '/images/dr-hemmen-imaging-review-tall.jpg',
    alt: 'Dr. Hemmen pointing to a chest X-ray on a large exam-room display',
  },
  {
    title: 'Immersive Experience',
    body: 'Forget the cold, rushed feeling of the traditional doctor\'s office. Body1MD is an immersive healthcare experience designed around comfort, privacy, and serenity, with beautifully appointed exam and procedure rooms.',
    img: '/images/exam-room.jpg',
    alt: 'A private Body1MD exam room',
  },
  {
    title: 'Rejuvenating Calm',
    body: 'The result is an environment designed to reduce the anxiety traditionally associated with a medical office and replace it with something entirely different: calm, clarity, and a genuine sense of well-being.',
    img: '/images/smiling-man.jpg',
    alt: 'A relaxed, smiling man outdoors',
  },
]

export default function OfficePage() {
  return (
    <>
      <PageHero
        title="Where your care comes first."
        subtitle="Body1MD was designed to feel different from the moment you walk through the door."
        image="/images/office-reception.jpg"
        alt="The Body1MD reception desk and waiting area"
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Our Office' }]}
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-5">Comprehensive care in one place</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">
              From preventive screenings to managing complex conditions, your care is coordinated, thoughtful, and designed to address the full picture of your health. Our private exam and procedure rooms combine advanced technology with a calm, welcoming environment.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <article key={f.title} className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]">
                <div className="relative w-full h-72">
                  <Image src={f.img} alt={f.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-ink)] mb-3">{f.title}</h3>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">{f.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-cormorant text-5xl text-[var(--color-ink)] mb-6">Visit us in Los Ranchos</h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-6">
              Conveniently located with easy access and a comfortable setting, our office is designed to make every visit simple, efficient, and welcoming. We offer consistent availability with dedicated time for each patient, while accommodating same or next day needs in most cases.
            </p>
            <address className="not-italic text-[var(--color-ink)] space-y-1 mb-6">
              <p className="font-semibold">{SITE.street}</p>
              <p>{SITE.city}, {SITE.region} {SITE.postal}</p>
              <p className="pt-2">Phone: <a href={SITE.phoneHref} className="text-[var(--color-primary)] font-semibold">{SITE.phone}</a></p>
            </address>
            <div className="space-y-1 mb-8 text-sm text-[var(--color-muted)]">
              {SITE.hours.map((h) => <p key={h.days}>{h.days}: {h.time}</p>)}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">Get directions</a>
              <Link href="/contact" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold text-sm">Contact us</Link>
            </div>
          </div>
          <div className="relative w-full h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/dr-hemmen-exam-room.jpg" alt="Dr. Hemmen in one of the Body1MD exam rooms" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" />
          </div>
        </div>
      </section>
    </>
  )
}
