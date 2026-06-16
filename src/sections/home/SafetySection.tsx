'use client'

import { motion } from 'framer-motion'

const campus = ['Learning Commons', 'Innovation Labs', 'Science Labs', 'Sports Ecosystem', 'Arts Spaces', 'Medical Care']

export function SafetySection() {
  return (
    <section id="campus" className="bg-[#efe5d4] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77e3e]">
            Campus of possibility
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0b2a20] md:text-5xl">
            Designed for safety, exploration, performance, and care.
          </h2>
          <p className="mt-6 text-base leading-8 text-[#52665e]">
            The campus experience should reassure parents and excite children: supervised movement,
            secure systems, medical support, purposeful learning spaces, and room to discover talent.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {campus.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="rounded-3xl border border-[#caa66a]/20 bg-[#fbf7ef] p-6 shadow-[0_18px_50px_rgba(67,49,20,0.06)]"
            >
              <p className="text-lg font-semibold text-[#0b2a20]">{item}</p>
              <p className="mt-3 text-sm leading-6 text-[#52665e]">
                Built to make everyday learning feel secure, inspiring, and alive.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
