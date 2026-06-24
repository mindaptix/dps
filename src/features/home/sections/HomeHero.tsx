'use client'

import { motion } from 'framer-motion'

export function HomeHero() {
  return (
    <section id="vision" className="relative min-h-screen overflow-hidden bg-[#edf2e6] text-[#183f2d]">
      <div className="absolute inset-0 bg-[url('/images/banner.png')] bg-cover bg-center" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[112rem] items-center px-6 pb-20 pt-36 md:px-10 lg:px-20 lg:pb-16 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[62rem]"
        >
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#fff200] [-webkit-text-stroke:0.35px_rgba(18,54,39,0.95)] [text-shadow:0_2px_2px_rgba(0,0,0,0.9),0_0_18px_rgba(0,0,0,0.55)]">
            Welcome to DPS Gurugram
          </p>

          <h1 className="mt-5 max-w-[22ch] font-serif text-[2.4rem] font-black leading-[1.02] text-[#fffdf4] [-webkit-text-stroke:1px_rgba(18,54,39,0.78)] [text-shadow:0_3px_2px_rgba(0,0,0,0.82),0_8px_26px_rgba(0,0,0,0.62)] sm:text-5xl md:text-[3.4rem] xl:text-[3.8rem]">
            <span className="block">The Future Will Belong to Children Who Can Think, Care, and Create.</span>
          </h1>

          <div className="mt-7 max-w-[49rem] space-y-3 text-sm font-black leading-6 text-[#fffdf4] [-webkit-text-stroke:0.25px_rgba(18,54,39,0.68)] [text-shadow:0_2px_2px_rgba(0,0,0,0.92),0_5px_18px_rgba(0,0,0,0.62)] sm:text-base sm:leading-7">
            <p>
              The world our children will inherit is changing rapidly. Knowledge alone is no longer
              enough.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#admissions"
              className="group inline-flex min-h-13 items-center justify-center gap-5 rounded-md bg-[#24543b] px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-[#f4efe1] shadow-[0_18px_46px_rgba(24,63,45,0.24)] transition hover:-translate-y-0.5 hover:bg-[#183f2d]"
            >
              Book a Discovery Visit
              <span className="text-lg leading-none transition group-hover:translate-x-1">-&gt;</span>
            </a>

            <a
              href="#admissions"
              className="group inline-flex min-h-13 items-center justify-center gap-5 rounded-md border border-[#8fa685]/55 bg-[#eef3e8]/78 px-6 py-3.5 text-xs font-black uppercase tracking-[0.08em] text-[#244f39] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#557c50] hover:bg-[#e4eddd]"
            >
              Download Prospectus
              <span aria-hidden="true" className="text-lg leading-none text-[#8a6f32] transition group-hover:translate-y-0.5">
                &darr;
              </span>
            </a>
          </div>
        </motion.div>

      </div>

      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 text-center text-[#315844]/70 md:block">
        <div className="mx-auto mb-2 grid h-10 w-7 place-items-center rounded-full border border-[#315844]/35">
          <span className="h-3 w-px rounded-full bg-[#315844]/60" />
        </div>
        <p className="text-[0.62rem] font-black uppercase tracking-[0.16em]">Scroll to explore</p>
      </div>
    </section>
  )
}
