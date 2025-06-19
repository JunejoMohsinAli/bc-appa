import React from "react";
import HeroSection from "./components/HeroSection";
import "./index.css";
import Navbar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import MissionVisionSection from "./components/MissionVisionSection";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
    </>
  );
};
export default App;
