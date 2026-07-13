import React from "react";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const figmaProcessSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    des: "We align on scope, deliverables, roadmap details, and clear business metrics before coding.",
  },
  {
    step: "02",
    title: "UI/UX Architecture",
    des: "We design wireframes, responsive grids, user flows, and hi-fi design mockups for approval.",
  },
  {
    step: "03",
    title: "Sprint-Based Dev",
    des: "Clean coding, version-controlled repository updates, and agile modular components creation.",
  },
  {
    step: "04",
    title: "Rigorous Testing",
    des: "Cross-device verification, manual QA runs, automated unit scripts, and load testing checks.",
  },
  {
    step: "05",
    title: "Deployment & Go-Live",
    des: "Production setup, CI/CD pipeline deployments, domain bindings, and automated cloud syncs.",
  },
  {
    step: "06",
    title: "Evolution & SLA",
    des: "Continuous performance audits, feature scale integrations, and support SLA maintenance.",
  },
];

const WorkingProcessSection = () => {
  return (
    <section className="bg-white text-slate-900 py-24 relative overflow-hidden border-t border-slate-100">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main split header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Column: text, checklists and buttons */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-sm mb-2 inline-block max-w-fit">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Process Built for Enterprise Outcomes
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Every engagement follows our proven delivery framework — from discovery to production and beyond.
            </p>

            {/* Checklist */}
            <div className="space-y-4 my-2">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 text-blue-600">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span className="text-slate-700 text-sm font-semibold">
                  Transparent, agile delivery with bi-weekly demos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 text-blue-600">
                  <Check size={12} className="stroke-[3]" />
                </div>
                <span className="text-slate-700 text-sm font-semibold">
                  Post-launch support and system evolution included
                </span>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow-md text-sm"
              >
                Our Company Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Team Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#0B0F19] text-white border border-white/10 p-6 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[220px]">
              <div className="absolute inset-0 bg-slate-950/40 z-0" />
              <div className="relative z-10 h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-3 text-xl">
                ⚙️
              </div>
              <h4 className="relative z-10 text-xs font-bold text-gray-400 uppercase tracking-wider">
                Development Team
              </h4>
              <p className="relative z-10 text-[10px] text-gray-500 font-medium tracking-wide mt-1 text-center">
                Content Required from SoftZen IT
              </p>
            </div>
          </div>

        </div>

        {/* 6 Step Grid layout below */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {figmaProcessSteps.map((step, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-slate-200/80 rounded-sm hover:border-blue-600 hover:shadow-[0_12px_30px_rgba(37,99,235,0.04)] transition-all duration-300 flex gap-6 items-start"
            >
              {/* Step number indicator */}
              <div className="text-2xl font-extrabold text-blue-600 bg-blue-50 h-12 w-12 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {step.step}
              </div>

              {/* Details */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.des}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkingProcessSection;
