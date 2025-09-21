
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Wrench, Layers } from "lucide-react";

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
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section id="skills" className="py-24 bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">Technical Skills</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, 
            frameworks, hardware, and development tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none shadow-lg star-border">
              <CardHeader className="pb-4 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-[var(--text-dark)]">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="font-medium text-[var(--text-muted)] text-sm">
                        {skill.name}
                      </span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getLevelColor(skill.level)} border hover:scale-110 hover:shadow-md transition-transform`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-none shadow-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] star-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
              <p className="text-purple-100 text-lg leading-relaxed">
                Technology evolves rapidly, and so do I. Currently exploring advanced algorithms, 
                machine learning applications, and cutting-edge hardware design to stay at the 
                forefront of computer engineering innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
