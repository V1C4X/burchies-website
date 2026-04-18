import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

export function StoryBlock() {
  return (
    <section id="story" className="relative px-6 md:px-12 py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
            The part where we tell you who we are
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight text-charcoal">
            One truck, 24-hour <em className="font-editorial italic text-ember not-italic">marinade,</em> zero shortcuts.
          </h2>
          <div className="mt-8 space-y-5 text-charcoal/80 text-base md:text-lg leading-relaxed">
            <p>
              Burchie&rsquo;s started in May 2025 with a trailer, a recipe, and a stubborn belief that fried chicken should be done properly — not rushed, not reheated, not just a side.
            </p>
            <p>
              Every bird gets marinated for 24 hours, then double-fried until the crust cracks when you look at it. Five sauces across five styles, plus fried cauliflower because our vegetarian friends deserve better than iceberg lettuce.
            </p>
            <p>
              You&rsquo;ll find us parked up at Auckland markets, breweries, and pubs most nights of the week. Bring a picnic blanket, an appetite, and maybe a mate — the queue moves fast.
            </p>
          </div>
          <p className="mt-8 font-editorial italic text-amber text-base">
            — Thomas, owner
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bone">
            <Image
              src="/instagram/2025-06-17_01-24-32_DK-72e9yo2w_1.jpg"
              alt="Thomas standing next to the newly-wrapped Burchie's truck"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-[11px] tracking-widest uppercase text-charcoal/50">
            Truck wrap reveal · June 2025
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
