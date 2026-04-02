import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ClipboardList,
  LayoutTemplate,
  Code2,
  Rocket,
} from "lucide-react";

const iconMap = {
  discovery: ClipboardList,
  design: LayoutTemplate,
  engineering: Code2,
  launch: Rocket,
};

const accentMap = {
  discovery: "from-cyan/30 via-electric/20 to-transparent",
  design: "from-electric/30 via-cyan/20 to-transparent",
  engineering: "from-cyan/25 via-blue-400/20 to-transparent",
  launch: "from-electric/30 via-cyan/15 to-transparent",
};

export default function FlipImageCard({
  title,
  label,
  image,
  imageAlt,
  features = [],
  variant = "discovery",
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const Icon = useMemo(() => iconMap[variant] || ClipboardList, [variant]);
  const accent = accentMap[variant] || accentMap.discovery;

  const handleToggle = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setIsFlipped(false);
    }
  };

  const renderVisualModule = () => {
    if (variant === "discovery") {
      return (
        <>
          <div className="absolute left-2.5 right-2.5 top-2.5 h-5 rounded-xl border border-white/10 bg-white/[0.04] sm:h-7 lg:left-3 lg:right-3 lg:top-3 lg:h-9 lg:rounded-2xl" />
          <div className="absolute bottom-2.5 left-2.5 h-4.5 w-[32%] rounded-xl border border-white/10 bg-white/[0.03] sm:h-7 lg:bottom-3 lg:left-3 lg:h-9 lg:rounded-2xl" />
          <div className="absolute bottom-2.5 left-[38%] h-4.5 w-[18%] rounded-xl border border-cyan/20 bg-cyan/[0.05] sm:h-7 lg:bottom-3 lg:h-9 lg:rounded-2xl" />
          <div className="absolute bottom-2.5 right-2.5 h-4.5 w-[22%] rounded-xl border border-white/10 bg-white/[0.03] sm:h-7 lg:bottom-3 lg:right-3 lg:h-9 lg:rounded-2xl" />
        </>
      );
    }

    if (variant === "design") {
      return (
        <>
          <div className="absolute left-2.5 right-2.5 top-2.5 h-5 rounded-xl border border-white/10 bg-white/[0.04] sm:h-7 lg:left-3 lg:right-3 lg:top-3 lg:h-9 lg:rounded-2xl" />
          <div className="absolute bottom-2.5 left-2.5 h-4.5 w-[42%] rounded-xl border border-white/10 bg-white/[0.03] sm:h-7 lg:bottom-3 lg:left-3 lg:h-9 lg:rounded-2xl" />
          <div className="absolute bottom-2.5 right-2.5 h-4.5 w-[28%] rounded-xl border border-cyan/20 bg-cyan/[0.06] sm:h-7 lg:bottom-3 lg:right-3 lg:h-9 lg:rounded-2xl" />
        </>
      );
    }

    if (variant === "engineering") {
      return (
        <>
          <div className="absolute left-2.5 top-2.5 h-[70%] w-[22%] rounded-xl border border-white/10 bg-white/[0.03] lg:left-3 lg:top-3 lg:rounded-2xl" />
          <div className="absolute right-2.5 top-2.5 h-5 w-[68%] rounded-xl border border-cyan/20 bg-cyan/[0.05] sm:h-7 lg:right-3 lg:top-3 lg:h-9 lg:rounded-2xl" />
          <div className="absolute bottom-2.5 right-2.5 h-[34%] w-[68%] rounded-xl border border-white/10 bg-white/[0.03] lg:bottom-3 lg:right-3 lg:rounded-2xl" />
        </>
      );
    }

    return (
      <>
        <div className="absolute left-2.5 right-2.5 top-2.5 h-5 rounded-xl border border-white/10 bg-white/[0.04] sm:h-7 lg:left-3 lg:right-3 lg:top-3 lg:h-9 lg:rounded-2xl" />
        <div className="absolute bottom-2.5 left-2.5 h-4.5 w-[24%] rounded-xl border border-white/10 bg-white/[0.03] sm:h-7 lg:bottom-3 lg:left-3 lg:h-9 lg:rounded-2xl" />
        <div className="absolute bottom-2.5 left-[32%] h-4.5 w-[20%] rounded-xl border border-white/10 bg-white/[0.03] sm:h-7 lg:bottom-3 lg:h-9 lg:rounded-2xl" />
        <div className="absolute bottom-2.5 right-2.5 h-4.5 w-[30%] rounded-xl border border-cyan/20 bg-cyan/[0.06] sm:h-7 lg:bottom-3 lg:right-3 lg:h-9 lg:rounded-2xl" />
      </>
    );
  };

  const renderSystemNotes = () => {
    if (variant === "discovery") {
      return (
        <div className="space-y-1 sm:space-y-2">
          <div className="h-1.5 w-[86%] rounded-full bg-white/10 sm:h-2" />
          <div className="h-1.5 w-[62%] rounded-full bg-white/10 sm:h-2" />
          <div className="h-1.5 w-[48%] rounded-full bg-cyan/20 sm:h-2" />
        </div>
      );
    }

    if (variant === "design") {
      return (
        <div className="space-y-1 sm:space-y-2">
          <div className="h-1.5 w-[82%] rounded-full bg-white/10 sm:h-2" />
          <div className="h-1.5 w-[68%] rounded-full bg-white/10 sm:h-2" />
          <div className="h-1.5 w-[54%] rounded-full bg-cyan/20 sm:h-2" />
        </div>
      );
    }

    if (variant === "engineering") {
      return (
        <div className="space-y-1 sm:space-y-2">
          <div className="h-1.5 w-[74%] rounded-full bg-white/10 sm:h-2" />
          <div className="h-1.5 w-[58%] rounded-full bg-white/10 sm:h-2" />
          <div className="h-1.5 w-[66%] rounded-full bg-cyan/20 sm:h-2" />
        </div>
      );
    }

    return (
      <div className="space-y-1 sm:space-y-2">
        <div className="h-1.5 w-[88%] rounded-full bg-white/10 sm:h-2" />
        <div className="h-1.5 w-[72%] rounded-full bg-white/10 sm:h-2" />
        <div className="h-1.5 w-[60%] rounded-full bg-cyan/20 sm:h-2" />
      </div>
    );
  };

  const renderStatusBars = () => {
    const barSets = {
      discovery: ["32%", "48%", "66%", "82%"],
      design: ["38%", "54%", "70%", "86%"],
      engineering: ["28%", "46%", "74%", "90%"],
      launch: ["40%", "58%", "76%", "94%"],
    };

    const bars = barSets[variant] || barSets.discovery;

    return (
      <div className="flex h-[26px] w-full items-end justify-center gap-1 sm:h-[34px] sm:gap-2 lg:h-[44px]">
        {bars.map((height, index) => {
          const colorClass =
            index < 2
              ? "bg-white/10"
              : index === 2
                ? "bg-cyan/50"
                : "bg-electric/70";

          return (
            <div
              key={`${variant}-${index}`}
              className={`w-2 rounded-t-[3px] rounded-b-none sm:w-3 ${colorClass}`}
              style={{ height }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="group relative w-full [perspective:2000px]"
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative h-[360px] w-full transition-transform duration-700 [transform-style:preserve-3d] sm:h-[400px] lg:h-[560px] ${
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_20px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:rounded-[1.75rem] lg:rounded-[1.9rem]">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(124,138,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.12) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
            </div>

            <div className="relative z-10 p-3 sm:p-4 lg:p-6">
              <div className="mb-3 flex items-center justify-between gap-3 lg:mb-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan shadow-glow sm:h-3 sm:w-3" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/65 sm:text-[10px] sm:tracking-[0.26em] lg:text-[11px] lg:tracking-[0.28em]">
                    {label}
                  </span>
                </div>

                <div className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.2em] text-white/45 sm:px-3 sm:text-[9px] lg:text-[10px] lg:tracking-[0.26em]">
                  VIEW
                </div>
              </div>

              <div className="relative rounded-[1rem] border border-white/10 bg-[#0A0F15]/90 p-2.5 sm:rounded-[1.1rem] sm:p-3 lg:rounded-[1.2rem] lg:p-5">
                <div className="relative overflow-hidden rounded-[0.95rem] border border-white/8 bg-[#0A0F15] sm:rounded-[1rem] lg:rounded-[1.2rem]">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-[220px] w-full object-cover object-[center_58%] sm:h-[265px] lg:h-[440px] lg:object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,0.02)_0%,rgba(4,8,14,0.08)_42%,rgba(4,8,14,0.38)_72%,rgba(4,8,14,0.92)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[68px] bg-[linear-gradient(180deg,rgba(8,12,18,0)_0%,rgba(8,12,18,0.65)_35%,rgba(8,12,18,0.96)_100%)] sm:h-[82px] lg:h-[88px]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 lg:p-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/55 sm:text-[9px] sm:tracking-[0.26em] lg:text-[10px] lg:tracking-[0.28em]">
                        Curated Scene
                      </div>
                      <p className="max-w-[220px] text-[12px] leading-5 text-white/72 sm:max-w-[320px] sm:text-sm sm:leading-6">
                        Tap to reveal phase detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -left-2 top-8 h-14 w-14 rounded-full bg-cyan/8 blur-2xl sm:h-16 sm:w-16 lg:top-10 lg:h-20 lg:w-20" />
                <div className="pointer-events-none absolute bottom-6 right-6 h-16 w-16 rounded-full bg-electric/10 blur-3xl sm:h-20 sm:w-20 lg:bottom-8 lg:right-10 lg:h-24 lg:w-24" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden rounded-[1.55rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_20px_50px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:rounded-[1.75rem] lg:rounded-[1.9rem]">
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(124,138,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.12) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
            </div>

            <div className="relative z-10 flex h-full flex-col p-2.5 sm:p-4 lg:p-6">
              <div className="mb-2.5 flex items-start justify-between gap-2.5 sm:mb-4 sm:gap-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan/12 ring-1 ring-cyan/20 sm:h-10 sm:w-10 sm:rounded-xl">
                    <Icon className="h-3.5 w-3.5 text-cyan sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/50 sm:text-[9px] sm:tracking-[0.24em] lg:text-[10px] lg:tracking-[0.28em]">
                      Detailed View
                    </div>
                    <h4 className="text-[1.25rem] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[2rem] lg:text-3xl">
                      {title}
                    </h4>
                  </div>
                </div>

                <div className="rounded-full border border-white/10 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.18em] text-cyan sm:px-3 sm:text-[9px] lg:text-[10px] lg:tracking-[0.26em]">
                  ACTIVE
                </div>
              </div>

              <div className="mb-4 grid gap-2 sm:mb-4 sm:gap-3">
                <div className="relative overflow-hidden rounded-[0.9rem] border border-white/10 bg-[#0B0F14]/80 p-1.5 sm:rounded-[1.1rem] sm:p-3 lg:rounded-[1.15rem]">
                  <div className="mb-1.5 flex items-center justify-between gap-2 sm:mb-3 sm:gap-3">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/50 sm:text-[9px] sm:tracking-[0.22em] lg:text-[9px] lg:tracking-[0.24em]">
                      Visual Module
                    </span>
                  </div>

                  <div className="relative h-[62px] overflow-hidden rounded-[0.85rem] border border-white/8 bg-[linear-gradient(135deg,#0d131b_0%,#0f1722_35%,#101a27_100%)] sm:h-[72px] lg:h-28 lg:rounded-[0.9rem]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,208,255,0.16),transparent_22%),radial-gradient(circle_at_80%_75%,rgba(47,128,237,0.16),transparent_20%)]" />
                    {renderVisualModule()}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent lg:bottom-3 lg:left-3 lg:right-3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="rounded-[0.75rem] border border-white/10 bg-[#0B0F14]/70 p-2 sm:rounded-[0.95rem] sm:p-3">
                    <div className="mb-1 font-mono text-[7px] uppercase tracking-[0.18em] text-white/45 sm:mb-2 sm:text-[9px] sm:tracking-[0.22em] lg:text-[9px] lg:tracking-[0.24em]">
                      System Notes
                    </div>
                    {renderSystemNotes()}
                  </div>

                  <div className="rounded-[0.75rem] border border-white/10 bg-[#0B0F14]/70 p-2 sm:rounded-[0.95rem] sm:p-3">
                    <div className="mb-1 font-mono text-[7px] uppercase tracking-[0.18em] text-white/45 sm:mb-2 sm:text-[9px] sm:tracking-[0.22em] lg:text-[9px] lg:tracking-[0.24em]">
                      Status
                    </div>
                    {renderStatusBars()}
                  </div>
                </div>
              </div>

              <div className="grid gap-2 sm:gap-3">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="group/item flex items-center justify-between gap-2 rounded-[0.9rem] border border-white/10 bg-white/[0.025] px-2.5 py-1.5 transition-all duration-300 hover:border-cyan/30 hover:bg-white/[0.045] hover:shadow-[0_0_0_1px_rgba(53,208,255,0.06),0_12px_30px_rgba(0,0,0,0.22)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3"
                    style={{
                      transform: isFlipped
                        ? "translateY(0px)"
                        : "translateY(10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 70 + 120}ms`,
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan shadow-glow sm:h-2.5 sm:w-2.5" />
                      <span className="text-[11px] leading-4 text-white/88 sm:text-[15px] sm:leading-6">
                        {feature}
                      </span>
                    </div>

                    <ArrowRight className="h-3 w-3 flex-shrink-0 text-cyan/70 transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-cyan sm:h-4 sm:w-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}