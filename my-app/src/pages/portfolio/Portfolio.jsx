import React, { useState, useEffect } from "react";
// If you have ui components set up, uncomment these lines:
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Wrench,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import HeroSection from "../../components/portfolio/HeroSection";
import AboutSection from "../../components/portfolio/AboutSection";
import ExperienceSection from "../../components/portfolio/ExperienceSection";
import ProjectsSection from "../../components/portfolio/ProjectsSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import EducationSection from "../../components/portfolio/EducationSection";
import ContactSection from "../../components/portfolio/ContactSection";

// 🔹 Add Global Styles (CSS variables + keyframes)
const GlobalStyles = () => (
  <style jsx="true" global="true">{`
    :root {
      --primary: #8f25c4;
      --secondary: #06b6e1;
      --accent: #ee964b;
      --background: #ffffff;
      --background-alt: #f8f9fa;
      --text-dark: #023436;
      --text-light: #f8f9fa;
      --text-muted: #6c757d;
    }

    @keyframes gradient-animation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}</style>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  // 🔹 Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔹 Highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "projects",
        "skills",
        "education",
        "contact",
      ];
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

  // 🔹 Navbar items
  const navigationItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Wrench },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-[var(--background-alt)] text-[var(--text-dark)]">
      <GlobalStyles />

      {/* 🔹 Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="font-bold text-xl text-[var(--text-dark)]">
              Michael Whiteman
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === id
                      ? "text-[var(--primary)] bg-purple-50"
                      : "text-[var(--text-muted)] hover:text-[var(--text-dark)] hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/in/michael-j-whiteman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--secondary)] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/MKJamzz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[var(--text-dark)] transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔹 Page Content */}
        <main>
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
