import Image from 'next/image'
import Link from 'next/link'

type Crumb = { href?: string; label: string }

// Photo hero for hub and practice pages: a real image under a navy wash, so every subpage
// opens on a picture rather than a flat gradient.
export default function PageHero({ title, subtitle, image, alt, crumbs, position = 'object-center' }: {
  title: string
  subtitle?: string
  image: string
  alt: string
  crumbs: Crumb[]
  position?: string
}) {
  return (
    <section className="relative text-white overflow-hidden">
      <Image src={image} alt={alt} fill priority sizes="100vw" className={`object-cover ${position}`} />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-primary/80 to-primary/50" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-28">
        <nav className="flex items-center gap-2 text-sm text-white/75 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-2">
              <span>›</span>
              {c.href ? <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </nav>
        <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight max-w-4xl">{title}</h1>
        {subtitle && <p className="text-xl text-white/85 mt-5 max-w-3xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}
