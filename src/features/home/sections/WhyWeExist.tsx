'use client'

import { motion } from 'framer-motion'

const purposeCards = [
  {
    number: '01',
    title: 'Thoughtful Questions',
    body: 'The world needs people who ask better questions, think deeply, and look beyond obvious answers.',
    label: 'Ask',
    bg: '#0E425C',
    text: '#ffffff',
  },
  {
    number: '02',
    title: 'Problem Solvers',
    body: 'Children must learn how to understand challenges, create solutions, and act with confidence.',
    label: 'Solve',
    bg: '#8C1D17',
    text: '#ffffff',
  },
  {
    number: '03',
    title: 'Work Across Differences',
    body: 'They should listen, collaborate, respect diverse perspectives, and work with people unlike themselves.',
    label: 'Unite',
    bg: '#EDAC1E',
    text: '#101828',
  },
  {
    number: '04',
    title: 'Integrity & Care',
    body: 'True education shapes people who lead with honesty, kindness, responsibility, and compassion.',
    label: 'Care',
    bg: '#026833',
    text: '#ffffff',
  },
]

export function WhyWeExist() {
  return (
    <section
      id="why-we-exist"
      className="relative overflow-hidden bg-white px-5 py-14 text-[#101828] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="pointer-events-none absolute -left-44 top-8 h-96 w-96 rounded-full bg-[#0E425C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 bottom-8 h-[30rem] w-[30rem] rounded-full bg-[#EDAC1E]/12 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[112rem]">
        {/* Heading Area */}
        <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.28em] text-[]">
              Section 03
            </p>

            <h2 className="font-serif text-[clamp(2rem,3.2vw,4rem)] font-semibold leading-[1.05] tracking-[-0.045em] text-[#101828]">
              Why We Exist
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
          >
            <p className="text-[clamp(1rem,1.25vw,1.32rem)] font-medium leading-[1.75] text-[#294467]">
              The world does not need more people who simply know answers. It
              needs people who ask thoughtful questions, solve problems, work
              across differences, lead with integrity, and care.
            </p>
          </motion.div>
        </div>

        {/* Full Colour Boxes */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {purposeCards.map((card, index) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 46, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.72,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.28, ease: 'easeOut' },
              }}
              className="group relative min-h-[25rem] overflow-hidden rounded-[1.8rem] p-6 shadow-[0_26px_90px_rgba(16,24,40,0.12)] transition duration-500 hover:shadow-[0_36px_110px_rgba(16,24,40,0.18)] sm:p-7 lg:p-8"
              style={{
                backgroundColor: card.bg,
                color: card.text,
              }}
            >
              {/* Decorative shapes */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-current/20" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.22em]">
                  {card.number}
                </span>

                <span className="rounded-full border border-current/35 bg-white/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.22em] backdrop-blur-sm">
                  {card.label}
                </span>
              </div>

              <div className="relative z-10 mt-20">
                <h3 className="max-w-[15rem] text-[clamp(1.45rem,1.8vw,2.25rem)] font-black uppercase leading-[0.95] tracking-[-0.045em]">
                  {card.title}
                </h3>

                <p className="mt-5 text-[0.98rem] font-semibold leading-7 opacity-90">
                  {card.body}
                </p>
              </div>

              <div className="absolute bottom-6 left-6 right-6 h-px bg-current/25" />

              <div className="absolute bottom-6 right-6 text-[0.68rem] font-black uppercase tracking-[0.22em] opacity-70">
                DPS
              </div>
            </motion.article>
          ))}
        </div>

        {/* Clean Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-[1.8rem] border border-[#101828]/10 bg-[#f8fafc] p-6 shadow-[0_24px_80px_rgba(16,24,40,0.08)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.54fr_0.46fr] lg:items-center">
            <div>
              <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-[#8C1D17]">
                Our responsibility
              </p>

              <h3 className="mt-4 max-w-5xl font-serif text-[clamp(1.7rem,3vw,3.5rem)] font-semibold leading-[1.08] tracking-[-0.045em] text-[#101828]">
                To educate minds, shape character, and nurture human potential.
              </h3>
            </div>

            <div className="relative overflow-hidden rounded-[1.35rem] bg-white p-5 shadow-[0_18px_50px_rgba(16,24,40,0.08)] sm:p-6">
              <div className="mb-5 flex gap-2">
                <span className="h-2 w-10 rounded-full bg-[#0E425C]" />
                <span className="h-2 w-10 rounded-full bg-[#8C1D17]" />
                <span className="h-2 w-10 rounded-full bg-[#EDAC1E]" />
                <span className="h-2 w-10 rounded-full bg-[#026833]" />
              </div>

              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#101828]/45">
                Every decision begins with one question
              </p>

              <p className="mt-4 text-[clamp(1rem,1.25vw,1.25rem)] font-medium leading-8 text-[#294467]">
                Will this help a child become a better thinker, a kinder human,
                and a stronger leader?
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}