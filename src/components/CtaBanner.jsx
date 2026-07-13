import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CtaBanner = () => {
  return (
    <section className="bg-white pb-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-3xl p-10 sm:p-16 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/20">
          
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let's Engineer Your Next Product Together
            </h2>
            <p className="text-blue-100 text-lg">
              Schedule a consultation with our technical architects to discuss your goals, requirements, and deployment timeline.
            </p>
          </div>
          
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg text-lg group"
            >
              Start a Project
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
