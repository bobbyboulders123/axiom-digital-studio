import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function MultiStepForm({
  className = "",
  currentStep,
  totalSteps,
  title,
  description,
  onBack,
  onNext,
  onClose,
  backButtonText = "Back",
  nextButtonText = "Next Step",
  footerContent,
  children,
  disableNext = false,
}) {
  const progress = Math.round((currentStep / totalSteps) * 100);

  const variants = {
    hidden: { opacity: 0, x: 28 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -28 },
  };

  return (
    <div
      className={[
        "relative w-full max-w-2xl overflow-hidden rounded-[28px]",
        "border border-white/10 bg-[#08111f]/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl",
        "max-h-[88vh] flex flex-col",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="absolute -top-24 right-[-20%] h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-15%] h-56 w-56 rounded-full bg-electric/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-0 flex-1 flex-col p-5 sm:p-7">
        <div className="shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="pr-3">
              <h2 className="text-3xl sm:text-[2.2rem] font-semibold tracking-tight text-white leading-[1.05]">
                {title}
              </h2>
              {description ? (
                <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-steel">
                  {description}
                </p>
              ) : null}
            </div>

            {onClose ? (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-cyan/30 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-electric to-cyan transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="whitespace-nowrap text-sm text-steel">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
        </div>

        <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 shrink-0 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-steel/80">{footerContent}</div>

            <div className="flex items-center gap-3">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={onBack}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-cyan/20 bg-white/5 px-5 text-sm font-medium text-white transition hover:border-cyan/40 hover:bg-white/10"
                >
                  {backButtonText}
                </button>
              ) : null}

              <button
                type="button"
                onClick={onNext}
                disabled={disableNext}
                className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-electric to-cyan px-5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {nextButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}