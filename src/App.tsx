import React from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import MissionVisionSection from "./components/MissionVisionSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PeaceOfMindSection from "./components/PeaceOfMindSection";
import FeaturesSection from "./components/FeaturesSection";
import PeaceOfMindOtherSection from "./components/PeaceOfMindOtherSection";
import BlogSection from "./components/BlogSection";
import TestimonialSection from "./components/TestimonialSection";
import FaqSection from "./components/FaqSection";
import OurAppCTASection from "./components/OurAppCTASection";
import Footer from "./components/Footer";
import ExploreAppSection from "./components/ExploreAppSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <HowItWorksSection />
      <PeaceOfMindSection />
      <FeaturesSection />
      <PeaceOfMindOtherSection />
      <ExploreAppSection />
      <BlogSection />
      <TestimonialSection />
      <FaqSection />
      <OurAppCTASection />
      <Footer />
    </>
  );
};
export default App;
