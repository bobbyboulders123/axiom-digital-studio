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

    const fullText1 = '> STRUCTURING CONTENT...'
    const fullText2 = '> OPTIMIZING PERFORMANCE...'
    const fullText3 = '> STATUS: LAUNCH READY.'

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
    <section
      id="services"
      ref={containerRef}
      className="py-24 md:py-32 px-6 bg-[#0B0F14] relative z-20 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 relative z-10">
        <div className="md:col-span-5 relative">
          <div className="md:sticky md:top-[35vh]">
            <div className="mb-7 inline-flex items-center gap-4">
              <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-electric via-cyan to-cyan/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/80">
                AXIOM // SERVICES
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Designed to look premium.
              <br />
              Built to perform.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-steel md:text-lg">
              New websites and thoughtful redesigns built with strong design, fast performance,
              mobile polish, SEO-ready structure, and clear paths to action.
            </p>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8 md:space-y-12">
          <div className="touch-pan-y" style={{ touchAction: 'pan-y' }}>
            <GlowCard
              customSize={true}
              glowColor="cyan"
              className="group h-[360px] md:h-[400px] transition-transform duration-500 hover:-translate-y-2 pointer-events-none md:pointer-events-auto"
            >
              <div className="relative z-10 h-full rounded-[1.25rem] flex flex-col">
                <h3 className="text-white font-medium text-2xl mb-3 relative transition-transform duration-500 group-hover:translate-x-2">
                  Built from the Ground Up
                </h3>
                <p className="text-steel text-base relative transition-transform duration-500 group-hover:translate-x-2">
                  Design from the ground up around your brand, audience, and goals
                  so your website feels polished, credible, and distinctly yours.
                </p>

                <div className="mt-auto relative w-full h-[180px] flex items-end justify-center pb-6 rounded-[1rem]">
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
              </div>
            </GlowCard>
          </div>

          <div className="touch-pan-y" style={{ touchAction: 'pan-y' }}>
            <GlowCard
              customSize={true}
              glowColor="electricBlue"
              className="group h-[360px] md:h-[400px] transition-transform duration-500 hover:-translate-y-2 pointer-events-none md:pointer-events-auto"
            >
              <div className="relative z-10 h-full rounded-[1.25rem] flex flex-col">
                <h3 className="text-white font-medium text-2xl mb-3 relative transition-transform duration-500 group-hover:translate-x-2">
                  Strategic Website Redesign
                </h3>
                <p className="text-steel text-base relative transition-transform duration-500 group-hover:translate-x-2">
                  Redesign your current website to load quickly, work smoothly across devices,
                  and support SEO from the foundation.
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
              </div>
            </GlowCard>
          </div>

          <div className="touch-pan-y" style={{ touchAction: 'pan-y' }}>
            <GlowCard
              customSize={true}
              glowColor="steel"
              className="group h-[360px] md:h-[400px] transition-transform duration-500 hover:-translate-y-2 pointer-events-none md:pointer-events-auto"
            >
              <div className="relative z-10 h-full rounded-[1.25rem] flex flex-col">
                <h3 className="text-white font-medium text-2xl mb-3 relative transition-transform duration-500 group-hover:translate-x-2">
                  Messaging That Converts
                </h3>
                <p className="text-steel text-base relative transition-transform duration-500 group-hover:translate-x-2">
                  Better messaging, navigation, and calls to action will 
                  earn trust and turn visitors into real inquiries.
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
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features