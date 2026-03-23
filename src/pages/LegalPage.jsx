import React, { useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import GlobalNoise from '../components/ui/GlobalNoise'

const legalTabs = [
  { id: 'privacy', label: 'Privacy Policy' },
  { id: 'terms', label: 'Terms of Service' },
  { id: 'cookies', label: 'Cookies & Disclaimer' },
]

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Effective Date',
        paragraphs: ['March 23, 2026'],
      },
      {
        heading: 'Overview',
        paragraphs: [
          'Axiom Digital Studio (“Axiom Digital Studio,” “we,” “us,” or “our”) respects your privacy and is committed to handling your information responsibly.',
          'This Privacy Policy explains what information we collect through this website, how we use it, and the choices you may have regarding your information.',
        ],
      },
      {
        heading: 'Who We Are',
        paragraphs: [
          'Axiom Digital Studio is the public-facing brand of Axiom Solutions, LLC. This website is intended to provide information about our services, showcase our work, and offer a simple way for potential clients to contact us.',
          'For privacy-related questions, you may contact us at hello@axiomdigital.studio.',
        ],
      },
      {
        heading: 'Information We Collect',
        paragraphs: [
          'We collect information that you voluntarily provide through our contact form or direct communications.',
          'This may include your name, email address, phone number, company name, and project details or message content.',
          'We do not intentionally collect payment information through this website.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        paragraphs: [
          'We use the information you submit to respond to inquiries, communicate with you about your project or request, evaluate whether our services are a good fit, provide information about our services, and maintain reasonable business records related to inquiries and communications.',
          'We do not sell your personal information.',
        ],
      },
      {
        heading: 'Contact Form Handling',
        paragraphs: [
          'When you submit information through this website, your message may be delivered to our business email systems and related communication tools used to receive and manage inquiries.',
          'At this time, contact inquiries are directed to hello@axiomdigital.studio.',
        ],
      },
      {
        heading: 'Third-Party Services',
        paragraphs: [
          'This website may rely on third-party tools or service providers to operate properly, such as website hosting, email, fonts, analytics, spam protection, or scheduling tools.',
          'These may include services such as Vercel, Zoho Mail, Google Fonts, Google Analytics, Calendly, and reCAPTCHA or similar anti-spam tools if enabled in the future.',
          'Any third-party service handles data according to its own policies and terms.',
        ],
      },
      {
        heading: 'Cookies and Similar Technologies',
        paragraphs: [
          'This website may use basic technical tools or cookies required for normal website operation. We may also use limited analytics tools now or in the future to better understand website traffic and improve the site experience.',
          'We do not use this website to sell personal data, and we do not currently use aggressive advertising or remarketing trackers.',
        ],
      },
      {
        heading: 'How We Share Information',
        paragraphs: [
          'We do not sell, rent, or trade your personal information.',
          'We may share information only in limited situations, such as with service providers that help us operate the website or communications, when required by law, or when necessary to protect our rights, property, or safety.',
        ],
      },
      {
        heading: 'Data Retention and Security',
        paragraphs: [
          'We retain inquiry and contact information only for as long as reasonably necessary to respond to your request, maintain business records, and support our operations.',
          'We take reasonable steps to protect information submitted through the site. However, no method of online transmission or storage is completely secure, and we cannot guarantee absolute security.',
        ],
      },
      {
        heading: 'Children’s Privacy',
        paragraphs: [
          'This website is intended for adults and business-related inquiries. It is not directed to children under 13, and we do not knowingly collect personal information from children.',
        ],
      },
      {
        heading: 'Your Rights and Choices',
        paragraphs: [
          'Depending on where you live, you may have rights related to your personal information, including the right to request access, correction, or deletion of certain information.',
          'To make a privacy-related request, contact hello@axiomdigital.studio.',
        ],
      },
      {
        heading: 'Updates to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. When we do, we will post the updated version on this page and revise the effective date accordingly.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'If you have questions about this Privacy Policy or how your information is handled, please contact Axiom Digital Studio at hello@axiomdigital.studio.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    sections: [
      {
        heading: 'Effective Date',
        paragraphs: ['March 23, 2026'],
      },
      {
        heading: 'Acceptance of Terms',
        paragraphs: [
          'Welcome to Axiom Digital Studio. These Terms of Service (“Terms”) govern your access to and use of this website.',
          'By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the site.',
        ],
      },
      {
        heading: 'About This Website',
        paragraphs: [
          'This website is operated by Axiom Digital Studio, the public-facing brand of Axiom Solutions, LLC (“we,” “us,” or “our”).',
          'This site is provided for general informational, marketing, and contact purposes. It is intended to showcase our services, capabilities, and brand.',
        ],
      },
      {
        heading: 'No Client Relationship',
        paragraphs: [
          'Using this website, submitting a contact form, or emailing us does not by itself create a client relationship, partnership, or binding agreement.',
          'A formal client relationship exists only when both parties enter into a separate written agreement.',
        ],
      },
      {
        heading: 'Service Information',
        paragraphs: [
          'We make reasonable efforts to present our services accurately and professionally. However, all descriptions, examples, and statements on this site are for general informational purposes only.',
          'Any specific project scope, timelines, deliverables, pricing, ownership terms, or support commitments will be governed by a separate written agreement.',
        ],
      },
      {
        heading: 'No Guarantee of Specific Results',
        paragraphs: [
          'We strive to deliver high-quality work and professional service. However, we do not guarantee specific business results, search rankings, lead volume, conversion rates, revenue outcomes, or uninterrupted website performance.',
          'Project outcomes can depend on many factors outside our control, including market conditions, third-party platforms, hosting environments, client responsiveness, and content quality.',
        ],
      },
      {
        heading: 'User Submissions',
        paragraphs: [
          'If you submit information through our contact form or email us, you agree that the information you provide is accurate to the best of your knowledge and does not contain unlawful, abusive, harmful, or misleading content.',
          'You remain responsible for the content you provide.',
        ],
      },
      {
        heading: 'Client Materials and Rights',
        paragraphs: [
          'If you become a client, you are responsible for ensuring that any content, text, images, logos, videos, trademarks, or other materials you provide may be legally used for your project.',
          'Unless otherwise stated in a written agreement, you represent that you have the right to provide and authorize the use of any materials submitted to us.',
        ],
      },
      {
        heading: 'Intellectual Property',
        paragraphs: [
          'All content on this website, including text, branding, graphics, design elements, layout, and other original materials, is owned by or licensed to Axiom Digital Studio / Axiom Solutions, LLC unless otherwise noted.',
          'You may browse the site for personal or business informational use, but you may not copy, reproduce, republish, distribute, modify, or exploit website content without prior written permission.',
        ],
      },
      {
        heading: 'Portfolio Rights',
        paragraphs: [
          'Unless otherwise agreed in writing, we reserve the right to display completed or launched work in our portfolio, case studies, social channels, presentations, and marketing materials for the purpose of showcasing our services.',
        ],
      },
      {
        heading: 'Project Timelines',
        paragraphs: [
          'Any references to timelines, launch windows, or schedules on this website or in early discussions are estimates only unless confirmed in a written agreement.',
          'Actual timelines may vary based on project scope, revisions, client responsiveness, technical requirements, and third-party dependencies.',
        ],
      },
      {
        heading: 'Right to Refuse Service',
        paragraphs: [
          'We reserve the right to decline inquiries, proposals, or projects at our discretion, including when a project is not a fit, presents unreasonable risk, or conflicts with our standards, availability, or business direction.',
        ],
      },
      {
        heading: 'Third-Party Services and Links',
        paragraphs: [
          'This website may reference, integrate with, or link to third-party platforms or services. We are not responsible for the content, policies, availability, or practices of third-party websites or tools.',
        ],
      },
      {
        heading: 'Website Availability',
        paragraphs: [
          'We may update, change, suspend, or remove parts of this website at any time without notice. We do not guarantee that the site will always be available, error-free, or free from interruptions.',
        ],
      },
      {
        heading: 'Disclaimer of Warranties',
        paragraphs: [
          'This website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'To the fullest extent permitted by law, Axiom Digital Studio and Axiom Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website.',
        ],
      },
      {
        heading: 'Governing Law and Venue',
        paragraphs: [
          'These Terms are governed by the laws of the State of Colorado, without regard to conflict of law principles.',
          'Any dispute arising from or relating to these Terms or this website shall be brought in the appropriate state or federal courts located in Colorado, and you consent to that venue and jurisdiction.',
        ],
      },
      {
        heading: 'Changes to These Terms',
        paragraphs: [
          'We may update these Terms from time to time. Updated versions will be posted on this page with a revised effective date.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about these Terms may be sent to hello@axiomdigital.studio.',
        ],
      },
    ],
  },
  cookies: {
    title: 'Cookies & Disclaimer',
    sections: [
      {
        heading: 'Cookies Policy',
        paragraphs: [
          'This website may use basic cookies or similar technologies required for normal website operation, performance, and security.',
          'We may also use limited analytics tools now or in the future to better understand traffic and improve the website experience. We do not currently use aggressive advertising or remarketing trackers.',
          'If additional tracking, analytics, scheduling, or anti-spam tools are added in the future, this page may be updated to reflect those changes.',
        ],
      },
      {
        heading: 'General Disclaimer',
        paragraphs: [
          'The information provided on this website by Axiom Digital Studio, the public-facing brand of Axiom Solutions, LLC, is for general informational and promotional purposes only.',
          'The content on this website is intended to describe our services, experience, design approach, and general capabilities. It is not intended as legal, financial, tax, marketing, or business advice.',
        ],
      },
      {
        heading: 'No Professional Advice',
        paragraphs: [
          'Nothing on this site should be interpreted as a substitute for advice from licensed legal, financial, accounting, or other qualified professionals.',
        ],
      },
      {
        heading: 'No Guarantee of Outcomes',
        paragraphs: [
          'While we aim to provide premium, high-quality website and digital services, we do not guarantee any specific results from the use of our services or from information presented on this website.',
          'This includes, without limitation, search rankings, lead generation, revenue increases, conversion improvements, uninterrupted uptime, or performance on third-party platforms.',
        ],
      },
      {
        heading: 'Third-Party Platforms',
        paragraphs: [
          'We may discuss or reference third-party tools, hosting providers, registrars, email providers, analytics services, or related platforms. We are not responsible for the performance, policies, uptime, pricing, or actions of third-party providers.',
        ],
      },
      {
        heading: 'Project-Specific Terms',
        paragraphs: [
          'If you become a client, the actual terms of your project, including scope, ownership, revisions, deliverables, support, and payment obligations, will be defined in a separate written agreement. That agreement will control over any general statements made on this website.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: [
          'If you have questions about our services, process, or policies, please contact hello@axiomdigital.studio.',
        ],
      },
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
              Important information about how Axiom Digital Studio handles website use,
              inquiries, and privacy. These policies are designed to keep things clear,
              professional, and transparent.
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
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              {current.title}
            </h2>

            <div className="space-y-10">
              {current.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                    {section.heading}
                  </h3>

                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-steel text-base md:text-lg leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
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