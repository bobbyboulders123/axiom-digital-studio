import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../utils/gsapUtils'
import { GlowCard } from '../ui/spotlight-card'

const Features = () => {
  const containerRef = useRef(null)

  const shufflerCardsRef = useRef([])
  const cursorRef = useRef(null)
  const targetAreaRef = useRef(null)

  const [typedText, setTypedText] = useState({ line1: '', line2: '', line3: '' })

  useEffect(() => {
    let ctx = gsap.context(() => {
      const shufflerTl = gsap.timeline({ repeat: -1 })

      shufflerCardsRef.current.forEach((card) => {
        if (!card) return
        shufflerTl
          .to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: 10,
            duration: 0.5,
            ease: 'power2.inOut',
          })
          .to({}, { duration: 2 })
          .to(card, {
            y: -20,
            opacity: 0,
            scale: 0.95,
            zIndex: 0,
            duration: 0.5,
            ease: 'power2.inOut',
          })
      })

      if (cursorRef.current && targetAreaRef.current) {
        const cursorTl = gsap.timeline({ repeat: -1, repeatDelay: 1 })

        cursorTl
          .set(cursorRef.current, {
            top: '90%',
            left: '80%',
            opacity: 0,
            scale: 1,
            xPercent: -50,
            yPercent: -50,
          })
          .to(cursorRef.current, { opacity: 1, duration: 0.3 })
          .to(cursorRef.current, {
            top: '75%',
            left: '25%',
            duration: 1,
            ease: 'power4.out',
          })
          .to(cursorRef.current, {
            scale: 0.8,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
          })
          .to(
            targetAreaRef.current,
            {
              backgroundColor: 'rgba(53, 208, 255, 0.2)',
              borderColor: 'rgba(53, 208, 255, 0.5)',
              duration: 0.2,
            },
            '-=0.1'
          )
          .to(targetAreaRef.current, {
            backgroundColor: 'transparent',
            borderColor: 'rgba(124, 138, 153, 0.1)',
            duration: 0.5,
            delay: 0.5,
          })
          .to(cursorRef.current, { opacity: 0, duration: 0.3 })
      }
    }, containerRef)

    const fullText1 = '> INITIALIZING CORE...'
    const fullText2 = '> BUILDING INFRASTRUCTURE...'
    const fullText3 = '> STATUS: SECURE.'

    let isTyping = true
    let i = 0
    let j = 0
    let k = 0
    let timeoutId

    const typeWriter = () => {
      if (!isTyping) return

      if (i < fullText1.length) {
        i++
        setTypedText((prev) => ({ ...prev, line1: fullText1.substring(0, i) }))
        timeoutId = setTimeout(typeWriter, 40)
      } else if (j < fullText2.length) {
        j++
        setTypedText((prev) => ({ ...prev, line2: fullText2.substring(0, j) }))
        timeoutId = setTimeout(typeWriter, 25)
      } else if (k < fullText3.length) {
        k++
        setTypedText((prev) => ({ ...prev, line3: fullText3.substring(0, k) }))
        timeoutId = setTimeout(typeWriter, 50)
      } else {
        timeoutId = setTimeout(() => {
          if (!isTyping) return
          i = 0
          j = 0
          k = 0
          setTypedText({ line1: '', line2: '', line3: '' })
          timeoutId = setTimeout(typeWriter, 500)
        }, 3000)
      }
    }

    const startDelay = setTimeout(typeWriter, 500)

    return () => {
      isTyping = false
      clearTimeout(startDelay)
      clearTimeout(timeoutId)
      ctx.revert()
    }
  }, [])

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 bg-[#0B0F14] relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
        <div className="md:col-span-5 relative">
          <div className="sticky top-[35vh]">
            <div className="absolute -left-6 top-2 w-1 h-24 bg-gradient-to-b from-electric to-cyan/20"></div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 drop-shadow-md">
              Functional Artifacts
            </h2>

            <p className="text-steel max-w-sm text-lg leading-relaxed">
              Precision-engineered solutions tailored for performance, design, and
              absolute credibility.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-12">
          <GlowCard
            customSize={true}
            glowColor="cyan"
            className="group h-[400px] overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          >
            <h3 className="text-white font-medium text-2xl mb-3 z-20 relative transition-transform duration-500 group-hover:translate-x-2">
              Tailored Premium Design
            </h3>
            <p className="text-steel text-base z-20 relative transition-transform duration-500 group-hover:translate-x-2">
              Automated design iterations ensuring absolute visual perfection.
            </p>

            <div className="mt-auto relative w-full h-[180px] flex items-end justify-center pb-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  ref={(el) => (shufflerCardsRef.current[i - 1] = el)}
                  className="absolute w-full h-[100px] bg-[#1B2430]/90 backdrop-blur-md border border-steel/20 rounded-xl shadow-lg flex items-center p-4 opacity-0 translate-y-4"
                >
                  <div className="w-10 h-10 rounded bg-cyan/10 border border-cyan/30 flex items-center justify-center mr-4">
                    <span className="text-cyan text-xs font-mono">0{i}</span>
                  </div>
                  <div className="space-y-3 flex-grow">
                    <div className="h-1.5 w-3/4 bg-steel/30 rounded"></div>
                    <div className="h-1.5 w-1/2 bg-steel/20 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>

          <GlowCard
            customSize={true}
            glowColor="electricBlue"
            className="group h-[400px] overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          >
            <h3 className="text-white font-medium text-2xl mb-3 z-20 relative transition-transform duration-500 group-hover:translate-x-2">
              Modern, High-Performance
            </h3>
            <p className="text-steel text-base z-20 relative transition-transform duration-500 group-hover:translate-x-2">
              Built on next-gen architecture for maximum speed and SEO.
            </p>

            <div className="mt-8 relative w-full h-[180px] bg-[#0B0F14] rounded-xl border border-steel/10 p-5 font-mono text-xs text-cyan/80 flex flex-col shadow-inner">
              <div className="flex items-center gap-3 mb-5 border-b border-steel/10 pb-3">
                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-glow"></div>
                <span className="text-steel uppercase tracking-widest text-[10px]">
                  Sys_Log
                </span>
              </div>

              <div className="text-cyan/70 whitespace-pre-line leading-relaxed flex-grow relative overflow-hidden">
                <span>{typedText.line1}</span>
                <br />
                <span className="opacity-70">{typedText.line2}</span>
                <br />
                <span className="text-white text-shadow-glow">{typedText.line3}</span>
                <span className="inline-block w-1.5 h-3 ml-1 bg-cyan/80 animate-pulse align-middle"></span>
              </div>
            </div>
          </GlowCard>

          <GlowCard
            customSize={true}
            glowColor="steel"
            className="group h-[400px] overflow-hidden transition-transform duration-500 hover:-translate-y-2"
          >
            <h3 className="text-white font-medium text-2xl mb-3 z-20 relative transition-transform duration-500 group-hover:translate-x-2">
              Elevate Your Brand
            </h3>
            <p className="text-steel text-base z-20 relative transition-transform duration-500 group-hover:translate-x-2">
              Websites programmed to build trust and scale authority.
            </p>

            <div className="mt-8 relative w-full h-[180px] bg-[#1B2430]/40 rounded-xl border border-steel/10 p-5">
              <div className="grid grid-cols-4 gap-3 h-full relative z-10">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#0B0F14]/80 border border-steel/10 rounded-lg group-hover:border-steel/20 transition-colors"
                  ></div>
                ))}

                <div
                  ref={targetAreaRef}
                  className="bg-[#0B0F14] border border-steel/20 rounded-lg relative flex items-center justify-center col-span-2 row-span-2 transition-colors"
                >
                  <span className="text-steel/60 text-xs font-mono">deploy()</span>
                </div>

                {[...Array(4)].map((_, i) => (
                  <div
                    key={`end-${i}`}
                    className="bg-[#0B0F14]/80 border border-steel/10 rounded-lg group-hover:border-steel/20 transition-colors"
                  ></div>
                ))}
              </div>

              <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-6 h-6 z-20 pointer-events-none drop-shadow-[0_0_8px_rgba(53,208,255,0.8)]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 2.5L19.5 10L12 11.5L9.5 19L5.5 2.5Z"
                    stroke="#35D0FF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}

export default Features