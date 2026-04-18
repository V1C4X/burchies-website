import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

const galleryImages = [
  '/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg',
  '/instagram/2025-08-12_00-06-43_DNO_deNSgBX_2.webp',
  '/instagram/2025-07-08_23-06-21_DL3VhpgBdEo_3.jpg',
  '/instagram/2025-08-19_23-44-17_DNjjQLWyIlr_1.webp',
  '/instagram/2025-08-11_06-32-17_DNNGyjXyZoY_4.jpg',
  '/instagram/2025-07-08_23-06-21_DL3VhpgBdEo_5.jpg',
  '/instagram/2025-08-15_23-46-46_DNZQW66ScP5_2.jpg',
  '/instagram/2025-06-17_01-24-32_DK-72e9yo2w_1.jpg',
  '/instagram/2026-01-12_07-30-10_DTZv1R-D8lH_2.jpg',
  '/instagram/2025-08-12_00-06-43_DNO_deNSgBX_4.webp',
  '/instagram/2025-07-08_23-06-21_DL3VhpgBdEo_7.jpg',
  '/instagram/2025-08-11_06-32-17_DNNGyjXyZoY_6.jpg',
]

export function PlaceholderGallery() {
  return (
    <section id="gallery" className="relative px-6 md:px-12 py-24 md:py-32 bg-smoke text-cream noise">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-amber font-semibold mb-3">The feed</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            Chicken <em className="font-editorial italic text-amber not-italic">for your feed.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {galleryImages.map((src, i) => (
            <AnimatedSection key={src} delay={i * 0.04}>
              <div className="relative aspect-square overflow-hidden rounded-sm bg-charcoal group">
                <Image
                  src={src}
                  alt="Burchie's Fried Chicken"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
