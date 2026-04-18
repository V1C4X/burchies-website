'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export interface MenuItem {
  name: string
  description: string
  punchline?: string
  price?: string
  imageSrc?: string
  imageAlt?: string
  veg?: boolean
}

export function MenuCard({ name, description, punchline, price, imageSrc, imageAlt, veg }: MenuItem) {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, close])

  return (
    <>
      <motion.article
        whileHover={reduce ? undefined : { y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative bg-bone rounded-sm overflow-hidden border border-charcoal/10 shadow-sm hover:shadow-lg hover:border-ember/40 transition-shadow duration-300 flex flex-col"
      >
        {imageSrc && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`View ${name} details`}
            className="group relative h-44 w-full overflow-hidden bg-cream cursor-pointer"
          >
            <Image
              src={imageSrc}
              alt={imageAlt ?? name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <span
              aria-hidden
              className="absolute top-2 right-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-cream/90 text-charcoal text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm"
            >
              ⤢
            </span>
          </button>
        )}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-editorial text-2xl text-charcoal">
              {name}
            </h3>
            {price && (
              <span className="font-mono text-sm text-charcoal/70 whitespace-nowrap">{price}</span>
            )}
          </div>
          {veg && (
            <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-pickle font-semibold">
              <span className="inline-block w-1.5 h-1.5 bg-pickle rounded-full" />
              Vegetarian
            </span>
          )}
          <p className="text-sm text-charcoal/70 mt-3 leading-relaxed">{description}</p>
          {punchline && (
            <p className="text-xs text-ember mt-3 font-semibold italic">{punchline}</p>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} details`}
          >
            <motion.div
              className="relative w-full max-w-xl bg-cream rounded-sm overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={reduce ? false : { scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {imageSrc && (
                <div className="relative aspect-[4/3] bg-bone">
                  <Image
                    src={imageSrc}
                    alt={imageAlt ?? name}
                    fill
                    sizes="(max-width: 768px) 100vw, 576px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
                    {name}
                  </h3>
                  {price && (
                    <span className="font-mono text-sm text-charcoal/70 whitespace-nowrap">{price}</span>
                  )}
                </div>
                {veg && (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase text-pickle font-semibold">
                    <span className="inline-block w-1.5 h-1.5 bg-pickle rounded-full" />
                    Vegetarian
                  </span>
                )}
                {punchline && (
                  <p className="mt-4 font-editorial italic text-ember text-lg md:text-xl">
                    {punchline}
                  </p>
                )}
                <p className="mt-4 text-base text-charcoal/80 leading-relaxed">{description}</p>
              </div>

              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-3 right-3 bg-cream/95 hover:bg-cream text-charcoal rounded-full w-9 h-9 flex items-center justify-center shadow-md text-lg leading-none"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
