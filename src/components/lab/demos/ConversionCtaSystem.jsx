import React, { useMemo, useState } from "react";
import { ArrowRight, CalendarCheck, CheckCircle2, Download, FileText } from "lucide-react";

const goals = {
  call: {
    label: "Book a call",
    headline: "Turn curious visitors into scheduled consultations.",
    copy:
      "Guide qualified buyers toward a low-friction discovery call with clear value, calm urgency, and proof that the next step is worth their time.",
    primaryCta: "Book a strategy call",
    secondaryAction: "View availability",
    trustSignals: ["15-minute intro", "No pressure audit", "Clear next steps"],
    icon: CalendarCheck,
    metric: "32% lift",
    metricLabel: "in call starts",
  },
  quote: {
    label: "Request a quote",
    headline: "Help serious prospects request a focused project quote.",
    copy:
      "Set expectations before the form, reinforce credibility, and make the quote request feel specific enough for business owners to act.",
    primaryCta: "Request a quote",
    secondaryAction: "See project fit",
    trustSignals: ["Scoped response", "Transparent process", "Fit-first review"],
    icon: FileText,
    metric: "24 hr",
    metricLabel: "response target",
  },
  guide: {
    label: "Download guide",
    headline: "Convert early-stage visitors with a practical decision guide.",
    copy:
      "Offer a useful resource that captures intent while positioning the brand as precise, credible, and helpful before a sales conversation.",
    primaryCta: "Download the guide",
    secondaryAction: "Preview contents",
    trustSignals: ["Actionable checklist", "No spam sequence", "Built for owners"],
    icon: Download,
    metric: "41% lift",
    metricLabel: "in guide opt-ins",
  },
};

const layouts = [
  { id: "hero", label: "Hero CTA" },
  { id: "card", label: "Card CTA" },
];

const goalIds = Object.keys(goals);

function SelectionGroup({ label, options, value, onChange }) {
  return (
    <div>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">
        {label}
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {options.map((option) => {
          const selected = option.id === value;

          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={`min-h-12 rounded-full border px-4 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] motion-reduce:transition-none ${
                selected
                  ? "border-cyan/70 bg-cyan/15 text-white shadow-[0_0_24px_rgba(53,208,255,0.16)]"
                  : "border-white/10 bg-white/[0.03] text-steel hover:border-cyan/35 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TrustSignal({ children }) {
  return (
    <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/80">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
      {children}
    </span>
  );
}

function HeroPreview({ config }) {
  const Icon = config.icon;

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan/20 bg-[#071019] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.42)] md:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(53,208,255,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(47,128,237,0.16),transparent_28%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-3 py-2 text-xs font-medium text-cyan">
            <Icon className="h-4 w-4" aria-hidden="true" />
            Concept conversion module
          </div>
          <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            {config.headline}
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-steel md:text-lg md:leading-8">
            {config.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-semibold text-[#041018] shadow-[0_0_28px_rgba(53,208,255,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transform-none motion-reduce:transition-none"
            >
              {config.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-cyan/45 hover:bg-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transition-none"
            >
              {config.secondaryAction}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0B1722]/85 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
            Signal model
          </p>
          <div className="mt-5">
            <p className="text-4xl font-semibold tracking-tight text-white">
              {config.metric}
            </p>
            <p className="mt-2 text-sm text-steel">{config.metricLabel}</p>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {config.trustSignals.map((signal) => (
              <TrustSignal key={signal}>{signal}</TrustSignal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardPreview({ config }) {
  const Icon = config.icon;

  return (
    <div className="mx-auto max-w-xl rounded-[1.5rem] border border-cyan/20 bg-[#071019] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.38)] md:p-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold text-white">
            {config.metric}
          </div>
        </div>

        <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cyan">
          Interactive study
        </p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
          {config.headline}
        </h3>
        <p className="mt-4 text-sm leading-7 text-steel md:text-base">
          {config.copy}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {config.trustSignals.map((signal) => (
            <TrustSignal key={signal}>{signal}</TrustSignal>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan px-5 py-3 text-sm font-semibold text-[#041018] transition duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transform-none motion-reduce:transition-none"
          >
            {config.primaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:border-cyan/45 hover:bg-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#071019] motion-reduce:transition-none"
          >
            {config.secondaryAction}
          </button>
        </div>
      </div>
    </div>
  );
}

const ConversionCtaSystem = () => {
  const [goal, setGoal] = useState("call");
  const [layout, setLayout] = useState("hero");
  const activeConfig = useMemo(() => goals[goal], [goal]);

  return (
    <section
      aria-labelledby="conversion-cta-system-heading"
      className="rounded-[2rem] border border-white/10 bg-[#0B0F14]/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.34)] md:p-6 lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[330px_1fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 md:p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan">
            Concept demo
          </p>
          <h2
            id="conversion-cta-system-heading"
            className="mt-4 text-2xl font-semibold tracking-tight text-white"
          >
            CTA configuration logic
          </h2>
          <p className="mt-4 text-sm leading-7 text-steel">
            Select a conversion goal and layout to see how CTA messaging, action
            hierarchy, and trust cues can adapt for different visitor intent.
          </p>

          <div className="mt-7 space-y-7">
            <SelectionGroup
              label="Business goal"
              options={goalIds.map((id) => ({ id, label: goals[id].label }))}
              value={goal}
              onChange={setGoal}
            />
            <SelectionGroup
              label="Layout"
              options={layouts}
              value={layout}
              onChange={setLayout}
            />
          </div>
        </div>

        <div className="min-w-0 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(53,208,255,0.08),rgba(47,128,237,0.04)_34%,rgba(255,255,255,0.03))] p-4 md:p-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                Live preview
              </p>
              <p className="mt-2 text-sm text-steel">
                {goals[goal].label} / {layouts.find((item) => item.id === layout)?.label}
              </p>
            </div>
          </div>

          {layout === "hero" ? (
            <HeroPreview config={activeConfig} />
          ) : (
            <CardPreview config={activeConfig} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ConversionCtaSystem;
