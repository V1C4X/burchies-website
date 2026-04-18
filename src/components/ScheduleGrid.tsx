'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { schedule } from '@/data/schedule'

export function ScheduleGrid() {
  const reduce = useReducedMotion()

  return (
    <motion.ul
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
      }}
      className="divide-y divide-charcoal/10"
    >
      {schedule.map((slot) => (
        <motion.li
          key={`${slot.day}-${slot.venue}`}
          variants={{
            hidden: { opacity: 0, x: -16 },
            show:   { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
          className="grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] gap-4 md:gap-6 py-5 items-baseline"
        >
          <span className="font-mono text-xs tracking-widest text-ember font-semibold uppercase pt-1">
            {slot.day}
          </span>
          <div>
            <p className="font-display text-xl md:text-2xl font-bold tracking-tight text-charcoal leading-tight">
              {slot.venue}
            </p>
            <p className="text-sm text-charcoal/60 mt-1">{slot.address}</p>
            {slot.note && (
              <p className="mt-1 inline-block text-[10px] tracking-widest uppercase text-amber font-semibold">
                {slot.note}
              </p>
            )}
          </div>
          <span className="font-mono text-sm text-charcoal/70 whitespace-nowrap md:text-right col-span-2 md:col-span-1 md:pt-1">
            {slot.time}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
