"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Md. Abdul Gaffar",
    role: "Founder",
    image: "/team2.jpg", // Replace with actual image path when available
    bio: "Founder of SoftZen IT with 25+ years of proven experience in business development and strategic management, guiding corporate vision and growth.",
    socials: {
      facebook: "https://www.facebook.com/gaffar.khokon",
      youtube: "https://www.youtube.com/@soft.zen_it",
      instagram: "https://www.instagram.com/softzen.it/",
      linkedin: "https://www.linkedin.com/company/softzen-it/",
    },
  },
  {
    name: "Ahasan Hamza",
    role: "Co-Founder & CEO",
    image: "/team1.png", // Placeholder until image is provided
    bio: "Co-Founder & CEO with 10+ years of experience running tech companies, managing engineering divisions, and scaling modern software platforms.",
    socials: {
      facebook: "#",
      youtube: "https://www.youtube.com/@soft.zen_it",
      instagram: "https://www.instagram.com/softzen.it/",
      linkedin: "https://www.linkedin.com/company/softzen-it/",
    },
  },
  {
    name: "Md. Nuruzzaman",
    role: "COO",
    image: "/team3.jpg", // Replace with actual image path when available
    bio: "COO of SoftZen IT with 15+ years of experience in company management, operational efficiency, and organizational growth.",
    socials: {
      facebook: "https://www.facebook.com/nuruzzamanrubel07",
      youtube: "https://www.youtube.com/@soft.zen_it",
      instagram: "https://www.instagram.com/softzen.it/",
      linkedin: "https://www.linkedin.com/company/softzen-it/",
    },
  }
];

const Social = ({ Icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white transition-colors"
    >
      <Icon size={16} />
    </a>
  );
};

const LeadershipSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Leadership Team
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14 text-lg">
          The people guiding our vision and execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-600/5 border border-slate-100 transition-all duration-300"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-32 h-32 rounded-full mx-auto object-cover mb-6 border-4 border-blue-50 shadow-sm"
              />
              <h3 className="text-2xl font-bold text-slate-900 mb-1">{m.name}</h3>
              <p className={`text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4`}>
                {m.role}
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">{m.bio}</p>

              <div className="flex justify-center gap-3">
                {m.socials.facebook && <Social Icon={FaFacebookF} href={m.socials.facebook} />}
                {m.socials.youtube && <Social Icon={FaYoutube} href={m.socials.youtube} />}
                {m.socials.instagram && <Social Icon={FaInstagram} href={m.socials.instagram} />}
                {m.socials.linkedin && <Social Icon={FaLinkedinIn} href={m.socials.linkedin} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
