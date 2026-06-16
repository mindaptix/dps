'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

const promises = [
  {
    title: 'Safety first',
    desc: 'Children settle faster when school feels calm, known and predictable.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Visible growth',
    desc: 'Parents see confidence, communication and curiosity building over time.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Future clarity',
    desc: 'Academic strength is paired with judgment, values and real-world readiness.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export function WhySchoolExists() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Advanced Masked Text Reveal
      const titles = gsap.utils.toArray('[data-animate-text]')
      titles.forEach((title: any) => {
        gsap.from(title, {
          y: 100,
          opacity: 0,
          rotate: 2,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 90%',
          }
        })
      })

      // Subtext fade in
      gsap.from('[data-vision-description]', {
        opacity: 0,
        y: 20,
        duration: 1,
        scrollTrigger: {
          trigger: '[data-vision-description]',
          start: 'top 85%',
        }
      })

      // Image Parallax
      gsap.fromTo(imageRef.current, 
        { scale: 1.2, y: 50 },
        { 
          scale: 1, 
          y: -50,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      )

      // Cards stagger
      gsap.from('[data-vision-card]', {
        x: -50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 70%',
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative overflow-hidden bg-[#061813] py-24 lg:py-32"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#d9bd80]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#0b513c]/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content Column */}
          <div ref={contentRef} className="relative z-10">
            <div className="overflow-hidden">
              <p data-animate-text className="text-xs font-black uppercase tracking-[0.4em] text-[#d9bd80] mb-6 text-center lg:text-left">
                Why this school exists
              </p>
            </div>
            <div className="overflow-hidden mb-4">
              <h2 data-animate-text className="text-4xl font-serif font-medium leading-tight text-white md:text-6xl lg:leading-[1.1] text-center lg:text-left">
                Because a child needs <span className="text-[#d9bd80] italic">more</span> than a campus.
              </h2>
            </div>
            <div data-vision-description>
              <p className="mt-8 text-xl leading-relaxed text-white/70 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
                They need a <span className="text-[#d9bd80] font-semibold border-b border-[#d9bd80]/30">planned environment</span>. We turn care, learning, and character into one 
                continuous journey parents can trust.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              {promises.map((item) => (
                <div
                  key={item.title}
                  data-vision-card
                  className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all hover:bg-white/[0.07] hover:border-[#d9bd80]/40"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#d9bd80]/20 to-transparent flex items-center justify-center text-[#d9bd80] group-hover:rotate-[360deg] transition-transform duration-700 border border-[#d9bd80]/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <div ref={imageRef} className="absolute inset-0">
                <Image
                  src="/images/dps-campus-life.png"
                  alt="DPS Campus Life"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#061813] via-transparent to-transparent opacity-60" />
              
              {/* Floating Decorative Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <p className="text-xs font-bold text-[#d9bd80] uppercase tracking-widest mb-2">First Feeling</p>
                <p className="text-2xl font-serif italic text-white">"A sense of belonging, from day one."</p>
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#d9bd80]/30 rounded-tr-3xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#d9bd80]/30 rounded-bl-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
