export function HomeIntroNote() {
  return (
    <section className="flex min-h-screen items-center bg-white px-5 py-20 text-black sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[112rem]">
        <div className="px-0 py-4 sm:px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-black">
                Why it matters
              </p>
              <div className="mt-5 h-px w-24 bg-black" />
            </div>

            <div className="space-y-5 font-serif text-[clamp(1.55rem,2.5vw,2.8rem)] font-medium leading-tight text-black">
              <p>
                Children need curiosity to explore, wisdom to make good decisions,
                confidence to lead, and compassion to make a difference.
              </p>
              <p>
                At DPS, we are building a learning community where academic excellence,
                character, wellbeing, and future readiness come together to help every child thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
