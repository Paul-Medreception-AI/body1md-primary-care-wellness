import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'

// No social links: body1md.com links to no social profiles, and the footer only shows what is real.
export default function SiteFooter() {
  return (
    <footer className="bg-[var(--color-dark)] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Image src="/logo-white.png" alt="Body1MD Primary Care & Wellness" width={600} height={300} className="h-20 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Direct primary care from a board-certified internal medicine physician. Longer visits, direct access, and a simple monthly membership.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/conditions" className="text-gray-300 hover:text-white transition-colors">Conditions We Treat</Link></li>
              <li><Link href="/new-patients" className="text-gray-300 hover:text-white transition-colors">Membership & Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Health Articles</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Practice</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Dr. Andrew Hemmen</Link></li>
              <li><Link href="/office" className="text-gray-300 hover:text-white transition-colors">Our Office</Link></li>
              <li><Link href="/reviews" className="text-gray-300 hover:text-white transition-colors">Patient Reviews</Link></li>
              <li><a href={SITE.reviewHref} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Review us on Google</a></li>
              <li><Link href="/locations" className="text-gray-300 hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Visit or Call</h3>
            <address className="not-italic space-y-3 text-sm text-gray-300">
              <a href={SITE.mapsHref} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                {SITE.street}<br />{SITE.city}, {SITE.region} {SITE.postal}
              </a>
              <p>Phone: <a href={SITE.phoneHref} className="hover:text-white transition-colors">{SITE.phone}</a><br />Fax: {SITE.fax}</p>
              <p><a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">{SITE.email}</a></p>
              <p>
                {SITE.hours.map((h) => (
                  <span key={h.days} className="block">{h.days}: {h.time}</span>
                ))}
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/15 pt-8">
          <p className="text-sm text-gray-400 mb-4">This website does not collect protected health information. If you have a medical emergency, call 911.</p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {SITE.fullName}</p>
            <div className="flex gap-4">
              <Link href="/privacy-sms" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms-sms" className="hover:text-white transition-colors">Terms of Service</Link>
              <span>|</span>
              <Link href="/terms-sms#sms-terms" className="hover:text-white transition-colors">SMS Terms</Link>
            </div>
          </div>
          {/* Credits, kept quiet. Pexels' API terms ask for a visible credit; the MedReception link is a
              plain branded link (Paul, 2026-10-06: attribution is part of the website agreement). */}
          <p className="mt-6 text-center sm:text-left text-xs text-gray-500">
            Photos by <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline hover:text-gray-300">Pexels</a>
            {' · '}
            Website built by <a href="https://www.medreception.ai/" target="_blank" rel="noopener" className="underline-offset-2 hover:underline hover:text-gray-300">MedReception AI</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
