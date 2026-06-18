'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const nurtureCards = [
  {
    title: 'Confidence',
    image: '/images/dps-campus-life.png',
    focus: 'object-[42%_45%]',
  },
  {
    title: 'Curiosity',
    image: '/images/dps-learning-different.png',
    focus: 'object-[50%_44%]',
  },
  {
    title: 'Communication',
    image: '/images/leadership.png',
    focus: 'object-[50%_38%]',
    collage: true,
  },
  {
    title: 'Creativity',
    image: '/images/early-years.png',
    focus: 'object-[50%_38%]',
  },
  {
    title: 'Discipline',
    image: '/images/dps-founding-families.png',
    focus: 'object-[50%_45%]',
  },
  {
    title: 'Leadership',
    image: '/images/university.png',
    focus: 'object-[50%_40%]',
  },
  {
    title: 'Empathy',
    image: '/images/primary-school.png',
    focus: 'object-[50%_42%]',
  },
  {
    title: 'Independence',
    image: '/images/middle-school.png',
    focus: 'object-[50%_42%]',
  },
]

export function ChildWeNurture() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-nurture-card]')
      const images = gsap.utils.toArray<HTMLElement>('[data-nurture-image]')
      const lines = gsap.utils.toArray<HTMLElement>('[data-heading-line]')

      if (lines.length) {
        gsap.from(lines, {
          yPercent: 110,
          rotateX: -28,
          opacity: 0,
          duration: 1.05,
          ease: 'power4.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 76%',
            once: true,
          },
        })
      }

      if (cards.length) {
        gsap.from(cards, {
          y: 70,
          scale: 0.92,
          duration: 1,
          ease: 'power4.out',
          clearProps: 'transform',
          stagger: {
            each: 0.08,
            from: 'start',
          },
          scrollTrigger: {
            trigger: '[data-nurture-grid]',
            start: 'top 78%',
            once: true,
          },
        })

        cards.forEach((card, index) => {
          gsap.to(card, {
            y: index % 2 === 0 ? -12 : 12,
            duration: 3.8 + index * 0.12,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.08,
          })
        })
      }

      images.forEach((image) => {
        gsap.to(image, {
          yPercent: -8,
          scale: 1.08,
          ease: 'none',
          scrollTrigger: {
            trigger: image.closest('[data-nurture-card]'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1,
          },
        })
      })

      gsap.to('[data-nurture-glow]', {
        x: 80,
        y: -40,
        scale: 1.15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="child"
      className="relative isolate overflow-hidden bg-[#fbfdf9] px-5 py-16 text-[#0b1f2c] sm:px-6 lg:px-10 lg:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(137,195,123,0.16),transparent_30%),radial-gradient(circle_at_88%_72%,rgba(224,188,104,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7fbf4_54%,#ffffff_100%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ddb767] via-[#8ac37b] to-transparent" />
      <div
        data-nurture-glow
        className="pointer-events-none absolute right-[10%] top-24 h-64 w-64 rounded-full bg-[#8ac37b]/12 blur-3xl"
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(110,165,101,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(110,165,101,0.08)_1px,transparent_1px)] [background-size:96px_96px]" />

      <div className="relative mx-auto max-w-[100rem]">
        <div className="mx-auto max-w-[76rem] text-center">
          <p className="text-xs font-black uppercase tracking-[0.46em] text-[#a67b2f]">
            The Child We Nurture
          </p>
         
        </div>

        <div
          data-nurture-grid
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
        >
          {nurtureCards.map((card, index) => (
            <NurtureCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function NurtureCard({
  card,
  index,
}: {
  card: (typeof nurtureCards)[number]
  index: number
}) {
  return (
    <article
      data-nurture-card
      className="group relative min-h-[23.5rem] overflow-hidden rounded-[2rem] border border-white/60 bg-[#10251c] shadow-[0_24px_80px_rgba(18,45,31,0.13)] transition duration-500 will-change-transform hover:-translate-y-2 hover:shadow-[0_32px_100px_rgba(18,45,31,0.2)] md:min-h-[26rem]"
    >
      {card.collage ? (
        <div data-nurture-image className="absolute inset-0 grid grid-cols-2 gap-0.5">
          {[card.image, '/images/dps-campus-life.png', '/images/primary-school.png', '/images/middle-school.png'].map(
            (image, imageIndex) => (
              <div key={`${image}-${imageIndex}`} className="relative overflow-hidden">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="22rem"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
            ),
          )}
        </div>
      ) : (
        <Image
          data-nurture-image
          src={card.image}
          alt={card.title}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition duration-700 group-hover:scale-110 ${card.focus}`}
        />
      )}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,24,18,0.02)_0%,rgba(8,24,18,0.16)_44%,rgba(7,20,17,0.84)_100%)]" />
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_22%,rgba(255,255,255,0.18),transparent_32%)]" />
      <div className="absolute left-0 top-0 h-24 w-full bg-gradient-to-b from-white/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p className="text-xs font-black uppercase tracking-[0.42em] text-[#e4bd62]">
          Grows here
        </p>
        <h3 className="mt-4 text-4xl font-semibold leading-none tracking-[-0.04em] text-white">
          {card.title}
        </h3>
      </div>

      <div className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/16 text-xs font-black text-white opacity-0 backdrop-blur-md transition duration-500 group-hover:opacity-100">
        {String(index + 1).padStart(2, '0')}
      </div>
    </article>
  )
}
