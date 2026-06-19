'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const parentHopes = [
  'Who are happy.',
  'Who can face challenges with resilience.',
  'Who know how to work with others.',
  'Who have the courage to stand up for what is right.',
  'Who leave school not only with qualifications, but with the ability to build meaningful lives.',
]

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export function BeyondGoodMarks() {
  return (
    <section
      id="beyond-marks"
      className="relative isolate overflow-hidden bg-[#e9f0e2] px-5 py-12 text-[#102f22] sm:px-6 lg:px-10 lg:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_14%,rgba(89,132,78,0.14),transparent_26%),radial-gradient(circle_at_94%_86%,rgba(150,124,65,0.08),transparent_24%),linear-gradient(180deg,#eef3e8_0%,#e3ecdc_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 38, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full border-[3.5rem] border-[#8ac37b]/10"
      />

      <div className="relative mx-auto max-w-[96rem]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.1 }}
          className="space-y-5"
        >
          <div>
            <motion.p
              variants={reveal}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="text-[0.68rem] font-black uppercase tracking-[0.38em] text-[#619457]"
            >
              Education beyond the report card
            </motion.p>
            <motion.h2
              variants={reveal}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-[clamp(2.15rem,3.6vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.045em] lg:whitespace-nowrap"
            >
              Every Parent Wants More Than Good Marks
            </motion.h2>
          </div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl border-l-2 border-[#8f7a43] pl-5"
          >
            <p className="font-serif text-2xl font-medium leading-tight text-[#315844] md:text-3xl">
              Parents want children who are confident.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-[#cbd8c2] bg-[#edf3e7] shadow-[0_32px_100px_rgba(42,70,48,0.14)] lg:grid-cols-[0.47fr_0.53fr]">
          <div className="grid min-h-[31rem] grid-cols-[1.15fr_0.85fr] grid-rows-2 gap-1.5 bg-[#cad8bd] p-1.5 sm:min-h-[34rem] lg:min-h-0">
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="group relative row-span-2 overflow-hidden rounded-l-[1.65rem]"
            >
              <Image
                src="/images/education-beyond-marks.png"
                alt="Students developing confidence and teamwork through a collaborative project"
                fill
                sizes="(min-width: 1024px) 32vw, 60vw"
                className="object-cover object-[47%_center] transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/72 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 right-4 text-xs font-black uppercase tracking-[0.2em] text-white">
                Confidence &amp; teamwork
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 44, y: -24, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-tr-[1.65rem]"
            >
              <Image
                src="/images/early-years.png"
                alt="Happy children learning together at school"
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-[0.62rem] font-black uppercase tracking-[0.16em] text-white">
                Happiness
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 44, y: 24, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-br-[1.65rem]"
            >
              <Image
                src="/images/leadership.png"
                alt="Students building courage and leadership"
                fill
                sizes="(min-width: 1024px) 18vw, 40vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071a13]/70 to-transparent" />
              <p className="absolute bottom-4 left-4 text-[0.62rem] font-black uppercase tracking-[0.16em] text-white">
                Courage
              </p>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.09 }}
            className="relative flex flex-col justify-center bg-[#e7efe0] p-6 text-[#244f39] sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(140,194,122,0.20),transparent_38%)]" />
            <div className="relative space-y-2.5">
              {parentHopes.map((hope, index) => (
                <motion.div
                  key={hope}
                  variants={{
                    hidden: { opacity: 0, x: 36 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 rounded-xl border border-[#dce5cd] bg-white/80 px-4 py-3.5"
                >
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#8cc27a]/50 text-[0.55rem] font-black text-[#b9dcae]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-medium leading-6 text-[#476452] sm:text-base">
                    {hope}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="relative mt-6 rounded-[1.25rem] border border-[#8f7a43]/30 bg-[#5f7f55]/10 p-5"
            >
              <p className="font-serif text-2xl font-medium leading-tight text-[#8b7134] md:text-3xl">
                That is the purpose of education.
              </p>
              <p className="mt-1 text-lg font-semibold text-[#67905e] md:text-xl">
                And that is the purpose of DPS.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
