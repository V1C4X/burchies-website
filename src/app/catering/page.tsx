import type { Metadata } from 'next'
import Image from 'next/image'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { EnquiryForm } from '@/components/EnquiryForm'

export const metadata: Metadata = {
  title: "Catering — Burchie's Fried Chicken",
  description:
    "Book Burchie\u2019s Fried Chicken food truck for weddings, corporate events, birthdays, and private parties across Auckland. Minimum 20 guests.",
}

const perks = [
  {
    title: 'We park, we cook, we go.',
    body:
      'You get the truck, the fryer, the crew, and a stack of crispy chicken. Nothing reheated, nothing pre-cooked.',
  },
  {
    title: 'Five sauces, one cauliflower.',
    body:
      'O.G., American, Mexican, Thai, Korean, plus the Korean cauliflower for vegetarian guests. Pick one, pick all.',
  },
  {
    title: 'Auckland-wide, mostly.',
    body:
      'Anywhere from Pūhoi to Papakura. Further afield? Ask — we travel for good vibes.',
  },
]

export default function CateringPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section className="px-6 md:px-12 pb-14 md:pb-20 bg-cream">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
            <AnimatedSection>
              <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
                Catering enquiries
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal">
                Feeding a <em className="font-editorial italic text-ember not-italic">crowd?</em>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-charcoal/80 max-w-xl leading-relaxed">
                Weddings, corporate lunches, birthdays, private parties — we roll the truck
                up and take care of dinner. Tell us the details below and Thomas will get back
                to you, probably within a day.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm bg-bone shadow-sm">
                <Image
                  src="/instagram/2025-07-08_23-06-21_DL3VhpgBdEo_1.jpg"
                  alt="Launch party at Sylvan Park — Burchie's truck parked up with guests"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div aria-hidden className="checker-band" />

        <section className="px-6 md:px-12 py-14 md:py-20 bg-bone noise">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-charcoal/70 leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <AnimatedSection>
          <div className="relative w-full h-56 md:h-80 overflow-hidden bg-bone">
            <Image
              src="/instagram/2025-09-29_06-27-53_DPLQnfQEo_M.jpg"
              alt="Catering-scale trays of Burchie's chicken with rainbow slaw"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </AnimatedSection>

        <div aria-hidden className="checker-band" />

        <section className="px-6 md:px-12 py-20 md:py-28 bg-cream">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
                Slide into the DMs
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight text-charcoal">
                Book the truck.
              </h2>
              <p className="mt-3 text-sm text-charcoal/60">
                Minimum 20 guests. We&rsquo;ll confirm availability within a day.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="mt-10">
                <EnquiryForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div aria-hidden className="checker-band" />
      </main>
      <Footer />
    </>
  )
}
