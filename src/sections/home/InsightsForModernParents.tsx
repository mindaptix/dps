'use client'

import { motion } from 'framer-motion'

const insights = [
  ['How to choose the right school', 'A practical lens for safety, happiness, academics and fit.'],
  ['Future-ready learning', "What will matter when today's children grow up?"],
  ['AI and children', 'How parents can think about technology with balance and judgment.'],
  ['Raising confident children', 'What attention, belonging and visible progress look like at school.'],
]

export function InsightsForModernParents() {
  return (
    <section id="insights" className="section-depth relative overflow-hidden bg-[#f7f2e9] px-6 py-20 lg:py-28">
      <div className="absolute inset-0 depth-mesh opacity-80" />
      <div className="absolute -right-28 top-16 h-80 w-80 rounded-full bg-[#caa66a]/18 blur-3xl" />
      <div className="absolute -left-24 bottom-12 h-72 w-72 rounded-full bg-[#0b513c]/10 blur-3xl" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <div className="relative mx-auto max-w-[96rem]">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a77e3e]">
          Insights for modern parents
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
          <h2 className="text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[1.02] text-[#0b2a20]">
            A parent intelligence hub, not a school brochure.
          </h2>
          <p className="text-base leading-8 text-[#52665e]">
            The best school websites give families clarity before they ask for a call. These
            insights turn curiosity into trust.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {insights.map(([insight, detail], index) => (
            <motion.article
              key={insight}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
              whileHover={{ y: -12, scale: 1.015 }}
              className={[
                'surface-lift edge-highlight group relative min-h-72 overflow-hidden rounded-[1.45rem] border border-[#d8c495]/55 p-6 transition duration-500 hover:bg-[#073c2c] hover:text-white',
                index === 0
                  ? 'bg-[#073c2c] text-white md:col-span-6 lg:p-8'
                  : 'bg-white md:col-span-6 lg:col-span-2',
              ].join(' ')}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#073c2c] via-[#caa66a] to-[#073c2c]" />
              {index === 0 ? (
                <>
                  <div className="absolute inset-0 bg-[url('/images/dps-learning-different.png')] bg-cover bg-center opacity-18" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,60,44,0.42),rgba(7,60,44,0.92))]" />
                </>
              ) : null}
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#caa66a]/12 blur-2xl transition group-hover:bg-[#caa66a]/20" />
              <div className="flex items-center justify-between">
                <p className={`${index === 0 ? 'text-[#d9bd80]' : 'text-[#a77e3e]'} relative text-sm font-black group-hover:text-[#d9bd80]`}>
                  0{index + 1}
                </p>
                <span className={`${index === 0 ? 'border-[#d9bd80]/40 text-[#d9bd80]' : 'border-[#d8c495]/60 text-[#0b2a20]'} relative grid h-10 w-10 place-items-center rounded-full transition group-hover:border-[#d9bd80]/40 group-hover:text-[#d9bd80]`}>
                  -&gt;
                </span>
              </div>
              <h3 className={`${index === 0 ? 'mt-24 text-4xl' : 'mt-18 text-2xl'} relative font-semibold leading-tight`}>
                {insight}
              </h3>
              <p className={`${index === 0 ? 'text-white/72' : 'text-[#52665e]'} relative mt-4 text-sm leading-7 group-hover:text-white/68`}>
                {detail}
              </p>
              {index === 0 ? (
                <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                  {['Signals', 'Choices', 'Support'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#d8c495]/65 px-4 py-2 text-center text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#a77e3e] group-hover:border-[#d9bd80]/30 group-hover:text-[#d9bd80]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
