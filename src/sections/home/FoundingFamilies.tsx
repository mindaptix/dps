'use client'

import { motion } from 'framer-motion'

const familyNotes = [
  'A founding community shapes the school culture from day one.',
  'Parents become partners in building confidence, values and belonging.',
  'Every admission conversation starts with the child, not the form.',
]
const editorialCards = [
  ['01', 'Shared standards', 'Families help set the tone for care, ambition and belonging.'],
  ['02', 'Open dialogue', 'Early parents get closer conversations with school leadership.'],
  ['03', 'Child-first fit', 'The right pathway is discussed before paperwork begins.'],
]

export function FoundingFamilies() {
  return (
    <section className="section-depth relative overflow-hidden bg-[#efe5d4] px-6 py-20 lg:py-28">
      <div className="absolute inset-0 depth-mesh opacity-75" />
      <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#caa66a]/22 blur-3xl" />
      <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-[#0b513c]/10 blur-3xl" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <div className="relative mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
        <div className="surface-lift edge-highlight relative overflow-hidden rounded-[1.75rem] border border-[#d8c495]/70 bg-white/62 p-6 backdrop-blur sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#073c2c] via-[#caa66a] to-[#073c2c]" />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a77e3e]">Founding families</p>
          <h2 className="mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[1.02] text-[#0b2a20]">
            The first families help define the culture children grow inside.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#52665e]">
            For early families, admission is not a transaction. It is a partnership in shaping the
            expectations, rituals and community standards of a new school.
          </p>
          <div className="mt-10 grid gap-4">
            {familyNotes.map((note, index) => (
              <motion.div
                key={note}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="grid grid-cols-[3.25rem_1fr] items-start gap-4 rounded-[1.2rem] border border-[#d8c495]/55 bg-[#fbf8f1] p-5 text-sm leading-7 text-[#52665e] shadow-[0_18px_54px_rgba(48,34,12,0.05)] transition hover:-translate-y-1 hover:border-[#0b513c]/22 hover:bg-white hover:shadow-[0_24px_70px_rgba(48,34,12,0.12)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#073c2c] text-xs font-black text-[#d9bd80]">
                  0{index + 1}
                </span>
                <span>{note}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-[1.25rem] border border-[#d8c495]/65 bg-white/70">
            {['Belonging', 'Voice', 'Trust'].map((item) => (
              <div key={item} className="border-r border-[#d8c495]/45 px-4 py-5 last:border-r-0">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.13em] text-[#a77e3e]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="surface-lift edge-highlight relative min-h-[42rem] overflow-hidden rounded-[1.75rem] border border-[#d8c495]/70 bg-[#061813]"
        >
          <div className="absolute inset-0 bg-[url('/images/dps-founding-families.png')] bg-cover bg-center opacity-82" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,24,19,0.02),rgba(6,24,19,0.86)),radial-gradient(circle_at_72%_18%,rgba(217,189,128,0.18),transparent_32%)]" />
          <div className="absolute left-7 top-7 rounded-full border border-[#d9bd80]/35 bg-[#061813]/48 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#d9bd80] backdrop-blur">
            Founding cohort
          </div>
          <div className="absolute right-7 top-7 hidden rounded-[1.2rem] border border-white/12 bg-[#061813]/62 p-4 text-white backdrop-blur-xl sm:block">
            <p className="text-[0.6rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">
              Culture build
            </p>
            <p className="mt-2 text-2xl font-semibold leading-none">Day one</p>
          </div>
          <div className="absolute left-8 top-28 hidden w-56 -rotate-3 rounded-[1.2rem] border border-white/14 bg-[#f6f1e8] p-4 text-[#0b2a20] shadow-[0_24px_70px_rgba(0,0,0,0.24)] lg:block">
            <p className="text-[0.6rem] font-black uppercase tracking-[0.14em] text-[#a77e3e]">
              Parent concern
            </p>
            <p className="mt-2 text-sm font-semibold leading-5">Will my child be seen?</p>
          </div>
          <div className="absolute right-10 top-48 hidden w-60 rotate-2 rounded-[1.2rem] border border-[#d9bd80]/26 bg-[#061813]/80 p-4 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl lg:block">
            <p className="text-[0.6rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">
              School answer
            </p>
            <p className="mt-2 text-sm font-semibold leading-5">Yes, through mentoring and close observation.</p>
          </div>
          <div className="absolute bottom-7 left-7 right-7 rounded-[1.35rem] border border-white/14 bg-[#061813]/78 p-6 text-white backdrop-blur-xl">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
              Community promise
            </p>
            <p className="mt-3 text-3xl font-semibold leading-tight">
              A school culture families can feel from the first conversation.
            </p>
            <div className="mt-5 grid gap-2 md:grid-cols-3">
              {editorialCards.map(([count, title, detail]) => (
                <div key={title} className="rounded-[0.95rem] border border-white/10 bg-white/[0.055] p-3">
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">
                    {count}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/56">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
