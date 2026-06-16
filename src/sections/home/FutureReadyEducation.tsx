'use client'

import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const cards = [
  ['AI & Digital Fluency', 'Tools, judgment and responsible use.'],
  ['Entrepreneurship', 'Problem framing and initiative.'],
  ['Sustainability', 'Systems thinking with local action.'],
  ['Design Thinking', 'Prototype, test, improve.'],
  ['Financial Literacy', 'Everyday money confidence.'],
  ['Global Competencies', 'Culture, communication and perspective.'],
]
const futureStats = [
  ['Future skills', 'Built into projects'],
  ['Digital fluency', 'Guided, not gimmicky'],
  ['Career clarity', 'Developed over time'],
]

export function FutureReadyEducation() {
  const sectionRef = useRef<HTMLElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const mount = mountRef.current

    if (!mount || !sectionRef.current) {
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.IcosahedronGeometry(1.55, 2)
    const material = new THREE.MeshStandardMaterial({
      color: '#caa66a',
      metalness: 0.5,
      roughness: 0.28,
      wireframe: true,
    })
    const orb = new THREE.Mesh(geometry, material)
    scene.add(orb)

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.05, 0.01, 16, 120),
      new THREE.MeshBasicMaterial({ color: '#d9bd80' }),
    )
    ring.rotation.x = Math.PI / 2.8
    scene.add(ring)

    const particles = new THREE.Group()
    const particleGeometry = new THREE.SphereGeometry(0.018, 8, 8)
    const particleMaterial = new THREE.MeshBasicMaterial({ color: '#f4d9a1' })

    for (let index = 0; index < 90; index += 1) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      const radius = 1.9 + Math.random() * 1.25
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      particle.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      )
      particles.add(particle)
    }

    scene.add(particles)
    scene.add(new THREE.AmbientLight('#ffffff', 1.2))
    const light = new THREE.PointLight('#f4d9a1', 2.5)
    light.position.set(4, 3, 4)
    scene.add(light)

    let pointerX = 0
    let pointerY = 0
    let frame = 0

    const animate = () => {
      orb.rotation.x += 0.004 + pointerY * 0.002
      orb.rotation.y += 0.006 + pointerX * 0.002
      ring.rotation.z += 0.003
      particles.rotation.y -= 0.0015
      particles.rotation.x += 0.0008
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }
    animate()

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    const pointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointerX = (event.clientX - rect.left) / rect.width - 0.5
      pointerY = (event.clientY - rect.top) / rect.height - 0.5

      gsap.to(camera.position, {
        x: pointerX * 0.35,
        y: pointerY * -0.28,
        duration: 0.7,
        ease: 'power3.out',
      })
    }

    window.addEventListener('resize', resize)
    mount.addEventListener('pointermove', pointerMove)

    const context = gsap.context(() => {
      gsap.from(mount, {
        opacity: 0,
        scale: 0.82,
        rotate: 4,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: mount,
          start: 'top 76%',
        },
      })

      gsap.to(mount, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => {
      context.revert()
      window.removeEventListener('resize', resize)
      mount.removeEventListener('pointermove', pointerMove)
      cancelAnimationFrame(frame)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-depth relative overflow-hidden bg-[#061813] px-6 py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(202,166,106,0.18),transparent_28%),radial-gradient(circle_at_84%_58%,rgba(83,139,110,0.14),transparent_32%)]" />
      <div className="absolute inset-0 depth-mesh-dark opacity-55" />
      <div className="section-divider-glow absolute inset-x-10 top-0" />
      <div className="relative mx-auto grid max-w-[96rem] items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div className="surface-lift-dark edge-highlight relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur sm:p-8 lg:p-10">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#d9bd80] to-transparent" />
          <div className="absolute -right-16 top-10 h-56 w-56 rounded-full bg-[#d9bd80]/10 blur-3xl" />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d9bd80]">
            Future-ready education
          </p>
          <h2 className="mt-5 text-[clamp(2.35rem,4.2vw,5rem)] font-semibold leading-[1.02]">
            Future skills, taught with human judgment.
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/68">
            Children need more than buzzwords. They need guided exposure to technology, enterprise,
            sustainability and global thinking inside meaningful school work.
          </p>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
            {futureStats.map(([label, text]) => (
              <div key={label} className="rounded-[1.1rem] border border-[#d9bd80]/18 bg-[#d9bd80]/8 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#d9bd80]">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-5 text-white">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {cards.map(([card, detail], index) => (
              <motion.div
                key={card}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 250, damping: 18, delay: index * 0.03 }}
                className="motion-card group relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_16px_44px_rgba(0,0,0,0.16)] transition hover:border-[#d9bd80]/28 hover:bg-white/[0.085]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9bd80]/70 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="text-sm font-semibold text-white">{card}</p>
                <p className="mt-2 text-xs leading-5 text-white/58">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="surface-lift-dark edge-highlight relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-[#caa66a]/22 bg-[#04130f]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(202,166,106,0.24),transparent_56%)]" />
          <div className="absolute inset-8 rounded-full border border-[#d9bd80]/10" />
          <div className="absolute inset-16 rounded-full border border-[#d9bd80]/6" />
          <div
            ref={mountRef}
            className="premium-glow absolute inset-0"
            aria-label="Animated future-ready education orb"
          />
          <div className="absolute left-6 top-6 rounded-full border border-[#d9bd80]/30 bg-black/20 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#d9bd80] backdrop-blur">
            Living curriculum
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-[1.2rem] border border-white/10 bg-[#061813]/72 p-5 backdrop-blur-xl">
            <p className="text-2xl font-semibold leading-none">Skills move with the world.</p>
            <p className="mt-3 text-sm leading-6 text-white/62">
              The programme keeps children adaptable without losing values, focus or confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
