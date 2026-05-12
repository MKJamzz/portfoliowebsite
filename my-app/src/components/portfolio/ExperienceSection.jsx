
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp, Settings, Code2, ShoppingCart } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Pinkbyte",
      location: "Vaughan, Ontario",
      period: "Jan 2026 – Apr 2026",
      type: "Internship",
      icon: Code2,
      color: "bg-[var(--accent)]",
      description: "Hired as a software engineer and contributed across fullstack development, embedded systems, and 3D modelling on multiple concurrent projects.",
      achievements: [
        "Built a fullstack web application using React, JavaScript, CSS, C++, MySQL, and SQLite3",
        "Implemented a multithreaded alert system to handle real-time event notifications",
        "Developed secure user authentication with JWT-based login and session management",
        "Created a live database interface allowing admins to connect, query, and modify records through the web UI",
        "Prototyped wireless serial communication via Raspberry Pi, translating commands into opcodes for a HERO robot",
        "3D modelled a carbon fibre Raspberry Pi enclosure for internal company use"
      ],
      skills: ["C++", "React", "JavaScript", "CSS", "MySQL", "SQLite3", "JWT", "Multithreading", "Raspberry Pi", "3D Modelling"]
    },
    {
      title: "Coding Instructor",
      company: "Code Ninjas Richmond Hill",
      location: "Richmond Hill, Ontario",
      period: "Sept 2024 – Dec 2024",
      type: "Co-op",
      icon: Users,
      color: "bg-[var(--accent)]",
      description: "Mentored 30+ students aged 6-13 through key coding concepts and game development.",
      achievements: [
        "Taught C++, C#, JavaScript, and Lua to diverse age groups",
        "Created custom learning materials and ran workshops on 3D modeling and game creation",
        "Prepared high school students for Waterloo CCC contest with algorithm optimization",
        "Developed curriculum for Roblox Studio, Unity, and Minecraft modding"
      ],
      skills: ["C#", "C++", "JavaScript", "Lua", "Unity", "Roblox Studio", "Teaching"]
    },
    {
      title: "Founder",
      company: "Simpl",
      location: "Newmarket, Ontario", 
      period: "Jan 2024 – May 2024",
      type: "Entrepreneurship",
      icon: TrendingUp,
      color: "bg-[var(--primary)]",
      description: "Founded a streetwear clothing brand focused on creativity, quality, and affordability.",
      achievements: [
        "Built e-commerce website using Shopify, CSS, and HTML with custom UI elements",
        "Created all brand designs including logos, clothing concepts, and graphics",
        "Grew social media presence to 280+ followers in 4 months through data-driven content",
        "Managed full business operations from design to customer fulfillment"
      ],
      skills: ["CSS", "HTML", "Shopify", "Brand Design", "Social Media Marketing", "Entrepreneurship"]
    },
    {
      title: "Laser Machine Operator",
      company: "Bluering",
      location: "Newmarket, Ontario",
      period: "June 2023 - Sept 2023",
      type: "Manufacturing",
      icon: Settings,
      color: "bg-[var(--secondary)]",
      description: "Operated precision laser cutting equipment to produce high-quality aluminum stencils.",
      achievements: [
        "Efficiently fulfilled client orders using high-end laser cutting equipment",
        "Maintained quality standards through meticulous inspection processes",
        "Demonstrated precision in producing aluminum stencils for various applications",
        "Worked with SmartCut, CircuitCam8, and VCam software systems"
      ],
      skills: ["SmartCut", "CircuitCam8", "VCam", "Quality Control", "Manufacturing"]
    },
    {
      title: "Front End Worker",
      company: "Food Basics",
      location: "Newmarket, Ontario",
      period: "Dec 2022 – Jun 2023",
      type: "Retail",
      icon: ShoppingCart,
      color: "bg-[var(--secondary)]",
      description: "Provided exceptional customer service on the store floor, ensuring a smooth and positive shopping experience.",
      achievements: [
        "Assisted customers with product location, inquiries, and checkout processes",
        "Maintained organized and well-stocked front-end areas throughout shifts",
        "Collaborated with team members to meet daily operational targets"
      ],
      skills: ["Customer Service", "Communication", "Teamwork"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6 text-outline">Work Experience</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <DecryptedText
            text="From teaching the next generation of programmers to founding my own business, here's my professional journey."
            className="text-xl text-[#d1b2eb] max-w-3xl mx-auto text-outline"
            speed={20}
            maxIterations={10}
            animateOn="view"
          />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="space-y-6 bg-black/40 p-6 rounded-xl backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0 bg-opacity-20`}>
                       {/* Extracts the variable name (e.g., 'accent', 'primary') from the color string */}
                       <exp.icon className="w-6 h-6" style={{color: `var(--${exp.color.split('-')[1].slice(0, -1)})`}} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-[var(--text-dark)] mb-1">
                        {exp.title}
                      </CardTitle>
                      <p className="text-lg font-semibold text-[var(--primary)] mb-2">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#d1b2eb]">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="self-start bg-black/40 text-[#d1b2eb] border-[var(--primary)] font-medium backdrop-blur-sm">
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <DecryptedText
                  text={exp.description}
                  className="text-[#d1b2eb] mb-4 leading-relaxed"
                  speed={25}
                  maxIterations={12}
                  animateOn="view"
                />
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[var(--text-dark)] mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                        <DecryptedText
                          text={achievement}
                          className="text-[#d1b2eb]"
                          speed={20}
                          maxIterations={8}
                          animateOn="view"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-black/40 text-[#d1b2eb] border-[var(--primary)] backdrop-blur-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
