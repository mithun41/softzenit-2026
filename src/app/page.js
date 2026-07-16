import React from "react";
import HeroSection from "@/components/HeroSection";
import ClientSlider from "@/components/ClientSlider";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import TechStackSection from "@/components/TechStackSection";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientSlider />
      <AboutSection />
      <VideoSection />
      <ServicesSection />
      <WorkingProcessSection />
      <TechStackSection />
      <CtaBanner />
    </>
  );
}


