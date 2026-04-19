import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { EnquiryForm } from '@/components/EnquiryForm'
import { PhotoTile } from '@/components/PhotoTile'

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
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
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
              <div className="grid grid-cols-2 gap-2 md:gap-3 max-w-md md:max-w-none md:ml-auto">
                <PhotoTile
                  src="/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg"
                  alt="Thomas standing with the Burchie's truck on a clear day"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                  className="col-span-2 aspect-[5/4]"
                />
                <PhotoTile
                  src="/instagram/2026-01-12_07-30-10_DTZv1R-D8lH_1.jpg"
                  alt="Korean-style fried chicken with peanuts, coriander and gochujang"
                  sizes="(max-width: 768px) 50vw, 22vw"
                  className="aspect-[3/4] md:aspect-square"
                />
                <PhotoTile
                  src="/instagram/2025-07-04_22-05-46_DLs7aWcTIG7.jpg"
                  alt="Hand-lettered chalkboard menu from Burchie's launch party"
                  sizes="(max-width: 768px) 50vw, 22vw"
                  className="aspect-[3/4] md:aspect-square"
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
