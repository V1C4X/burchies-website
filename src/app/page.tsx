export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm tracking-widest text-ember uppercase mb-6">
        Auckland · Since May 2025
      </p>
      <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] max-w-5xl">
        Fried chicken, <em className="font-editorial not-italic text-ember">done properly.</em>
      </h1>
      <p className="mt-8 text-lg md:text-xl max-w-xl text-charcoal/80">
        Five sauces. One truck. Wherever the queue goes.
      </p>
      <p className="mt-16 text-xs tracking-widest text-charcoal/50 uppercase">
        Site warming up · Check back soon
      </p>
    </main>
  )
}
