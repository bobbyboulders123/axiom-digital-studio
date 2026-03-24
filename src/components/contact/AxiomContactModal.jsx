import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Mail, Sparkles } from "lucide-react";
import { MultiStepForm } from "../ui/multi-step-form.jsx";
import { submitContactForm } from "../../lib/contact.js";

const INITIAL_VALUES = {
  fullName: "",
  email: "",
  helpType: "",
  websiteStatus: "",
  budgetRange: "",
  timeline: "",
  projectDetails: "",
  companyName: "",
};

const HELP_OPTIONS = [
  "Website Design",
  "Website Redesign",
  "Landing Page",
  "Ongoing Website Support",
  "General Inquiry",
  "Not Sure Yet",
];

const WEBSITE_STATUS_OPTIONS = [
  "I do not have a website yet",
  "I have a website that needs a redesign",
  "I have a website that needs improvements",
  "I am exploring options",
];

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000–$2,500",
  "$2,500–$5,000",
  "$5,000+",
  "Not Sure Yet",
];

const TIMELINE_OPTIONS = [
  "As Soon As Possible",
  "Within 2–4 Weeks",
  "Within 1–2 Months",
  "Just Exploring",
];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-white/80">{label}</span>
      {children}
    </label>
  );
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={[
        "h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition",
        "placeholder:text-white/30 focus:border-cyan/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan/15",
        className,
      ].join(" ")}
    />
  );
}

function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-12 w-full rounded-2xl border border-white/10 bg-[#0d1728] px-4 text-sm text-white outline-none transition focus:border-cyan/40 focus:ring-2 focus:ring-cyan/15"
    >
      {children}
    </select>
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={[
        "min-h-[180px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition resize-none",
        "placeholder:text-white/30 focus:border-cyan/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-cyan/15",
        className,
      ].join(" ")}
    />
  );
}

export default function AxiomContactModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [values, setValues] = useState(INITIAL_VALUES);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  const nextButtonText = useMemo(() => {
    if (step === totalSteps) return submitting ? "Sending..." : "Send Message";
    return "Next Step";
  }, [step, totalSteps, submitting]);

  const updateValue = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const resetAndClose = () => {
    setStep(1);
    setValues(INITIAL_VALUES);
    setError("");
    setSubmitting(false);
    setSent(false);
    onClose();
  };

  const validateStep = () => {
    if (step === 1) {
      if (!values.fullName.trim()) return "Please enter your full name.";
      if (!values.email.trim()) return "Please enter your email address.";
      if (!isValidEmail(values.email)) return "Please enter a valid email address.";
      if (!values.helpType) return "Please select what you need help with.";
    }

    if (step === 3) {
      if (!values.projectDetails.trim()) {
        return "Please share a few project details before sending.";
      }
    }

    return "";
  };

  const handleNext = async () => {
    const validationError = validateStep();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");

    if (step < totalSteps) {
      setStep((prev) => prev + 1);
      return;
    }

    try {
      setSubmitting(true);
      await submitContactForm(values);
      setSent(true);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleBack = () => {
    setError("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        aria-label="Close contact modal overlay"
        className="absolute inset-0 bg-[#030712]/70 backdrop-blur-xl"
        onClick={resetAndClose}
      />

      <div className="relative flex h-screen w-screen items-center justify-center p-4 sm:p-6">
        <div className="relative z-[10000] w-full max-w-2xl">
          {sent ? (
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#08111f]/95 p-6 sm:p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
              <div className="absolute -top-24 right-[-20%] h-56 w-56 rounded-full bg-cyan/10 blur-3xl" />
              <div className="absolute -bottom-24 left-[-15%] h-56 w-56 rounded-full bg-electric/10 blur-3xl" />

              <div className="relative">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan/20 bg-cyan/10">
                  <Mail className="h-6 w-6 text-cyan" />
                </div>

                <h3 className="text-3xl font-semibold tracking-tight">Message Sent</h3>
                <p className="mt-3 max-w-lg text-steel leading-relaxed">
                  Thanks for reaching out. I received your message and will follow up
                  by email soon.
                </p>

                <button
                  type="button"
                  onClick={resetAndClose}
                  className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-electric to-cyan px-5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <MultiStepForm
              currentStep={step}
              totalSteps={totalSteps}
              title={
                step === 1
                  ? "Tell me about your project"
                  : step === 2
                  ? "A little more context"
                  : "Project details"
              }
              description={
                step === 1
                  ? "Share a few details below and I’ll follow up by email."
                  : step === 2
                  ? "A few optional details help me understand what you need faster."
                  : "Tell me a little about your business, goals, or what you’re looking to build."
              }
              onBack={handleBack}
              onNext={handleNext}
              onClose={resetAndClose}
              nextButtonText={nextButtonText}
              disableNext={submitting}
              footerContent={
                <div className="inline-flex items-center gap-2 text-steel/70">
                  <Sparkles className="h-4 w-4 text-cyan/80" />
                  <span>Email inquiries only</span>
                </div>
              }
            >
              <div className="space-y-5 pb-2">
                {error ? (
                  <div className="rounded-2xl border border-rose-400/25 bg-rose-400/10 px-4 py-3 text-sm text-rose-100">
                    {error}
                  </div>
                ) : null}

                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.companyName}
                  onChange={(e) => updateValue("companyName", e.target.value)}
                  className="hidden"
                  aria-hidden="true"
                />

                {step === 1 ? (
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <Field label="Full Name">
                      <Input
                        placeholder="Your name"
                        value={values.fullName}
                        onChange={(e) => updateValue("fullName", e.target.value)}
                      />
                    </Field>

                    <Field label="Email Address">
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        value={values.email}
                        onChange={(e) => updateValue("email", e.target.value)}
                      />
                    </Field>

                    <div className="md:col-span-2">
                      <Field label="What do you need help with?">
                        <Select
                          value={values.helpType}
                          onChange={(value) => updateValue("helpType", value)}
                        >
                          <option value="">Select an option</option>
                          {HELP_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </Select>
                      </Field>
                    </div>
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="grid grid-cols-1 gap-5">
                    <Field label="Current Website Status">
                      <Select
                        value={values.websiteStatus}
                        onChange={(value) => updateValue("websiteStatus", value)}
                      >
                        <option value="">Select an option</option>
                        {WEBSITE_STATUS_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field label="Budget Range">
                      <Select
                        value={values.budgetRange}
                        onChange={(value) => updateValue("budgetRange", value)}
                      >
                        <option value="">Select an option</option>
                        {BUDGET_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Field>

                    <Field label="Timeline">
                      <Select
                        value={values.timeline}
                        onChange={(value) => updateValue("timeline", value)}
                      >
                        <option value="">Select an option</option>
                        {TIMELINE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Select>
                    </Field>
                  </div>
                ) : null}

                {step === 3 ? (
                  <div className="space-y-5">
                    <Field label="Project Details">
                      <Textarea
                        placeholder="Tell me a little about your business, goals, or what you’re looking to build."
                        value={values.projectDetails}
                        onChange={(e) => updateValue("projectDetails", e.target.value)}
                      />
                    </Field>
                  </div>
                ) : null}
              </div>
            </MultiStepForm>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}