"use client";
import React from "react";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, HeartPulse, Cpu, Check, ArrowRight, Laptop, Server, Award, Sparkles, Mail } from "lucide-react";
import Link from "next/link";

const medicalFocusAreas = [
  {
    icon: HeartPulse,
    title: "Medical ERP & Management Systems",
    description: "Design custom hospital resource planners, automated pharmacy inventory tracking, secure billing gateways, and clinical scheduling systems.",
  },
  {
    icon: Activity,
    title: "Custom Medical Software Engineering",
    description: "Develop enterprise-grade EHR/EMR platforms, customized clinical portals, patient dashboard interfaces, and telemedicine streaming infrastructures.",
  },
  {
    icon: Cpu,
    title: "Medical Hardware & IoT Integration",
    description: "Build robust, low-latency telemetry pipelines to connect medical diagnostic devices, laboratory hardware, and health wearables safely.",
  },
  {
    icon: ShieldCheck,
    title: "Healthcare Compliance & Encryption",
    description: "Ensure complete compliance with HIPAA, GDPR, HL7, and FHIR standards using strict access controls and end-to-end data cryptography.",
  },
];

const generalConsultingAreas = [
  {
    icon: Laptop,
    title: "IT Strategy & Tech Stack Assessment",
    description: "Align your project goals with the ideal technology stack. We evaluate scalability, security, development speed, and cost to ensure your long-term success.",
  },
  {
    icon: Server,
    title: "Cloud & DevOps Architecture",
    description: "Design robust, highly available cloud infrastructures. We consult on AWS/Azure, CI/CD pipelines, containerization, and cost-optimized serverless setups.",
  },
  {
    icon: Award,
    title: "Enterprise Workflow Consulting",
    description: "Provides deep domain expertise in retail, logistics, and manufacturing, helping businesses streamline workflows and scale operations.",
  },
];

const consultants = [
  {
    name: "Sarah Jenkins",
    role: "Senior IT & Healthcare Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    bio: "Over 12 years of experience aligning IT roadmaps with business goals. Expert in legacy systems migration, medical ERP integration, and healthcare digital strategy.",
    specialties: ["IT Strategy", "Medical ERP"],
    isFeatured: true,
  },
  {
    name: "David Chen",
    role: "Enterprise & Industry Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    bio: "Deep domain expertise in manufacturing, retail, and supply chain logistics. Helps businesses optimize workflows and identify efficiency bottlenecks.",
    specialties: ["Workflow Opt.", "Supply Chain"],
    isFeatured: false,
  },
  {
    name: "Elena Rostova",
    role: "Cloud & DevOps Consultant",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    bio: "Specializes in secure multi-cloud architectures (AWS/Azure), high-availability designs, containerization, and automated CI/CD infrastructures.",
    specialties: ["Cloud Dev", "Kubernetes"],
    isFeatured: false,
  },
  {
    name: "Marcus Vance",
    role: "AI & Medical Software Consultant",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    bio: "Assists enterprises in identifying high-impact AI/ML applications, medical diagnostic automation, data analytics, and natural language processing.",
    specialties: ["Medical AI", "Automation"],
    isFeatured: false,
  },
];

export default function ConsultationPage() {
  return (
    <>
      <PageBanner
        tag="Consultation"
        title="Expert Consultation Services"
        subtitle="Accelerate your business with expert guidance in Medical IT, Cloud Infrastructure, IT Strategy, and Enterprise Workflows."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Intro / Featured Medical Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl -translate-y-1/4 pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Info Column */}
            <div>
              <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-6 inline-flex items-center gap-2">
                <Sparkles size={12} className="text-blue-600 animate-pulse" />
                FEATURED DOMAIN: MEDICAL IT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Specialized Medical ERP, Software & Hardware Consulting
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                While we consult across various technology domains, our specialized focus lies in **Medical IT**. Building digital medical solutions requires zero tolerance for downtime, absolute security for patient records, and robust integrations across medical ERP, customized software, and diagnostic hardware.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 text-blue-600">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">Medical ERP & Resource Planning</h4>
                    <p className="text-gray-500 text-xs mt-0.5">Streamline hospital operations, manage pharmacy inventory, and secure billing pathways.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 text-blue-600">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">Medical Hardware & IoT Integration</h4>
                    <p className="text-gray-500 text-xs mt-0.5">Reliable telemetry pipelines connecting diagnostic devices, laboratory hardware, and clinical sensors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Consultant Panel / Hero Visual */}
            <div className="relative">
              <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/40 rounded-full blur-3xl pointer-events-none" />
                
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider mb-2 block">
                  Lead IT & Healthcare Consultant
                </span>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Sarah Jenkins</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300"
                    alt="Sarah Jenkins"
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 shadow"
                  />
                  <div>
                    <h4 className="text-lg font-bold">Sarah Jenkins</h4>
                    <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Senior IT & Healthcare Consultant</p>
                    <p className="text-gray-400 text-xs mt-0.5">12+ Years in Enterprise & Medical IT</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  &ldquo;Combining medical ERPs, patient software, and sensor hardware requires absolute precision. We help healthtech startups, hospitals, and clinics design robust, compliant software architectures.&rdquo;
                </p>

                <Link
                  href="/contact?consultant=Sarah Jenkins"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                >
                  Book Session with Sarah
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Focus Areas: Medical IT Grid */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/50">
        <div className="container max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-block">
              Medical IT Consulting
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Healthcare Focus Domains
            </h2>
            <p className="text-gray-500 text-base">
              Deep expertise in key medical ERP platforms, software systems, and diagnostic hardware integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {medicalFocusAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Focus Areas: General IT Grid */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200/50">
        <div className="container max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase bg-slate-100 px-4 py-1.5 rounded-full mb-4 inline-block">
              Other Tech Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Enterprise Technology Consultation
            </h2>
            <p className="text-gray-500 text-base">
              Strategic and architectural consultation for diverse enterprise demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {generalConsultingAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-blue-200 transition-all duration-300 flex flex-col gap-5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white text-slate-700 border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Consultants Grid on page */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200/50">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full mb-4 inline-block">
              Expert Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Consulting Panel
            </h2>
            <p className="text-gray-500 text-base">
              Speak directly with our field-specialist consultants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultants.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-[2rem] p-8 border hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col items-center text-center group relative overflow-hidden ${
                  item.isFeatured ? "border-blue-400 ring-1 ring-blue-100 shadow-blue-500/5" : "border-slate-100 hover:border-blue-200/80 shadow-sm"
                }`}
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
                  {/* Featured Lead Badge */}
                  {item.isFeatured && (
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full shadow-sm z-20 uppercase tracking-wider animate-pulse">
                      Medical Lead
                    </span>
                  )}
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

                {/* Action Buttons */}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Schedule */}
      <section className="bg-white py-20 px-6 relative border-t border-slate-200/50">
        <div className="container max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to Partner with Our Experts?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Book a strategic consultation to map your architecture goals, workflows, and deployment timeline.
            </p>
            <Link
              href="/contact?consultation=General Consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition shadow-lg text-base group"
            >
              Request Consultation
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
