import React from 'react';

const PageBanner = ({ title, subtitle, image, tag }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-20 lg:pb-12 bg-[#1a2642] overflow-hidden">
      {/* Concentric Circles Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at -10% 50%, transparent, transparent 60px, rgba(59, 130, 246, 0.15) 61px, transparent 62px)`
        }}
      />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            {tag && (
              <span className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-blue-400 text-sm font-semibold tracking-wide mb-6 backdrop-blur-md">
                {tag}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.15] mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-base sm:text-lg text-blue-100/70 leading-relaxed font-light">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right Image with Cyan/Blue Duotone Effect */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-[#00b4d8] shadow-2xl shadow-blue-900/50 aspect-video lg:aspect-[4/3]">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover mix-blend-luminosity opacity-80 contrast-125"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default PageBanner;
