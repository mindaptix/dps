'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const humanQualities = [
  'It needs people who ask thoughtful questions.',
  'People who can solve problems.',
  'People who can work across differences.',
  'People who lead with integrity.',
  'People who care.',
]

const ease = [0.22, 1, 0.36, 1] as const

export function WhySchoolExists() {
  return (
    <section
      id="why-school-exists"
      className="relative isolate overflow-hidden bg-[#e8efe0] px-5 py-12 text-[#244f39] sm:px-6 lg:px-10 lg:py-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(104,151,91,0.18),transparent_28%),radial-gradient(circle_at_92%_84%,rgba(160,132,72,0.10),transparent_25%),linear-gradient(145deg,#edf3e8_0%,#e1eadb_52%,#e9efe2_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:84px_84px] [mask-image:radial-gradient(circle_at_50%_45%,black,transparent_78%)]" />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full border border-[#8cc27a]/14"
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#8f7a43] shadow-[0_0_24px_rgba(143,122,67,0.45)]" />
      </motion.div>

      <div className="relative mx-auto max-w-[98rem]">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease }}
          className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:items-end"
        >
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.42em] text-[#6d955f]">
              Our reason for being
            </p>
            <h2 className="mt-3 whitespace-nowrap font-serif text-[clamp(3rem,5vw,5.2rem)] font-medium leading-[0.9] tracking-[-0.05em] text-[#244f39]">
              Why We Exist
            </h2>
          </div>
          <p className="max-w-4xl text-[clamp(1.35rem,2.4vw,2.7rem)] font-medium leading-[1.08] tracking-[-0.03em] text-[#315844]">
            The world does not need more people who simply know answers.
          </p>
        </motion.div>

        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-[#d8e2cb] bg-white/82 shadow-[0_38px_130px_rgba(75,98,67,0.13)] lg:grid-cols-[0.57fr_0.43fr]">
          <div className="relative min-h-[30rem] overflow-hidden border-white/10 lg:min-h-[34rem] lg:border-r">
            <motion.div
              initial={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.05, ease }}
              className="absolute inset-0"
            >
              <Image
                src="/images/why-we-exist-question-lab.png"
                alt="Students asking thoughtful questions in a collaborative school discussion"
                fill
                sizes="(min-width: 1024px) 57vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,17,12,0.04)_28%,rgba(4,17,12,0.82)_100%),linear-gradient(90deg,rgba(4,17,12,0.32),transparent_44%)]" />

            <motion.div
              initial={{ opacity: 0, x: -42, rotate: -5, scale: 0.88 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              whileHover={{ rotate: 0, y: -6 }}
              className="absolute bottom-6 left-5 h-32 w-44 overflow-hidden rounded-[1.2rem] border-4 border-white bg-white shadow-[0_20px_55px_rgba(0,0,0,0.35)] sm:bottom-8 sm:left-8 sm:h-40 sm:w-56"
            >
              <Image
                src="/images/dps-learning-different.png"
                alt="Students solving a problem together"
                fill
                sizes="14rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/72 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[0.58rem] font-black uppercase tracking-[0.17em]">
                Solve
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 42, rotate: 6, scale: 0.88 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              whileHover={{ rotate: 0, y: -6 }}
              className="absolute bottom-8 right-5 h-28 w-36 overflow-hidden rounded-[1.2rem] border-4 border-white bg-white shadow-[0_20px_55px_rgba(0,0,0,0.35)] sm:right-8 sm:h-36 sm:w-48"
            >
              <Image
                src="/images/leadership.png"
                alt="Students learning leadership and integrity"
                fill
                sizes="12rem"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/72 to-transparent" />
              <span className="absolute bottom-3 left-3 text-[0.58rem] font-black uppercase tracking-[0.17em]">
                Lead
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65, ease }}
              className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#071a13]/64 px-4 py-2 text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#c4e2bb] backdrop-blur-xl sm:left-8 sm:top-8"
            >
              The question lab
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            transition={{ staggerChildren: 0.1 }}
            className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(140,194,122,0.13),transparent_35%)]" />
            <p className="relative text-[0.64rem] font-black uppercase tracking-[0.32em] text-[#6d955f]">
              The people tomorrow needs
            </p>

            <div className="relative mt-6 divide-y divide-[#d9e2ce]">
              {humanQualities.map((quality, index) => (
                <motion.div
                  key={quality}
                  variants={{
                    hidden: { opacity: 0, x: 38 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.62, ease }}
                  whileHover={{ x: 8 }}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="text-[0.6rem] font-black text-[#8f7a43]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px w-7 shrink-0 bg-[#9eb095] transition duration-500 group-hover:w-11 group-hover:bg-[#8cc27a]" />
                  <p className="text-base font-medium leading-6 text-[#496453] sm:text-lg">
                    {quality}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.75, ease }}
              className="relative mt-7 border-l-2 border-[#8f7a43] pl-5 text-sm leading-6 text-[#4f6658] sm:text-base sm:leading-7"
            >
              We believe schools have a responsibility not only to educate minds, but also to shape
              character and nurture human potential.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 42, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.85, ease }}
          className="relative mt-5 overflow-hidden rounded-[2rem] border border-[#cbd8c2] bg-[#eaf0e3] px-6 py-10 text-center shadow-[0_24px_80px_rgba(42,70,48,0.12)] sm:px-10 lg:py-12"
        >
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.16, 1], opacity: [0.14, 0.24, 0.14] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8cc27a]"
          />
          <p className="relative text-sm font-semibold text-[#677765]">
            Every decision we make begins with a simple question:
          </p>
          <p className="relative mx-auto mt-3 max-w-[30ch] font-serif text-[clamp(2rem,3.8vw,4rem)] font-medium leading-[0.98] text-[#244f39]">
            What will help children flourish?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
