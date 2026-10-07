import React from "react";
import CtaCardShell from "../zones/CtaCardShell.jsx";
import MetricBadge from "../zones/MetricBadge.jsx";
import PrimaryAction from "../zones/PrimaryAction.jsx";
import SecondaryAction from "../zones/SecondaryAction.jsx";
import TrustChip from "../zones/TrustChip.jsx";

const cardStyles = {
  light: {
    shell:
      "border-[#d8e5ea] bg-[#f8fbfc] shadow-[0_24px_70px_rgba(6,16,24,0.12)]",
    panel: "border-[#d8e5ea] bg-white/80",
    icon: "border-cyan/35 bg-cyan/10 text-[#075c75]",
    metric:
      "border-[#c7d7de] bg-[#061018] px-3 py-1 text-xs font-semibold text-white",
    eyebrow: "text-[#075c75]",
    heading: "text-[#061018]",
    copy: "text-[#43525d]",
    secondary:
      "border-[#c7d7de] text-[#061018] hover:border-cyan/60 hover:bg-cyan/10 focus-visible:ring-offset-white",
  },
  dark: {
    shell:
      "border-cyan/20 bg-[#071019] shadow-[0_24px_70px_rgba(0,0,0,0.38)]",
    panel: "border-white/10 bg-white/[0.035]",
    icon: "border-cyan/25 bg-cyan/10 text-cyan",
    metric:
      "border-electric/30 bg-electric/10 px-3 py-1 text-xs font-semibold text-white",
    eyebrow: "text-cyan",
    heading: "text-white",
    copy: "text-steel",
    secondary:
      "border-white/15 text-white hover:border-cyan/45 hover:bg-cyan/10 focus-visible:ring-offset-[#071019]",
  },
};

const CardCtaPreview = ({ config, theme }) => {
  const Icon = config.icon;
  const styles = cardStyles[theme] ?? cardStyles.dark;

  return (
    <CtaCardShell
      className={`mx-auto max-w-xl rounded-[1.5rem] border p-5 md:p-6 ${styles.shell}`}
    >
      <div className={`rounded-2xl border p-5 ${styles.panel}`}>
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${styles.icon}`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <MetricBadge className={`rounded-full border ${styles.metric}`}>
            {config.metric}
          </MetricBadge>
        </div>

        <p
          className={`mt-6 font-mono text-[10px] uppercase tracking-[0.22em] ${styles.eyebrow}`}
        >
          Interactive study
        </p>
        <h3
          className={`mt-3 text-2xl font-semibold leading-tight tracking-tight md:text-3xl ${styles.heading}`}
        >
          {config.headline}
        </h3>
        <p className={`mt-4 text-sm leading-7 md:text-base ${styles.copy}`}>
          {config.copy}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {config.trustSignals.map((signal) => (
            <TrustChip key={signal} theme={theme}>
              {signal}
            </TrustChip>
          ))}
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
          <PrimaryAction theme={theme}>{config.primaryCta}</PrimaryAction>
          <SecondaryAction
            className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 motion-reduce:transition-none ${styles.secondary}`}
          >
            {config.secondaryAction}
          </SecondaryAction>
        </div>
      </div>
    </CtaCardShell>
  );
};

export default CardCtaPreview;
