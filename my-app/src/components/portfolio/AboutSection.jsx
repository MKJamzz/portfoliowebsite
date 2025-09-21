import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Gamepad2, Zap } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in multiple programming languages and frameworks"
    },
    {
      icon: Cpu,
      title: "Hardware Engineering", 
      description: "Experience with embedded systems and hardware design"
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Creating engaging games with Unity and custom engines"
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Always exploring cutting-edge technologies and solutions"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">About Me</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column: about text */}
          <div className="space-y-6">
            <DecryptedText
              text="I'm a Computer Engineering student at the University of Waterloo with a passion for creating innovative technology solutions. My journey spans from teaching coding to young minds to building complex systems and founding my own streetwear brand."
              className="text-lg text-[var(--text-muted)] leading-relaxed"
              speed={50}
              maxIterations={12}
              animateOn="view"
            />
            
            <DecryptedText
              text="What drives me is the intersection of creativity and technology. Whether I'm developing a Unity game with procedural generation, building an RC car with unlimited range, or optimizing data structures for better performance, I'm always looking for ways to push boundaries and solve real-world problems."
              className="text-lg text-[var(--text-muted)] leading-relaxed"
              speed={50}
              maxIterations={12}
              animateOn="view"
            />

            <DecryptedText
              text="My experience ranges from low-level hardware programming to high-level software architecture, with a special interest in game development, embedded systems, and creating tools that make complex tasks simple and elegant."
              className="text-lg text-[var(--text-muted)] leading-relaxed"
              speed={50}
              maxIterations={12}
              animateOn="view"
            />
          </div>

          {/* Right column: highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-slate-200 shadow-lg star-border bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-xl flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-dark)] mb-2">{highlight.title}</h3>
                  <DecryptedText
                    text={highlight.description}
                    className="text-sm text-[var(--text-muted)] leading-relaxed"
                    speed={50}
                    maxIterations={8}
                    animateOn="view"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}