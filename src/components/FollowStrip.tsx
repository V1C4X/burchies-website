import { AnimatedSection } from './AnimatedSection'

export function FollowStrip() {
  return (
    <section className="px-6 md:px-12 py-20 bg-bone">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatedSection>
          <a
            href="https://www.instagram.com/burchies.fried.chicken/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream border border-charcoal/10 rounded-sm p-8 md:p-10 hover:border-ember transition-colors duration-200 group"
          >
            <p className="text-[10px] tracking-widest uppercase text-ember font-semibold">Instagram</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-3 group-hover:text-ember transition-colors">
              Follow the chaos
            </h3>
            <p className="text-sm text-charcoal/70 mt-3">@burchies.fried.chicken — schedule updates, new sauces, and whatever Thomas posts at 11pm.</p>
            <span className="inline-block mt-5 text-xs tracking-widest uppercase border-b border-charcoal/30 group-hover:border-ember pb-px">Say hi &rarr;</span>
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <a
            href="https://twitch.tv/burchietv"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cream border border-charcoal/10 rounded-sm p-8 md:p-10 hover:border-ember transition-colors duration-200 group"
          >
            <p className="text-[10px] tracking-widest uppercase text-ember font-semibold">Twitch</p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-3 group-hover:text-ember transition-colors">
              Watch Thomas cook
            </h3>
            <p className="text-sm text-charcoal/70 mt-3">twitch.tv/burchietv — behind the fryer, prep chats, the occasional disaster.</p>
            <span className="inline-block mt-5 text-xs tracking-widest uppercase border-b border-charcoal/30 group-hover:border-ember pb-px">Tune in &rarr;</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
