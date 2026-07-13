"use client";
import React, { useState } from "react";
import Link from "next/link";
import * as LucideIcons from "lucide-react";

const ServicesClient = ({ services, categories }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices = activeFilter === "All" 
    ? services 
    : services.filter(s => s.category === activeFilter);

  return (
    <div className="py-20 bg-slate-50">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-12 border-b border-slate-200 pb-6">
          <button
            onClick={() => setActiveFilter("All")}
            className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-colors ${
              activeFilter === "All" 
                ? "bg-blue-600 text-white shadow-md" 
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            All
          </button>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-colors ${
                activeFilter === cat 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {cat.split(' ')[0]} {/* Takes just the first word for shorter tabs like the design */}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Layers;
            return (
              <Link
                href={`/services/${service.slug}`}
                key={service.slug}
                className="group flex flex-col h-full bg-white rounded-xl border border-slate-200 p-6 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 relative"
              >
                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <span className="px-2 py-1 bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-wider rounded">
                    {service.category.split(' ')[0]}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.shortDescription}
                </p>
                
                {/* Footer Link */}
                <div className="mt-auto flex items-center text-blue-600 font-medium text-sm">
                  Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ServicesClient;
