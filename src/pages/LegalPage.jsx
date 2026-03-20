import React, { useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import GlobalNoise from '../components/ui/GlobalNoise'

const legalTabs = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms of Service' },
  { id: 'cookies', label: 'Cookies Policy' },
]

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'This placeholder Privacy Policy explains how Axiom Digital Solutions may collect, use, and safeguard information submitted through this website.',
      'When your final policy is ready, this section should cover what data is collected, how it is used, whether analytics or form submissions are stored, and how users can contact you regarding their information.',
      'This is a structural placeholder and should be replaced with your finalized legal copy before launch.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    body: [
      'This placeholder Terms of Service section outlines the general structure for the terms governing use of this website and any related services offered by Axiom Digital Solutions.',
      'Your final terms should define acceptable use, service limitations, intellectual property language, disclaimers, and how disputes are handled.',
      'This content is a placeholder for layout and navigation purposes and should be replaced before launch.',
    ],
  },
  cookies: {
    title: 'Cookies Policy',
    body: [
      'This placeholder Cookies Policy section explains the general role cookies and similar technologies may play on the site.',
      'Your final version should explain whether analytics, marketing, or functional cookies are used, how visitors can manage preferences, and how consent is handled if needed.',
      'This is structural placeholder content only and should be updated with final legal language before launch.',
    ],
  },
}

const LegalPage = () => {
  const location = useLocation()

  const initialTab = useMemo(() => {
    const params = new URLSearchParams(location.search)
    const tab = params.get('tab')
    return legalTabs.some((item) => item.id === tab) ? tab : 'privacy'
  }, [location.search])

  const [activeTab, setActiveTab] = useState(initialTab)

  useEffect(() => {
    setActiveTab(initialTab)
  }, [initialTab])

  const current = legalContent[activeTab]

  return (
    <div className="relative min-h-screen selection:bg-[#2F80ED]/30 selection:text-white flex flex-col bg-[#05070A]">
      <GlobalNoise />
      <Navbar />

      <main className="flex-grow pt-28 md:pt-32 px-6 pb-20">
        <section className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <p className="font-mono text-cyan uppercase tracking-[0.22em] text-xs mb-5">
              Legal
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-5">
              Legal Information
            </h1>
            <p className="text-steel text-lg md:text-xl leading-relaxed">
              This page houses the legal foundation for the Axiom Digital Solutions website.
              Replace this placeholder content with your finalized policies before launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            {legalTabs.map((tab) => {
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'border-cyan/50 bg-cyan/10 text-white shadow-[0_0_20px_rgba(53,208,255,0.12)]'
                      : 'border-steel/20 bg-[#0B0F14] text-steel hover:text-white hover:border-cyan/30'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="rounded-[2rem] border border-steel/15 bg-[#0B0F14]/70 backdrop-blur-xl p-8 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.28)]">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              {current.title}
            </h2>

            <div className="space-y-5">
              {current.body.map((paragraph, index) => (
                <p key={index} className="text-steel text-base md:text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LegalPage