import React from "react";
import { CheckCircle2 } from "lucide-react";

const trustChipStyles = {
  light: "border-[#d8e5ea] bg-white/75 text-[#43525d]",
  dark: "border-white/10 bg-white/[0.04] text-white/80",
};

const TrustChip = ({ children, theme }) => {
  return (
    <span
      className={`inline-flex min-h-9 items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium ${
        trustChipStyles[theme] ?? trustChipStyles.dark
      }`}
    >
      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
      {children}
    </span>
  );
};

export default TrustChip;
