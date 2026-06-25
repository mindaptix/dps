'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const collageImages = [
  {
    title: 'Curious Thinkers',
    image: '/images/coworkers-discussing-job-issues.jpg',
    positionClass: 'left-[7%] top-[10%] w-[23rem] rotate-[-1.3deg]',
    floatDelay: 0,
  },
  {
    title: 'Compassionate Leaders',
    image: '/images/girls-learning-more-about-chemistry-class.jpg',
    positionClass: 'left-[4.5%] top-[34%] w-[24rem] rotate-[1.1deg]',
    floatDelay: 0.25,
  },
  {
    title: 'Responsible Citizens',
    image: '/images/kids-with-globe-class.jpg',
    positionClass: 'left-[12%] top-[63%] w-[24rem] rotate-[-0.9deg]',
    floatDelay: 0.45,
  },
  {
    title: 'Creative Problem Solvers',
    image: '/images/one.jpg',
    positionClass: 'right-[7%] top-[10%] w-[23rem] rotate-[1.3deg]',
    floatDelay: 0.12,
  },
  {
    title: 'Confident Communicators',
    image: '/images/young-children-making-diy-project-from-upcycled-materials.jpg',
    positionClass: 'right-[4.5%] top-[34%] w-[24rem] rotate-[-1.1deg]',
    floatDelay: 0.35,
  },
  {
    title: 'Ethical Decision Makers',
    image: '/images/medium-shot-girl-learning-math-school.jpg',
    positionClass: 'right-[12%] top-[63%] w-[24rem] rotate-[0.9deg]',
    floatDelay: 0.55,
  },
]

const mobileImages = [
  {
    title: 'Curious Thinkers',
    image: '/images/coworkers-discussing-job-issues.jpg',
  },
  {
    title: 'Compassionate Leaders',
    image: '/images/girls-learning-more-about-chemistry-class.jpg',
  },
  {
    title: 'Responsible Citizens',
    image: '/images/kids-with-globe-class.jpg',
  },
  {
    title: 'Creative Problem Solvers',
    image: '/images/one.jpg',
  },
  {
    title: 'Confident Communicators',
    image: '/images/young-children-making-diy-project-from-upcycled-materials.jpg',
  },
  {
    title: 'Ethical Decision Makers',
    image: '/images/medium-shot-girl-learning-math-school.jpg',
  },
]

export function ChildPotentialCollage() {
  return (
    <section
      id="child-potential-collage"
      className="relative overflow-hidden bg-white px-5 py-0 text-[#10213f] sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto max-w-[112rem]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl pt-6 text-center lg:pt-8"
        >
          <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.3em] text-[#026833]">
            The child we nurture
          </p>

          <h2 className="font-serif text-[clamp(2rem,3.4vw,4.4rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10213f]">
            Preparing children for a life of purpose, confidence, and care.
          </h2>
        </motion.div>

        {/* Desktop Collage */}
        <div className="relative hidden h-[735px] lg:block xl:h-[770px]">
          {/* Soft premium circle lines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute left-1/2 top-[50%] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#026833]/10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.82 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1.15,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-[50%] h-[43rem] w-[43rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FCAE13]/12"
          />

          {/* Center Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 42 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-[48%] z-30 h-[31rem] w-[24.5rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[10px] border-white shadow-[0_36px_120px_rgba(16,33,63,0.22)] xl:h-[33rem] xl:w-[26rem]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/medium-shot-kids-learning-school.jpg"
                alt="Student presenting in classroom"
                fill
                sizes="30vw"
                className="object-cover"
                style={{ objectPosition: '50% 50%' }}
                priority
              />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,33,63,0.02)_0%,rgba(16,33,63,0.12)_100%)]" />
          </motion.div>

          {/* Center Bottom Image */}
          <motion.div
            initial={{ opacity: 0, y: 42, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.85,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -7,
              scale: 1.02,
              transition: { duration: 0.28, ease: 'easeOut' },
            }}
            className="absolute bottom-[2.5%] left-1/2 z-40 h-[11.2rem] w-[26rem] -translate-x-1/2 overflow-hidden rounded-[1.45rem] border-[7px] border-white shadow-[0_30px_95px_rgba(16,33,63,0.20)] xl:h-[11.8rem] xl:w-[28rem]"
          >
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/brothers-talking-sitting-with-book.jpg"
                alt="Lifelong Learners"
                fill
                sizes="30vw"
                className="object-cover"
                style={{ objectPosition: '50% 50%' }}
              />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(16,33,63,0.78)_100%)]" />

            <h3 className="absolute bottom-4 left-5 text-[1.32rem] font-black text-white drop-shadow-md xl:text-[1.42rem]">
              Lifelong Learners
            </h3>
          </motion.div>

          {/* Floating Side Cards */}
          {collageImages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 42,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.78,
                delay: 0.08 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute z-20 hidden h-[11.4rem] overflow-hidden rounded-[1.4rem] border-[7px] border-white shadow-[0_28px_92px_rgba(16,33,63,0.16)] lg:block ${item.positionClass}`}
            >
              <motion.div
                animate={{
                  y: [0, -7, 0],
                  x: [0, index % 2 === 0 ? 4 : -4, 0],
                }}
                transition={{
                  duration: 5.2 + index * 0.28,
                  delay: item.floatDelay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="28vw"
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(16,33,63,0.78)_100%)]" />

              <h3 className="absolute bottom-4 left-5 pr-5 text-[1.12rem] font-black leading-tight text-white drop-shadow-md xl:text-[1.25rem]">
                {item.title}
              </h3>

              <motion.div
                className="pointer-events-none absolute inset-0 bg-white/0"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="py-6 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-5 h-[24rem] max-w-[23rem] overflow-hidden rounded-full border-[8px] border-white shadow-[0_28px_90px_rgba(16,33,63,0.18)]"
          >
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0"
            >
              <Image
                src="/images/medium-shot-kids-learning-school.jpg"
                alt="Student presenting in classroom"
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {mobileImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.68,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[14rem] overflow-hidden rounded-[1.25rem] border-[6px] border-white shadow-[0_22px_70px_rgba(16,33,63,0.15)]"
              >
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    x: [0, index % 2 === 0 ? 3 : -3, 0],
                  }}
                  transition={{
                    duration: 5 + index * 0.25,
                    delay: index * 0.12,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(16,33,63,0.76)_100%)]" />

                <h3 className="absolute bottom-4 left-4 pr-5 text-lg font-black text-white">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChildPotentialCollage