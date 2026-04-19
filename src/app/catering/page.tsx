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

// Editorial collage tiles — placement matches the reference layout:
//   Row 1 (desktop): [  A  A  A  |  B  B  B  ]
//   Row 2 (desktop): [  A  A  A  |  C  C  D  ]
//   Row 3 (desktop): [  E  E  |  F  F  |  G  G  ]
//   Row 4 (desktop): [  E  E  |  F  F  |  G  G  ]
const collage = [
  {
    key: 'a',
    src: '/instagram/2025-07-08_23-06-21_DL3VhpgBdEo_2.jpg',
    alt: "Burchie's truck lit up at a private event with string lights and bunting",
    span: 'col-span-4 row-span-3 md:col-span-3 md:row-span-2',
    sizes: '(max-width: 768px) 100vw, 50vw',
    priority: true,
  },
  {
    key: 'b',
    src: '/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg',
    alt: "Thomas standing next to the Burchie's truck on a clear day",
    span: 'col-span-4 row-span-2 md:col-span-3 md:row-span-1',
    sizes: '(max-width: 768px) 100vw, 50vw',
  },
  {
    key: 'c',
    src: '/instagram/2025-08-15_23-46-46_DNZQW66ScP5_4.jpg',
    alt: 'Freshly baked chocolate chunk cookies on a cooling rack',
    span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-1',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    key: 'd',
    src: '/instagram/2025-05-30_00-15-45_DKQdq8GSCyM.jpg',
    alt: 'Buffalo fried chicken topped with chives in a kraft tray',
    span: 'col-span-2 row-span-2 md:col-span-1 md:row-span-1',
    sizes: '(max-width: 768px) 50vw, 17vw',
  },
  {
    key: 'e',
    src: '/instagram/2025-07-04_22-05-46_DLs7aWcTIG7.jpg',
    alt: "Hand-lettered chalkboard menu from Burchie's launch party",
    span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    key: 'f',
    src: '/instagram/2026-01-12_07-30-10_DTZv1R-D8lH_1.jpg',
    alt: 'Korean-style fried chicken with peanuts, coriander and gochujang',
    span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2',
    sizes: '(max-width: 768px) 50vw, 33vw',
  },
  {
    key: 'g',
    src: '/instagram/2025-06-17_01-24-32_DK-72e9yo2w_2.jpg',
    alt: "Thomas stepping out of the Burchie's truck after dinner service",
    span: 'col-span-4 row-span-2 md:col-span-2 md:row-span-2',
    sizes: '(max-width: 768px) 100vw, 33vw',
  },
]

export default function CateringPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section className="px-6 md:px-12 pb-10 md:pb-14 bg-cream">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
                Catering enquiries
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal max-w-3xl">
                Feeding a <em className="font-editorial italic text-ember not-italic">crowd?</em>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-charcoal/80 max-w-2xl leading-relaxed">
                Weddings, corporate lunches, birthdays, private parties — we roll the truck
                up and take care of dinner. Tell us the details below and Thomas will get back
                to you, probably within a day.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="px-6 md:px-12 pb-16 md:pb-24 bg-cream">
          <AnimatedSection delay={0.15}>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-3 auto-rows-[minmax(110px,1fr)] md:auto-rows-[minmax(170px,1fr)] lg:auto-rows-[minmax(220px,1fr)]">
                {collage.map((tile) => (
                  <div
                    key={tile.key}
                    className={`${tile.span} relative overflow-hidden rounded-sm bg-bone shadow-md transition-transform duration-500 hover:-translate-y-0.5`}
                  >
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes={tile.sizes}
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                      priority={tile.priority}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
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
