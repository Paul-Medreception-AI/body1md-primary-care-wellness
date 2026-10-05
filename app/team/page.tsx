import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

const TITLE = 'Dr. Andrew Hemmen, MD | Body1MD Albuquerque'
const DESC = 'Meet Dr. Andrew Hemmen, a board-certified internal medicine physician who has served New Mexico since 2008 and founded Body1MD in Los Ranchos de Albuquerque.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/team' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/team', siteName: 'Body1MD Primary Care & Wellness', type: 'profile', images: [{ url: '/images/dr-hemmen-portrait.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/dr-hemmen-portrait.jpg'] },
}

const PHYSICIAN_LD = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Andrew Hemmen, MD',
  medicalSpecialty: 'InternalMedicine',
  image: 'https://body1md.com/images/dr-hemmen-portrait.jpg',
  worksFor: { '@type': 'MedicalClinic', name: 'Body1MD Primary Care & Wellness', url: 'https://body1md.com' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: "St. George's University School of Medicine" },
    { '@type': 'CollegeOrUniversity', name: 'University of Houston' },
  ],
}

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PHYSICIAN_LD) }} />
      <PageHero
        title="Meet your physician"
        subtitle="Healthcare should be personal, accessible, and centered on a lasting relationship between physician and patient, not insurance companies."
        image="/images/dr-hemmen-imaging-review.jpg"
        alt="Dr. Andrew Hemmen reviewing imaging with a patient on a large display"
        crumbs={[{ href: '/about', label: 'About' }, { label: 'Dr. Andrew Hemmen' }]}
        position="object-right"
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-14 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-28">
            <div className="relative w-full h-[34rem] rounded-3xl overflow-hidden shadow-2xl">
              <Image src="/images/dr-hemmen-portrait.jpg" alt="Dr. Andrew Hemmen, MD" fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
            </div>
            <div className="mt-6 text-center">
              <p className="font-cormorant text-3xl text-[var(--color-ink)]">Dr. Andrew Hemmen, MD</p>
              <p className="text-sm uppercase tracking-widest text-[var(--color-muted)] mt-1">Founder &amp; Internal Medicine</p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-[var(--color-ink)]">
            <p>
              Dr. Andrew Hemmen is a board-certified Internal Medicine physician who has served New Mexico since 2008. He created Body1MD with a simple vision: healthcare should be personal, accessible, and centered on a lasting relationship between physician and patient, not insurance companies. By providing comprehensive, continuous care, Dr. Hemmen helps patients build lasting wellness, greater vitality, and peak performance.
            </p>
            <p>
              Dr. Hemmen brings more than 20 years of experience caring for hospitalized patients, including serving as Chief Hospitalist during the opening and development of Presbyterian Rust Medical Center in 2011.
            </p>
            <p>
              After treating thousands of patients with a wide range of serious illnesses, Dr. Andy recognized that many were the result of preventable chronic disease. That realization inspired a professional shift toward the front end of health: not only preventing disease, but helping patients reach peak performance regardless of where they are starting. At Body1MD, he combines decades of clinical experience with a passion for prevention, wellness, and peak performance, because he understands that your body comes first.
            </p>
            <p>
              Raised in San Antonio, Texas, Dr. Hemmen studied Biochemistry at the University of Houston before earning his medical degree from St. George&apos;s University School of Medicine in 2003. He completed his basic sciences in Grenada and his clinical training in Brooklyn, New York, followed by an Internal Medicine residency at Lenox Hill Hospital on Manhattan&apos;s Upper East Side, graduating in 2006.
            </p>
            <p>
              Dr. Andy has spent his entire medical career in the Southwest and proudly calls New Mexico home. He credits the region&apos;s sunshine, altitude, and active lifestyle for helping him maintain exceptional health and vitality. More energized than ever, he remains committed to helping others live healthier, stronger, and more fulfilling lives.
            </p>

            <figure className="border-l-4 border-[var(--color-teal)] pl-6 py-2 my-10">
              <blockquote className="font-cormorant text-3xl leading-snug text-[var(--color-primary)]">
                &ldquo;Life is best lived with a healthy body, a motivated mind, and a meaningful purpose.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-[var(--color-muted)]">Dr. Andy</figcaption>
            </figure>

            <div className="grid sm:grid-cols-3 gap-4 text-base">
              {[
                { k: 'Board certified', v: 'Internal Medicine' },
                { k: 'Medical degree', v: "St. George's University, 2003" },
                { k: 'Residency', v: 'Lenox Hill Hospital, 2006' },
              ].map((c) => (
                <div key={c.k} className="bg-white rounded-2xl border border-[var(--color-border)] p-5">
                  <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">{c.k}</p>
                  <p className="font-semibold text-[var(--color-ink)] mt-1">{c.v}</p>
                </div>
              ))}
            </div>

            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mt-10">
              <Image src="/images/dr-hemmen-exam-room.jpg" alt="Dr. Hemmen in a Body1MD exam room" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover object-top" />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/new-patients" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-xl font-bold transition-colors">Become a Member</Link>
              <Link href="/contact" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
