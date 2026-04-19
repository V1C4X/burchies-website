'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedWords } from './AnimatedWords'
import { HERO_BLUR } from '@/lib/blur'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* ─── Full-bleed hero photo ───────────────────────────────────── */}
      <div className="absolute inset-0 z-0 bg-smoke">
        <Image
          src="/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg"
          alt="Thomas standing beside the red-and-white Burchie's Fried Chicken trailer"
          fill
          sizes="100vw"
          className="object-cover object-[30%_30%] md:object-[70%_55%]"
          priority
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={HERO_BLUR}
        />

        {/* Stacked overlays that darken the frame so cream text reads cleanly.
            Layer 1: dense charcoal from the bottom-left corner so the CTAs sit
                     on a solid read zone.
            Layer 2: smoke wash over the whole frame to mute the bright truck.
            Layer 3: subtle ember glow up top to keep the palette warm. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 from-0% via-charcoal/60 via-35% to-transparent to-65%"
        />
        <div aria-hidden className="absolute inset-0 bg-charcoal/25" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ember/15 to-transparent mix-blend-soft-light"
        />
      </div>

      {/* Grainy overlay for warmth */}
      <div aria-hidden className="absolute inset-0 z-[1] noise pointer-events-none" />

      {/* ─── Content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end md:justify-center px-6 md:px-12 pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl w-full mx-auto">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[11px] md:text-xs tracking-[0.28em] text-amber uppercase font-semibold mb-5 md:mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-amber" />
            Auckland · Since May 2025
          </motion.p>

          <div className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.9] font-bold tracking-tight text-cream">
            <AnimatedWords text="Fried chicken," as="h1" className="block" />
            <AnimatedWords
              text="done properly."
              as="h1"
              className="block font-editorial italic font-semibold text-amber"
            />
          </div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
            className="mt-8 md:mt-10 text-base md:text-xl max-w-xl text-cream/85 leading-relaxed"
          >
            Five sauces. One truck. Wherever the queue goes.
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
              className="text-[11px] tracking-[0.2em] uppercase px-7 py-4 text-cream rounded-full border border-cream/40 hover:border-cream hover:bg-cream hover:text-charcoal transition-all duration-200 font-semibold text-center backdrop-blur-sm"
            >
              Catering enquiries
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
