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
    }, 3800)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="section-depth relative overflow-hidden bg-[#f4f8f3] px-6 py-20 text-[#173628] lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(134,185,125,0.18),transparent_28%),radial-gradient(circle_at_86%_74%,rgba(110,165,101,0.14),transparent_30%)]" />
      <div className="absolute inset-0 depth-mesh opacity-45" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <div className="relative mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="surface-lift edge-highlight relative overflow-hidden rounded-[1.75rem] border border-[#d9e7d4] bg-white/82 p-6 backdrop-blur sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#6ea565] to-transparent" />
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#6ea565]">
            Parent voices
          </p>
          <h2 className="mt-5 text-[clamp(2.4rem,4vw,4.8rem)] font-semibold leading-[1.02] text-[#173628]">
            The strongest proof is how families describe the feeling.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#567063]">
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
                  active === index ? 'w-12 bg-[#6ea565]' : 'w-2.5 bg-[#c9dcc4]'
                }`}
                aria-label={`Show ${item.focus}`}
              />
            ))}
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {['Known child', 'Clear updates', 'Joyful growth'].map((label) => (
              <div key={label} className="rounded-[1rem] border border-[#d9e7d4] bg-[#f1f7ef] p-4">
                <p className="text-[0.62rem] font-black uppercase leading-4 tracking-[0.13em] text-[#6ea565]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-[0.72fr_1fr]">
          <div className="surface-lift edge-highlight relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-[#d9e7d4] bg-[url('/images/dps-founding-families.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4f8f3]/78 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8ebf80]/70 to-transparent" />
            <div className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-full border border-[#8ebf80]/45 bg-white/82 text-[#6ea565] shadow-[0_0_28px_rgba(134,185,125,0.12)] backdrop-blur">
              <span className="ml-0.5 text-xs font-black uppercase tracking-[0.08em]">Play</span>
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.1rem] border border-[#d9e7d4] bg-white/88 p-4 backdrop-blur-xl">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#6ea565]">
                Family experience
              </p>
              <p className="mt-2 text-sm leading-6 text-[#567063]">Trust begins before admission.</p>
            </div>
            <div className="absolute right-5 top-5 hidden w-44 rounded-[1rem] border border-[#d9e7d4] bg-white/90 p-4 text-[#173628] backdrop-blur-xl sm:block">
              <p className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#6ea565]">
                Parent clip
              </p>
              <p className="mt-2 text-lg font-semibold leading-tight">Real questions. Clear answers.</p>
            </div>
          </div>
          <div className="surface-lift edge-highlight relative min-h-[30rem] overflow-hidden rounded-[1.75rem] border border-[#d9e7d4] bg-white/88 p-8 backdrop-blur">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#8ebf80]/10 blur-3xl" />
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#6ea565]/70 to-transparent" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={voice.quote}
                initial={{ opacity: 0, x: 24, filter: 'blur(8px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex min-h-[24rem] flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6ea565]">
                    {voice.focus}
                  </p>
                  <p className="mt-10 text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#173628]">
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                </div>
                <footer>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6ea565]">
                    {voice.name}
                  </p>
                  <p className="mt-2 text-sm text-[#567063]">DPS Gurugram community</p>
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
              transition={{ duration: 0.42, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="rounded-[1.2rem] border border-[#d9e7d4] bg-white p-5 shadow-[0_18px_54px_rgba(22,51,37,0.08)] backdrop-blur transition hover:border-[#8ebf80]/28 hover:bg-[#f1f7ef]"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#6ea565]">
                Parent proof 0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-none text-[#173628]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#567063]">{detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
