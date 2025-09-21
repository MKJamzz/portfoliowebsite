
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wrench, Layers } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-[var(--primary)]",
      skills: [
        { name: "C/C++", level: "Advanced" },
        { name: "C#", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "HTML/CSS", level: "Intermediate" },
        { name: "Lua", level: "Intermediate" },
        { name: "VHDL", level: "Beginner" },
        { name: "ARM Assembly", level: "Beginner" }
      ]
    },
    {
      title: "Technologies & Frameworks",
      icon: Layers,
      color: "bg-[var(--secondary)]",
      skills: [
        { name: "Unity", level: "Advanced" },
        { name: "Linux", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Vue.js", level: "Intermediate" },
        { name: "Raspberry Pi", level: "Intermediate" },
        { name: "RISC-V", level: "Intermediate" },
        { name: "Quartus Prime", level: "Beginner" },
        { name: "COMSOL", level: "Beginner" }
      ]
    },
    {
      title: "Hardware & Tools",
      icon: Wrench,
      color: "bg-[var(--accent)]",
      skills: [
        { name: "3D Printing", level: "Advanced" },
        { name: "Soldering", level: "Advanced" },
        { name: "PC Building", level: "Advanced" },
        { name: "Oscilloscope", level: "Intermediate" },
        { name: "Multimeter", level: "Intermediate" },
        { name: "Function Generator", level: "Intermediate" },
        { name: "AutoCAD Fusion", level: "Intermediate" }
      ]
    },
    {
      title: "Development Tools",
      icon: Cpu,
      color: "bg-gray-500",
      skills: [
        { name: "VSCode", level: "Advanced" },
        { name: "Visual Studio", level: "Advanced" },
        { name: "Git/GitHub", level: "Advanced" },
        { name: "Valgrind", level: "Intermediate" },
        { name: "STMCube32 IDE", level: "Intermediate" },
        { name: "Postman API", level: "Intermediate" },
        { name: "Roblox Studio", level: "Intermediate" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced": return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Beginner": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  // Helper to extract CSS variable name or direct color for the icon
  const getIconColorStyle = (bgColorString) => {
    const varMatch = bgColorString.match(/var\(--([\w-]+)\)/);
    if (varMatch) {
      return { color: `var(--${varMatch[1]})` };
    }
    // For direct classes like 'bg-gray-500', derive a sensible color
    if (bgColorString === 'bg-gray-500') {
      return { color: 'rgb(107 114 128)' }; // Equivalent to Tailwind's gray-500
    }
    return { color: 'currentColor' }; // Fallback
  };

  return (
    <section id="skills" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <DecryptedText
            text="A comprehensive overview of my technical expertise across programming languages, frameworks, hardware, and development tools."
            className="text-xl text-slate-500 max-w-3xl mx-auto"
            speed={20}
            maxIterations={10}
            animateOn="view"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-slate-200 shadow-lg star-border bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center flex-shrink-0 bg-opacity-20`}>
                    <category.icon className="w-6 h-6" style={getIconColorStyle(category.color)}/>
                  </div>
                  <CardTitle className="text-lg font-bold text-[var(--text-dark)]">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline" 
                        className={`text-xs ${getLevelColor(skill.level)} border hover:scale-110 hover:shadow-md transition-transform`}
                      >
                        {skill.name}
                      </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-slate-200 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 star-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">Always Learning</h3>
              <DecryptedText
                text="Technology evolves rapidly, and so do I. Currently exploring advanced algorithms, machine learning applications, and cutting-edge hardware design to stay at the forefront of computer engineering innovation."
                className="text-slate-600 text-lg leading-relaxed"
                speed={20}
                maxIterations={10}
                animateOn="view"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
