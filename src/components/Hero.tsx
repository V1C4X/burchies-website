'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedWords } from './AnimatedWords'
import { FlameSvg } from './FlameSvg'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden noise">
      {/* Hero photo — Thomas + the truck. The red of the trailer
          matches the ember palette so no blend needed. */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[52%] z-0">
        <Image
          src="/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg"
          alt="Thomas standing beside the red-and-white Burchie's Fried Chicken trailer"
          fill
          sizes="(max-width: 768px) 100vw, 52vw"
          className="object-cover object-center"
          priority
        />
        {/* Cream-to-transparent wipe on the left so headline text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/80 to-transparent md:from-cream md:via-cream/60 md:to-transparent" />
        {/* Soft darken at bottom for scroll hint contrast */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream/70 to-transparent" />
      </div>

      {/* Dancing flame accent, top-left */}
      <div className="absolute top-24 md:top-28 left-4 md:left-12 z-20 w-14 md:w-20 sway">
        <FlameSvg className="w-full drop-shadow-md" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs md:text-sm tracking-widest text-amber uppercase mb-6 font-semibold"
        >
          Auckland · Since May 2025
        </motion.p>

        <AnimatedWords
          text="Fried chicken,"
          as="h1"
          className="font-display text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] font-bold tracking-tight max-w-5xl"
        />
        <AnimatedWords
          text="done properly."
          as="h1"
          className="font-editorial italic text-[clamp(3rem,10vw,8.5rem)] leading-[0.9] font-semibold text-ember max-w-5xl"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
          className="mt-10 text-lg md:text-2xl max-w-xl text-charcoal/80 leading-snug"
        >
          Five sauces. One truck. Wherever the queue goes.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/#where"
            className="text-xs tracking-widest uppercase px-7 py-4 bg-ember text-cream rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold text-center"
          >
            See this week&rsquo;s stops
          </Link>
          <Link
            href="/catering"
            className="text-xs tracking-widest uppercase px-7 py-4 border-2 border-charcoal text-charcoal rounded-sm hover:bg-charcoal hover:text-cream transition-colors duration-200 font-semibold text-center"
          >
            Catering enquiries
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-widest uppercase text-charcoal/50 flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <span className="w-px h-8 bg-charcoal/30" />
      </motion.div>
    </section>
  )
}
