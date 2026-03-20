import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../utils/gsapUtils'

const Protocol = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current
      if (cards.length === 0) return

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: true,
        animation: gsap
          .timeline()
          .to(cards.slice(1), {
            yPercent: -100,
            ease: 'none',
            stagger: 0.5,
          }),
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const steps = [
    {
      id: '01',
      title: 'Discover',
      desc: 'Defining exact technical and visual requirements to align with your business goals.',
      bgClass: 'bg-[#0B0F14]',
    },
    {
      id: '02',
      title: 'Design',
      desc: 'Crafting premium, high-fidelity prototypes. Zero templates, pure custom architecture.',
      bgClass: 'bg-[#121A24]',
    },
    {
      id: '03',
      title: 'Build',
      desc: 'Engineering the front-end with precision performance, modern frameworks, and responsive polish.',
      bgClass: 'bg-[#1B2430]',
    },
    {
      id: '04',
      title: 'Launch',
      desc: 'Deploying your digital instrument to production on high-end infrastructure.',
      bgClass: 'bg-[#0B0F14]',
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="h-screen w-full relative overflow-hidden bg-[#0B0F14]"
    >
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50 pointer-events-none mix-blend-difference">
        <div className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-electric to-cyan/20"></div>
        <h2 className="text-sm font-mono text-white tracking-widest uppercase drop-shadow-md">
          The Protocol
        </h2>
      </div>

      <div className="relative h-full w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`absolute left-0 w-full h-full flex flex-col items-center justify-center p-8 ${step.bgClass} ${
              index > 0 ? 'top-[100%]' : 'top-0'
            }`}
            style={{
              zIndex: index,
              boxShadow: index > 0 ? '0 -20px 40px rgba(0,0,0,0.8)' : 'none',
            }}
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(124, 138, 153, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 138, 153, 0.2) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            ></div>

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <span className="font-mono text-cyan text-xl md:text-2xl mb-4 block">
                  {step.id} \
                </span>
                <h3 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-none mb-6">
                  {step.title}
                </h3>
              </div>

              <div>
                <p className="text-steel text-xl md:text-2xl leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 right-1/4 w-[1px] h-32 bg-gradient-to-t from-cyan/50 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Protocol