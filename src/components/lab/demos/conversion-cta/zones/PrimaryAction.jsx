import React from "react";
import FlowButton from "../pasted/buttons/FlowButton.jsx";

const PrimaryAction = ({ children, theme }) => {
  return (
    <FlowButton text={children} variant={theme === "light" ? "light" : "dark"} />
  );
};

export default PrimaryAction;
