'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const spaces = [
  ['Library', 'Quiet focus and guided discovery', '18%', '34%'],
  ['Robotics Lab', 'Hands-on building and experimentation', '46%', '28%'],
  ['Sports Ground', 'Strength, teamwork and resilience', '76%', '46%'],
  ['Arts Studios', 'Expression, performance and confidence', '32%', '67%'],
  ['Wellness Zone', 'Everyday safety with responsive support', '61%', '70%'],
  ['Smart Classrooms', 'Planned learning with parent reassurance', '84%', '24%'],
]

const campusStats = [
  ['6', 'Distinct learning zones'],
  ['100%', 'Safety-first planning'],
  ['All day', 'Movement + discovery'],
]

const spotlightCards = [
  {
    title: 'Library',
    detail: 'Quiet focus',
    image: '/images/dps-campus-life.png',
  },
  {
    title: 'Robotics',
    detail: 'Hands-on making',
    image: '/images/dps-learning-different.png',
  },
  {
    title: 'Sports',
    detail: 'Energy and teamwork',
    image: '/images/leadership.png',
  },
]

export function CampusOfPossibility() {
  return (
    <section id="campus" className="section-depth relative overflow-hidden bg-[#fbfdf9] px-6 py-18 text-[#173628] lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(163,206,141,0.18),transparent_30%),radial-gradient(circle_at_18%_70%,rgba(202,166,106,0.08),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f7fcf2_58%,#ffffff_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(100,145,89,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(100,145,89,0.055)_1px,transparent_1px)] [background-size:96px_96px]" />
      <div className="section-divider-glow absolute inset-x-10 top-0 opacity-35" />

      <div className="relative mx-auto max-w-[96rem]">
        <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#7fb069]">Campus of possibility</p>
            <h2 className="mt-4 max-w-xl text-[clamp(2.6rem,4.6vw,5.4rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-[#173628]">
              A campus that feels alive, open and intentional.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[#577065]">
            Spaces are planned for movement, discovery, quiet focus and care, so each area feels distinct and useful.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="surface-lift edge-highlight relative mt-10 min-h-[44rem] overflow-hidden rounded-[1.9rem] border border-[#dbeed3] bg-white/88 shadow-[0_24px_80px_rgba(116,154,100,0.08)]"
        >
          <div className="absolute inset-0 bg-[url('/images/dps-campus-life.png')] bg-cover bg-center opacity-[0.22] blur-[1px]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.94),rgba(247,252,242,0.74)_38%,rgba(255,255,255,0.18)),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.56))]" />

          <div className="relative grid min-h-[44rem] gap-6 p-5 sm:p-7 lg:grid-cols-[0.44fr_0.56fr] lg:p-8">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dbeed3] bg-white/88 p-5 shadow-[0_18px_40px_rgba(116,154,100,0.08)] backdrop-blur-xl lg:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-full border border-[#8cc27a]/28 bg-white px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#6ea565]">
                  Parent reassurance
                </div>
                <div className="hidden rounded-full border border-[#dbeed3] bg-[#f6fbf4] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#7fb069] sm:block">
                  Campus zones
                </div>
              </div>

              <p className="mt-5 max-w-md text-[clamp(2rem,3vw,3rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[#173628]">
                Every space has a purpose.
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-[#577065]">
                Safety, independence and creativity are designed into the day.
              </p>

              <div className="mt-6 grid gap-3">
                {campusStats.map(([value, label], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    className="grid grid-cols-[4rem_1fr] items-center gap-4 rounded-[1.2rem] border border-[#dbeed3] bg-[#f6fbf4] px-4 py-3"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#8cc27a] text-lg font-black text-white">
                      {value}
                    </div>
                    <div>
                      <p className="text-[0.64rem] font-black uppercase tracking-[0.18em] text-[#7fb069]">
                        {label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {spotlightCards.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group overflow-hidden rounded-[1.2rem] border border-[#dbeed3] bg-white shadow-[0_16px_40px_rgba(116,154,100,0.08)]"
                  >
                    <div className="relative h-28">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 12vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.55))]" />
                    </div>
                    <div className="p-3">
                      <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#7fb069]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#577065]">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#dbeed3] bg-white/80 shadow-[0_18px_40px_rgba(116,154,100,0.08)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.82))]" />

              <div className="relative h-full min-h-[34rem] p-5 sm:p-7">
                <motion.div
                  initial={{ opacity: 0, scale: 1.04 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/images/dps-campus-life.png"
                    alt="Campus life"
                    fill
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.16)_45%,rgba(255,255,255,0.84)_100%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.70))]" />

                <motion.div
                  initial={{ opacity: 0, y: 18, x: -10 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="absolute left-5 top-20 hidden w-44 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/82 shadow-[0_18px_40px_rgba(116,154,100,0.12)] backdrop-blur-xl lg:block"
                >
                  <div className="relative h-32">
                    <Image
                      src="/images/primary-school.png"
                      alt="Smart classrooms"
                      fill
                      sizes="18vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-[#7fb069]">
                      Smart classrooms
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18, x: 10 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.16 }}
                  className="absolute right-5 top-32 hidden w-40 overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/82 shadow-[0_18px_40px_rgba(116,154,100,0.12)] backdrop-blur-xl lg:block"
                >
                  <div className="relative h-28">
                    <Image
                      src="/images/leadership.png"
                      alt="Performance area"
                      fill
                      sizes="16vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-[#7fb069]">
                      Perform
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18, x: -8 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.22 }}
                  className="absolute left-1/2 bottom-28 hidden w-52 -translate-x-1/2 overflow-hidden rounded-[1.45rem] border border-white/70 bg-white/86 shadow-[0_18px_40px_rgba(116,154,100,0.12)] backdrop-blur-xl lg:block"
                >
                  <div className="relative h-28">
                    <Image
                      src="/images/dps-learning-different.png"
                      alt="Science and tech"
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.16em] text-[#7fb069]">
                      Discover
                    </p>
                  </div>
                </motion.div>

                <div className="absolute left-6 top-6 rounded-full border border-[#8cc27a]/30 bg-white/92 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#6ea565] backdrop-blur-sm">
                  Safety + discovery
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="absolute right-6 top-6 rounded-[1.15rem] border border-[#dbeed3] bg-white/92 px-4 py-3 shadow-[0_18px_40px_rgba(116,154,100,0.08)] backdrop-blur-md"
                >
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#7fb069]">
                    6 zones
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#173628]">Designed to work together</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="absolute left-5 bottom-5 right-5 rounded-[1.5rem] border border-[#dbeed3] bg-white/92 p-4 shadow-[0_18px_40px_rgba(116,154,100,0.08)] backdrop-blur-xl"
                >
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#7fb069]">
                    Campus rhythm
                  </p>
                  <p className="mt-2 text-2xl font-semibold leading-tight text-[#173628]">
                    Movement, focus and play in one flow.
                  </p>
                </motion.div>

                <div className="pointer-events-none absolute inset-0">
                  {spaces.map(([space, detail, x, y], index) => (
                    <motion.div
                      key={space}
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.08 + index * 0.04 }}
                      className="group/hotspot pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: x, top: y }}
                    >
                      <div className="relative">
                        <span className="absolute inset-0 rounded-full bg-[#8cc27a]/22 blur-md" />
                        <span className="relative block h-4 w-4 rounded-full border border-[#dff0d8] bg-[#8cc27a] shadow-[0_0_28px_rgba(140,194,122,0.55)]" />
                        <div className="absolute left-1/2 top-7 w-56 -translate-x-1/2 rounded-[1rem] border border-[#dbeed3] bg-white/92 p-4 opacity-0 shadow-[0_18px_54px_rgba(116,154,100,0.12)] backdrop-blur-xl transition group-hover/hotspot:opacity-100">
                          <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#7fb069]">
                            {space}
                          </p>
                          <p className="mt-2 text-xs leading-5 text-[#577065]">{detail}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#8cc27a] to-transparent" />
        </motion.div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {spaces.map(([space, detail], index) => (
            <motion.div
              key={space}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-[1.15rem] border border-[#dbeed3] bg-white/86 p-4 shadow-[0_18px_52px_rgba(116,154,100,0.08)] backdrop-blur-xl transition hover:border-[#8cc27a]/38 hover:bg-white"
            >
              <p className="text-sm font-black uppercase tracking-[0.1em] text-[#7fb069]">{space}</p>
              <p className="mt-2 text-xs leading-5 text-[#577065]">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
