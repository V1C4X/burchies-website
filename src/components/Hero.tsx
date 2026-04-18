'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedWords } from './AnimatedWords'
import { FlameSvg } from './FlameSvg'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] md:grid md:grid-cols-[1.1fr_1fr] overflow-hidden noise">
      {/* Image side — clean, no cream overlay covering the subject */}
      <div className="relative w-full h-[55vh] md:h-auto md:min-h-[100svh] order-first md:order-last">
        <Image
          src="/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg"
          alt="Thomas standing beside the red-and-white Burchie's Fried Chicken trailer"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
        {/* Thin cream feathered edge on the left only, blends image into the text panel */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent" />
      </div>

      {/* Text panel — solid cream, everything readable */}
      <div className="relative z-10 flex flex-col justify-center bg-cream px-6 md:px-12 pt-24 pb-14 md:py-0 md:pr-10">
        {/* Dancing flame accent */}
        <div className="absolute top-24 md:top-28 left-4 md:left-10 z-20 w-12 md:w-20 sway">
          <FlameSvg className="w-full drop-shadow-md" />
        </div>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xs md:text-sm tracking-widest text-amber uppercase mb-5 md:mb-6 font-semibold"
        >
          Auckland · Since May 2025
        </motion.p>

        <AnimatedWords
          text="Fried chicken,"
          as="h1"
          className="font-display text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.9] font-bold tracking-tight"
        />
        <AnimatedWords
          text="done properly."
          as="h1"
          className="font-editorial italic text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.9] font-semibold text-ember"
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.4 }}
          className="mt-8 md:mt-10 text-base md:text-xl max-w-md text-charcoal/80 leading-snug"
        >
          Five sauces. One truck. Wherever the queue goes.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 1.6 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4"
        >
          <Link
            href="/#where"
            className="text-xs tracking-widest uppercase px-6 py-4 bg-ember text-cream rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold text-center"
          >
            See this week&rsquo;s stops
          </Link>
          <Link
            href="/catering"
            className="text-xs tracking-widest uppercase px-6 py-4 border-2 border-charcoal text-charcoal rounded-sm hover:bg-charcoal hover:text-cream transition-colors duration-200 font-semibold text-center"
          >
            Catering enquiries
          </Link>
        </motion.div>
      </div>

      {/* Scroll hint — bottom centre of text panel */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-6 left-6 md:left-12 z-20 text-[10px] tracking-widest uppercase text-charcoal/50 flex items-center gap-3"
      >
        <span className="w-8 h-px bg-charcoal/30" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
