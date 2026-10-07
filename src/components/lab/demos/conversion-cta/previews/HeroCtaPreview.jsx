import React from "react";
import CtaCardShell from "../zones/CtaCardShell.jsx";
import MetricBadge from "../zones/MetricBadge.jsx";
import PrimaryAction from "../zones/PrimaryAction.jsx";
import SecondaryAction from "../zones/SecondaryAction.jsx";
import TrustChip from "../zones/TrustChip.jsx";

const heroStyles = {
  light: {
    shell:
      "border-[#d8e5ea] bg-[#f8fbfc] shadow-[0_28px_80px_rgba(6,16,24,0.14)]",
    glow:
      "bg-[radial-gradient(circle_at_20%_15%,rgba(53,208,255,0.14),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(6,16,24,0.08),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.72),rgba(234,244,248,0.2))]",
    badge: "border-cyan/35 bg-cyan/10 text-[#075c75]",
    heading: "text-[#061018]",
    copy: "text-[#43525d]",
    secondary:
      "border-[#c7d7de] bg-white/70 text-[#061018] hover:border-cyan/60 hover:bg-cyan/10 focus-visible:ring-offset-[#f8fbfc]",
    metric: "border-[#d8e5ea] bg-white/80",
    metricEyebrow: "text-[#6a7882]",
    metricValue: "text-[#061018]",
    metricLabel: "text-[#52616c]",
  },
  dark: {
    shell:
      "border-cyan/20 bg-[#071019] shadow-[0_28px_90px_rgba(0,0,0,0.42)]",
    glow:
      "bg-[radial-gradient(circle_at_20%_15%,rgba(53,208,255,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(47,128,237,0.16),transparent_28%)]",
    badge: "border-cyan/25 bg-cyan/10 text-cyan",
    heading: "text-white",
    copy: "text-steel",
    secondary:
      "border-white/15 bg-white/[0.04] text-white hover:border-cyan/45 hover:bg-cyan/10 focus-visible:ring-offset-[#071019]",
    metric: "border-white/10 bg-[#0B1722]/85",
    metricEyebrow: "text-white/45",
    metricValue: "text-white",
    metricLabel: "text-steel",
  },
};

const HeroCtaPreview = ({ config, theme, buttonStyle }) => {
  const Icon = config.icon;
  const styles = heroStyles[theme] ?? heroStyles.dark;

  return (
    <CtaCardShell
      className={`relative overflow-hidden rounded-[1.75rem] border p-6 md:p-8 ${styles.shell}`}
    >
      <div className={`pointer-events-none absolute inset-0 ${styles.glow}`} />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
        <div>
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium ${styles.badge}`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            Concept conversion module
          </div>
          <h3
            className={`max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl ${styles.heading}`}
          >
            {config.headline}
          </h3>
          <p
            className={`mt-5 max-w-2xl text-base leading-7 md:text-lg md:leading-8 ${styles.copy}`}
          >
            {config.copy}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryAction theme={theme} buttonStyle={buttonStyle}>{config.primaryCta}</PrimaryAction>
            <SecondaryAction
              className={`inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 motion-reduce:transition-none ${styles.secondary}`}
            >
              {config.secondaryAction}
            </SecondaryAction>
          </div>
        </div>

        <MetricBadge className={`rounded-2xl border p-5 ${styles.metric}`}>
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.22em] ${styles.metricEyebrow}`}
          >
            Signal model
          </p>
          <div className="mt-5">
            <p
              className={`text-4xl font-semibold tracking-tight ${styles.metricValue}`}
            >
              {config.metric}
            </p>
            <p className={`mt-2 text-sm ${styles.metricLabel}`}>
              {config.metricLabel}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            {config.trustSignals.map((signal) => (
              <TrustChip key={signal} theme={theme}>
                {signal}
              </TrustChip>
            ))}
          </div>
        </MetricBadge>
      </div>
    </CtaCardShell>
  );
};

export default HeroCtaPreview;
