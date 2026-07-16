import React from "react";
import { Check, Target, Rocket, Code, Globe, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-10 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- PART 1: HERO TEXT & STATS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              ABOUT US
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Growth & Partnership Focused
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              SoftZen IT is your growth partner, delivering smart software and digital solutions that help businesses thrive. Your goals inspire us, and your success drives our passion.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-blue-600">
                  <Check size={18} className="stroke-[3]" />
                </div>
                <span className="text-slate-800 font-semibold text-sm">Enterprise-Grade Quality</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm text-blue-600">
                  <Check size={18} className="stroke-[3]" />
                </div>
                <span className="text-slate-800 font-semibold text-sm">Agile Delivery Model</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/40 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 grid grid-cols-2 gap-10">
                <div>
                  <h3 className="text-4xl font-extrabold text-white mb-2">2016</h3>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Founded</p>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold text-white mb-2">500+</h3>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Global Clients</p>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold text-white mb-2">100+</h3>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Engineers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold text-white mb-2">100%</h3>
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Decorative dot grid behind card */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:16px_16px] -z-10" />
          </div>
        </div>

        {/* --- PART 2: VISION & APPROACH (User's new content) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision Card */}
          <div className="group rounded-3xl bg-white overflow-hidden border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/5">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img src="/images/RAW09455.jpg" alt="Our Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">Our Vision</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 text-base leading-relaxed">
                We help businesses grow with modern websites, mobile apps, and scalable software built for real-world impact.
              </p>
            </div>
          </div>

          {/* Approach Card */}
          <div className="group rounded-3xl bg-white overflow-hidden border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/5">
            <div className="h-64 sm:h-72 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Our Approach" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Rocket size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-white tracking-tight">Our Approach</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 text-base leading-relaxed">
                We work as partners, not vendors—focused on clarity, reliability, and results that drive long-term business value.
              </p>
            </div>
          </div>
        </div>

        {/* --- PART 3: MORE RELEVANT INFO (Core Competencies) --- */}
        <div className="border-t border-slate-100 pt-12 text-center">
        
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-12 max-w-2xl mx-auto">
            Comprehensive Digital Solutions Engineered for the Future
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
                <Code size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Custom Software</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We build bespoke, high-performance applications tailored precisely to your unique business logic and operational needs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
                <Zap size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">AI & Automation</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Integrating intelligent automation and data-driven AI systems to streamline workflows and unlock exponential growth.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={26} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Global Delivery</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Headquartered in Bangladesh, we leverage top 1% engineering talent to deliver world-class solutions to clients globally.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutSection;
