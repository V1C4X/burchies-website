'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import type { Side } from '@/data/menu'

export function SideCard({ side }: { side: Side }) {
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
      <motion.div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen(true)
          }
        }}
        aria-label={`View ${side.name} details`}
        whileHover={reduce ? undefined : { y: -2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="group bg-bone/80 rounded-sm border border-charcoal/10 overflow-hidden flex items-stretch shadow-sm hover:shadow-md hover:border-ember/40 transition-shadow duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember focus-visible:outline-offset-2 text-left"
      >
        <motion.div
          layoutId={reduce ? undefined : `side-image-${side.name}`}
          className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 bg-cream overflow-hidden"
        >
          {side.imageSrc ? (
            <Image
              src={side.imageSrc}
              alt={side.imageAlt ?? side.name}
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-4xl text-charcoal/30 select-none">
              🍟
            </div>
          )}
        </motion.div>
        <div className="p-3 md:p-4 flex-1 flex flex-col justify-center min-w-0">
          <h4 className="font-editorial text-base md:text-lg text-charcoal leading-tight">
            {side.name}
          </h4>
          <p className="text-[11px] md:text-xs text-charcoal/65 mt-1 leading-snug">
            {side.description}
          </p>
        </div>
      </motion.div>

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
            aria-label={`${side.name} details`}
          >
            <motion.div
              className="relative w-full max-w-md bg-cream rounded-sm overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                layoutId={reduce ? undefined : `side-image-${side.name}`}
                className="relative aspect-[4/3] bg-bone"
              >
                {side.imageSrc ? (
                  <Image
                    src={side.imageSrc}
                    alt={side.imageAlt ?? side.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 448px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-7xl text-charcoal/30 select-none">
                    🍟
                  </div>
                )}
              </motion.div>
              <motion.div
                className="p-6 md:p-8"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.12 }}
              >
                <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-charcoal">
                  {side.name}
                </h3>
                <p className="mt-4 text-base text-charcoal/80 leading-relaxed">
                  {side.description}
                </p>
              </motion.div>

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
