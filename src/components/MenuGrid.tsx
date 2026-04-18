'use client'
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
          <div className="mt-14 pt-10 border-t border-charcoal/20 flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <p className="text-[11px] tracking-widest uppercase text-charcoal/70 font-semibold">
              On the side
            </p>
            <p className="font-editorial italic text-xl md:text-2xl text-charcoal">
              {sides.join(' · ')}
            </p>
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
