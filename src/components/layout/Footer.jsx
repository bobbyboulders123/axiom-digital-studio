import React from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ShieldCheck,
  FileText,
  Cookie,
  HelpCircle,
  Mail,
  ArrowUpRight,
} from 'lucide-react'

const footerSections = [
  {
    label: 'Navigation',
    links: [
      { title: 'Services', href: '/#services' },
      { title: 'Proof', href: '/#proof' },
      { title: 'Process', href: '/#process' },
      { title: 'Legal', href: '/legal' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '/legal?tab=privacy', icon: ShieldCheck },
      { title: 'Terms of Service', href: '/legal?tab=terms', icon: FileText },
      { title: 'Cookies Policy', href: '/legal?tab=cookies', icon: Cookie },
      { title: 'FAQ', href: '/#faq', icon: HelpCircle },
    ],
  },
  {
    label: 'Contact',
    links: [
      { title: 'hello@axiomdigital.com', href: 'mailto:hello@axiomdigital.com', icon: Mail },
      { title: 'Book Consultation', href: '/#contact', icon: ArrowUpRight },
    ],
  },
]

function AnimatedContainer({ className = '', delay = 0.1, children }) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: 8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const Footer = () => {
  return (
    <footer className="relative px-6 pb-8 pt-0 bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto rounded-t-[2rem] md:rounded-t-[3rem] border-t border-steel/15 bg-[radial-gradient(35%_140px_at_50%_0%,rgba(255,255,255,0.06),transparent)] px-6 py-12 md:px-8 lg:px-10 lg:py-16">
        <div className="bg-cyan/20 absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 rounded-full blur" />

        <div className="grid gap-10 xl:grid-cols-3 xl:gap-12">
          <AnimatedContainer className="space-y-6" delay={0.1}>
            <a href="/#home" className="inline-flex items-center gap-3 group">
              <img
                src="/brand/axiom-symbol.png"
                alt="Axiom Symbol"
                className="h-7 w-auto mix-blend-screen transition-transform duration-200 group-hover:scale-[1.02]"
              />
              <span className="text-2xl font-semibold tracking-tight text-white">
                Axiom Digital Solutions
              </span>
            </a>

            <p className="text-steel text-base leading-relaxed max-w-md">
              Premium websites and digital experiences for businesses that want a
              sharper, more credible online presence built with precision.
            </p>

            <p className="text-sm text-steel/80">
              © {new Date().getFullYear()} Axiom Digital Solutions. All rights reserved.
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 xl:col-span-2">
            {footerSections.map((section, index) => (
              <AnimatedContainer
                key={section.label}
                delay={0.15 + index * 0.08}
                className="space-y-4"
              >
                <h3 className="text-xs uppercase tracking-[0.18em] text-white/90">
                  {section.label}
                </h3>

                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="inline-flex items-center gap-2 text-steel transition-colors duration-200 hover:text-white"
                      >
                        {link.icon ? <link.icon className="h-4 w-4" /> : null}
                        <span>{link.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer