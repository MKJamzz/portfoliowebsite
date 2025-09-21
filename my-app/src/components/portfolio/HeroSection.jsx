import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
            MW
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight animated-gradient-text">
            Michael Whiteman
          </h1>
          
          <h2 className="text-xl md:text-2xl text-[var(--text-muted)] mb-8 font-light">
            Computer Engineering Student & Software Developer
          </h2>
          
          <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing Computer Engineering 
            at University of Waterloo with hands-on experience in software development, game design, and hardware projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[var(--primary)] hover:opacity-90 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-300 text-[var(--text-dark)] hover:bg-slate-50 px-8 py-3 text-lg font-medium"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400 hover:text-[var(--primary)] transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}