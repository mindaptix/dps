'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { ChildGrowthTimeline } from './ChildGrowthTimeline'

const questions = ['Will my child be happy?', 'Will my child be safe?', 'Will my child be confident?']
const thoughts = ['What if I fail?', 'Can I become a scientist?', 'I want to build robots.', 'I love drawing.', 'I want to speak confidently.']
const learningSystems = [
  {
    title: 'Science',
    text: 'Curiosity becomes method. Questions become discoveries.',
    image: '/images/dps-learning-different.png',
  },
  {
    title: 'Arts',
    text: 'Feeling becomes form. Imagination learns to speak.',
    image: '/images/early-years.png',
  },
  {
    title: 'Sports',
    text: 'Energy becomes discipline. Teams teach resilience.',
    image: '/images/dps-campus-life.png',
  },
  {
    title: 'Coding',
    text: 'Logic becomes language. Children learn to build with technology.',
    image: '/images/primary-school.png',
  },
  {
    title: 'Leadership',
    text: 'Responsibility becomes action. Confidence becomes service.',
    image: '/images/leadership.png',
  },
  {
    title: 'Communication',
    text: 'Thought becomes voice. Ideas learn to reach people.',
    image: '/images/middle-school.png',
  },
]
const futureLeft = ['Routine jobs', 'Passive learning', 'Single-skill careers', 'Marks-only success']
const futureRight = ['AI Engineer', 'Climate Scientist', 'Entrepreneur', 'Game Designer', 'Robotics Architect', 'Space Researcher']
const campusVoices = [
  ['Library', 'I create thinkers.'],
  ['Lab', 'I create innovators.'],
  ['Sports ground', 'I create resilience.'],
  ['Auditorium', 'I create confidence.'],
]
const episodes = [
  ['Choosing the right school', 'Safety, happiness, learning and fit.'],
  ['Future-ready learning', 'Preparing children for the world ahead.'],
  ['Raising confidence', 'How voice and belonging are built.'],
  ['Technology with balance', 'AI, coding and human judgment.'],
]

export function GreenSchoolExperience() {
  const rootRef = useRef<HTMLDivElement>(null)
  const mindRef = useRef<HTMLDivElement>(null)
  const futureRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!rootRef.current) {
      return
    }

    const context = gsap.context(() => {
      const questionTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-questions-scene]',
          start: 'top top',
          end: '+=260%',
          pin: true,
          scrub: 1,
        },
      })

      questions.forEach((_, index) => {
        questionTl
          .fromTo(
            `[data-question="${index}"]`,
            { autoAlpha: 0, y: 34, filter: 'blur(18px)' },
            { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.32 },
          )
          .to(`[data-question="${index}"]`, {
            autoAlpha: 0,
            y: -34,
            filter: 'blur(18px)',
            duration: 0.3,
          })
      })

      questionTl.fromTo(
        '[data-question-answer]',
        { autoAlpha: 0, y: 44, filter: 'blur(18px)' },
        { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.42 },
      )

      gsap.utils.toArray<HTMLElement>('[data-cinema-reveal]').forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 54,
          filter: 'blur(12px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('[data-parallax-image]').forEach((image) => {
        gsap.to(image, {
          yPercent: -8,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: image.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      gsap.to('[data-thought]', {
        x: 'random(-18, 18)',
        y: 'random(-26, 26)',
        opacity: 'random(0.45, 0.95)',
        duration: 'random(2.4, 4.8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.14,
      })

      gsap.fromTo(
        '[data-mind-outcome]',
        { autoAlpha: 0, scale: 0.9 },
        {
          autoAlpha: 1,
          scale: 1,
          scrollTrigger: {
            trigger: '[data-mind-scene]',
            start: '48% center',
            end: 'bottom 65%',
            scrub: true,
          },
        },
      )

      gsap.to('[data-gear]', {
        rotate: (index) => (index % 2 === 0 ? 360 : -360),
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-machine-scene]',
          start: 'top 75%',
          end: 'bottom 20%',
          scrub: 1,
        },
      })

      gsap.to('[data-machine-track]', {
        x: () => {
          const track = rootRef.current?.querySelector<HTMLElement>('[data-machine-track]')
          return track ? -(track.scrollWidth - window.innerWidth) : 0
        },
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-machine-scene]',
          start: 'top top',
          end: () => {
            const track = rootRef.current?.querySelector<HTMLElement>('[data-machine-track]')
            return track ? `+=${track.scrollWidth - window.innerWidth}` : '+=180%'
          },
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.from('[data-letter-line]', {
        clipPath: 'inset(0 100% 0 0)',
        duration: 0.82,
        stagger: 0.18,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '[data-letter-scene]',
          start: 'top 70%',
        },
      })

      gsap.to('[data-sunrise]', {
        scale: 1.4,
        opacity: 0.86,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-final-step]',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, rootRef)

    return () => context.revert()
  }, [])

  useEffect(() => {
    const cleanupMind = createParticleWorld(mindRef.current, '#11734f')
    const cleanupFuture = createParticleWorld(futureRef.current, '#9fd6bb')

    return () => {
      cleanupMind?.()
      cleanupFuture?.()
    }
  }, [])

  return (
    <div ref={rootRef} className="overflow-hidden bg-[#06130f] text-white">
      <section data-questions-scene id="vision" className="relative h-screen overflow-hidden bg-[#06130f]">
        <div data-parallax-image className="absolute inset-0 bg-[url('/images/dps-campus-life.png')] bg-cover bg-center opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(159,214,187,0.2),transparent_32%),linear-gradient(180deg,rgba(6,19,15,0.52),#06130f_86%)]" />
        <div className="relative mx-auto grid h-full max-w-[90rem] place-items-center px-6 text-center">
          {questions.map((question, index) => (
            <h2 key={question} data-question={index} className="absolute max-w-5xl text-5xl font-semibold leading-tight tracking-[-0.035em] opacity-0 md:text-8xl">
              {question}
            </h2>
          ))}
          <div data-question-answer className="max-w-5xl opacity-0">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#9fd6bb]">From questions to confidence</p>
            <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">
              They do not need a perfect school.
              <span className="block text-[#9fd6bb]">They need the right environment.</span>
            </h2>
          </div>
        </div>
      </section>

      <section data-mind-scene className="relative min-h-screen overflow-hidden bg-white text-[#073626]">
        <div ref={mindRef} className="absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent,rgba(255,255,255,0.86)_62%,#fff_100%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-[90rem] flex-col justify-center px-6 py-24">
          <div data-cinema-reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#11734f]">Inside a child&apos;s mind</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">
              Before confidence appears, imagination asks for space.
            </h2>
          </div>
          {thoughts.map((thought, index) => (
            <span
              key={thought}
              data-thought
              className="absolute rounded-full border border-[#11734f]/18 bg-white/70 px-5 py-3 text-sm font-semibold text-[#073626] shadow-[0_18px_60px_rgba(7,54,38,0.08)] backdrop-blur"
              style={{ left: `${9 + ((index * 19) % 74)}%`, top: `${22 + ((index * 13) % 54)}%` }}
            >
              {thought}
            </span>
          ))}
          <div data-mind-outcome className="pointer-events-none absolute bottom-14 left-6 right-6 mx-auto max-w-5xl rounded-lg bg-[#073626] px-6 py-8 text-white opacity-0 md:px-10">
            <p className="text-4xl font-semibold leading-tight md:text-7xl">Curious. Confident. Creative. Compassionate.</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0704] px-6 py-20 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(202,142,44,0.2),transparent_28%),linear-gradient(180deg,#06130f,#0b0704)]" />
        <div className="floating-grain pointer-events-none absolute inset-0 opacity-14" />
        <div data-cinema-reveal className="relative mx-auto max-w-[90rem]">
          <p className="text-xs font-bold uppercase tracking-[0.36em] text-[#e3aa45]">
            Six systems of learning
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.035em] md:text-7xl">
              A child does not grow from one subject. A complete system shapes the future.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              Scroll ahead to see how science, arts, sports, coding, leadership and communication
              move together like one learning engine.
            </p>
          </div>
        </div>
      </section>

      <section data-machine-scene className="relative h-screen overflow-hidden bg-[#0b0704] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(202,142,44,0.18),transparent_24%),linear-gradient(180deg,#0b0704,#120b05_58%,#0b0704)]" />
        <div className="floating-grain pointer-events-none absolute inset-0 opacity-16" />

        <div className="pointer-events-none absolute right-[8vw] top-[-7rem] h-[19rem] w-[19rem] text-[#a36f22]/58">
          <svg data-gear className="h-full w-full" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="59" fill="none" stroke="currentColor" strokeWidth="13" />
            {Array.from({ length: 12 }).map((_, tooth) => (
              <rect key={tooth} x="94" y="10" width="12" height="32" rx="3" fill="currentColor" transform={`rotate(${tooth * 30} 100 100)`} />
            ))}
          </svg>
        </div>

        <div data-machine-track className="relative z-10 flex h-full w-max items-center">
          <div className="flex h-full w-screen shrink-0 flex-col justify-between px-6 py-8 md:px-16">
            <div className="flex items-start justify-between gap-8">
              <p className="text-xs font-bold uppercase tracking-[0.44em] text-[#e3aa45]">The learning machine</p>
              <p className="hidden text-xs font-bold uppercase tracking-[0.34em] text-white/42 md:block">
                Six systems. One running engine.
              </p>
            </div>
            <div data-cinema-reveal className="max-w-5xl">
              <p className="font-mono text-sm font-bold tracking-[0.3em] text-[#e3aa45]">01 / 06</p>
              <h2 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.035em] md:text-8xl">
                Every skill turns the next one.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/58">
                A premium school experience is not one subject doing all the work. It is a system
                where curiosity, expression, discipline, technology and leadership keep each other moving.
              </p>
            </div>
            <div className="h-px w-full bg-white/12" />
          </div>

          <div className="flex h-full w-max items-center gap-10 pr-[24vw]">
            {learningSystems.map((system, index) => (
              <article key={system.title} className="group relative flex h-[74vh] w-[min(74vw,58rem)] shrink-0 flex-col justify-between">
                <div className="flex items-center justify-between px-1">
                  <p className="font-mono text-sm font-bold tracking-[0.34em] text-[#e3aa45]">
                    {String(index + 1).padStart(2, '0')} / 06
                  </p>
                  <p className="hidden text-xs font-bold uppercase tracking-[0.28em] text-white/38 md:block">
                    System active
                  </p>
                </div>

                <motion.div
                  whileHover={{ y: -10, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 190, damping: 24 }}
                  className="relative mt-8 h-[58vh] overflow-hidden rounded-lg border border-[#d9a94f]/18 bg-[#15100b] shadow-[0_34px_110px_rgba(0,0,0,0.42)]"
                >
                  <Image
                    src={system.image}
                    alt={`${system.title} learning system`}
                    fill
                    sizes="(min-width: 1024px) 58rem, 74vw"
                    className="object-cover opacity-[0.82] transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_34%,rgba(8,5,3,0.86)_100%),linear-gradient(90deg,rgba(8,5,3,0.28),transparent_55%)]" />
                  <h3 className="absolute bottom-7 left-7 font-serif text-6xl leading-none text-white md:bottom-9 md:left-9 md:text-8xl">
                    {system.title}
                  </h3>
                </motion.div>

                <p className="mt-7 max-w-3xl text-xl leading-8 text-white/62 md:text-2xl">{system.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ChildGrowthTimeline />

      <section className="relative min-h-screen overflow-hidden bg-[#06130f] text-white">
        <div ref={futureRef} className="absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent,rgba(6,19,15,0.72)_54%,#06130f_88%)]" />
        <div className="relative mx-auto grid min-h-screen max-w-[90rem] items-center gap-10 px-6 py-24 lg:grid-cols-[0.42fr_0.16fr_0.42fr]">
          <div data-cinema-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-200/70">Today fading</p>
            <div className="mt-6 grid gap-4">
              {futureLeft.map((item) => <p key={item} className="text-3xl font-semibold text-white/28 line-through md:text-5xl">{item}</p>)}
            </div>
          </div>
          <div className="hidden h-[34rem] w-px bg-gradient-to-b from-transparent via-[#9fd6bb] to-transparent lg:block" />
          <div data-cinema-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9fd6bb]">2040 emerging</p>
            <div className="mt-6 grid gap-4">
              {futureRight.map((item) => <p key={item} className="text-3xl font-semibold md:text-5xl">{item}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section id="campus" className="relative min-h-screen overflow-hidden bg-[#073626] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_35%,rgba(159,214,187,0.24),transparent_30%),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:100%_100%,92px_92px,92px_92px]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[54rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/12" />
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-white/10" />
        <div className="relative mx-auto flex min-h-screen max-w-[90rem] flex-col justify-center px-6 py-24">
          <div data-cinema-reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/66">A campus that teaches</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">Every place has a role in the child&apos;s story.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {campusVoices.map(([place, voice]) => (
              <div key={place} className="min-h-60 rounded-lg border border-white/14 bg-[#06130f]/68 p-6 backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9fd6bb]">{place}</p>
                <p className="mt-20 text-3xl font-semibold leading-tight">{voice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
        <div className="relative mx-auto max-w-[90rem]">
          <div data-cinema-reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/52">The first believers</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">Some families do not wait for proof. They recognize promise.</h2>
          </div>
          <div className="mt-14 min-h-[34rem] overflow-hidden rounded-lg bg-[#111]">
            <div data-parallax-image className="h-[34rem] bg-[url('/images/dps-founding-families.png')] bg-cover bg-center opacity-75" />
            <div className="absolute inset-0 pointer-events-none" />
          </div>
        </div>
      </section>

      <section data-letter-scene className="relative overflow-hidden bg-[#f7f2e9] px-6 py-24 text-[#073626]">
        <div className="mx-auto grid max-w-[74rem] gap-10">
          <div data-cinema-reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#11734f]">Letters from the future</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">Dear Mom,</h2>
          </div>
          <div className="rounded-md bg-white px-6 py-9 shadow-[0_30px_100px_rgba(67,49,20,0.12)] md:px-12 md:py-14">
            {[
              'Thank you for choosing the place where I learned to ask better questions.',
              'I learned that confidence is the quiet feeling that I can try again.',
              'You did not just choose a school. You chose the environment that helped me become myself.',
            ].map((line) => <p key={line} data-letter-line className="mt-6 text-2xl leading-relaxed first:mt-0 md:text-4xl">{line}</p>)}
          </div>
        </div>
      </section>

      <section id="insights" className="overflow-hidden bg-[#06130f] px-6 py-24 text-white">
        <div className="mx-auto max-w-[90rem]">
          <div data-cinema-reveal className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#9fd6bb]">The modern parent lab</p>
            <h2 className="mt-5 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">Episodes for parents making a high-stakes choice.</h2>
          </div>
          <div className="mt-12 flex gap-5 overflow-x-auto pb-8 [scrollbar-width:none]">
            {episodes.map(([title, text], index) => (
              <motion.article key={title} whileHover={{ y: -10, scale: 1.025 }} className="min-h-[24rem] w-[22rem] shrink-0 rounded-md bg-white p-6 text-[#073626]">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#11734f]">Episode 0{index + 1}</p>
                <h3 className="mt-28 text-3xl font-semibold leading-tight">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#526b61]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section data-final-step id="admissions" className="relative grid min-h-screen place-items-center overflow-hidden bg-[#e7f2ea] px-6 py-24 text-[#073626]">
        <div data-sunrise className="absolute left-1/2 top-20 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#11734f]">The first step of their story</p>
          <h2 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.035em] md:text-8xl">Every extraordinary future starts with a single step.</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            {['Book Visit', 'Apply', 'Speak to Admissions'].map((label, index) => (
              <motion.a key={label} whileHover={{ y: -5, scale: 1.04 }} href={index === 2 ? 'tel:+910000000000' : 'mailto:admissions@dpsgurugram.edu'} className={`${index === 0 ? 'bg-[#073626] text-white' : 'bg-white text-[#073626]'} rounded-md px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] shadow-[0_18px_50px_rgba(7,54,38,0.14)]`}>
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function createParticleWorld(mount: HTMLDivElement | null, color: string) {
  if (!mount) {
    return undefined
  }

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 100)
  camera.position.z = 5.5

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(mount.clientWidth, mount.clientHeight)
  mount.appendChild(renderer.domElement)

  const globeGeometry = new THREE.IcosahedronGeometry(1.55, 2)
  const globeMaterial = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.42 })
  const globe = new THREE.Mesh(globeGeometry, globeMaterial)
  scene.add(globe)

  const particleGeometry = new THREE.BufferGeometry()
  const positions = new Float32Array(120 * 3)

  for (let index = 0; index < 120; index += 1) {
    const radius = 1.8 + Math.random() * 1.5
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[index * 3 + 2] = radius * Math.cos(phi)
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  const particleMaterial = new THREE.PointsMaterial({ color, size: 0.025, transparent: true, opacity: 0.72 })
  const particles = new THREE.Points(particleGeometry, particleMaterial)
  scene.add(particles)

  let frame = 0
  const animate = () => {
    globe.rotation.x += 0.002
    globe.rotation.y += 0.004
    particles.rotation.y -= 0.0014
    renderer.render(scene, camera)
    frame = requestAnimationFrame(animate)
  }
  animate()

  const resize = () => {
    camera.aspect = mount.clientWidth / mount.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(mount.clientWidth, mount.clientHeight)
  }
  window.addEventListener('resize', resize)

  return () => {
    window.removeEventListener('resize', resize)
    cancelAnimationFrame(frame)
    renderer.dispose()
    globeGeometry.dispose()
    globeMaterial.dispose()
    particleGeometry.dispose()
    particleMaterial.dispose()
    if (renderer.domElement.parentElement === mount) {
      mount.removeChild(renderer.domElement)
    }
  }
}
