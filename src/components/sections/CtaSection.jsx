import React from "react";
import ContactUsButton from "../contact/ContactUsButton.jsx";

const CtaSection = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#0B0F14] px-6 py-32 text-center"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,_rgba(47,128,237,0.15)_0%,_transparent_60%)] mix-blend-screen"></div>

      <div className="absolute top-8 left-8 h-4 w-4 border-t border-l border-steel/40"></div>
      <div className="absolute top-8 right-8 h-4 w-4 border-t border-r border-steel/40"></div>
      <div className="absolute bottom-8 left-8 h-4 w-4 border-b border-l border-steel/40"></div>
      <div className="absolute bottom-8 right-8 h-4 w-4 border-b border-r border-steel/40"></div>

      <div className="relative z-10 max-w-3xl">
        <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white drop-shadow-lg md:text-6xl">
          Ready for a website that reflects the quality of your business?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-steel md:text-xl">
          Whether you need a new website or a smarter redesign, Axiom Digital Studio
          creates sites with clearer messaging, smoother navigation, mobile polish,
          SEO-ready structure, and a more credible digital presence.
        </p>

        <ContactUsButton className="px-8 py-4 text-lg" variant="primary">
          Contact Us
        </ContactUsButton>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124, 138, 153, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 138, 153, 0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      ></div>
    </section>
  );
};

export default CtaSection;