import Image from 'next/image'
import Link from 'next/link'
import { NAV, SITE } from '@/lib/site'

const Chevron = ({ className = '' }: { className?: string }) => (
  <svg className={`w-3.5 h-3.5 transition-transform ${className}`} fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
)

// Server component. Desktop dropdowns open on hover AND on keyboard focus (CSS :focus-within in
// globals.css), and every top-level title is itself a link to its hub page. Mobile uses
// <details>, so the menu works without any client JavaScript.
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0" aria-label="Body1MD Primary Care & Wellness, home">
          <Image src="/logo.png" alt="Body1MD Primary Care & Wellness" width={505} height={271} priority className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV.map((g) =>
            g.items ? (
              <div key={g.href} className="nav-dd">
                <Link href={g.href} className="flex items-center gap-1 px-3 py-2 rounded-lg text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">
                  {g.label}
                  <Chevron />
                </Link>
                <div className="nav-panel absolute left-0 top-full pt-2">
                  <div className={`bg-white rounded-2xl shadow-xl border border-[var(--color-border)] p-3 ${g.items.length > 7 ? 'w-[34rem] grid grid-cols-2 gap-x-2' : 'w-72'}`}>
                    {g.items.map((it) => (
                      <Link key={it.href + it.label} href={it.href} className="block px-3 py-2 rounded-lg text-sm text-[var(--color-ink)] hover:bg-[var(--color-light)] hover:text-[var(--color-primary)] transition-colors">
                        {it.label}
                      </Link>
                    ))}
                    {g.footer && (
                      <Link href={g.footer.href} className={`block px-3 py-2 mt-1 rounded-lg text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-light)] border-t border-[var(--color-border)] ${g.items.length > 7 ? 'col-span-2' : ''}`}>
                        {g.footer.label} →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={g.href} href={g.href} className="px-3 py-2 rounded-lg text-[15px] font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)] hover:bg-[var(--color-light)] transition-colors">
                {g.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          <a href={SITE.phoneHref} className="text-sm font-semibold text-[var(--color-primary)] whitespace-nowrap">{SITE.phone}</a>
          <Link href="/contact" className="bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors whitespace-nowrap">
            Become a Member
          </Link>
        </div>

        <details className="m-dd lg:hidden">
          <summary className="cursor-pointer p-2 rounded-lg text-[var(--color-ink)]" aria-label="Open menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </summary>
          <div className="absolute left-0 right-0 top-20 bg-white border-b border-[var(--color-border)] shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
              {NAV.map((g) =>
                g.items ? (
                  <details key={g.href} className="m-dd">
                    <summary className="flex items-center justify-between px-3 py-3 rounded-lg font-medium text-[var(--color-ink)] cursor-pointer">
                      {g.label}
                      <Chevron className="m-chev" />
                    </summary>
                    <div className="pl-4 pb-2">
                      <Link href={g.href} className="block px-3 py-2 text-sm font-semibold text-[var(--color-primary)]">{g.label} overview</Link>
                      {g.items.map((it) => (
                        <Link key={it.href + it.label} href={it.href} className="block px-3 py-2 text-sm text-[var(--color-ink)]">{it.label}</Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link key={g.href} href={g.href} className="block px-3 py-3 rounded-lg font-medium text-[var(--color-ink)]">{g.label}</Link>
                )
              )}
              <div className="pt-3 grid grid-cols-2 gap-3">
                <a href={SITE.phoneHref} className="text-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-4 py-3 rounded-xl font-semibold text-sm">Call {SITE.phone}</a>
                <Link href="/contact" className="text-center bg-[var(--color-accent)] text-white px-4 py-3 rounded-xl font-semibold text-sm">Become a Member</Link>
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  )
}
