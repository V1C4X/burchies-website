import { AnimatedSection } from './AnimatedSection'

const cards = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/burchies.fried.chicken/',
    title: 'Follow the chaos',
    body: '@burchies.fried.chicken — schedule updates, new sauces, and whatever Thomas posts at 11pm.',
    cta: 'Say hi',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61576948422449',
    title: 'Like the page',
    body: 'Stay in the loop on markets, pop-ups, and catering openings — plus the occasional chicken tier list.',
    cta: 'Say g\u2019day',
  },
  {
    label: 'Twitch',
    href: 'https://twitch.tv/burchietv',
    title: 'Watch Thomas cook',
    body: 'twitch.tv/burchietv — behind the fryer, prep chats, the occasional disaster.',
    cta: 'Tune in',
  },
]

export function FollowStrip() {
  return (
    <section className="px-6 md:px-12 py-14 md:py-16 bg-bone">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.1}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full bg-cream border border-charcoal/10 rounded-sm p-8 md:p-10 hover:border-ember transition-colors duration-200 group"
            >
              <p className="text-[10px] tracking-widest uppercase text-ember font-semibold">
                {c.label}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-3 group-hover:text-ember transition-colors">
                {c.title}
              </h3>
              <p className="text-sm text-charcoal/70 mt-3">{c.body}</p>
              <span className="inline-block mt-5 text-xs tracking-widest uppercase border-b border-charcoal/30 group-hover:border-ember pb-px">
                {c.cta} &rarr;
              </span>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
