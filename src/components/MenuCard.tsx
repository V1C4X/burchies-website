'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

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
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="relative bg-bone rounded-sm overflow-hidden border border-charcoal/10 shadow-sm hover:shadow-lg hover:border-ember/40 transition-shadow duration-300 flex flex-col"
    >
      {imageSrc && (
        <div className="relative h-44 overflow-hidden bg-cream">
          <Image
            src={imageSrc}
            alt={imageAlt ?? name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
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
  )
}
