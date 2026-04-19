interface Props {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: Props) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]
  return (
    <div className={`relative bg-ember text-cream py-6 md:py-8 overflow-hidden noise ${className}`}>
      {/* No flex gap here — relying on per-item trailing padding instead so
          every item (including the last) has identical trailing space. That
          keeps -50% transform landing exactly at the start of the duplicated
          second copy, so the loop is seamless. */}
      <div className="marquee-track flex whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase inline-flex items-center gap-10 md:gap-14 pr-10 md:pr-14"
          >
            <span>{item}</span>
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
