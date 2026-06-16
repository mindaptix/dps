'use client'

import { motion } from 'framer-motion'

const stories = [
  ['Student Stories', 'Children finding confidence on stage, field, lab, and classroom.'],
  ['Family Experiences', 'Parents seeing independence, discipline, and joy grow together.'],
  ['Founding Families', 'A community shaping the culture from the first day.'],
]

export function StudentSuccessWall() {
  return (
    <section className="bg-[#f6f1e8] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77e3e]">
          Trust builders
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-[#0b2a20] md:text-5xl">
          Success is not one trophy. It is the daily evidence that a child is becoming more capable.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stories.map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[2rem] bg-white p-8 shadow-[0_24px_70px_rgba(51,40,20,0.08)]"
            >
              <div className="h-48 rounded-[1.5rem] bg-[linear-gradient(135deg,#0b2a20,#caa66a)] opacity-90" />
              <h3 className="mt-7 text-2xl font-semibold text-[#0b2a20]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#52665e]">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
