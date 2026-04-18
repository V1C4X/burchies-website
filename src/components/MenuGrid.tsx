'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { MenuCard } from './MenuCard'
import { menu, sides } from '@/data/menu'
import { AnimatedSection } from './AnimatedSection'

export function MenuGrid() {
  const reduce = useReducedMotion()

  return (
    <section id="menu" className="relative bg-amber px-6 md:px-12 py-24 md:py-32 noise">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-charcoal/70 font-semibold mb-3">
            What you came for
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal max-w-3xl">
            Pick your <em className="font-editorial italic text-ember not-italic">heat.</em>
          </h2>
        </AnimatedSection>

        <motion.div
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {menu.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <MenuCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 pt-10 border-t border-charcoal/20">
            <p className="text-[11px] tracking-widest uppercase text-charcoal/70 font-semibold mb-5">
              On the side
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
              {sides.map((side) => (
                <div
                  key={side.name}
                  className="bg-bone/80 rounded-sm border border-charcoal/10 overflow-hidden flex items-stretch"
                >
                  <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 bg-cream">
                    {side.imageSrc ? (
                      <Image
                        src={side.imageSrc}
                        alt={side.imageAlt ?? side.name}
                        fill
                        sizes="(max-width: 768px) 96px, 112px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-4xl text-charcoal/30 select-none">
                        🍟
                      </div>
                    )}
                  </div>
                  <div className="p-3 md:p-4 flex-1 flex flex-col justify-center min-w-0">
                    <h4 className="font-editorial text-base md:text-lg text-charcoal leading-tight">
                      {side.name}
                    </h4>
                    <p className="text-[11px] md:text-xs text-charcoal/65 mt-1 leading-snug">
                      {side.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-8 text-xs text-charcoal/60 italic">
            Prices + allergen info coming soon. Everything&rsquo;s marinated for 24 hours and double-fried — you know the drill.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
