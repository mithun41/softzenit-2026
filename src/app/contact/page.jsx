"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight, Bell } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Template variables matching exactly what you provided
    const templateParams = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_n7aww7o", // Your Service ID
        "template_n25qnlm", // Your Template ID
        templateParams,
        "7tay_Xfi1kEOyn_Kp" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for reaching out. We'll get back to you shortly.",
            confirmButtonColor: "#2563eb", // Blue color for SoftZen IT
          });

          // Reset form
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            message: "",
          });
          setLoading(false);
        },
        (err) => {
          console.error("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong. Please try again.",
            confirmButtonColor: "#2563eb",
          });
          setLoading(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      text: "House 41, Road 13, Block D, Banani, Dhaka 1213",
    },
    {
      icon: Mail,
      text: "support@softzenit.com",
    },
    {
      icon: Phone,
      text: "+880 1797 933 772",
    },
  ];

  return (
    <section className="pt-12 pb-24 bg-slate-50 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto px-6 relative z-10"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* --- LEFT SIDE: FORM --- */}
            <div className="lg:col-span-3">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Contact Seniors
              </span>

              <h1 className="text-3xl font-bold mt-2 mb-3 text-gray-900 tracking-tight">
                Get In Touch With Us
              </h1>

              <p className="text-gray-600 text-sm mb-8 max-w-md leading-relaxed">
                We're happy to answer your questions and discuss how our engineering team can help your business scale.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-sm"
                    />
                  </div>
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-sm"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 placeholder:text-gray-400 text-sm resize-none"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-sm transition-all duration-200 ${
                    loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </form>
            </div>

            {/* --- RIGHT SIDE: CONTACT INFO --- */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider inline-block mb-2">
                Need Consultation?
              </span>

              <h2 className="text-2xl font-bold mb-8 text-gray-900 leading-tight">
                Have a project? Let's talk.
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-200 flex-shrink-0">
                      <item.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                    </div>
                    <span className="text-gray-700 text-sm pt-2">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Decorative background element */}
              <div className="mt-10 p-4 bg-blue-50 rounded-xl">
                <p className="text-blue-800 text-sm font-medium">
                  Available for new projects and collaborations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
