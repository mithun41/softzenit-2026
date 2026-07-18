import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#030712] border-t border-white/[0.08] text-white pt-20 pb-12 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.08]">
        
        <div className="flex flex-col gap-6">
          <Link href="/" className="inline-block">
            <img src="/logo-two.png" alt="SoftZen IT Logo" className="h-10" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Engineering enterprise software that scales businesses across the US, Canada, Europe, and Australia. Founded 2021, Banani, Dhaka.
          </p>
          
          <div className="flex gap-3 mt-1">
            <a href="https://www.facebook.com/softzenit/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaFacebookF size={14} />
            </a>
            <a href="https://www.linkedin.com/company/softzen-it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaLinkedinIn size={14} />
            </a>
            <a href="https://www.instagram.com/softzen.it/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="https://www.youtube.com/@soft.zen_it" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
              <FaYoutube size={14} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/services/custom-software" className="hover:text-white transition-colors">Custom Software</Link></li>
            <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
            <li><Link href="/services/mobile-development" className="hover:text-white transition-colors">Mobile Development</Link></li>
            <li><Link href="/services/ai-software-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
            <li><Link href="/services/ecommerce-solutions" className="hover:text-white transition-colors">eCommerce</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">All Services</Link></li>
            <li><Link href="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Industries</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/services/garments-erp" className="hover:text-white transition-colors">Garments ERP</Link></li>
            <li><Link href="/services/school-erp" className="hover:text-white transition-colors">School ERP</Link></li>
            <li><Link href="/services/hospital-erp" className="hover:text-white transition-colors">Hospital ERP</Link></li>
            <li><Link href="/services/pos-software" className="hover:text-white transition-colors">Retail POS</Link></li>
            <li><Link href="/services/real-estate-software" className="hover:text-white transition-colors">Real Estate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Contact Us</h4>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-4 h-4 shrink-0 mt-0.5" />
              <span>House 41, Road 13, Block D, Banani, Dhaka 1213</span>
            </div>
            <a href="tel:+8801797933772" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <Phone className="text-blue-500 w-4 h-4 shrink-0" />
              <span>+880 1797 933 772</span>
            </a>
            <a href="mailto:support@softzenit.com" className="flex items-center gap-3 hover:text-white transition-colors w-fit">
              <Mail className="text-blue-500 w-4 h-4 shrink-0" />
              <span>support@softzenit.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} <span className="font-semibold text-white">SoftZen IT</span>. Built in Bangladesh.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
