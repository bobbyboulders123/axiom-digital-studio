import React, { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsapUtils'

const Philosophy = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.manifesto-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
        },
        y: 60,
        opacity: 0,
        rotationX: -10,
        transformOrigin: '0% 0%',
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="proof"
      ref={containerRef}
      className="py-32 px-6 bg-[#121A24] border-y border-steel/10 relative overflow-hidden perspective-1000"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,_rgba(47,128,237,0.05)_0%,_transparent_70%)] pointer-events-none mix-blend-screen"></div>

      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="md:col-span-4 lg:col-span-5 relative">
          <div className="sticky top-40">
            <div className="absolute -left-6 top-2 w-1 h-24 bg-gradient-to-b from-electric to-cyan/20"></div>
            <div className="flex items-center gap-3 mb-6 manifesto-text">
              <span className="font-mono text-cyan uppercase tracking-wider text-xs">
                The Manifesto
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] manifesto-text drop-shadow-md">
              We engineer
              <br />
              digital instruments.
            </h2>
          </div>
        </div>

        <div className="md:col-span-8 lg:col-span-7 space-y-16 pt-2 md:pt-16">
          <div className="manifesto-text space-y-5">
            <h3 className="text-2xl font-medium text-white">The Industry Standard is Broken</h3>
            <p className="text-steel text-lg md:text-xl leading-relaxed">
              Most digital agencies rely on recycled templates, bloated plug-ins,
              and chaotic visuals that damage credibility. They build disposable
              web pages that blend into the background, costing you authority and trust.
            </p>
          </div>

          <div className="manifesto-text space-y-5">
            <h3 className="text-2xl font-medium text-cyan">The Sharper Approach</h3>
            <p className="text-white text-lg md:text-xl leading-relaxed">
              We don&apos;t do generic. Axiom Digital Solutions builds premium,
              custom-coded environments. Inspired by enterprise architecture and
              precision hardware, our sites are clean, lightning-fast, and
              unapologetically high-end.
            </p>
          </div>

          <div className="manifesto-text p-10 border border-steel/20 rounded-[2rem] bg-[#0B0F14]/60 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-electric to-cyan shadow-glow-electric"></div>
            <p className="text-white font-medium text-xl italic tracking-wide leading-relaxed">
              &quot;Your website shouldn&apos;t just exist. It should be proof of your quality.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy