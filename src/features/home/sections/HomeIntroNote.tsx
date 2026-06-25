'use client'

import { motion } from 'framer-motion'

export function HomeIntroNote() {
  return (
    <section className="overflow-hidden bg-white px-5 py-14 text-black sm:px-8 sm:py-16 lg:px-12 lg:py-24">
      <div className="mx-auto w-full max-w-[112rem]">
        <div className="px-0 py-2 sm:px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
            
            {/* Left Heading */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="max-w-2xl font-serif text-[clamp(2.2rem,4vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-black">
                The Future Will Belong to Children Who Can Think, Care, and Create
              </h2>

              <div className="mt-8 h-px w-32 bg-black" />
            </motion.div>

            {/* Right Content Box */}
            <motion.div
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:pt-28"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-[#01aaff] px-6 py-8 shadow-[0_24px_80px_rgba(1,170,255,0.28)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                
                {/* Decorative Blur Circle */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/25 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-white/20 blur-3xl" />

                <div className="relative z-10 space-y-6">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-white/90">
                    Future-ready learning
                  </p>

                  <div className="space-y-5 text-[clamp(1rem,1.12vw,1.25rem)] font-medium leading-[1.9] text-white">
                    <p>
                      - The world our children will inherit is changing rapidly.
                      Knowledge alone is no longer enough. Children need curiosity
                      to explore, wisdom to make good decisions, confidence to lead,
                      and compassion to make a difference.
                    </p>

                    <p>
                      - At DPS, we are building a learning community where academic
                      excellence, character, wellbeing, and future readiness come
                      together to help every child thrive.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}