"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaHome, FaLaptopCode, FaInfoCircle, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { allServices } from "@/data/services";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Group and sort services for the columns dynamically by category and slug to ensure balanced heights (8, 8, 6, 8)
  const softwareAndAiRaw = allServices.filter(
    (s) => s.category === "Core Engineering" || s.category === "AI & Automation"
  );
  const lastSlugs = new Set(["ai-agent-integration", "ai-software-solutions", "corporate-solutions"]);
  const softwareAndAiFirst = softwareAndAiRaw
    .filter((s) => !lastSlugs.has(s.slug))
    .sort((a, b) => a.title.localeCompare(b.title));
  const softwareAndAiLast = softwareAndAiRaw
    .filter((s) => lastSlugs.has(s.slug))
    .sort((a, b) => a.title.localeCompare(b.title));
  const softwareAndAi = [...softwareAndAiFirst, ...softwareAndAiLast];

  const digitalAndBusiness = allServices
    .filter((s) => 
      s.slug === "api-integrations" || 
      s.slug === "cloud-solutions" || 
      s.slug === "digital-marketing" || 
      s.slug === "crm-systems" || 
      s.slug === "pos-software" || 
      s.slug === "hrm-biometric" || 
      s.slug === "accounting-billing" || 
      s.slug === "isp-billing"
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const enterpriseErp = allServices
    .filter((s) => 
      s.slug === "erp-development" || 
      s.slug === "factory-erp" || 
      s.slug === "garments-erp" || 
      s.slug === "manufacturing-erp" || 
      s.slug === "real-estate-software" || 
      s.slug === "restaurant-software"
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  const industrySpecificErp = allServices
    .filter((s) => 
      s.slug === "hospital-erp" || 
      s.slug === "dental-erp" || 
      s.slug === "diagnostic-erp" || 
      s.slug === "medical-college-erp" || 
      s.slug === "school-erp" || 
      s.slug === "college-erp" || 
      s.slug === "university-erp" || 
      s.slug === "online-education-erp"
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setServicesOpen(!servicesOpen);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    if (pathname === "/") {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.location.href = `/#${targetId}`;
    }
  };

  return (
    <>
      <nav 
        ref={menuRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          open
            ? "bg-white border-b border-gray-200 py-3"
            : scrolled 
              ? "bg-white/80 backdrop-blur-md shadow-md py-4" 
              : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            
            <Link href="/" onClick={closeMenu} className="flex-shrink-0">
              <img 
                src="/logo-two.png" 
                alt="SoftZen IT Logo" 
                className="h-10" 
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8 font-josefin font-light tracking-[0.1em] text-[13px]">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 py-1 group">
                <FaHome className="text-gray-400 group-hover:text-blue-600 transition-colors" /> Home
              </Link>
              {/* Services Mega Menu */}
              <div className="group">
                <button onClick={toggleServices} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 py-6 cursor-pointer focus:outline-none">
                  <FaLaptopCode className={`text-gray-400 group-hover:text-blue-600 transition-colors ${servicesOpen ? 'text-blue-600' : ''}`} /> 
                  <span className={servicesOpen ? 'text-blue-600' : ''}>Services</span>
                  <svg className={`w-3 h-3 ml-0.5 text-gray-400 group-hover:text-blue-600 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-blue-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Box - Full Width */}
                <div className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 border-b-4 border-b-blue-600 ${
                  servicesOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
                }`}>
                  <div className="max-w-7xl mx-auto px-6 py-10">
                    <div className="grid grid-cols-4 gap-12">
                      {/* Column 1 */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                          <h4 className="text-slate-800 font-bold uppercase tracking-wider text-[13px]">Software & AI</h4>
                        </div>
                        <ul className="space-y-4 text-[14px] font-normal normal-case tracking-normal text-slate-600">
                          {softwareAndAi.map((service, idx) => (
                            <li key={idx}>
                              <Link href={`/services/${service.slug}`} onClick={closeMenu} className="hover:text-blue-600 transition-colors block line-clamp-1" title={service.title}>
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                          <h4 className="text-slate-800 font-bold uppercase tracking-wider text-[13px]">Digital & Business Tools</h4>
                        </div>
                        <ul className="space-y-4 text-[14px] font-normal normal-case tracking-normal text-slate-600">
                          {digitalAndBusiness.map((service, idx) => (
                            <li key={idx}>
                              <Link href={`/services/${service.slug}`} onClick={closeMenu} className="hover:text-blue-600 transition-colors block line-clamp-1" title={service.title}>
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                          <h4 className="text-slate-800 font-bold uppercase tracking-wider text-[13px]">Enterprise ERP</h4>
                        </div>
                        <ul className="space-y-4 text-[14px] font-normal normal-case tracking-normal text-slate-600">
                          {enterpriseErp.map((service, idx) => (
                            <li key={idx}>
                              <Link href={`/services/${service.slug}`} onClick={closeMenu} className="hover:text-blue-600 transition-colors block line-clamp-1" title={service.title}>
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm"></div>
                          <h4 className="text-slate-800 font-bold uppercase tracking-wider text-[13px]">Industry Specific ERP</h4>
                        </div>
                        <ul className="space-y-4 text-[14px] font-normal normal-case tracking-normal text-slate-600">
                          {industrySpecificErp.map((service, idx) => (
                            <li key={idx}>
                              <Link href={`/services/${service.slug}`} onClick={closeMenu} className="hover:text-blue-600 transition-colors block line-clamp-1" title={service.title}>
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-100 flex items-center justify-end">
                      <Link href="/services" onClick={closeMenu} className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-[13px] hover:text-blue-600 transition-colors">
                        View All Services <FaArrowRight className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/about" onClick={closeMenu} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 py-1 cursor-pointer group">
                <FaInfoCircle className="text-gray-400 group-hover:text-blue-600 transition-colors" /> About
              </Link>
              <Link href="/contact" onClick={closeMenu} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 py-1 cursor-pointer group">
                <FaEnvelope className="text-gray-400 group-hover:text-blue-600 transition-colors" /> Contact
              </Link>
              {/* <Link href="/consultation" onClick={closeMenu} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 py-1 cursor-pointer group">
                <FaBriefcase className="text-gray-400 group-hover:text-blue-600 transition-colors" /> Consultation
              </Link> */}
              
              {/* <Link href="/contact" onClick={closeMenu} className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-all duration-300 py-1 cursor-pointer group">
                <FaEnvelope className="text-gray-400 group-hover:text-blue-600 transition-colors" /> Contact
              </Link> */}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium tracking-wide rounded-full hover:bg-blue-700 transition-all duration-300 text-sm shadow-md"
              >
                Start a Project
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition z-50"
            >
              <div className="relative w-5 h-4 flex flex-col justify-center">
                <span className={`absolute w-full h-[1.5px] bg-slate-900 transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-0" : "-translate-y-1.5"}`} />
                <span className={`absolute w-full h-[1.5px] bg-slate-900 transition-all duration-300 ease-in-out ${open ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
                <span className={`absolute w-full h-[1.5px] bg-slate-900 transition-all duration-300 ease-in-out ${open ? "-rotate-45 translate-y-0" : "translate-y-1.5"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 top-[76px] bg-white transition-transform duration-400 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 px-8 py-10 h-[calc(100vh-80px)] overflow-y-auto font-josefin font-light tracking-[0.1em] text-[15px]">
            <Link onClick={closeMenu} href="/" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition py-3 border-b border-gray-100"><FaHome className="text-gray-400" /> Home</Link>
            <Link onClick={closeMenu} href="/services" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition py-3 border-b border-gray-100"><FaLaptopCode className="text-gray-400" /> Services</Link>
            <Link onClick={closeMenu} href="/about" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition py-3 border-b border-gray-100"><FaInfoCircle className="text-gray-400" /> About</Link>
            {/* <Link onClick={closeMenu} href="/consultation" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition py-3 border-b border-gray-100"><FaBriefcase className="text-gray-400" /> Consultation</Link>
            <Link onClick={closeMenu} href="/projects" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition py-3 border-b border-gray-100"><FaBriefcase className="text-gray-400" /> Portfolio</Link> */}
            <Link onClick={closeMenu} href="/contact" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition py-3 border-b border-gray-100"><FaEnvelope className="text-gray-400" /> Contact</Link>

            <Link
              onClick={closeMenu}
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium tracking-wider rounded-full hover:bg-blue-700 transition"
            >
              Start a Project
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </nav>
      <div className="h-20" />
    </>
  );
};

export default Navbar;
