'use client'

import { motion } from 'framer-motion'

export function AdmissionsCTA() {
  return (
    <section id="admissions" className="section-depth relative overflow-hidden bg-[#caa66a] px-6 py-20 text-[#0b2a20] lg:py-28">
      <div className="absolute inset-0 bg-[url('/images/dps-hero-students.png')] bg-cover bg-[center_30%] opacity-24" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(202,166,106,0.94),rgba(246,241,232,0.78)_48%,rgba(202,166,106,0.9)),radial-gradient(circle_at_14%_22%,rgba(255,255,255,0.32),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(6,24,19,0.15),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,19,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(6,24,19,0.06)_1px,transparent_1px)] bg-[size:78px_78px] opacity-45" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/35" />
      <div className="absolute -bottom-28 left-10 h-72 w-72 rounded-full border border-white/25" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75 }}
        className="surface-lift edge-highlight relative mx-auto grid max-w-[96rem] overflow-hidden rounded-[1.75rem] border border-[#061813]/12 bg-white/28 backdrop-blur md:grid-cols-[1fr_0.42fr]"
      >
        <div className="relative overflow-hidden p-6 sm:p-8 lg:p-12">
          <div className="absolute -right-16 top-8 h-56 w-56 rounded-full bg-white/24 blur-3xl" />
          <p className="text-xs font-bold uppercase tracking-[0.25em]">Admissions journey</p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,4.8vw,5.4rem)] font-semibold leading-[1.02]">
            Begin your child&apos;s journey with us.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#173f31]">
            Request a prospectus, speak with the admissions team, understand the process, and plan
            the right next step for your family.
          </p>
          <div className="relative mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:admissions@dpsgurugram.edu"
              className="rounded-md bg-[#061813] px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_18px_48px_rgba(6,24,19,0.24)] transition hover:-translate-y-1 hover:bg-[#0a2a20]"
            >
              Book a Campus Visit
            </a>
            <a
              href="mailto:admissions@dpsgurugram.edu"
              className="rounded-md border border-[#061813]/30 bg-white/28 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#061813] transition hover:-translate-y-1 hover:bg-white/50"
            >
              Apply for Admission
            </a>
            <a
              href="tel:+910000000000"
              className="rounded-md border border-[#061813]/22 bg-[#061813]/8 px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[#061813] transition hover:-translate-y-1 hover:bg-[#061813]/12"
            >
              Talk to Admissions Team
            </a>
          </div>
          <div className="relative mt-9 grid gap-3 sm:grid-cols-3">
            {['Visit', 'Meet', 'Decide'].map((item) => (
              <div key={item} className="rounded-[1rem] border border-[#061813]/12 bg-white/26 px-4 py-3">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.14em]">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative border-t border-[#061813]/12 bg-[#061813] p-6 text-white md:border-l md:border-t-0 sm:p-8 lg:p-10">
          <div className="absolute inset-0 depth-mesh-dark opacity-30" />
          <div className="relative">
          <p className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
            What happens next
          </p>
          <div className="mt-8 grid gap-4">
            {['Share your child details', 'Speak with admissions', 'Visit the campus', 'Plan the right entry'].map(
              (step, index) => (
                <div key={step} className="grid grid-cols-[2.5rem_1fr] items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d9bd80]/35 text-xs font-black text-[#d9bd80]">
                    0{index + 1}
                  </span>
                  <p className="text-sm font-semibold leading-5 text-white/82">{step}</p>
                </div>
              ),
            )}
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
