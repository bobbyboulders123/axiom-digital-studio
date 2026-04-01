import React, { useEffect, useRef } from "react";
import { gsap } from "../../utils/gsapUtils";

const Philosophy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".manifesto-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
        y: 60,
        opacity: 0,
        rotationX: -10,
        transformOrigin: "0% 0%",
        duration: 1.5,
        stagger: 0.16,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="proof"
      ref={containerRef}
      className="relative overflow-hidden border-y border-steel/10 bg-[#121A24] px-6 py-28 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(124,138,153,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(124,138,153,0.14) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
        </div>
        <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(47,128,237,0.06)_0%,_transparent_72%)]" />
      </div>

      <div
        className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-12"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="relative md:col-span-4 lg:col-span-5">
          <div className="md:sticky md:top-32">
            <div className="manifesto-text mb-7 inline-flex items-center gap-4">
              <div className="h-8 w-[3px] rounded-full bg-gradient-to-b from-electric via-cyan to-cyan/20" />
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-white/80">
                AXIOM // OUR STANDARD
              </span>
            </div>

            <h2 className="manifesto-text text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              A better standard
              <br />
              for the modern web.
            </h2>

            <p className="manifesto-text mt-6 max-w-md text-base leading-7 text-steel md:text-lg">
              Too many websites are rushed, templated, and never properly
              refined. We take a more deliberate approach with clearer
              structure, stronger messaging, careful QA, and a launch process
              built for real-world use.
            </p>
          </div>
        </div>

        <div className="space-y-8 md:col-span-8 lg:col-span-7 md:pt-10">
          <div className="manifesto-text rounded-[2rem] border border-white/10 bg-[#0B0F14]/55 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <h3 className="text-xl font-medium text-white md:text-2xl">
                The Industry Standard is Broken
              </h3>
            </div>
            <p className="text-lg leading-8 text-steel md:text-xl">
              Much of the industry still runs on dated templates, bloated
              plug-ins, rushed timelines, and weak messaging. The result is a
              website that feels generic, loads poorly, and fails to reflect the
              real quality of the business behind it.
            </p>
          </div>

          <div className="manifesto-text rounded-[2rem] border border-cyan/15 bg-[linear-gradient(180deg,rgba(53,208,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-2.5 w-2.5 rounded-full bg-cyan shadow-glow" />
              <h3 className="text-xl font-medium text-cyan md:text-2xl">
                A More Deliberate Process
              </h3>
            </div>
            <p className="text-lg leading-8 text-white md:text-xl">
              We approach each project with more intention: stronger structure,
              clearer messaging, careful design decisions, and QA throughout the
              process. Before launch, we refine, test, and pressure-check the
              experience so the final site feels credible, smooth, and ready for
              real visitors.
            </p>
          </div>

          <div className="manifesto-text relative overflow-hidden rounded-[2rem] border border-steel/20 bg-[#0B0F14]/60 p-10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-electric to-cyan shadow-glow-electric" />
            <p className="text-xl italic leading-relaxed tracking-wide text-white md:text-[1.65rem]">
              &quot;Your website shouldn&apos;t just exist. It should be proof
              of your quality.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
