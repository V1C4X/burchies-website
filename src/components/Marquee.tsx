interface Props {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: Props) {
  // Duplicate the list so the -50% translate loops seamlessly.
  const doubled = [...items, ...items]
  return (
    <div className={`relative bg-ember text-cream py-6 md:py-8 overflow-hidden noise ${className}`}>
      <div className="marquee-track flex gap-10 md:gap-14 whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase inline-flex items-center gap-10 md:gap-14"
          >
            <span>{item}</span>
            <span className="text-amber">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
