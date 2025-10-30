import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Gamepad2, BarChart3, Code } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import InfiniteScroll from "./InfiniteScroll";
import DecryptedText from "./DecryptedText";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 1,
      title: "Infinite Range RC Car",
      period: "June 2025 - Aug 2025",
      status: "Completed",
      icon: Car,
      color: "bg-[var(--secondary)]",
      shortDescription:
        "RC car system with unlimited control range using Raspberry Pi 4 and cellular connectivity.",
      image: "/images/rccarSS.png",
      description:
        "Designed and assembled an RC car system with unlimited control range using Raspberry Pi 4 and SIM7600 module.",
      highlights: [
        "Created client-server architecture in C++ for real-time control streaming",
        "Applied advanced soldering and wiring techniques for high-current components",
        "Integrated Raspberry Pi 4 with cellular connectivity for unlimited range",
        "Ensured stable operation under load with proper component securing",
      ],
      technologies: [
        "C++",
        "Linux",
        "Raspberry Pi 4",
        "Soldering",
        "3D Modelling",
        "Github",
      ],
      links: {
        github: "https://github.com/MKJamzz/ControllerProgram",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7370184142619115520/",
      },
    },
    {
      id: 2,
      title: "Steamed (Unity Roguelike Game)",
      period: "Aug 2025 - Present",
      status: "In Development",
      icon: Gamepad2,
      color: "bg-[var(--primary)]",
      shortDescription:
        "Complete roguelike game with procedural generation ensuring unique gameplay experiences every run.",
      image: "/images/gameSS.png",
      description:
        "Developing a complete roguelike game with procedural generation, ensuring unique gameplay experiences every run.",
      highlights: [
        "Implemented procedural dungeon generation algorithm for infinite replayability",
        "Designed responsive 2D player controls and combat mechanics",
        "Built comprehensive resource systems and player progression mechanics",
        "Created shop systems, enemy AI, and loot drop mechanics",
      ],
      technologies: [ //hi
        "Unity",
        "C#",
        "Procedural Generation",
        "Krita",
        "Github",
        "Itch.io",
      ],
      links: {
        github: null,
        demo: null,
      },
    },
    {
      id: 3,
      title: "OOP Time Series Framework",
      period: "May 2024 - June 2024",
      status: "Completed",
      icon: BarChart3,
      color: "bg-[var(--accent)]",
      shortDescription:
        "High-performance C++ framework for parsing and analyzing large-scale time series data with advanced optimization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description:
        "Built a high-performance C++ framework for parsing and analyzing large-scale time series data with advanced optimization techniques.",
      highlights: [
        "Processed CSV files with 13,000+ lines using efficient data structures",
        "Implemented double hashing achieving 60% reduction in instruction count",
        "Created recursive binary tree operations for search and delete functions",
        "Ensured memory safety using Valgrind in Linux environment",
      ],
      technologies: [
        "C++",
        "Linux",
        "Valgrind",
        "Data Structures",
        "Algorithm Optimization",
        "Github",
      ],
      links: {
        github: null,
        demo: null,
      },
    },
    {
      id: 4,
      title: "Medication Dispenser",
      period: "Nov 2023",
      status: "Completed",
      icon: BarChart3,
      color: "bg-[var(--secondary)]",
      shortDescription:
        "Automated dispenser that reminds patients and releases correct dosages of medication.",
      image: "/images/medSS.png",
      description:
        "Built a medication dispenser using C++ and STM electronics that helps patients maintain their medication schedule.",
      highlights: [
        "Created an interface in C++ to manage patient schedules",
        "Implemented LCD + LED alerts for reminders",
        "Integrated conveyor belt with sensor detection for accurate dispensing",
        "Developed pill sizing detection logic for single-dose release",
      ],
      technologies: ["C++", "Arduino", "STM32", "VSCode", "Github"],
      links: {
        github: null,
        demo: null,
      },
    },
    {
      id: 5,
      title: "Personal Portfolio Website",
      period: "Sept 2025 - Present",
      status: "Completed",
      icon: Code,
      color: "bg-[var(--primary)]",
      shortDescription:
        "Responsive personal portfolio website built with React, Vite, and Tailwind CSS, deployed on Cloudflare.",
      image: "/images/websiteSS.png",
      description:
        "Designed and developed a responsive personal portfolio website to showcase projects, technical experience, and skills. Built with modern web technologies and styled with Tailwind CSS for a sleek, interactive design.",
      highlights: [
        "Built with React and Vite for fast, modular development",
        "Styled with Tailwind CSS and custom components for a modern, techy aesthetic",
        "Deployed on Cloudflare Pages with a custom domain (michaelw.cool)",
        "Showcases technical projects, professional highlights, and personal brand",
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Cloudflare", "Github"],
      links: {
        github: "https://github.com/MKJamzz/portfoliowebsite",
        demo: "https://michaelw.cool",
      },
    },
    {
      id: 6,
      title: "CTRL'D (UWDGC Fall 2025 Game Jam Entry)",
      period: "Oct 2025 - Oct 2025",
      status: "Completed",
      icon: Gamepad2,
      color: "bg-[var(--primary)]",
      shortDescription:
        "A 2D puzzle game created in 72 hours for the University of Waterloo Game Dev Club Fall 2025 Game Jam.",
      image: "/images/ctrlbanner.png",
      description:
        "Developed a 2D puzzle game built around controlling multiple robots through signal-based inputs. Designed, coded, and illustrated all game systems and assets independently, focusing on gameplay clarity, responsive mechanics, and cohesive level progression. The project emphasized modular architecture and reusability through inheritance and ScriptableObjects, resulting in smoother iteration and scalability.",
      highlights: [
        "Created for the UWDGC Fall 2025 Game Jam (Theme: Mixed Signals)",
        "Developed player switching and robot control system using ScriptableObjects and inheritance",
        "Implemented level design, UI transitions, and interaction logic in Unity using C#",
        "Designed all art assets, animations, and puzzle layouts from scratch",
        "Focused on creating a more polished, playable experience compared to previous jam entries",
      ],
      technologies: ["Unity", "C#", "ScriptableObjects", "DOTween", "Krita"],
      links: {
        github: null,
        demo: "https://mkjamzz.itch.io/ctrld",
      },
    },
  ];

  const scrollItems = projects.map((project) => {
    const rawColorName = project.color.match(/--([\w-]+)/)?.[1];

    return {
      content: (
        <Card
          key={project.id}
          onClick={() => handleProjectClick(project)}
          className="h-full cursor-pointer bg-black/40 text-white border border-white/10 backdrop-blur-sm rounded-xl transition-all duration-300 hover:border-[var(--primary)]"
          style={{
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[color:var(--${rawColorName})]/20`}
              >
                <project.icon
                  className="w-6 h-6"
                  style={{ color: `var(--${rawColorName})` }}
                />
              </div>
              <Badge
                variant={
                  project.status === "Completed" ? "default" : "secondary"
                }
                className={`${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-800 border-green-200"
                    : "bg-blue-100 text-blue-800 border-blue-200"
                }`}
              >
                {project.status}
              </Badge>
            </div>
            <CardTitle className="text-xl font-bold text-white mb-2">
              {project.title}
            </CardTitle>
            <p className="text-sm text-[#d1b2eb] mb-3">{project.period}</p>
            {project.image && (
              <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </CardHeader>
          <CardContent>
            <DecryptedText
              text={project.shortDescription}
              className="text-[#d1b2eb] leading-relaxed text-sm"
              speed={50}
              maxIterations={8}
              animateOn="view"
            />
          </CardContent>
        </Card>
      ),
    };
  });

  return (
    <section id="projects" className="py-24 relative bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6 text-outline">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <DecryptedText
            text="A showcase of my technical projects ranging from embedded systems to game development and data processing."
            className="text-xl text-[#d1b2eb] text-outline"
            speed={50}
            maxIterations={10}
            animateOn="view"
          />
        </div>

        <InfiniteScroll width="24rem" items={scrollItems} autoplaySpeed={40} />
      </div>

      {/* 🔥 Modal rendered here */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
