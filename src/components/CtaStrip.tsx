import Link from 'next/link'
import { AnimatedSection } from './AnimatedSection'

interface Props {
  heading: string
  highlight?: string
  subtitle?: string
  buttonText?: string
  href?: string
}

export function CtaStrip({
  heading,
  highlight,
  subtitle = 'Auckland-wide · Minimum 20 guests',
  buttonText = 'Book the truck',
  href = '/catering',
}: Props) {
  return (
    <section className="relative bg-ember text-cream px-6 md:px-12 py-16 md:py-24 overflow-hidden noise">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <AnimatedSection>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
            {heading}
            {highlight && (
              <>
                {' '}
                <em className="font-editorial italic text-amber not-italic">{highlight}</em>
              </>
            )}
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-start gap-2">
            <Link
              href={href}
              className="text-[11px] tracking-widest uppercase px-8 py-4 bg-cream text-charcoal rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold whitespace-nowrap"
            >
              {buttonText}
            </Link>
            <p className="text-[11px] text-cream/60 tracking-wide">{subtitle}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
