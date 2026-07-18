"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
    agreed: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      Swal.fire({
        icon: "warning",
        title: "Please agree",
        text: "You must agree to the privacy policy to continue.",
        confirmButtonColor: "#2563eb",
      });
      return;
    }

    setLoading(true);
    const templateParams = {
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_n7aww7o",
        "template_n25qnlm",
        templateParams,
        "7tay_Xfi1kEOyn_Kp"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thanks for reaching out. We'll get back to you shortly.",
            confirmButtonColor: "#2563eb",
          });
          setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            message: "",
            agreed: false,
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
      label: "Location",
      text: "House 41, Road 13, Block D\nBanani, Dhaka 1213",
    },
    {
      icon: Mail,
      label: "Email",
      text: "support@softzenit.com",
    },
    {
      icon: Phone,
      label: "Phone",
      text: "+880 1797 933 772",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-400/5 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: "12s" }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 overflow-hidden relative z-10"
      >
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* LEFT: Contact Info Sidebar */}
          <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 h-full flex flex-col">
              <div>
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-blue-200 mb-6 border border-white/10">
                  Contact Information
                </span>

                <h2 className="text-3xl font-bold mb-3 leading-tight">
                  Let's start a<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                    conversation.
                  </span>
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-xs">
                  Ready to transform your ideas into reality? Our team is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6 flex-grow">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-sm text-slate-200 mt-0.5 whitespace-pre-line">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Live Status */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <p className="text-sm text-slate-300">Available for new projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form Area */}
          <div className="lg:col-span-8 p-8 md:p-12 lg:p-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-blue-500" />
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  Get In Touch
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                Send us a message
              </h1>

              <p className="text-slate-500 text-base mb-10 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. We're excited to hear about your project!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="+880 1XXX XXXXXX"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 outline-none text-slate-800 placeholder:text-slate-400 resize-none text-sm"
                  />
                </div>

              
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  {!loading && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactPage;