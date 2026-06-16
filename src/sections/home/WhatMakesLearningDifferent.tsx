'use client'

import { motion } from 'framer-motion'

const pillars = [
  ['Know', 'Strong academic foundations with depth, discipline and visible mastery.', 'Concept clarity'],
  ['Think', 'Critical thinking through inquiry, debate and guided reflection.', 'Reasoning'],
  ['Create', 'Projects, design thinking, arts and innovation that make learning tangible.', 'Original work'],
  ['Connect', 'Relationships, communication and collaboration across real classroom moments.', 'Expression'],
  ['Contribute', 'Service, citizenship and responsibility that build a grounded worldview.', 'Purpose'],
]

export function WhatMakesLearningDifferent() {
  return (
    <section className="section-depth relative overflow-hidden bg-[#f7f2e9] px-6 py-20 lg:py-28">
      <div className="absolute inset-0 depth-mesh opacity-80" />
      <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#caa66a]/18 blur-3xl" />
      <div className="absolute -right-28 bottom-24 h-96 w-96 rounded-full bg-[#0b513c]/12 blur-3xl" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />

      <div className="relative mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="surface-lift edge-highlight relative min-h-[38rem] overflow-hidden rounded-[1.75rem] border border-[#e5d3aa] bg-[url('/images/dps-learning-different.png')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,24,19,0.06),rgba(6,24,19,0.82)),radial-gradient(circle_at_72%_22%,rgba(217,189,128,0.22),transparent_30%)]" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="absolute right-6 top-6 hidden rounded-[1.2rem] border border-white/14 bg-[#061813]/54 p-4 text-white shadow-[0_20px_58px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:block">
            <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
              Evidence loop
            </p>
            <p className="mt-2 text-2xl font-semibold leading-none">4-step rhythm</p>
          </div>
          <div className="absolute left-6 top-6 rounded-full border border-[#d9bd80]/45 bg-[#061813]/40 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#f1d891] backdrop-blur">
            Learning model
          </div>
          <div className="absolute bottom-7 left-7 right-7 overflow-hidden rounded-[1.4rem] border border-white/14 bg-[#061813]/76 p-6 text-white shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9bd80] to-transparent" />
            <p className="text-3xl font-semibold leading-tight">Learn. Apply. Reflect. Present.</p>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Children do not just consume lessons. They build evidence of understanding that
              parents can see and teachers can mentor.
            </p>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {['Learn', 'Apply', 'Reflect', 'Present'].map((step) => (
                <span
                  key={step}
                  className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-center text-[0.58rem] font-black uppercase tracking-[0.1em] text-[#d9bd80]"
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="surface-lift edge-highlight relative overflow-hidden rounded-[1.75rem] border border-[#e5d3aa] bg-white/70 p-6 backdrop-blur sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#073c2c] via-[#caa66a] to-[#073c2c]" />
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#caa66a]/16 blur-2xl" />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#a77e3e]">
            What makes learning different
          </p>
          <h2 className="mt-5 text-[clamp(2.35rem,4vw,4.7rem)] font-semibold leading-[1.02] text-[#0b2a20]">
            Learning parents can understand, and children can feel.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#52665e]">
            The classroom rhythm is designed around proof of growth: what the child knows, how the
            child thinks, what the child creates and how the child contributes.
          </p>

          <div className="mt-9 grid gap-3">
            {pillars.map(([title, text, cue], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ x: 12, scale: 1.015 }}
                className="group grid grid-cols-[4.5rem_1fr] items-center gap-5 rounded-[1.2rem] border border-[#d8c495]/60 bg-[#fbf8f1] p-4 shadow-[0_18px_54px_rgba(48,34,12,0.05)] transition hover:border-[#0b513c]/25 hover:bg-white hover:shadow-[0_24px_70px_rgba(48,34,12,0.12)] xl:grid-cols-[4.5rem_1fr_auto]"
              >
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#073c2c] text-sm font-black text-[#d9bd80] shadow-[0_14px_30px_rgba(7,60,44,0.18)]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0b2a20]">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#52665e]">{text}</p>
                </div>
                <p className="hidden rounded-full border border-[#d8c495]/70 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.12em] text-[#a77e3e] xl:block">
                  {cue}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 rounded-[1.2rem] border border-[#0b513c]/12 bg-[#073c2c] p-5 text-white shadow-[0_18px_54px_rgba(7,60,44,0.18)]">
            <p className="text-[0.64rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
              Parent clarity
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Every project, reflection and presentation becomes visible proof, so learning feels
              real instead of decorative.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
