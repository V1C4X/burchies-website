interface Props {
  items: string[]
  className?: string
}

/** One copy of the items. Rendered twice inside the track so translateX(-50%)
 *  moves exactly one copy's width — the only reliable way to make the loop
 *  seamless regardless of item widths. Each copy is a shrink-0 flex group
 *  so it keeps its natural width inside the parent flex. */
function MarqueeGroup({ items, ariaHidden }: { items: string[]; ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex items-center gap-10 md:gap-14 pr-10 md:pr-14 shrink-0"
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="font-display text-2xl md:text-4xl font-bold tracking-tight uppercase inline-flex items-center gap-10 md:gap-14 whitespace-nowrap"
        >
          <span>{item}</span>
          <span className="text-amber">✦</span>
        </li>
      ))}
    </ul>
  )
}

export function Marquee({ items, className = '' }: Props) {
  return (
    <div className={`relative bg-ember text-cream py-6 md:py-8 overflow-hidden noise ${className}`}>
      <div className="marquee-track flex will-change-transform">
        <MarqueeGroup items={items} />
        <MarqueeGroup items={items} ariaHidden />
      </div>
    </div>
  )
}
