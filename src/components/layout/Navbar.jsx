import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../utils/gsapUtils'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Services', to: '/#services', sectionId: 'services' },
  { label: 'Proof', to: '/#proof', sectionId: 'proof' },
  { label: 'Process', to: '/#process', sectionId: 'process' },
  { label: 'Legal', to: '/legal', sectionId: null },
]

const sectionOrder = ['home', 'services', 'proof', 'process', 'contact']

const Navbar = () => {
  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let ctx = gsap.context(() => {
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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname !== '/') return

    const updateActiveSection = () => {
      const offset = 140
      let current = 'home'

      for (const id of sectionOrder) {
        const el = document.getElementById(id)
        if (!el) continue

        const top = el.getBoundingClientRect().top + window.scrollY
        if (window.scrollY >= top - offset) {
          current = id
        }
      }

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [location.pathname])

  const handleBrandClick = (e) => {
    e.preventDefault()
    setMobileOpen(false)

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('home')
      if (location.hash) {
        navigate('/', { replace: true })
      }
      return
    }

    navigate('/#home')
  }

  const isNavItemActive = (item) => {
    if (item.to === '/legal') {
      return location.pathname === '/legal'
    }
    return location.pathname === '/' && activeSection === item.sectionId
  }

  const navLinkClass = (active) =>
    `inline-flex text-sm font-medium transition-all duration-200 hover:-translate-y-[1px] ${
      active ? 'text-white' : 'text-steel hover:text-white'
    }`

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      <nav
        ref={navRef}
        className="w-full border-b border-transparent transition-colors"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <Link
            to="/#home"
            onClick={handleBrandClick}
            className="flex items-center gap-3 group min-w-0"
          >
            <img
              src="/brand/axiom-symbol.png"
              alt="Axiom Symbol"
              className="h-7 w-auto mix-blend-screen transition-transform duration-200 group-hover:scale-[1.02] shrink-0"
            />
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan truncate">
              Axiom Digital Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const active = isNavItemActive(item)
              return (
                <Link key={item.label} to={item.to} className={navLinkClass(active)}>
                  {item.label}
                </Link>
              )
            })}

            <Button
              className="px-5 py-2 text-[11px] uppercase tracking-[0.18em]"
              variant="secondary"
            >
              Book Consultation
            </Button>
          </div>

          <button
            className="md:hidden text-white flex items-center justify-center h-11 w-11 rounded-full border border-cyan/20 bg-[#0B0F14]/70 backdrop-blur-sm ml-3 shrink-0 transition-colors duration-200 hover:border-cyan/40"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-steel/10 bg-[#0B0F14]/95 backdrop-blur-2xl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5">
              <div className="rounded-[1.5rem] border border-steel/10 bg-[#111821]/80 shadow-[0_20px_40px_rgba(0,0,0,0.28)] overflow-hidden">
                <div className="px-5 py-4 border-b border-steel/10">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan font-mono">
                    Navigation
                  </p>
                </div>

                <div className="px-3 py-3 flex flex-col">
                  {navItems.map((item) => {
                    const active = isNavItemActive(item)
                    return (
                      <Link
                        key={item.label}
                        to={item.to}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium transition-all duration-200 ${
                          active
                            ? 'text-white bg-cyan/10 border border-cyan/20'
                            : 'text-steel hover:text-white hover:bg-white/[0.03] border border-transparent'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span
                          className={`h-2 w-2 rounded-full transition-all duration-200 ${
                            active ? 'bg-cyan shadow-[0_0_10px_rgba(53,208,255,0.7)]' : 'bg-transparent'
                          }`}
                        />
                      </Link>
                    )
                  })}
                </div>

                <div className="px-5 pb-5 pt-2">
                  <Button
                    className="w-full px-5 py-3 text-xs uppercase tracking-[0.18em]"
                    variant="secondary"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar