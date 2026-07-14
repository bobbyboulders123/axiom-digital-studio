import React from "react";
import { Link } from "react-router-dom";
import GlobalNoise from "../../components/ui/GlobalNoise";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ConversionCtaSystem from "../../components/lab/demos/ConversionCtaSystem.jsx";

const ConversionCtaSystemDemo = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05070A] selection:bg-[#2F80ED]/30 selection:text-white">
      <GlobalNoise />
      <Navbar />

      <main className="flex-grow">
        <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.055]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(124,138,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.12) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <div className="absolute left-1/2 top-0 h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-cyan/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <Link
              to="/lab"
              className="inline-flex min-h-11 items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-steel transition duration-200 hover:border-cyan/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A] motion-reduce:transition-none"
            >
              Back to Lab
            </Link>

            <div className="mt-10 max-w-4xl">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                Interactive study
              </p>
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
                Conversion CTA System
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-steel md:text-xl md:leading-9">
                A concept demo showing how a small CTA system can adapt its
                message, action hierarchy, and trust signals around different
                business goals.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                This is an interactive concept study for Axiom Lab, not a client
                case study or completed client project.
              </p>
            </div>

            <div className="mt-12">
              <ConversionCtaSystem />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConversionCtaSystemDemo;
