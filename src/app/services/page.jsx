import React from "react";
import { allServices, getServiceCategories } from "@/data/services";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";
import ServicesClient from "@/components/ServicesClient";

export const metadata = {
  title: "All Services | SoftZen IT",
  description: "Explore our comprehensive suite of 30+ engineering, ERP, and AI solutions.",
};

export default function ServicesPage() {
  const categories = getServiceCategories();

  return (
    <>
      <PageBanner 
        tag="Our Services"
        title="Services of SoftZen IT" 
        subtitle="We offer a wide range of IT services to help businesses transform and grow. Our team of experts is dedicated to delivering innovative solutions that meet your specific needs."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop"
      />
      
      {/* Dynamic Filterable Services Grid */}
      <ServicesClient services={allServices} categories={categories} />

      <CtaBanner />
    </>
  );
}