import React from "react";
import { goals, layouts } from "../conversionCtaData.js";
import CardCtaPreview from "../previews/CardCtaPreview.jsx";
import HeroCtaPreview from "../previews/HeroCtaPreview.jsx";

const frameStyles = {
  light:
    "border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(234,244,248,0.9)_42%,rgba(213,232,240,0.72))] shadow-[0_24px_70px_rgba(6,16,24,0.16)]",
  dark:
    "border-white/10 bg-[linear-gradient(135deg,rgba(53,208,255,0.08),rgba(47,128,237,0.04)_34%,rgba(255,255,255,0.03))]",
};

const labelStyles = {
  light: {
    eyebrow: "text-[#52616c]",
    meta: "text-[#43525d]",
  },
  dark: {
    eyebrow: "text-white/45",
    meta: "text-steel",
  },
};

const PreviewFrame = ({ goal, layout, theme, config, buttonStyle }) => {
  const styles = labelStyles[theme] ?? labelStyles.dark;

  return (
    <div
      className={`min-w-0 rounded-[1.5rem] border p-4 md:p-6 ${
        frameStyles[theme] ?? frameStyles.dark
      }`}
    >
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p
            className={`font-mono text-[10px] uppercase tracking-[0.24em] ${styles.eyebrow}`}
          >
            Live preview
          </p>
          <p className={`mt-2 text-sm ${styles.meta}`}>
            {goals[goal].label} /{" "}
            {layouts.find((item) => item.id === layout)?.label}
          </p>
        </div>
      </div>

      {layout === "hero" ? (
        <HeroCtaPreview config={config} theme={theme} buttonStyle={buttonStyle} />
      ) : (
        <CardCtaPreview config={config} theme={theme} buttonStyle={buttonStyle} />
      )}
    </div>
  );
};

export default PreviewFrame;
