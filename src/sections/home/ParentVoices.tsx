'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const voices = [
  {
    quote: 'Teachers know our child closely and keep us informed without making school feel transactional.',
    name: 'Founding Parent',
    focus: 'Trust and communication',
  },
  {
    quote: 'The school balances academic ambition with confidence, kindness, and visible joy.',
    name: 'Primary Parent',
    focus: 'Happiness and growth',
  },
  {
    quote: 'We wanted safety and strong learning. We found a community that understands childhood.',
    name: 'Middle School Parent',
    focus: 'Safety and belonging',
  },
]
const videoMoments = [
  ['Happiness', 'Morning drop-off feels settled and warm.'],
  ['Safety', 'Everyday routines are visible and reassuring.'],
  ['Progress', 'Teachers describe growth in practical language.'],
]

export function ParentVoices() {
  const [active, setActive] = useState(0)
  const voice = voices[active]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % voices.length)
    }, 4200)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section-depth relative overflow-hidden bg-[#061813] px-6 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(202,166,106,0.18),transparent_28%),radial-gradient(circle_at_86%_74%,rgba(82,132,104,0.16),transparent_30%)]" />
      <div className="absolute inset-0 depth-mesh-dark opacity-55" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <div className="relative mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="surface-lift-dark edge-highlight relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d9bd80] to-transparent" />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#d9bd80]">
            Parent voices
          </p>
          <h2 className="mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[1.02]">
            The strongest proof is how families describe the feeling.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/66">
            Parents are looking for more than facilities. They are listening for care,
            communication, safety and the everyday signs that their child is known.
          </p>
          <div className="mt-10 flex gap-3">
            {voices.map((item, index) => (
              <button
                key={item.focus}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  active === index ? 'w-12 bg-[#d9bd80]' : 'w-2.5 bg-white/25'
                }`}
                aria-label={`Show ${item.focus}`}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['Known child', 'Clear updates', 'Joyful growth'].map((label) => (
              <div key={label} className="rounded-[1rem] border border-[#d9bd80]/18 bg-[#d9bd80]/8 p-4">
                <p className="text-[0.62rem] font-black uppercase leading-4 tracking-[0.13em] text-[#d9bd80]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
          <div className="surface-lift-dark edge-highlight relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[url('/images/dps-founding-families.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#061813]/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9bd80]/70 to-transparent" />
            <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-[#d9bd80]/45 bg-[#061813]/62 text-[#d9bd80] shadow-[0_0_28px_rgba(217,189,128,0.2)] backdrop-blur">
              <span className="ml-0.5 text-xs font-black uppercase tracking-[0.08em]">Play</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.1rem] border border-white/12 bg-[#061813]/70 p-4 backdrop-blur-xl">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">
                Family experience
              </p>
              <p className="mt-2 text-sm leading-6 text-white/66">Trust begins before admission.</p>
            </div>
            <div className="absolute right-5 top-5 hidden w-44 rounded-[1rem] border border-white/12 bg-[#061813]/64 p-4 text-white backdrop-blur-xl sm:block">
              <p className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">
                Parent clip
              </p>
              <p className="mt-2 text-lg font-semibold leading-tight">Real questions. Clear answers.</p>
            </div>
          </div>
          <div className="surface-lift-dark edge-highlight relative min-h-[30rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d9bd80]/10 blur-3xl" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d9bd80]/70 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={voice.quote}
                initial={{ opacity: 0, x: 32, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -28, filter: 'blur(8px)' }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex min-h-[24rem] flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d9bd80]">
                    {voice.focus}
                  </p>
                  <p className="mt-10 text-3xl font-semibold leading-tight tracking-[-0.025em] text-white">
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </div>
                <footer>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#d9bd80]">
                    {voice.name}
                  </p>
                  <p className="mt-2 text-sm text-white/55">DPS Gurugram community</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-3 md:grid-cols-3">
          {videoMoments.map(([title, detail], index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_18px_54px_rgba(0,0,0,0.16)] backdrop-blur transition hover:border-[#d9bd80]/28 hover:bg-white/[0.07]"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#d9bd80]">
                Parent proof 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-none">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
