import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";
import FuzzyImage from "../FuzzyImage";
import FuzzyText from "./FuzzyText";
import DecryptedText from "./DecryptedText";
import Dither from "./Dither"; // adjust path if needed

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >


      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image with fuzzy effect */}
          <div className="mx-auto mb-12">
            <FuzzyImage
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cd5005490ad54dbd3afe4a/7442acfd2_IMG_3276.jpg"
                alt="Michael Whiteman"
                size={160}
                shape="circle"
                baseIntensity={0.3}
                hoverIntensity={1}
                className="mx-auto mb-12 shadow-2xl border-4 border-slate-100"
              />

          </div>

          {/* Name */}
          <div className="mb-2 w-full text-center">
            <h1 className="font-tech text-[clamp(2.5rem,8vw,6rem)] font-extrabold text-[#c2a1ff] text-outline">
              Michael Whiteman
            </h1>
          </div>



          {/* Subtitle */}
          <div className="mb-4 flex justify-center">
            <h2 className="text-[clamp(1rem,3vw,2rem)] font-semibold text-[#c2a1ff] text-outline">
              Computer Engineering Student & Software Developer
            </h2>
          </div>




          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[var(--primary)] hover:opacity-90 text-white px-8 py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
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

     
    </section>
  );
}
