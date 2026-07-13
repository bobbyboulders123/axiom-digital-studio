import React from "react";

const statusClasses = {
  "Concept Demo": "border-cyan/25 bg-cyan/10 text-cyan",
  "Coming Soon": "border-steel/20 bg-white/[0.035] text-steel",
};

const LabCard = ({ demo }) => {
  const statusClass =
    statusClasses[demo.status] || "border-steel/20 bg-white/[0.035] text-steel";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F14]/90 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition-colors duration-200 hover:border-cyan/25 md:p-7">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-20 -top-24 h-52 w-52 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan/85">
            {demo.category}
          </p>
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${statusClass}`}
          >
            {demo.status}
          </span>
        </div>

        <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-white">
          {demo.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-steel">{demo.summary}</p>

        {demo.note && (
          <p className="mt-5 border-l border-cyan/30 pl-4 text-sm leading-6 text-white/65">
            {demo.note}
          </p>
        )}

        <div className="mt-7 flex flex-wrap gap-2 pt-2">
          {demo.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default LabCard;
