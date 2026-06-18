'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function HomeGsapFlow({ children }: { children: ReactNode }) {
  const flowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const flow = flowRef.current

    if (!flow) {
      return
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      return
    }

    const context = gsap.context(() => {
      const sections = Array.from(flow.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement && child.tagName === 'SECTION',
      )

      sections.forEach((section, sectionIndex) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0.82,
            y: 72,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 84%',
              once: true,
            },
          },
        )

        const headingElements = section.querySelectorAll(
          'h2, [data-animate-text], [data-child-heading] > *, .surface-lift > p:first-child',
        )
        gsap.from(headingElements, {
          autoAlpha: 0,
          y: 88,
          rotate: 1.8,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.075,
          scrollTrigger: {
            trigger: section,
            start: 'top 78%',
            once: true,
          },
        })

        const supportText = section.querySelectorAll(
          'h2 + p, [data-vision-description], blockquote, footer',
        )
        gsap.from(supportText, {
          autoAlpha: 0,
          y: 28,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            once: true,
          },
        })

        const cards = section.querySelectorAll(
          'article, [data-vision-card], [data-child-card], [data-outcome], [data-floating-card]',
        )
        if (cards.length > 0) {
          gsap.from(cards, {
            autoAlpha: 0,
            y: 44,
            x: (index) => (index % 2 === 0 ? -16 : 16),
            scale: 0.965,
            duration: 0.86,
            ease: 'power4.out',
            stagger: 0.07,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              once: true,
            },
          })
        }

        const visualSurfaces = section.querySelectorAll<HTMLElement>(
          '.surface-lift, .surface-lift-dark, [data-child-image]',
        )
        visualSurfaces.forEach((surface, surfaceIndex) => {
          gsap.from(surface, {
            autoAlpha: 0,
            y: 46,
            rotate: surfaceIndex % 2 === 0 ? -1.8 : 1.8,
            scale: 0.955,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: surface,
              start: 'top 82%',
              once: true,
            },
          })

          gsap.to(surface, {
            yPercent: surfaceIndex % 2 === 0 ? -5 : -3,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          })
        })

        const divider = section.querySelector('.section-divider-glow')
        if (divider) {
          gsap.fromTo(
            divider,
            { scaleX: 0, transformOrigin: sectionIndex % 2 === 0 ? 'left center' : 'right center' },
            {
              scaleX: 1,
              duration: 1.15,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 84%',
                once: true,
              },
            },
          )
        }
      })

      gsap.to('[data-road-orbit]', {
        rotate: 42,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-road-orbit]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      ScrollTrigger.refresh()
    }, flowRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={flowRef} className="relative overflow-x-hidden">
      {children}
    </div>
  )
}
