import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">Education</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-slate-200 shadow-xl star-border transition-all duration-300 bg-white">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold text-[var(--text-dark)] mb-2">
                    Bachelor of Computer Engineering
                  </CardTitle>
                  <p className="text-xl font-semibold text-[var(--primary)] mb-3">
                    University of Waterloo
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2023 - 2028</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Waterloo, Ontario</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 self-start">
                  In Progress
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div>
                <DecryptedText
                  text="Currently pursuing a comprehensive Computer Engineering degree at one of Canada's top engineering universities. The program combines theoretical computer science foundations with practical hardware and software engineering skills."
                  className="text-lg text-slate-600 leading-relaxed"
                  speed={25}
                  maxIterations={12}
                  animateOn="view"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[var(--primary)]" />
                    Core Areas of Study
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Computer Systems Architecture",
                      "Software Engineering Principles",
                      "Digital Logic Design",
                      "Embedded Systems Programming", 
                      "Algorithm Design & Analysis",
                      "Operating Systems",
                      "Computer Networks",
                      "Signal Processing"
                    ].map((subject, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                        <DecryptedText
                          text={subject}
                          className="text-slate-500"
                          speed={15}
                          maxIterations={6}
                          animateOn="view"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--text-dark)] mb-4">Academic Highlights</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-[var(--primary)]">
                      <h5 className="font-medium text-[var(--text-dark)] mb-1">Competitive Programming</h5>
                      <DecryptedText
                        text="Preparing students for Waterloo CCC contest, demonstrating mastery of algorithmic problem-solving and optimization techniques."
                        className="text-sm text-slate-500"
                        speed={15}
                        maxIterations={6}
                        animateOn="view"
                      />
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-[var(--secondary)]">
                      <h5 className="font-medium text-[var(--text-dark)] mb-1">Co-op Program</h5>
                      <DecryptedText
                        text="Part of Waterloo's renowned co-operative education program, providing hands-on industry experience throughout my studies."
                        className="text-sm text-slate-500"
                        speed={15}
                        maxIterations={6}
                        animateOn="view"
                      />
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-[var(--accent)]">
                      <h5 className="font-medium text-[var(--text-dark)] mb-1">Project-Based Learning</h5>
                      <DecryptedText
                        text="Emphasis on practical application through comprehensive projects in hardware design, software development, and system integration."
                        className="text-sm text-slate-500"
                        speed={15}
                        maxIterations={6}
                        animateOn="view"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-[var(--text-dark)] mb-3">Expected Graduation</h4>
                <p className="text-slate-600">
                  <span className="font-medium">2028</span> - Bachelor of Computer Engineering with Honours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}