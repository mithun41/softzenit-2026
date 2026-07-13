import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getServiceBySlug, allServices } from '@/data/services';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import { CheckCircle2, Zap, LayoutGrid, Layers, PhoneCall } from 'lucide-react';

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | SoftZen IT Services`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#0B0F19] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop)` }}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0B0F19]/60 to-[#0B0F19]" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 z-10 pointer-events-none" />
        
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <LayoutGrid size={14} /> {service.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            {service.heroTitle}
          </h1>
          <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed max-w-2xl mx-auto mb-10">
            {service.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 w-full sm:w-auto">
              Schedule a Consultation
            </Link>
            <Link href="#features" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-colors border border-white/10 w-full sm:w-auto">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Core Features</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Everything you need to scale operations and dominate your industry.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow group">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <Zap size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Benefits (Split Layout with Screenshot) */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Business Benefits</h2>
              <p className="text-gray-500 text-base mb-8">Why our {service.title} is the ultimate ROI engine for your business.</p>
              
              <div className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={service.dashboardImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"} 
                alt={`${service.title} UI`} 
                className="w-full h-auto rounded-3xl shadow-xl border border-slate-200 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industry Use Cases */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Industry Use Cases</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">How different sectors are leveraging our technology.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {service.useCases.map((useCase, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-colors shadow-sm">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{useCase.industry}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Stack */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {service.techStack.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 font-medium text-blue-100 text-sm backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">Got questions? We've got answers.</p>
          </div>
          <FaqAccordion faqs={service.faq} />
        </div>
      </section>

      {/* 7. Office Placeholder & Final CTA */}
      <section className="pb-16 bg-white">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="mb-16">
              <img 
                src={service.officeImage || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"} 
                alt="SoftZen IT Team" 
                className="w-full h-80 lg:h-96 rounded-3xl shadow-xl border border-slate-200 object-cover"
              />
          </div>
        </div>
      </section>

      <CtaBanner />

    </div>
  );
}
