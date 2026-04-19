'use client'
import Image from 'next/image'
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
          className="grid grid-cols-[auto_auto_1fr] md:grid-cols-[auto_auto_1fr_auto] gap-4 md:gap-5 py-5 items-center"
        >
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden bg-bone shrink-0 border border-charcoal/10">
            {slot.imageSrc ? (
              <Image
                src={slot.imageSrc}
                alt={slot.imageAlt ?? slot.venue}
                fill
                sizes="80px"
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full bg-amber/30 text-charcoal/50">
                <span className="text-2xl leading-none" aria-hidden>🐔</span>
                <span className="text-[8px] tracking-widest uppercase mt-1 font-semibold">Soon</span>
              </div>
            )}
          </div>
          <span className="font-mono text-xs tracking-widest text-ember font-semibold uppercase self-start pt-1">
            {slot.day}
          </span>
          <div className="self-start">
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
          <span className="font-mono text-sm text-charcoal/70 whitespace-nowrap md:text-right col-span-3 md:col-span-1 md:pt-1 md:self-start">
            {slot.time}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  )
}
