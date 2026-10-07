import React, { useMemo, useState } from "react";
import ControlPanel from "./components/ControlPanel.jsx";
import PreviewFrame from "./components/PreviewFrame.jsx";
import { goals } from "./conversionCtaData.js";

const ConversionCtaSystem = () => {
  const [goal, setGoal] = useState("call");
  const [layout, setLayout] = useState("hero");
  const [theme, setTheme] = useState("dark");
  const activeConfig = useMemo(() => goals[goal], [goal]);

  return (
    <section
      aria-labelledby="conversion-cta-system-heading"
      className="rounded-[2rem] border border-white/10 bg-[#0B0F14]/80 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.34)] md:p-6 lg:p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[330px_1fr]">
        <ControlPanel
          goal={goal}
          layout={layout}
          theme={theme}
          onGoalChange={setGoal}
          onLayoutChange={setLayout}
          onThemeChange={setTheme}
        />
        <PreviewFrame
          goal={goal}
          layout={layout}
          theme={theme}
          config={activeConfig}
        />
      </div>
    </section>
  );
};

export default ConversionCtaSystem;
