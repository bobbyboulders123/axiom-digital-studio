import React from "react";
import SelectionGroup from "./SelectionGroup.jsx";
import ThemeSwitcher from "../pasted/controls/ThemeSwitcher.jsx";
import { goalIds, goals, layouts } from "../conversionCtaData.js";

const ControlPanel = ({
  goal,
  layout,
  theme,
  onGoalChange,
  onLayoutChange,
  onThemeChange,
}) => {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan">
        Concept demo
      </p>
      <h2
        id="conversion-cta-system-heading"
        className="mt-4 text-2xl font-semibold tracking-tight text-white"
      >
        CTA configuration logic
      </h2>
      <p className="mt-4 text-sm leading-7 text-steel">
        Select a conversion goal and layout to see how CTA messaging, action
        hierarchy, and trust cues can adapt for different visitor intent.
      </p>

      <div className="mt-7 space-y-7">
        <SelectionGroup
          label="Business goal"
          options={goalIds.map((id) => ({ id, label: goals[id].label }))}
          value={goal}
          onChange={onGoalChange}
        />
        <SelectionGroup
          label="Layout"
          options={layouts}
          value={layout}
          onChange={onLayoutChange}
        />
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.24em] text-cyan">
            Preview theme
          </p>
          <ThemeSwitcher value={theme} onChange={onThemeChange} />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
