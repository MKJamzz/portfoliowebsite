import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import FuzzyText from "./FuzzyText";
import DecryptedText from "./DecryptedText";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image */}
          <div className="w-40 h-40 mx-auto mb-12 rounded-full overflow-hidden shadow-2xl border-4 border-slate-100">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cd5005490ad54dbd3afe4a/7442acfd2_IMG_3276.jpg" 
              alt="Michael Whiteman"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="mb-8">
            <FuzzyText 
              fontSize="clamp(3rem, 12vw, 8rem)"
              fontWeight={900}
              color="var(--text-dark)"
              baseIntensity={0.15}
              hoverIntensity={0.6}
            >
              Michael Whiteman
            </FuzzyText>
          </div>
          
          <div className="mb-8">
            <DecryptedText
              text="Computer Engineering Student & Software Developer"
              className="text-xl md:text-2xl font-light text-[var(--text-muted)]"
              speed={30}
              maxIterations={15}
              animateOn="view"
            />
          </div>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <DecryptedText
              text="Passionate about creating innovative solutions through code. Currently pursuing Computer Engineering at University of Waterloo with hands-on experience in software development, game design, and hardware projects."
              className="text-lg text-slate-600 leading-relaxed"
              speed={20}
              maxIterations={8}
              sequential={false}
              animateOn="view"
            />
          </div>
          
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