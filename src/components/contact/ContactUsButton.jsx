import React, { useState } from "react";
import Button from "../ui/Button.jsx";
import AxiomContactModal from "./AxiomContactModal.jsx";

export default function ContactUsButton({
  className = "",
  children = "Contact Us",
  variant = "primary",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
        variant={variant}
      >
        {children}
      </Button>

      <AxiomContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}