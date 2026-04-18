import { AnimatedSection } from './AnimatedSection'
import { ScheduleGrid } from './ScheduleGrid'
import { LocationMap } from './LocationMap'

export function WhereSection() {
  return (
    <section id="where" className="relative px-6 md:px-12 py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
            This week
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal max-w-3xl">
            Find the <em className="font-editorial italic text-ember not-italic">truck.</em>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-widest uppercase text-charcoal/50 font-semibold mb-6 pb-3 border-b border-charcoal/15">
                Regular weekly stops
              </p>
            </AnimatedSection>
            <ScheduleGrid />
            <AnimatedSection delay={0.3}>
              <p className="mt-8 text-sm text-charcoal/60 italic">
                Schedule shifts — always double-check{' '}
                <a
                  href="https://www.instagram.com/burchies.fried.chicken/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ember underline decoration-ember/40 underline-offset-2 hover:decoration-ember"
                >
                  @burchies.fried.chicken
                </a>{' '}
                before you drive.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15} className="md:sticky md:top-28">
            <LocationMap />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
