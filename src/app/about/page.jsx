import React from "react";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import WorkingProcessSection from "@/components/WorkingProcessSection";
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
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      />
      <div>
        <AboutSection />
      </div>
      <LeadershipSection />
      <WorkingProcessSection />
      <CtaBanner />
    </>
  );
}
