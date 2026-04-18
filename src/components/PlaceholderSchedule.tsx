import { AnimatedSection } from './AnimatedSection'

// Temporary placeholder until Phase 2 wires up the real ScheduleGrid + LocationMap.
export function PlaceholderSchedule() {
  return (
    <section id="where" className="relative px-6 md:px-12 py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">This week</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal max-w-3xl">
            Find the <em className="font-editorial italic text-ember not-italic">truck.</em>
          </h2>
          <p className="mt-8 max-w-xl text-charcoal/70 text-lg leading-relaxed">
            Interactive map + weekly schedule coming soon. In the meantime, we&rsquo;re parked up most nights Thursday through Sunday around Auckland — Waterview, Pūhoi, Kumeu, Oratia, Titirangi. Always check Instagram for the latest.
          </p>
          <a
            href="https://www.instagram.com/burchies.fried.chicken/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 text-xs tracking-widest uppercase px-7 py-4 bg-ember text-cream rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold"
          >
            This week on Instagram &rarr;
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
