'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const systems = [
  {
    id: '01',
    title: 'Science',
    line: 'Curiosity becomes method. Questions become discoveries.',
    image: '/images/dps-learning-different.png',
  },
  {
    id: '02',
    title: 'Arts',
    line: 'Feeling becomes form. Imagination learns to speak.',
    image: '/images/early-years.png',
  },
  {
    id: '03',
    title: 'Sports',
    line: 'Energy becomes discipline. Teams teach resilience.',
    image: '/images/dps-campus-life.png',
  },
  {
    id: '04',
    title: 'Coding',
    line: 'Logic becomes language. Children learn to build with technology.',
    image: '/images/primary-school.png',
  },
  {
    id: '05',
    title: 'Leadership',
    line: 'Responsibility becomes action. Confidence becomes service.',
    image: '/images/leadership.png',
  },
  {
    id: '06',
    title: 'Voice',
    line: 'Thought becomes expression. Ideas learn to reach people.',
    image: '/images/middle-school.png',
  },
]

export function WhatMakesLearningDifferent() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!sectionRef.current || !trackRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const context = gsap.context(() => {
      gsap.from('[data-machine-label], [data-machine-copy]', {
        opacity: 0,
        y: 18,
        duration: 0.72,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 84%',
          once: true,
        },
      })

      gsap.from('[data-machine-card]', {
        opacity: 0,
        x: 90,
        scale: 0.96,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })

      gsap.to('[data-machine-gear]', {
        rotate: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      const tween = gsap.to(trackRef.current, {
        x: () => {
          const track = trackRef.current
          if (!track) return 0

          const overflow = track.scrollWidth - window.innerWidth
          return overflow > 0 ? -overflow : 0
        },
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => {
            const track = trackRef.current
            const overflow = track ? track.scrollWidth - window.innerWidth : 0
            return `+=${Math.max(overflow + window.innerHeight * 0.35, window.innerHeight * 2.2)}`
          },
          pin: true,
          scrub: 0.85,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next = Math.min(systems.length - 1, Math.floor(self.progress * systems.length))
            setActive(next)
          },
        },
      })

      return () => tween.kill()
    }, sectionRef)

    return () => context.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f4f8f3] text-[#173628]"
      id="learning-machine"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(110,165,101,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(110,165,101,0.06)_1px,transparent_1px)] bg-[size:78px_78px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_10%,rgba(134,185,125,0.18),transparent_24%),linear-gradient(180deg,#f4f8f3_0%,#e9f3e6_100%)]" />

      <div
        data-machine-gear
        className="pointer-events-none absolute left-[58%] top-20 hidden h-56 w-56 -translate-x-1/2 rounded-full border-[1.35rem] border-[#8ebf80]/35 lg:block"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-1/2 h-8 w-4 origin-[50%_7rem] rounded-sm bg-[#8ebf80]/55"
            style={{ transform: `translate(-50%, -50%) rotate(${index * 30}deg)` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[96rem] flex-col justify-center px-5 py-14 sm:px-6 lg:px-10">
        <div className="flex items-start justify-between gap-8">
          <p data-machine-label className="text-xs font-black uppercase text-[#6ea565]">
            The learning machine
          </p>
          <p data-machine-copy className="hidden text-xs font-black uppercase text-[#6a8577] md:block">
            Six systems. One running engine.
          </p>
        </div>

        <div className="mt-14 flex items-center justify-between">
          <p className="text-sm font-black text-[#6ea565]">
            {systems[active].id} / {String(systems.length).padStart(2, '0')}
          </p>
          <p className="text-sm font-black text-[#6ea565]">
            {systems[Math.min(active + 1, systems.length - 1)].id}
          </p>
        </div>

        <div className="relative mt-8 overflow-visible">
          <div
            ref={trackRef}
            className="flex w-max gap-8 pr-[24vw] will-change-transform"
            style={{ paddingLeft: '6vw' }}
          >
            {systems.map((system, index) => {
              const isActive = index === active
              return (
                <article
                  key={system.title}
                  data-machine-card
                  className={`relative h-[34rem] shrink-0 overflow-hidden rounded-[1.35rem] border border-[#d7e5d2] bg-white transition duration-500 ${
                    isActive
                      ? 'w-[72vw] min-w-[48rem] max-w-[60rem] opacity-100'
                      : 'w-[28vw] min-w-[18rem] max-w-[30rem] opacity-70'
                  }`}
                >
                  <Image
                    src={system.image}
                    alt={system.title}
                    fill
                    sizes="(min-width: 1024px) 62vw, 92vw"
                    className={`object-cover transition duration-700 ${isActive ? 'scale-100' : 'scale-105'}`}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,250,245,0.02),rgba(25,48,36,0.08)_46%,rgba(25,48,36,0.45)_100%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(110,165,101,0.14),transparent_34%)]" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="font-serif text-6xl leading-none text-white md:text-7xl">
                      {system.title}
                    </h3>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[#567063]">
          {systems[active].line}
        </p>
      </div>
    </section>
  )
}
