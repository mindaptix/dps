'use client'

import { motion } from 'framer-motion'

const spaces = [
  ['Library', 'Quiet focus and guided discovery', '18%', '34%'],
  ['Robotics Lab', 'Hands-on building and experimentation', '46%', '28%'],
  ['Sports Ground', 'Strength, teamwork and resilience', '76%', '46%'],
  ['Arts Studios', 'Expression, performance and confidence', '32%', '67%'],
  ['Wellness Zone', 'Everyday safety with responsive support', '61%', '70%'],
  ['Smart Classrooms', 'Planned learning with parent reassurance', '84%', '24%'],
]

export function CampusOfPossibility() {
  return (
    <section id="campus" className="section-depth relative overflow-hidden bg-[#061813] px-6 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(202,166,106,0.18),transparent_30%),linear-gradient(180deg,#061813_0%,#09251d_58%,#061813_100%)]" />
      <div className="absolute inset-0 depth-mesh-dark opacity-50" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <div className="relative mx-auto max-w-[96rem]">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d9bd80]">Campus of possibility</p>
            <h2 className="mt-5 text-[clamp(2.4rem,4.2vw,5rem)] font-semibold leading-[1.02]">
              A campus designed for confidence, care and discovery.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/68">
            Spaces are designed for safety, discovery, movement, collaboration and care, so the
            school day feels secure and full of possibility.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          className="surface-lift-dark edge-highlight relative mt-12 min-h-[42rem] overflow-hidden rounded-[1.75rem] border border-[#d9bd80]/20 bg-[url('/images/dps-campus-life.png')] bg-cover bg-center transition duration-700 hover:bg-[center_46%]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,24,19,0.76),rgba(6,24,19,0.2)_52%,rgba(6,24,19,0.72)),linear-gradient(180deg,rgba(6,24,19,0.08),rgba(6,24,19,0.88))]" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d9bd80] to-transparent" />
          <div className="absolute right-8 top-8 hidden rounded-[1.25rem] border border-white/12 bg-[#061813]/64 p-5 text-white shadow-[0_22px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:block">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
              Safety + discovery
            </p>
            <p className="mt-2 text-3xl font-semibold leading-none">6 zones</p>
          </div>
          <div className="relative grid min-h-[40rem] grid-rows-[1fr_auto] p-6 sm:p-8">
            <div className="grid content-start gap-4 md:max-w-md">
              <div className="w-fit rounded-full border border-[#d9bd80]/35 bg-black/20 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#d9bd80] backdrop-blur">
                Parent reassurance
              </div>
              <div className="rounded-[1.4rem] border border-white/12 bg-[#061813]/64 p-6 backdrop-blur-xl">
                <p className="text-3xl font-semibold leading-tight">Every space has a purpose.</p>
                <p className="mt-4 text-sm leading-7 text-white/66">
                  Safety, independence, movement and creativity are planned into the day rather
                  than treated as add-ons.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              {spaces.map(([space, detail, x, y], index) => (
                <motion.div
                  key={space}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.05 }}
                  className="group/hotspot pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: x, top: y }}
                >
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-[#d9bd80]/35 blur-md" />
                    <span className="relative block h-4 w-4 rounded-full border border-[#fff5d6] bg-[#d9bd80] shadow-[0_0_28px_rgba(217,189,128,0.95)]" />
                    <div className="absolute left-1/2 top-7 w-56 -translate-x-1/2 rounded-[1rem] border border-white/12 bg-[#061813]/78 p-4 opacity-0 shadow-[0_18px_54px_rgba(0,0,0,0.28)] backdrop-blur-xl transition group-hover/hotspot:opacity-100">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">
                        {space}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-white/68">{detail}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              {spaces.map(([space, detail], index) => (
                <motion.div
                  key={space}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="rounded-[1.15rem] border border-white/12 bg-[#061813]/68 p-5 shadow-[0_18px_52px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#d9bd80]/38 hover:bg-[#061813]/82"
                >
                  <p className="text-sm font-black uppercase tracking-[0.1em] text-[#d9bd80]">{space}</p>
                  <p className="mt-3 text-xs leading-5 text-white/62">{detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
