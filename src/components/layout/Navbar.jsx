import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../utils/gsapUtils'
import { Menu, X } from 'lucide-react'
import Button from '../ui/Button'
import { Link, useLocation } from 'react-router-dom'

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
      const offset = 160
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
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-8 py-4">
          <Link to="/#home" className="flex items-center gap-3 group">
            <img
              src="/brand/axiom-symbol.png"
              alt="Axiom Symbol"
              className="h-7 w-auto mix-blend-screen transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <span className="text-xl font-semibold tracking-tight text-white hidden sm:block transition-colors duration-200 group-hover:text-cyan">
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
            className="md:hidden text-white flex items-center justify-center p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-steel/10 bg-[#0B0F14]/95 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
              {navItems.map((item) => {
                const active = isNavItemActive(item)
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`text-base font-medium transition-colors ${
                      active ? 'text-white' : 'text-steel hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}

              <div className="pt-2">
                <Button
                  className="w-full px-5 py-3 text-xs uppercase tracking-[0.18em]"
                  variant="secondary"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar