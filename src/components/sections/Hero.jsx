import React, { useEffect, useRef } from 'react'
import { gsap } from '../../utils/gsapUtils'
import Button from '../ui/Button'

const Hero = () => {
  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const contentRef = useRef(null)
  const headlineRef = useRef(null)
  const sublineRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Polish load-in sequence
      tl.fromTo(
        bgRef.current,
        { scale: 1.1, opacity: 0, rotateX: 10 },
        { scale: 1, opacity: 1, rotateX: 0, duration: 2, ease: 'power2.out' }
      )
        .fromTo(
          headlineRef.current,
          { y: 60, opacity: 0, rotationX: 15 },
          { y: 0, opacity: 1, rotationX: 0, duration: 1.4 },
          '-=1.2'
        )
        .fromTo(
          sublineRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=1.0'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.8'
        )

      // Subtle breathable float for the background
      gsap.to(bgRef.current, {
        yPercent: -1.5,
        duration: 5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full flex items-end pb-24 lg:pb-32 px-6 pt-32 overflow-hidden bg-[#05070A] perspective-1000">
      {/* Absolute Premium Angled Tech Background Visuals */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none origin-bottom"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Local Premium Motherboard Texture */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.90] mix-blend-luminosity scale-105"
          style={{ backgroundImage: 'url("/hero/axiom-hero-motherboard.png")' }}
        ></div>

        {/* Deep background shadow veil, heavily reduced to let details punch through */}
        <div className="absolute inset-0 bg-[#0B0F14]/30 mix-blend-multiply z-0"></div>
        {/* Aggressive bottom fade explicitly protecting the text area */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070A]/10 via-[#05070A]/30 to-[#05070A]/95 z-0"></div>

        {/* Core Radiance Glows */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-[radial-gradient(ellipse_at_center,_rgba(47,128,237,0.15)_0%,_transparent_60%)] translate-x-1/4 -translate-y-1/4 mix-blend-screen opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[radial-gradient(ellipse_at_center,_rgba(53,208,255,0.08)_0%,_transparent_60%)] -translate-x-1/3 translate-y-1/4 mix-blend-screen"></div>

        {/* Hardware Data Grid Angled */}
        <div
          className="absolute inset-[-20%] w-[140%] h-[140%] opacity-30 origin-center"
          style={{
            transform: 'rotateX(45deg) scale(1.2) translateY(-10%)',
            backgroundImage: `
              linear-gradient(rgba(124,138,153,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124,138,153,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: 'center top'
          }}
        ></div>

        {/* Cinematic Grid Base Layer */}
        <div className="absolute rotate-[15deg] scale-150 top-1/4 left-1/4 w-[120%] h-[120%] opacity-15 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at center, rgba(53,208,255,0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        {/* Bottom / Front Fade Masks for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#0B0F14]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-transparent to-transparent z-10" />
      </div>

      <div ref={contentRef} className="relative z-20 w-full max-w-6xl mx-auto flex flex-col items-start lg:max-w-4xl" style={{ perspective: '1000px' }}>
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan/80 to-transparent mb-8 lg:mb-12 hidden md:block" />

        <h1
          ref={headlineRef}
          className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] font-semibold tracking-tight text-white mb-6 drop-shadow-2xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan to-electric">Premium websites</span><br />
          <span className="whitespace-nowrap">and digital experiences.</span>
        </h1>

        <p
          ref={sublineRef}
          className="font-mono text-cyan uppercase tracking-widest text-sm md:text-base mb-12 flex items-center gap-4 drop-shadow-md"
        >
          <span className="w-10 h-[1px] bg-cyan/60 block shadow-glow"></span>
          Built with precision.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto mt-4">
          <Button variant="primary" className="py-4 px-10 text-lg">
            Start Your Project
          </Button>

          <Button variant="secondary" className="py-4 px-10 text-lg">
            View Protocol
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
