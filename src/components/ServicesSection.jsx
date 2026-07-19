import React from "react";
import Link from "next/link";
import { allServices } from "@/data/services";
import * as LucideIcons from "lucide-react";

const images = [
  "https://ignite.ie/wp-content/uploads/2023/01/AdobeStock_508936825_resized-1080x675.jpg", 
  "https://img.magnific.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80", 
  "https://virtualoplossing.com/blog/wp-content/uploads/2025/01/Web-Development-Services.jpg", 
  "https://dskglobalsolutions.com/wp-content/uploads/2024/03/Ecom.webp", 
];

const ServicesSection = () => {
  // Grab the first 5 services to match the 9-item grid pattern (5 text, 4 images)
  const featuredServices = allServices.slice(0, 6);

  const gridLayout = [
    { type: "service", data: featuredServices[0] },
    { type: "image", src: images[0] },
    { type: "service", data: featuredServices[1] },
    { type: "image", src: images[1] },
    { type: "service", data: featuredServices[2] },
    { type: "image", src: images[2] },
    { type: "service", data: featuredServices[3] },
    { type: "image", src: images[3] },
    { type: "service", data: featuredServices[5] },
  ];

  return (
    <section id="services" className="py-10 lg:py-18 bg-white border-t border-slate-100">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight max-w-xl leading-tight">
            Drive Growth with Our <br className="hidden sm:block" />
            Core Capabilities
          </h2>
          <Link 
            href="/services" 
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 group pb-2"
          >
            Explore All Services 
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
          {gridLayout.map((item, index) => {
            if (item.type === "image") {
              return (
                <div key={`img-${index}`} className="w-full h-48 sm:h-56 lg:h-full min-h-[220px] rounded-2xl overflow-hidden">
                  <img 
                    src={item.src} 
                    alt="Team working" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              );
            }

            // Render Service Text Block
            const service = item.data;
            const IconComponent = LucideIcons[service.icon] || LucideIcons.Layers;

            return (
              <Link 
                href={`/services/${service.slug}`} 
                key={service.slug} 
                className="flex flex-col group cursor-pointer"
              >
                <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform origin-left duration-300">
                  <IconComponent size={36} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-medium text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
