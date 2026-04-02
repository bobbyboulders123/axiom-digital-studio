import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../../utils/gsapUtils";

import FlipImageCard from "../ui/FlipImageCard";

import discoveryImg from "../../assets/process/discovery.png";
import designImg from "../../assets/process/design.png";
import developImg from "../../assets/process/develop.png";
import deployImg from "../../assets/process/deploy.png";

const steps = [
  {
    id: "01",
    phase: "Phase 01",
    title: "Discovery",
    intro:
      "We start with intake, direction, and strategy before a single page is designed.",
    detail:
      "This phase helps us understand your business, brand, audience, desired feel, site goals, and content needs so the project starts with clarity instead of guesswork.",
    bgClass: "bg-[#0B0F14]",
    panelTag: "Requirements Matrix",
    image: discoveryImg,
    imageAlt:
      "Discovery phase workspace with clipboard, notes, and monitor glow",
    variant: "discovery",
    features: [
      "Intake form and brand direction",
      "Audience, goals, and page planning",
      "Content structure and implementation scope",
    ],
  },
  {
    id: "02",
    phase: "Phase 02",
    title: "Design",
    intro:
      "We shape the visual direction around your brand, business type, and the experience you want clients to have.",
    detail:
      "Layout, hierarchy, spacing, and visual tone are refined to feel intentional, clear, and aligned with your business rather than generic or trend-chasing.",
    bgClass: "bg-[#101720]",
    panelTag: "Interface System",
    image: designImg,
    imageAlt:
      "Design workstation with premium monitor showing UI wireframes and layout systems",
    variant: "design",
    features: [
      "Brand-aligned visual direction",
      "Layout hierarchy and content flow",
      "Responsive design refinement",
    ],
  },
  {
    id: "03",
    phase: "Phase 03",
    title: "Engineering",
    intro:
      "We turn the approved direction into a custom build with performance, responsiveness, and clean implementation in mind.",
    detail:
      "This is where the site is coded, refined, and checked across devices so it feels smooth, loads quickly, and holds up in real use.",
    bgClass: "bg-[#0D131B]",
    panelTag: "Build Stack",
    image: developImg,
    imageAlt:
      "Engineering workstation with keyboard, code editor, and moody technical lighting",
    variant: "engineering",
    features: [
      "Custom front-end development",
      "Performance and animation refinement",
      "Cross-device QA throughout the build",
    ],
  },
  {
    id: "04",
    phase: "Phase 04",
    title: "Launch",
    intro:
      "We launch with final QA, production checks, and post-launch refinement.",
    detail:
      "The result is not just a website pushed live. It is a finished experience that has been reviewed, tested, and prepared for real visitors.",
    bgClass: "bg-[#0B0F14]",
    panelTag: "Deployment Control",
    image: deployImg,
    imageAlt:
      "Launch environment with deployment dashboard and multiple displays",
    variant: "launch",
    features: [
      "Production deployment and verification",
      "Speed, accessibility, and final QA",
      "Analytics and post-launch refinement",
    ],
  },
];

function MobileCard({ step }) {
  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 ${step.bgClass} px-5 py-6 shadow-[0_24px_50px_rgba(0,0,0,0.35)]`}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,138,153,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.14) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,208,255,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(47,128,237,0.08),transparent_24%)]" />
      </div>

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan">
            {step.phase}
          </span>
          <div className="flex h-12 min-w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-3 font-mono text-sm text-cyan">
            {step.id}
          </div>
        </div>

        <div className="mb-5">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
            Operational Sequence
          </div>
          <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white">
            {step.title}
          </h3>
        </div>

        <div className="space-y-5">
          <p className="text-xl leading-8 text-white">{step.intro}</p>

          <p className="text-base leading-8 text-steel">{step.detail}</p>

          <div className="pt-2">
            <FlipImageCard
              title={step.title}
              label={step.panelTag}
              image={step.image}
              imageAlt={step.imageAlt}
              features={step.features}
              variant={step.variant}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function DesktopCard({ step, index, cardsRef }) {
  return (
    <article
      ref={(el) => (cardsRef.current[index] = el)}
      className={`absolute left-0 h-full w-full ${step.bgClass} ${index > 0 ? "top-[100%]" : "top-0"}`}
      style={{
        zIndex: index + 1,
        boxShadow: index > 0 ? "0 -24px 60px rgba(0,0,0,0.55)" : "none",
      }}
    >
      <div className="relative flex h-full items-center px-6 pt-28 pb-12 md:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="relative">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-sm uppercase tracking-[0.28em] text-cyan">
                {step.phase}
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan/50 to-transparent" />
            </div>

            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <div className="mb-3 font-mono text-[12px] uppercase tracking-[0.3em] text-white/35">
                  Operational Sequence
                </div>
                <h3 className="text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl md:text-7xl">
                  {step.title}
                </h3>
              </div>

              <div className="hidden md:flex h-16 min-w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 font-mono text-xl text-cyan shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_40px_rgba(0,0,0,0.28)]">
                {step.id}
              </div>
            </div>

            <div className="max-w-3xl space-y-6">
              <p className="text-xl leading-relaxed text-white md:text-2xl">
                {step.intro}
              </p>

              <p className="max-w-2xl text-base leading-8 text-steel md:text-lg">
                {step.detail}
              </p>
            </div>
          </div>

          <FlipImageCard
            title={step.title}
            label={step.panelTag}
            image={step.image}
            imageAlt={step.imageAlt}
            features={step.features}
            variant={step.variant}
          />
        </div>
      </div>
    </article>
  );
}

const Protocol = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      const timeline = gsap.timeline();
      timeline.to(cards.slice(1), {
        yPercent: -100,
        ease: "none",
        stagger: 0.7,
      });

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 170}%`,
        pin: true,
        scrub: 1.2,
        animation: timeline,
      });

      return () => {
        trigger.kill();
        timeline.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.08] lg:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,138,153,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.14) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(53,208,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(47,128,237,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-20 pb-8 md:px-10 lg:absolute lg:top-10 lg:left-1/2 lg:-translate-x-1/2 lg:pt-0 lg:pb-0">
        <div className="inline-flex items-center gap-4">
          <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-electric via-cyan to-cyan/20" />
          <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/80">
            AXIOM // PROCESS
          </span>
        </div>
      </div>

      <div className="relative z-10 px-4 pb-16 md:px-6 lg:hidden">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 pt-2">
          {steps.map((step) => (
            <MobileCard key={step.id} step={step} />
          ))}
        </div>
      </div>

      <div className="relative hidden h-screen w-full lg:block">
        {steps.map((step, index) => (
          <DesktopCard
            key={step.id}
            step={step}
            index={index}
            cardsRef={cardsRef}
          />
        ))}
      </div>
    </section>
  );
};

export default Protocol;
