"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Mail, MessageSquare } from "lucide-react";
import Link from "next/link";

const consultants = [
  {
    name: "Sarah Jenkins",
    role: "Senior IT Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    bio: "Over 12 years of experience aligning IT roadmaps with business goals. Expert in legacy systems migration and enterprise digital strategy.",
    specialties: ["IT Strategy", "Transformation"],
  },
  {
    name: "David Chen",
    role: "Enterprise Industry Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    bio: "Deep domain expertise in manufacturing, retail, and supply chain logistics. Helps businesses optimize workflows and identify efficiency bottlenecks.",
    specialties: ["Workflow Opt.", "Supply Chain"],
  },
  {
    name: "Elena Rostova",
    role: "Cloud & DevOps Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    bio: "Specializes in secure multi-cloud architectures (AWS/Azure), high-availability designs, containerization, and automated CI/CD infrastructures.",
    specialties: ["Cloud Dev", "Kubernetes"],
  },
  {
    name: "Marcus Vance",
    role: "AI & Automation Consultant",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    bio: "Assists enterprises in identifying high-impact AI/ML applications, automated data analytics models, and natural language processing pipelines.",
    specialties: ["AI/ML Systems", "Automation"],
  },
];

const ConsultationSection = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-flex items-center gap-2">
            <Sparkles size={12} className="text-blue-600 animate-pulse" />
            EXPERT CONSULTANTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Meet Our Specialised Consultants
          </h2>
          <p className="text-gray-500 text-lg">
            Get strategic advice, technology roadmap guidance, and operational insights from industry professionals.
          </p>
        </div>

        {/* 4 Cards Grid - Re-designed to be fully rounded and premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {consultants.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-blue-200/80 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden"
            >
              {/* Decorative top background circle inside card */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-50/40 rounded-full group-hover:scale-110 transition-transform duration-500" />
              
              {/* Circular Headshot Image with glowing rings */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-105 blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md ring-4 ring-blue-50 group-hover:ring-blue-100 group-hover:scale-105 transition-all duration-500 relative z-10">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Title & Role */}
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                {item.name}
              </h3>
              
              <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                {item.role}
              </span>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                {item.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {item.specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-[9px] font-bold tracking-wider text-slate-500 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-full uppercase"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Call-to-action Action Button (Fully Rounded & Interactive) */}
              <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/contact?consultant=${encodeURIComponent(item.name)}`}
                  className="flex-grow inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-bold text-xs rounded-xl transition-all duration-300 group/btn"
                >
                  Schedule Session
                  <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
                
                <a
                  href={`mailto:info@softzenit.com?subject=Consultation%20with%20${encodeURIComponent(item.name)}`}
                  className="w-10 h-10 rounded-xl bg-slate-50 hover:bg-blue-50 flex items-center justify-center text-slate-400 hover:text-blue-600 border border-transparent hover:border-blue-100 transition-all duration-300"
                  title="Send Email"
                >
                  <Mail size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ConsultationSection;
