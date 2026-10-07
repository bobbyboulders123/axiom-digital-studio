import { CalendarCheck, Download, FileText } from "lucide-react";

export const goals = {
  call: {
    label: "Book a call",
    headline: "Turn curious visitors into scheduled consultations.",
    copy:
      "Guide qualified buyers toward a low-friction discovery call with clear value, calm urgency, and proof that the next step is worth their time.",
    primaryCta: "Book a strategy call",
    secondaryAction: "View availability",
    trustSignals: ["15-minute intro", "No pressure audit", "Clear next steps"],
    icon: CalendarCheck,
    metric: "32% lift",
    metricLabel: "in call starts",
  },
  quote: {
    label: "Request a quote",
    headline: "Help serious prospects request a focused project quote.",
    copy:
      "Set expectations before the form, reinforce credibility, and make the quote request feel specific enough for business owners to act.",
    primaryCta: "Request a quote",
    secondaryAction: "See project fit",
    trustSignals: ["Scoped response", "Transparent process", "Fit-first review"],
    icon: FileText,
    metric: "24 hr",
    metricLabel: "response target",
  },
  guide: {
    label: "Download guide",
    headline: "Convert early-stage visitors with a practical decision guide.",
    copy:
      "Offer a useful resource that captures intent while positioning the brand as precise, credible, and helpful before a sales conversation.",
    primaryCta: "Download the guide",
    secondaryAction: "Preview contents",
    trustSignals: ["Actionable checklist", "No spam sequence", "Built for owners"],
    icon: Download,
    metric: "41% lift",
    metricLabel: "in guide opt-ins",
  },
};

export const layouts = [
  { id: "hero", label: "Hero CTA" },
  { id: "card", label: "Card CTA" },
];

export const buttonStyles = [
  { id: "flow", label: "Flow" },
  { id: "shiny", label: "Shiny" },
];

export const themes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
];

export const goalIds = Object.keys(goals);
