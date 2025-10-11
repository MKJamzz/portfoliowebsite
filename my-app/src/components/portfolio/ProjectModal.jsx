import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Github, ExternalLink } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="bg-white text-slate-900 border-none shadow-2xl">
          <CardHeader className="relative pb-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-16 h-16 ${project.color.replace('bg-','bg-opacity-20 ')} rounded-xl flex items-center justify-center flex-shrink-0`}>
                <project.icon className="w-8 h-8" style={{color: `var(--${project.color.split('-')[1]})`}} />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl font-bold mb-2">{project.title}</CardTitle>
                <p className="text-slate-500 mb-2">{project.period}</p>
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={`${project.status === "Completed" ? "bg-green-100 text-green-800 border-green-200" : "bg-blue-100 text-blue-800 border-blue-200"}`}
                >
                  {project.status}
                </Badge>
              </div>
            </div>

            {project.image && (
              <div className="w-full h-64 rounded-lg overflow-hidden mb-4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <DecryptedText
                text={project.description}
                className="text-slate-700 leading-relaxed text-lg"
                speed={20}
                maxIterations={10}
                animateOn="view"
              />
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Key Features & Achievements:</h4>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[var(--primary)] rounded-full mt-2 flex-shrink-0"></div>
                    <DecryptedText
                      text={highlight}
                      className="text-slate-600 leading-relaxed"
                      speed={15}
                      maxIterations={6}
                      animateOn="view"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800 mb-4 text-lg">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="bg-slate-50 text-slate-700 border-slate-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {(project.links.github || project.links.demo) && (
              <div className="flex gap-4 pt-4 border-t relative bg-transparent">
                {project.links.github && (
                  <Button asChild variant="outline" className="flex-1">
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}

                {project.links.demo && (
                  <Button asChild className="flex-1 bg-[var(--primary)] hover:opacity-90">
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}