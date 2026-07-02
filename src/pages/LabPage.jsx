import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import GlobalNoise from "../components/ui/GlobalNoise";
import ContactUsButton from "../components/contact/ContactUsButton.jsx";

const LabPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#05070A] selection:bg-[#2F80ED]/30 selection:text-white">
      <GlobalNoise />
      <Navbar />

      <main className="flex-grow">
        <section className="relative overflow-hidden px-6 pb-20 pt-36 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(124,138,153,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.12) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
            <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-electric/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-cyan">
                Experimental Systems
              </p>
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl md:text-8xl">
                Axiom Lab
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-steel md:text-xl md:leading-9">
                A space for interactive studies, visual systems, and polished web
                experience demos that explore what modern digital interfaces can
                do.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                Lab entries are concept demonstrations created to show
                capabilities and ideas. They are not client case studies or
                representations of completed client projects.
              </p>
            </div>

            <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-cyan">
                    First experiments in progress
                  </p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                    The workbench is being prepared.
                  </h2>
                  <p className="mt-4 leading-7 text-steel">
                    Early studies will focus on purposeful motion, responsive
                    interaction, and visual systems built for real web
                    experiences.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/#services"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:border-cyan/50 hover:bg-cyan/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070A]"
                  >
                    Explore Services
                  </Link>
                  <ContactUsButton className="min-h-11 px-6 py-3 text-sm">
                    Contact Us
                  </ContactUsButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LabPage;
