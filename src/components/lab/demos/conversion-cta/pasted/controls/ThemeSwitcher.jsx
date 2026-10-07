import React, { useId, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Moon, Sun } from "lucide-react";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

const ThemeSwitcher = ({ value, onChange }) => {
  const indicatorId = useId();
  const buttons = useRef([]);
  const reduceMotion = useReducedMotion();

  const handleKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % options.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + options.length) % options.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = options.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    onChange(options[nextIndex].value);
    buttons.current[nextIndex]?.focus();
  };

  return (
    <div
      role="radiogroup"
      aria-label="Preview theme"
      className="isolate inline-flex w-full gap-1 rounded-full border border-white/10 bg-[#05070A]/60 p-1"
    >
      {options.map((option, index) => {
        const selected = value === option.value;
        const Icon = option.icon;

        return (
          <button
            key={option.value}
            ref={(element) => { buttons.current[index] = element; }}
            type="button"
            role="radio"
            aria-checked={selected}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(option.value)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={[
              "relative flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] motion-reduce:transition-none",
              selected ? "text-white" : "text-steel hover:text-white",
            ].join(" ")}
          >
            {selected && (
              <motion.span
                layoutId={indicatorId}
                transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 35 }}
                className="pointer-events-none absolute inset-0 rounded-full border border-cyan/40 bg-cyan/15 shadow-[0_0_20px_rgba(53,208,255,0.12)]"
                aria-hidden="true"
              />
            )}
            <Icon className="relative h-4 w-4" aria-hidden="true" />
            <span className="relative">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
