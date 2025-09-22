import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, User, Wrench } from "lucide-react";

import HeroSection from "../../components/portfolio/HeroSection";
import AboutSection from "../../components/portfolio/AboutSection";
import ExperienceSection from "../../components/portfolio/ExperienceSection";
import ProjectsSection from "../../components/portfolio/ProjectsSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import EducationSection from "../../components/portfolio/EducationSection";
import ContactSection from "../../components/portfolio/ContactSection";

import Dither from "../../components/portfolio/Dither"; // 👈 Import globally

// 🔹 Add Global Styles (CSS variables + keyframes)
const GlobalStyles = () => (
  <style jsx="true" global="true">{`
    :root {
      --primary: #8f25c4;
      --secondary: #06b6e1;
      --accent: #ee964b;
      --background: #ffffff;
      --background-alt: #f8f9fa;
      --text-dark: #b97ddcff;
      --text-light: #f8f9fa;
      --text-muted: #d1b2eb;
    }
  `}</style>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  // 🔹 Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔹 Active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero","about","experience","projects","skills","education","contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-[var(--text-dark)]">
      <GlobalStyles />

      {/* 🔹 Global Dither Background */}
      <div className="fixed inset-0 -z-10">
        <Dither
          waveColor={[0.7, 0.5, 0.7]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* 🔹 Page Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>

  );
}
