import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Ventures from "@/components/Ventures";
import Services from "@/components/Services";
import FounderJourney from "@/components/FounderJourney";
import EducationVision from "@/components/EducationVision";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import GSAPInit from "@/components/GSAPInit";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <GSAPInit />
      <Header />
      <Hero />
      <AboutMe />
      <Ventures />
      <Services />
      <FounderJourney />
      <EducationVision />
      <Testimonial />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
