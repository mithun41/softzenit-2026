import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkingProcessSection />
      <TechStackSection />
      <CtaBanner />
    </>
  );
}
