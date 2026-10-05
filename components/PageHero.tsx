import Image from 'next/image'
import Link from 'next/link'
import { imageSize } from '@/lib/imageSize'

type Crumb = { href?: string; label: string }

// Hero for hub and practice pages: text on navy BESIDE the photo, never over it (Paul, 2026-10-05:
// a photo behind text is not optimal for reading). The photo shows whole, at its own shape, so a
// face is never sliced by the frame; if its size cannot be read it falls back to a cropped frame.
export default function PageHero({ title, subtitle, image, alt, crumbs, position = 'object-center' }: {
  title: string
  subtitle?: string
  image: string
  alt: string
  crumbs: Crumb[]
  position?: string
}) {
  const size = imageSize(image)
  return (
    <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/75 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span>›</span>
                {c.href ? <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link> : <span className="text-white">{c.label}</span>}
              </span>
            ))}
          </nav>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight">{title}</h1>
          {subtitle && <p className="text-xl text-white/85 mt-5 leading-relaxed">{subtitle}</p>}
        </div>
        <div className="flex justify-center lg:justify-end">
          {size ? (
            <Image src={image} alt={alt} width={size.width} height={size.height} priority sizes="(max-width: 1024px) 100vw, 50vw" className="w-auto h-auto max-w-full max-h-[28rem] rounded-3xl shadow-2xl ring-1 ring-white/10" />
          ) : (
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image src={image} alt={alt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className={`object-cover ${position}`} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
