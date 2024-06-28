"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../../components/ui/aurora-background";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";

type Section = "hero" | "projects" | "experiences";

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>("hero");

  return (
    <>
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          {activeSection === "hero" && <HeroSection />}
          {activeSection === "projects" && <ProjectSection />}
          {activeSection === "experiences" && <ExperienceSection />}
        </motion.div>
      </AuroraBackground>
    </>
  );
}
