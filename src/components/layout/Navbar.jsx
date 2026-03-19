import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../utils/gsapUtils'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'

const Navbar = () => {
  const navRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Navbar background scroll morphing to a full-width header
      gsap.to(navRef.current, {
        scrollTrigger: {
          trigger: 'body',
          start: '20px top',
          end: '80px top',
          toggleActions: 'play none none reverse',
          fastScrollEnd: true,
        },
        backgroundColor: 'rgba(11, 15, 20, 0.95)',
        backdropFilter: 'blur(24px)',
        borderBottomColor: 'rgba(124, 138, 153, 0.15)',
        duration: 0.3,
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <nav 
        ref={navRef}
        className="flex items-center justify-between w-full px-6 md:px-12 py-5 border-b border-transparent transition-colors"
      >
        <div className="flex items-center gap-4">
          <img src="/brand/axiom-symbol.png" alt="Axiom Symbol" className="h-7 w-auto mix-blend-screen" />
          <span className="text-xl font-semibold tracking-tight text-white hidden sm:block">Axiom Digital Solutions</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#services" className="text-sm font-medium text-steel hover:text-white transition-colors hover:-translate-y-[1px]">Services</a>
          <a href="#process" className="text-sm font-medium text-steel hover:text-white transition-colors hover:-translate-y-[1px]">Process</a>
          <a href="#work" className="text-sm font-medium text-steel hover:text-white transition-colors hover:-translate-y-[1px]">Work</a>
          
          <Button className="px-6 py-2.5 text-xs uppercase tracking-wider" variant="secondary">
            Book Consultation
          </Button>
        </div>

        <button 
          className="md:hidden text-white flex items-center justify-center p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-[#0B0F14]/95 backdrop-blur-xl border-b border-steel/15 p-6 flex flex-col shadow-2xl transition-all duration-300">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-cyan transition-colors">Services</a>
          <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-cyan transition-colors">Process</a>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-white hover:text-cyan transition-colors">Work</a>
          
          <Button className="w-full py-3 mt-4 text-sm uppercase tracking-wider" variant="secondary">
            Book Consultation
          </Button>
        </div>
      )}
    </div>
  )
}

export default Navbar
