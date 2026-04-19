'use client'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

interface Props {
  items: string[]
  className?: string
}

/**
 * Seamless infinite marquee.
 *
 * Renders each item twice and animates the track so translateX moves by
 * exactly one group's measured pixel width per cycle. The CSS keyframe
 * reads the pixel distance from a CSS variable (`--marquee-distance`)
 * that JS sets after measuring the first group with `offsetWidth`. Before
 * JS hydrates, falls back to `-50%` of the track so there's still a
 * visible scroll on first paint.
 *
 * This avoids the subpixel rounding that was causing a visible reset
 * mid-cycle in the pure-CSS version.
 */
export function Marquee({ items, className = '' }: Props) {
  const groupRef = useRef<HTMLUListElement>(null)
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    if (!groupRef.current) return
    const el = groupRef.current
    const update = () => setDistance(el.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [items])

  const trackStyle: CSSProperties =
    distance > 0 ? ({ '--marquee-distance': `${distance}px` } as CSSProperties) : {}

  const groupClass =
    'flex items-center gap-10 md:gap-14 pr-10 md:pr-14 shrink-0'
  const itemClass =
    'font-display text-2xl md:text-4xl font-bold tracking-tight uppercase inline-flex items-center gap-10 md:gap-14 whitespace-nowrap'

  return (
    <div
      className={`relative bg-ember text-cream py-6 md:py-8 overflow-hidden noise ${className}`}
    >
      <div className="marquee-track flex will-change-transform" style={trackStyle}>
        <ul ref={groupRef} className={groupClass}>
          {items.map((item, i) => (
            <li key={i} className={itemClass}>
              <span>{item}</span>
              <span aria-hidden className="text-amber">✦</span>
            </li>
          ))}
        </ul>
        <ul aria-hidden className={groupClass}>
          {items.map((item, i) => (
            <li key={i} className={itemClass}>
              <span>{item}</span>
              <span aria-hidden className="text-amber">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
