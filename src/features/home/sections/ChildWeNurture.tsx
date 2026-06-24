'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const tiles = [
  {
    title: 'Curious Thinkers',
    detail: 'Children who ask better questions, explore deeply, and enjoy discovering how the world works.',
    image: '/images/dps-learning-different.png',
    tint: 'from-[#062f2b]/20 to-[#062f2b]/78 group-hover:from-[#062f2b]/44 group-hover:to-[#062f2b]/90',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Creative Problem Solvers',
    detail: 'Children who make, test, improve, and learn to approach challenges with imagination.',
    image: '/images/why-we-exist-question-lab.png',
    tint: 'from-[#7a2634]/22 to-[#7a2634]/82 group-hover:from-[#7a2634]/48 group-hover:to-[#7a2634]/92',
    className: 'md:col-span-2',
  },
  {
    title: 'Compassionate Leaders',
    detail: 'Children who learn to listen, include others, and lead with care.',
    image: '/images/leadership.png',
    tint: 'from-[#08246c]/20 to-[#08246c]/80 group-hover:from-[#08246c]/48 group-hover:to-[#08246c]/92',
    className: 'md:col-span-1',
  },
  {
    title: 'Confident Communicators',
    detail: 'Children who speak clearly, share ideas, and grow comfortable with their own voice.',
    image: '/images/primary-school.png',
    tint: 'from-[#b9862f]/18 to-[#7a4d13]/78 group-hover:from-[#b9862f]/42 group-hover:to-[#7a4d13]/90',
    className: 'md:col-span-1',
  },
  {
    title: 'Responsible Citizens',
    detail: 'Children who understand responsibility, community, and the choices that shape character.',
    image: '/images/dps-campus-life.png',
    tint: 'from-[#23504f]/18 to-[#173c52]/80 group-hover:from-[#23504f]/46 group-hover:to-[#173c52]/92',
    className: 'md:col-span-2',
  },
  {
    title: 'Ethical Decision Makers',
    detail: 'Children who learn to choose what is right, not only what is easy.',
    image: '/images/dps-founding-families.png',
    tint: 'from-[#8d2f70]/20 to-[#5e245c]/82 group-hover:from-[#8d2f70]/48 group-hover:to-[#5e245c]/94',
    className: 'md:col-span-2',
  },
  {
    title: 'Lifelong Learners',
    detail: 'Children who carry curiosity, discipline, and courage beyond school.',
    image: '/images/university.png',
    tint: 'from-[#1f5f3d]/20 to-[#143627]/80 group-hover:from-[#1f5f3d]/48 group-hover:to-[#143627]/92',
    className: 'md:col-span-2',
  },
  {
    title: 'Future Ready',
    detail: 'Children prepared with knowledge, confidence, wellbeing, and purpose.',
    image: '/images/child-journey-grade12-ai.png',
    tint: 'from-[#d36b1f]/18 to-[#7a2634]/80 group-hover:from-[#d36b1f]/46 group-hover:to-[#7a2634]/92',
    className: 'md:col-span-2',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function ChildWeNurture() {
  return (
    <section id="child" className="bg-white px-5 py-20 text-[#071827] sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[112rem]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease }}
          className="mb-12 grid gap-5 lg:grid-cols-[0.38fr_0.62fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-[#9b6b22]">
              The child we nurture
            </p>
            <h2 className="mt-4 text-[clamp(3rem,5.5vw,6.2rem)] font-black leading-[0.94] tracking-normal">
              The Child We Hope To Nurture
            </h2>
          </div>
          <p className="max-w-3xl text-xl font-medium leading-8 text-[#4d5965]">
            Move across each image to see the qualities we want every child to carry into the world.
          </p>
        </motion.div>

        <div className="grid auto-rows-[16rem] gap-0.5 overflow-hidden bg-white md:grid-cols-6 md:auto-rows-[15rem] lg:auto-rows-[17rem]">
          {tiles.map((tile, index) => (
            <Tile key={tile.title} tile={tile} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Tile({
  tile,
  index,
}: {
  tile: (typeof tiles)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay: index * 0.045, ease }}
      className={`group relative min-h-[16rem] overflow-hidden bg-[#17233a] ${tile.className}`}
    >
      <Image
        src={tile.image}
        alt={tile.title}
        fill
        sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${tile.tint} transition duration-500`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.18),transparent_28%)] opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
        <p className="text-xl font-black uppercase leading-tight tracking-normal drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)] md:text-2xl">
          {tile.title}
        </p>
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
          <p className="overflow-hidden pt-0 text-sm font-medium leading-6 text-white/86 opacity-0 transition duration-500 group-hover:pt-4 group-hover:opacity-100 md:text-base">
            {tile.detail}
          </p>
        </div>
      </div>

      <div className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-white/12 text-xs font-black text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100">
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.article>
  )
}
