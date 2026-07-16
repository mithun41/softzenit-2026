"use client";
import React from "react";

const logos = [
  "/company-logo/partner1.png",
  "/company-logo/partner2.png",
  "/company-logo/partner3.png",
  "/company-logo/partner4.png",
  "/company-logo/partner5.png",
  "/company-logo/anwarkhan.png",
];

const ClientSlider = () => {
  // Duplicate the logos to create the infinite loop effect
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden relative">
      <div className="container max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
          Trusted by Industry Leaders & Innovators
        </p>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left and Right Blur overlays for fade-out look */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex gap-16 items-center whitespace-nowrap animate-marquee-scroller py-2">
          {repeatedLogos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center h-12 w-32 transition-all duration-300 hover:scale-105">
              <img
                src={logo}
                alt={`Client Logo ${idx}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Embedded style tag for infinite marquee animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-scroller {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-scroller:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default ClientSlider;
