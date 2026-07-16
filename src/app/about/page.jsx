import React from "react";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
import ConsultationSection from "@/components/ConsultationSection";
import CtaBanner from "@/components/CtaBanner";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "About | SoftZen IT",
  description: "Learn more about SoftZen IT - our mission, our team, and how we build software globally.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner 
        tag="About Us"
        title="About SoftZen IT" 
        subtitle="We build scalable architectures, bespoke software, and AI-driven applications for modern enterprises globally."
        image="/images/RAW09562.jpg"
      />
      <div>
        <AboutSection />
      </div>
      <LeadershipSection />
      <WorkingProcessSection />
      <ConsultationSection />
      <CtaBanner />
    </>
  );
}

