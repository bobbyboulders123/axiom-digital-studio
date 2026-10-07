import React from "react";
import { ArrowRight } from "lucide-react";

const variants = {
  light: {
    button:
      "border-[#061018]/25 bg-white text-[#061018] shadow-[0_14px_30px_rgba(6,16,24,0.12)] focus-visible:ring-[#061018] focus-visible:ring-offset-white",
    fill: "bg-[#061018]",
    text: "text-[#061018]",
    hoverText: "group-hover:text-white",
  },
  dark: {
    button:
      "border-white/15 bg-white text-[#041018] shadow-[0_0_28px_rgba(53,208,255,0.24)] focus-visible:ring-cyan focus-visible:ring-offset-[#071019]",
    fill: "bg-cyan",
    text: "text-[#041018]",
    hoverText: "group-hover:text-[#041018]",
  },
};

const FlowButton = ({ text, variant = "light", className = "" }) => {
  const selectedVariant = variants[variant] ?? variants.light;

  return (
    <button
      type="button"
      className={[
        "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-[border-radius,background-color,color,box-shadow,transform] duration-300 ease-out hover:rounded-[12px] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:active:scale-100",
        selectedVariant.button,
        selectedVariant.hoverText,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "absolute inset-0 z-0 origin-center scale-x-0 rounded-[inherit] transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none",
          selectedVariant.fill,
        ].join(" ")}
        aria-hidden="true"
      />
      <ArrowRight
        className={[
          "absolute left-5 z-10 h-4 w-4 -translate-x-8 opacity-0 transition duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:hidden motion-reduce:transition-none",
          selectedVariant.text,
          selectedVariant.hoverText,
        ].join(" ")}
        aria-hidden="true"
      />
      <span
        className={[
          "relative z-10 transition duration-300 ease-out group-hover:translate-x-3 motion-reduce:transform-none motion-reduce:transition-none",
          selectedVariant.text,
          selectedVariant.hoverText,
        ].join(" ")}
      >
        {text}
      </span>
      <ArrowRight
        className={[
          "relative z-10 ml-2 h-4 w-4 transition duration-300 ease-out group-hover:translate-x-8 group-hover:opacity-0 motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:transition-none",
          selectedVariant.text,
          selectedVariant.hoverText,
        ].join(" ")}
        aria-hidden="true"
      />
    </button>
  );
};

export default FlowButton;
