import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you build new websites, redesign old ones, or both?",
    answer:
      "Both. Axiom Digital Studio builds new websites from the ground up and also redesigns outdated websites that need a stronger visual direction, clearer messaging, better performance, and a more credible online presence.",
  },
  {
    question: "How custom is the work?",
    answer:
      "The work is tailored to your business, brand, audience, and goals. We do not approach projects like generic template swaps. The goal is to create a site that feels intentional, aligned, and specific to the quality of your business.",
  },
  {
    question: "Do you factor in mobile, performance, and SEO?",
    answer:
      "Yes. Mobile polish, fast load times, clear structure, and SEO-ready foundations are part of the process from the start. A good website should not only look better — it should work better too.",
  },
  {
    question: "How do you figure out the right direction for a project?",
    answer:
      "We start with intake and discovery. That includes understanding your business, brand, audience, goals, content needs, and the overall feel you want the site to communicate before design and development begin.",
  },
  {
    question: "Do you test the site before launch?",
    answer:
      "Yes. QA is part of the process. We review the experience across devices, refine details, check for issues, and make sure the final site feels smooth, credible, and ready for real visitors before launch.",
  },
  {
    question: "What is the first step if I want to work with you?",
    answer:
      "Start by reaching out through the contact form. From there, we can talk through whether you need a new site, a redesign, or a more refined direction for your current web presence.",
  },
];

function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] backdrop-blur-sm transition-colors duration-300 hover:border-cyan/20">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6 sm:py-6"
      >
        <span className="text-base font-medium leading-7 text-white sm:text-lg">
          {question}
        </span>

        <span
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-transform duration-300 ${
            isOpen ? "rotate-180 border-cyan/30 text-cyan" : "text-white/65"
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-80"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-5" />
            <p className="max-w-3xl text-sm leading-7 text-steel sm:text-base">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-steel/10 bg-[#0B0F14] px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,138,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4 lg:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="mb-7 inline-flex items-center gap-4">
              <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-electric via-cyan to-cyan/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/80">
                AXIOM // FAQ
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Questions,
              <br />
              answered clearly.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-steel md:text-lg">
              A few of the things clients usually want to know before starting
              a new website or redesign.
            </p>
          </div>
        </div>

        <div className="space-y-4 md:col-span-8 lg:col-span-7">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;