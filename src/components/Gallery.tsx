'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export interface GalleryImage {
  src: string
  alt: string
}

interface Props {
  images: GalleryImage[]
  eyebrow?: string
  heading?: string
  highlight?: string
}

export function Gallery({
  images,
  eyebrow = 'The feed',
  heading = 'Chicken',
  highlight = 'for your feed.',
}: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const reduce = useReducedMotion()

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(
    () => setLightbox((i) => (i !== null ? Math.max(0, i - 1) : null)),
    [],
  )
  const next = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? Math.min(images.length - 1, i + 1) : null,
      ),
    [images.length],
  )

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightbox === null) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  // Lock page scroll (including Lenis smooth-scroll) while the lightbox is open
  useEffect(() => {
    if (lightbox === null) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()
    return () => {
      document.body.style.overflow = prevOverflow
      window.__lenis?.start()
    }
  }, [lightbox])

  return (
    <section id="gallery" className="relative px-6 md:px-12 py-16 md:py-24 bg-smoke text-cream noise">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-[11px] tracking-widest uppercase text-amber font-semibold mb-3">
            {eyebrow}
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            {heading}{' '}
            <em className="font-editorial italic text-amber not-italic">{highlight}</em>
          </h2>
        </motion.div>

        <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-3">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              className="mb-3 break-inside-avoid cursor-pointer overflow-hidden rounded-sm bg-charcoal block w-full"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              onClick={() => setLightbox(i)}
              aria-label={`Open ${img.alt}`}
            >
              <div className="relative w-full group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh]"
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1400}
                height={1800}
                className="max-h-[85vh] w-auto object-contain rounded-sm"
              />
            </motion.div>

            <button
              onClick={close}
              className="absolute top-6 right-6 text-cream/70 hover:text-cream text-3xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>
            {lightbox > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-4xl"
                aria-label="Previous"
              >
                ‹
              </button>
            )}
            {lightbox < images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream text-4xl"
                aria-label="Next"
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
