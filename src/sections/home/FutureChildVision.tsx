const insights = ['How to choose the right school', 'AI and learning', 'Raising resilient children']

export function FutureChildVision() {
  return (
    <section id="insights" className="bg-[#f6f1e8] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77e3e]">
              Insights for modern parents
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0b2a20] md:text-5xl">
              The website should help parents decide, not just browse.
            </h2>
          </div>
          <div className="grid gap-4">
            {insights.map((insight) => (
              <article key={insight} className="rounded-3xl bg-white p-7 shadow-[0_24px_70px_rgba(51,40,20,0.08)]">
                <p className="text-xl font-semibold text-[#0b2a20]">{insight}</p>
                <p className="mt-3 text-sm leading-7 text-[#52665e]">
                  Thoughtful parent resources create trust before the admissions conversation begins.
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
