"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Scale Your Dev Team With Top 1% Bangladeshi Talents in 4 Weeks",
    subtitle:
      "From startups to enterprises—build scalable, secure software with our 18+ years of expertise and ISO 27001-certified teams.",
    ctaText: "Hire Your Team Now",
    ctaLink: "/contact",
    img1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    img2: "/images/RAW09455.jpg",
    stat1: "10+",
    stat1Text: "Years of Experience",
    stat2: "88%+",
    stat2Text: "Employee Retention",
  },
  {
    id: 2,
    title: "Enterprise Custom Software Tailored to Your Operations",
    subtitle:
      "We modernize legacy systems and build end-to-end scalable architectures that drive digital transformation.",
    ctaText: "Start Your Project",
    ctaLink: "/contact",
    img1: "/images/RAW09465.jpg",
    img2: "/images/RAW09407.jpg",
    stat1: "500+",
    stat1Text: "Global Clients",
    stat2: "100%",
    stat2Text: "Client Satisfaction",
  },
  {
    id: 3,
    title: "AI-Powered Products Delivered With Speed & Precision",
    subtitle:
      "Integrate intelligent automation and data-driven insights into your workflows with our specialized AI agents.",
    ctaText: "Explore AI Solutions",
    ctaLink: "/services",
    img1: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
    img2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
    stat1: "100+",
    stat1Text: "Expert Engineers",
    stat2: "24/7",
    stat2Text: "Active Support",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#f4f7fb] overflow-hidden flex items-center ">
      
      {/* Background SVG Pattern (Concentric Circles) */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40">
        <svg
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full min-w-[150vw] sm:min-w-[120vw] lg:min-w-[100vw] object-cover stroke-[#dbeafe]"
          fill="none"
          strokeWidth="1"
        >
          <circle cx="500" cy="500" r="100" />
          <circle cx="500" cy="500" r="200" />
          <circle cx="500" cy="500" r="300" />
          <circle cx="500" cy="500" r="400" />
          <circle cx="500" cy="500" r="500" />
          <circle cx="500" cy="500" r="600" />
          <circle cx="500" cy="500" r="700" />
          <circle cx="500" cy="500" r="800" />
          <circle cx="500" cy="500" r="900" />
          <circle cx="500" cy="500" r="1000" />
        </svg>
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10 py-12 lg:py-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[600px]"
          >
            {/* Left Content */}
            <div className="max-w-2xl pt-10 lg:pt-0">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0f172a] leading-[1.2] tracking-tight mb-6">
                {slides[currentIndex].title}
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
                {slides[currentIndex].subtitle}
              </p>
              <div>
                <Link
                  href={slides[currentIndex].ctaLink}
                  className="inline-flex px-8 py-4 bg-[#fbbd23] text-slate-900 font-bold rounded-full hover:bg-[#f59e0b] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-orange-500/20"
                >
                  {slides[currentIndex].ctaText}
                </Link>
              </div>
            </div>

            {/* Right Content - Images & Stats Layout */}
            <div className="relative w-full h-[500px] lg:h-[600px] hidden sm:block">
              {/* Stat 1 (Top Left area) */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute top-[20%] left-[5%] text-center z-20"
              >
                <h4 className="text-xl font-bold text-slate-900">{slides[currentIndex].stat1}</h4>
                <p className="text-xs text-gray-500 font-medium mt-1">{slides[currentIndex].stat1Text}</p>
              </motion.div>

              {/* Image 1 (Top Right) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-[10%] right-[5%] w-[55%] h-[220px] rounded-2xl overflow-hidden shadow-2xl z-10"
              >
                <img 
                  src={slides[currentIndex].img1} 
                  alt="Professional" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 2 (Bottom Left) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-[10%] left-[10%] w-[55%] h-[240px] rounded-2xl overflow-hidden shadow-2xl z-20"
              >
                <img 
                  src={slides[currentIndex].img2} 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Stat 2 (Bottom Right area) */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-[25%] right-[10%] text-center z-10"
              >
                <h4 className="text-xl font-bold text-slate-900">{slides[currentIndex].stat2}</h4>
                <p className="text-xs text-gray-500 font-medium mt-1">{slides[currentIndex].stat2Text}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-slate-800 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
