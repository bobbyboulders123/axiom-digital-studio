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

  return (
    <div
      className="group relative w-full [perspective:2000px]"
      onClick={handleToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`relative h-[540px] w-full transition-transform duration-700 [transform-style:preserve-3d] lg:h-[560px] ${
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]"
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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

            <div className="relative z-10 p-4 sm:p-5 lg:p-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-cyan shadow-glow" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65 sm:text-[11px]">
                    {label}
                  </span>
                </div>

                <div className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-white/45 sm:text-[10px]">
                  VIEW
                </div>
              </div>

              <div className="relative rounded-[1.35rem] border border-white/10 bg-[#0A0F15]/90 p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-[1.2rem] border border-white/8 bg-[#0A0F15]">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-[330px] w-full object-cover sm:h-[380px] lg:h-[440px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,0.02)_0%,rgba(4,8,14,0.08)_42%,rgba(4,8,14,0.38)_72%,rgba(4,8,14,0.92)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[88px] bg-[linear-gradient(180deg,rgba(8,12,18,0)_0%,rgba(8,12,18,0.65)_35%,rgba(8,12,18,0.96)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="space-y-2">
                      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                        Curated Scene
                      </div>
                      <p className="max-w-md text-sm leading-6 text-white/72">
                        Hover on desktop or tap on mobile to reveal the phase
                        detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute -left-2 top-10 h-20 w-20 rounded-full bg-cyan/8 blur-2xl" />
                <div className="pointer-events-none absolute bottom-8 right-10 h-24 w-24 rounded-full bg-electric/10 blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
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

            <div className="relative z-10 flex h-full flex-col p-4 sm:p-5 lg:p-6">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/12 ring-1 ring-cyan/20">
                    <Icon className="h-5 w-5 text-cyan" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/50">
                      Detailed View
                    </div>
                    <h4 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                      {title}
                    </h4>
                  </div>
                </div>

                <div className="rounded-full border border-white/10 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.26em] text-cyan sm:text-[10px]">
                  ACTIVE
                </div>
              </div>

              <div className="mb-4 grid gap-3">
                <div className="relative overflow-hidden rounded-[1.15rem] border border-white/10 bg-[#0B0F14]/80 p-3">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/50">
                      Visual Module
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-cyan/80 text-right">
                      Premium Placeholder
                    </span>
                  </div>

                  <div className="relative h-28 overflow-hidden rounded-[0.95rem] border border-white/8 bg-[linear-gradient(135deg,#0d131b_0%,#0f1722_35%,#101a27_100%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,208,255,0.16),transparent_22%),radial-gradient(circle_at_80%_75%,rgba(47,128,237,0.16),transparent_20%)]" />
                    <div className="absolute left-3 right-3 top-3 h-9 rounded-2xl border border-white/10 bg-white/[0.04]" />
                    <div className="absolute bottom-3 left-3 h-9 w-[42%] rounded-2xl border border-white/10 bg-white/[0.03]" />
                    <div className="absolute bottom-3 right-3 h-9 w-[28%] rounded-2xl border border-cyan/20 bg-cyan/[0.06]" />
                    <div className="absolute bottom-3 left-3 right-3 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[0.95rem] border border-white/10 bg-[#0B0F14]/70 p-3">
                    <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                      System Notes
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-[82%] rounded-full bg-white/10" />
                      <div className="h-2 w-[68%] rounded-full bg-white/10" />
                      <div className="h-2 w-[54%] rounded-full bg-cyan/20" />
                    </div>
                  </div>

                  <div className="rounded-[0.95rem] border border-white/10 bg-[#0B0F14]/70 p-3">
                    <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/45">
                      Status
                    </div>
                    <div className="flex h-[44px] items-end gap-2">
                      <div className="h-[38%] w-3 rounded-t-full bg-white/10" />
                      <div className="h-[54%] w-3 rounded-t-full bg-white/10" />
                      <div className="h-[70%] w-3 rounded-t-full bg-cyan/50" />
                      <div className="h-[86%] w-3 rounded-t-full bg-electric/70" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="group/item flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-2.5 transition-all duration-300 hover:border-cyan/30 hover:bg-white/[0.045] hover:shadow-[0_0_0_1px_rgba(53,208,255,0.06),0_12px_30px_rgba(0,0,0,0.22)]"
                    style={{
                      transform: isFlipped
                        ? "translateY(0px)"
                        : "translateY(10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 70 + 120}ms`,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan shadow-glow" />
                      <span className="text-[14px] leading-6 text-white/88 sm:text-[15px]">
                        {feature}
                      </span>
                    </div>

                    <ArrowRight className="h-4 w-4 text-cyan/70 transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-cyan" />
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
