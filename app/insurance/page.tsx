import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Membership & Insurance | Body1MD Primary Care & Wellness',
  description: 'Body1MD does not bill insurance. Direct primary care membership in Los Ranchos de Albuquerque, NM is $100/month under 50 and $150/month at 50+, month-to-month.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Membership & Insurance | Body1MD Primary Care & Wellness',
    description: 'Body1MD does not bill insurance. Direct primary care membership in Los Ranchos de Albuquerque, NM is $100/month under 50 and $150/month at 50+, month-to-month.',
    url: 'https://body1md.com/insurance',
    siteName: 'Body1MD Primary Care & Wellness',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Membership & Insurance | Body1MD Primary Care & Wellness',
    description: 'Body1MD does not bill insurance. Direct primary care membership in Los Ranchos de Albuquerque, NM is $100/month under 50 and $150/month at 50+, month-to-month.',
    images: ['/og-image.png']
  }
}

const QUESTIONS: { q: string; a: string }[] = [
  {
    q: 'Does Body1MD bill my insurance?',
    a: 'No. Body1MD does not bill insurance. You pay the practice directly through your monthly membership.',
  },
  {
    q: 'How much does membership cost?',
    a: 'Membership is $100 per month if you are under 50 and $150 per month if you are 50 or older.',
  },
  {
    q: 'Is there a contract or an annual fee?',
    a: 'Membership is month-to-month, with no annual contract and no annual concierge retainer.',
  },
  {
    q: 'What is the Founding 50?',
    a: 'Founding-member pricing is available to those who join by December 31, 2026, or before all 50 founder memberships are taken. Your founding pricing is protected for as long as your membership stays active.',
  },
  {
    q: 'Are wellness and performance services included?',
    a: 'Optional Wellness and Performance services, such as hormone optimization or peptide therapies where warranted, are separately contracted and priced. Ask about pricing for any of these services before you begin.',
  },
  {
    q: 'Can I use my HSA or FSA?',
    a: `That depends on your plan, so check with your plan administrator. For questions about paying for your membership, call the office at ${SITE.phone}.`,
  },
]

export default function InsurancePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light mb-6 animate-fade-up">
            Membership & Insurance
          </h1>
          <p className="text-xl text-white/90 animate-fade-up">
            Simple monthly pricing. No insurance billing.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] pt-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/patient-support-laptop.jpg"
              alt="A couple reviewing their healthcare options together on a laptop at home"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>
      </section>

      {/* How payment works */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Body1MD Does Not Bill Insurance
          </h2>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 shadow-sm animate-fade-up">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <svg className="w-12 h-12 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-4">
                  You Pay the Practice Directly
                </h3>
                <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                  Body1MD is a Direct Primary Care practice. Instead of billing your insurance company visit by visit, the practice offers a monthly membership that you pay directly.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed">
                  With insurance out of the middle, visits are designed to last up to an hour, same- or next-day appointments are available in most cases, and members have direct access to Dr. Hemmen by phone and text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership pricing */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Membership Pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-[var(--color-cream)] rounded-2xl p-10 text-center animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Under 50</h3>
              <p className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-2">$100</p>
              <p className="text-[var(--color-muted)]">per month</p>
            </div>
            <div className="bg-[var(--color-cream)] rounded-2xl p-10 text-center animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-2">Age 50+</h3>
              <p className="font-cormorant text-6xl font-light text-[var(--color-primary)] mb-2">$150</p>
              <p className="text-[var(--color-muted)]">per month</p>
            </div>
          </div>

          <ul className="grid sm:grid-cols-3 gap-4 mb-10 text-center">
            <li className="rounded-xl border border-[var(--color-border)] p-4 font-semibold text-[var(--color-ink)]">Month-to-month</li>
            <li className="rounded-xl border border-[var(--color-border)] p-4 font-semibold text-[var(--color-ink)]">No annual contract</li>
            <li className="rounded-xl border border-[var(--color-border)] p-4 font-semibold text-[var(--color-ink)]">No annual concierge retainer</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Founding 50</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Join by December 31, 2026, or before all 50 founder memberships are taken, for founding-member pricing. Your founding pricing is protected for as long as your membership stays active.
              </p>
            </div>
            <div className="bg-[var(--color-light)] rounded-2xl p-8 animate-fade-up">
              <h3 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">Wellness and Performance</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">
                Optional Wellness and Performance services are separately contracted and priced, so you only take on what fits your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keeping insurance */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-6 animate-fade-up">
            Should I Keep My Insurance?
          </h2>
          <p className="text-center text-[var(--color-muted)] text-lg mb-16 max-w-3xl mx-auto animate-fade-up">
            As general guidance, yes. A primary care membership is not health insurance. Most people should keep insurance, or a high-deductible plan, for care that happens outside the office.
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 animate-fade-up">
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Hospital Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Hospital stays, surgery, and the services that come with them are billed by the hospital and the physicians who provide them.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Specialist Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                If you need a cardiologist, orthopedist, or another specialist, those visits are billed by the specialist&apos;s practice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="font-cormorant text-xl text-[var(--color-ink)] mb-3">
                Emergency Care
              </h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                Emergency room visits and ambulance care are outside a primary care membership. In an emergency, always call 911.
              </p>
            </div>
          </div>

          <p className="text-center text-[var(--color-muted)] text-sm mt-12 max-w-3xl mx-auto">
            If you are unsure what kind of coverage fits alongside a membership, talk with your insurance agent or benefits administrator.
          </p>
        </div>
      </section>

      {/* Questions */}
      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-[var(--color-ink)] text-center mb-16 animate-fade-up">
            Membership Questions
          </h2>

          <div className="space-y-4 animate-fade-up">
            {QUESTIONS.map((item) => (
              <details key={item.q} className="group bg-[var(--color-cream)] rounded-xl overflow-hidden shadow-sm">
                <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between hover:bg-white transition-colors">
                  {item.q}
                  <svg className="w-5 h-5 text-[var(--color-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg border border-[var(--color-border)]">
            <p className="text-[var(--color-ink)] font-medium mb-2">
              Your right to a Good Faith Estimate
            </p>
            <p className="text-[var(--color-muted)] text-sm leading-relaxed">
              Under the federal No Surprises Act, if you are uninsured or not using insurance, you generally have the right to receive a Good Faith Estimate of expected charges before scheduled care. If your final bill is substantially higher than the estimate, you may have the right to dispute the charges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-4xl text-white mb-6 animate-fade-up">
            Questions About Membership?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-up">
            Call the office or send a message, and we will walk you through how membership works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link
              href="/contact"
              className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-block bg-white hover:bg-gray-50 text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
