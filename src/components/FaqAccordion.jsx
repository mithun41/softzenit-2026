"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index ? "border-blue-600 bg-blue-50/50 shadow-md" : "border-slate-200 bg-white hover:border-blue-300"
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
          >
            <span className={`font-bold text-lg pr-4 ${openIndex === index ? "text-blue-700" : "text-slate-800"}`}>
              {faq.question}
            </span>
            <ChevronDown 
              className={`flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180 text-blue-600" : "text-slate-400"
              }`} 
            />
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
