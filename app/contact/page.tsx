import type { Metadata } from 'next'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/site'

const TITLE = 'Contact Body1MD | Los Ranchos de Albuquerque, NM'
const DESC = 'Call (505) 645-5451 or email andy@body1md.com. Body1MD is at 7203 4th St NW, Los Ranchos de Albuquerque, NM 87107. Monday to Friday 8am to 5pm, Saturday by appointment.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/contact' },
  openGraph: { title: TITLE, description: DESC, url: 'https://body1md.com/contact', siteName: 'Body1MD Primary Care & Wellness', type: 'website', images: [{ url: '/images/office-reception.jpg' }] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['/images/office-reception.jpg'] },
}

// The form posts to /api/contact, which files it on Body1MD's MedReception Studio board.
export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's start with a conversation."
        subtitle="Whether you're ready to become a patient or simply have questions about your health, we're here to listen, guide you, and help you take the next step."
        image="/images/patient-support-laptop.jpg"
        alt="A patient talking with a clinician at a desk"
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="bg-[var(--color-cream)] py-24">
        <div id="message" className="max-w-6xl mx-auto px-6 mb-14 scroll-mt-28">
          <div className="bg-white rounded-2xl border border-[var(--color-border)] shadow-sm p-6 sm:p-8 lg:p-12 grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-2">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Send a message</p>
              <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mt-2 leading-tight">Questions about membership or becoming a patient?</h2>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Leave your name and a phone number or email address, and Body1MD will call or email you back.
              </p>
              <p className="text-[var(--color-muted)] leading-relaxed mt-4">
                Prefer to talk now? Call <a href={SITE.phoneHref} className="font-semibold text-[var(--color-primary)] underline underline-offset-2">{SITE.phone}</a>.
              </p>
              <p className="text-sm text-[var(--color-muted)] mt-4">If you are having a medical emergency, call 911.</p>
            </div>
            <div className="lg:col-span-3">
              <ContactForm phone={SITE.phone} phoneHref={SITE.phoneHref} />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-6">
            <a href={SITE.phoneHref} className="block bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Call</p>
              <p className="font-cormorant text-4xl text-[var(--color-primary)] mt-2">{SITE.phone}</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Fax: {SITE.fax}</p>
            </a>
            <a href={`mailto:${SITE.email}?subject=Body1MD%20membership%20question`} className="block bg-white rounded-2xl p-8 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Email</p>
              <p className="font-cormorant text-3xl text-[var(--color-primary)] mt-2 break-all">{SITE.email}</p>
              <p className="text-sm text-[var(--color-muted)] mt-2">Please do not include personal medical details in email.</p>
            </a>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)]">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Hours</p>
              <div className="mt-3 space-y-1 text-[var(--color-ink)]">
                {SITE.hours.map((h) => <p key={h.days}><span className="font-semibold">{h.days}:</span> {h.time}</p>)}
              </div>
              <p className="text-sm text-[var(--color-muted)] mt-4">Members have direct access to Dr. Hemmen, available 24/7 most of the year. You can also <a href="/book" className="text-[var(--color-primary)] font-semibold underline">book a visit online</a>, no account needed.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]">
            <div className="relative w-full h-72">
              <Image src="/images/office-reception.jpg" alt="The Body1MD office" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-widest text-[var(--color-muted)]">Address</p>
              <address className="not-italic font-cormorant text-3xl text-[var(--color-ink)] mt-2 leading-snug">
                {SITE.street}<br />{SITE.city}, {SITE.region} {SITE.postal}
              </address>
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">
                Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] mb-6">Find us</h2>
          <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm">
            <iframe src={SITE.mapsEmbed} title="Map to Body1MD, 7203 4th St NW, Los Ranchos de Albuquerque" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-primary)] hover:bg-[var(--color-dark)] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors">Open in Google Maps</a>
            <a href={SITE.reviewHref} target="_blank" rel="noopener noreferrer" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-xl font-semibold text-sm">Leave a Google review</a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark)] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl mb-4">Confidence starts with understanding</h2>
          <p className="text-white/80 leading-relaxed">
            We believe informed patients make better decisions. Whether you&apos;re exploring care options or ready to take the next step, we&apos;re here to provide clear answers, honest guidance, and the support you need to move forward.
          </p>
          <p className="text-white/60 text-sm mt-8">If you are having a medical emergency, call 911.</p>
        </div>
      </section>
    </>
  )
}
