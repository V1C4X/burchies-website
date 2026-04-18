'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedWords } from './AnimatedWords'
import { FlameSvg } from './FlameSvg'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] bg-cream overflow-hidden noise">
      <div className="relative z-10 max-w-[1400px] mx-auto grid md:grid-cols-[5fr_4fr] gap-10 md:gap-16 lg:gap-20 px-6 md:px-12 pt-28 md:pt-36 pb-20 md:pb-28 items-center">
        {/* ─── Text column ─────────────────────────────────────────────── */}
        <div className="relative order-2 md:order-1">
          {/* Dancing flame — anchored to top-left of text column */}
          <div className="absolute -top-14 md:-top-20 -left-2 md:-left-6 z-10 w-12 md:w-16 sway">
            <FlameSvg className="w-full drop-shadow-md" />
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[11px] md:text-xs tracking-[0.28em] text-amber uppercase font-semibold mb-5 md:mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-amber" />
            Auckland · Since May 2025
          </motion.p>

          <div className="font-display text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[0.92] font-bold tracking-tight">
            <AnimatedWords text="Fried chicken," as="h1" className="block" />
            <AnimatedWords
              text="done properly."
              as="h1"
              className="block font-editorial italic font-semibold text-ember"
            />
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
            className="mt-7 md:mt-9 text-base md:text-lg max-w-md text-charcoal/75 leading-relaxed"
          >
            Five sauces. One truck. Wherever the queue goes. Served crispy around Auckland since May 2025.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/#where"
              className="text-[11px] tracking-[0.2em] uppercase px-7 py-4 bg-ember text-cream rounded-full relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold text-center"
            >
              See this week&rsquo;s stops
            </Link>
            <Link
              href="/catering"
              className="text-[11px] tracking-[0.2em] uppercase px-7 py-4 text-charcoal rounded-full border border-charcoal/25 hover:border-charcoal hover:bg-charcoal hover:text-cream transition-all duration-200 font-semibold text-center"
            >
              Catering enquiries
            </Link>
          </motion.div>
        </div>

        {/* ─── Image column ────────────────────────────────────────────── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="relative order-1 md:order-2 w-full"
        >
          {/* Ember backplate — subtle offset behind the photo, reads as editorial polaroid */}
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 bg-ember rounded-md -z-10"
          />

          <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-md overflow-hidden shadow-2xl shadow-charcoal/15">
            <Image
              src="/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg"
              alt="Thomas standing beside the red-and-white Burchie's Fried Chicken trailer"
              fill
              sizes="(max-width: 768px) 100vw, 44vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Amber caption ticket — like a receipt/stamp */}
          <div className="absolute -bottom-4 -left-3 md:-bottom-5 md:-left-5 bg-cream px-4 py-2 rounded-sm shadow-lg border border-charcoal/10 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-ember rounded-full" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-charcoal/70">
              Open this week
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — bottom left, minimal */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="hidden md:flex absolute bottom-8 left-12 z-20 text-[10px] tracking-[0.3em] uppercase text-charcoal/40 items-center gap-3"
      >
        <span className="w-8 h-px bg-charcoal/30" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
