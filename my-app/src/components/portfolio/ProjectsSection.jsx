
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Car, Gamepad2, BarChart3 } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Infinite Range RC Car",
      period: "June 2025 - Aug 2025",
      status: "Completed",
      icon: Car,
      color: "bg-[var(--secondary)]",
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
      title: "Steamed (Unity Roguelike Game)",
      period: "Aug 2025 - Present",
      status: "In Development",
      icon: Gamepad2,
      color: "bg-[var(--primary)]",
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
      title: "OOP Time Series Framework",
      period: "May 2024 - June 2024", 
      status: "Completed",
      icon: BarChart3,
      color: "bg-[var(--accent)]",
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

  return (
    <section id="projects" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            A showcase of my technical projects ranging from hardware engineering to game development and data processing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg star-border flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={`${project.status === "Completed" ? "bg-green-100 text-green-800" : ""} hover:bg-slate-100 transition-colors`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-[var(--text-dark)] mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-[var(--text-muted)] mb-3">{project.period}</p>
                <p className="text-[var(--text-muted)] leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-[var(--text-dark)] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                        <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-[var(--text-dark)] mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-slate-50 hover:bg-slate-100 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  {project.links.demo && (
                    <Button size="sm" className="flex-1 bg-[var(--primary)] hover:opacity-90">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
