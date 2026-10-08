import React from "react";
import FlowButton from "../pasted/buttons/FlowButton.jsx";
import ShinyButton from "../pasted/buttons/ShinyButton.jsx";

const PrimaryAction = ({ children, theme, buttonStyle = "flow" }) => {
  if (buttonStyle === "shiny") {
    return (
      <ShinyButton
        label={children}
        fillColor={theme === "light" ? "#24160f" : "#0b0f14"}
        labelColor="#ffffff"
        accentColor="#2FD6FF"
        accentSoftColor="#3B82F6"
      />
    );
  }

  return (
    <FlowButton text={children} variant={theme === "light" ? "light" : "dark"} />
  );
};

export default PrimaryAction;
