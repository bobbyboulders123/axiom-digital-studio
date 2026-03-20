import React from 'react'
import Button from '../ui/Button'

const CtaSection = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#0B0F14] relative overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(47,128,237,0.15)_0%,_transparent_60%)] pointer-events-none mix-blend-screen"></div>

      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-steel/40"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-steel/40"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-steel/40"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-steel/40"></div>

      <div className="max-w-3xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight drop-shadow-lg">
          Ready to build your digital instrument?
        </h2>

        <p className="text-steel text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Partner with Axiom Digital Solutions to replace your generic website with a
          high-performance, premium digital experience.
        </p>

        <Button className="px-10 py-5 text-lg uppercase" variant="primary">
          Book a Consultation
        </Button>
      </div>

      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124, 138, 153, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 138, 153, 0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>
    </section>
  )
}

export default CtaSection