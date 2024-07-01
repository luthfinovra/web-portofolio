"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import AboutSection from "./components/AboutSection";

type Section = "hero" | "projects" | "experiences" | "about";

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <AuroraBackground>
        <div></div>
      </AuroraBackground>
      {activeSection === "hero" && <HeroSection />}
      {activeSection === "projects" && <ProjectSection />}
      {activeSection === "experiences" && <ExperienceSection />}
      {activeSection === "about" && <AboutSection />}
    </>
  );
}
