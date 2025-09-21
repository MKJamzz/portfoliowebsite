import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Gamepad2, BarChart3 } from "lucide-react";
import InfiniteScroll from "./InfiniteScroll";
import DecryptedText from "./DecryptedText";

export default function ProjectsSection({ onProjectClick }) {
  const projects = [
    {
      id: 1,
      title: "Infinite Range RC Car",
      period: "June 2025 - Aug 2025",
      status: "Completed",
      icon: Car,
      color: "bg-[var(--secondary)]",
      shortDescription: "RC car system with unlimited control range using Raspberry Pi 4 and cellular connectivity.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      description: "Designed and assembled an RC car system with unlimited control range using Raspberry Pi 4 and SIM7600 module.",
      highlights: [
        "Created client-server architecture in C++ for real-time control streaming",
        "Applied advanced soldering and wiring techniques for high-current components",
        "Integrated Raspberry Pi 4 with cellular connectivity for unlimited range",
        "Ensured stable operation under load with proper component securing"
      ],
      technologies: ["C++", "Linux", "Raspberry Pi 4", "Soldering", "3D Modelling", "Github"],
      links: {
        github: "https://github.com/MKJamzz",
        demo: null
      }
    },
    {
      id: 2,
      title: "Steamed (Unity Roguelike Game)",
      period: "Aug 2025 - Present",
      status: "In Development",
      icon: Gamepad2,
      color: "bg-[var(--primary)]",
      shortDescription: "Complete roguelike game with procedural generation ensuring unique gameplay experiences every run.",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      description: "Developing a complete roguelike game with procedural generation, ensuring unique gameplay experiences every run.",
      highlights: [
        "Implemented procedural dungeon generation algorithm for infinite replayability",
        "Designed responsive 2D player controls and combat mechanics",
        "Built comprehensive resource systems and player progression mechanics",
        "Created shop systems, enemy AI, and loot drop mechanics"
      ],
      technologies: ["Unity", "C#", "Procedural Generation", "Krita", "Github", "Itch.io"],
      links: {
        github: "https://github.com/MKJamzz",
        demo: null
      }
    },
    {
      id: 3,
      title: "OOP Time Series Framework",
      period: "May 2024 - June 2024",
      status: "Completed",
      icon: BarChart3,
      color: "bg-[var(--accent)]",
      shortDescription: "High-performance C++ framework for parsing and analyzing large-scale time series data with advanced optimization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Built a high-performance C++ framework for parsing and analyzing large-scale time series data with advanced optimization techniques.",
      highlights: [
        "Processed CSV files with 13,000+ lines using efficient data structures",
        "Implemented double hashing achieving 60% reduction in instruction count",
        "Created recursive binary tree operations for search and delete functions",
        "Ensured memory safety using Valgrind in Linux environment"
      ],
      technologies: ["C++", "Linux", "Valgrind", "Data Structures", "Algorithm Optimization", "Github"],
      links: {
        github: "https://github.com/MKJamzz",
        demo: null
      }
    }
  ];

  const scrollItems = projects.map((project) => {
    // Extract the raw color name (e.g., 'secondary', 'primary') from the project.color string
    // This allows dynamically setting background opacity and icon color using CSS variables
    const rawColorName = project.color.match(/--([\w-]+)/)?.[1];
    
    return {
      content: (
        <Card 
          key={project.id}
          className="border-slate-200 shadow-lg star-border bg-white h-full cursor-pointer"
          onClick={() => onProjectClick(project)}
          style={{
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
            background: 'rgba(20, 25, 40, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'white'
          }}
        >
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[color:var(--${rawColorName})]/20`}>
                <project.icon className="w-6 h-6" style={{color: `var(--${rawColorName})`}} />
              </div>
              <Badge 
                variant={project.status === "Completed" ? "default" : "secondary"}
                className={`${project.status === "Completed" ? "bg-green-100 text-green-800 border-green-200" : "bg-blue-100 text-blue-800 border-blue-200"}`}
              >
                {project.status}
              </Badge>
            </div>
            <CardTitle className="text-xl font-bold text-white mb-2">
              {project.title}
            </CardTitle>
            <p className="text-sm text-slate-300 mb-3">{project.period}</p>
            {project.image && (
              <div className="w-full h-32 mb-3 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
          </CardHeader>
          <CardContent>
            <DecryptedText
              text={project.shortDescription}
              className="text-slate-300 leading-relaxed text-sm"
              speed={50}
              maxIterations={8}
              animateOn="view"
            />
          </CardContent>
        </Card>
      )
    };
  });

  return (
    <section id="projects" className="py-24 relative bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <DecryptedText
            text="A showcase of my technical projects ranging from hardware engineering to game development and data processing."
            className="text-xl text-slate-500"
            speed={50}
            maxIterations={10}
            animateOn="view"
          />
        </div>

        <InfiniteScroll
          width="24rem"
          items={scrollItems}
          autoplaySpeed={60}
        />
      </div>
    </section>
  );
}