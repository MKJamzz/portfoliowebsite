import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import DecryptedText from "./DecryptedText";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mjwhitem@uwaterloo.ca",
      link: "mailto:mjwhitem@uwaterloo.ca",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "michael-j-whiteman",
      link: "https://linkedin.com/in/michael-j-whiteman/",
    },
    {
      icon: Github,
      title: "GitHub", 
      value: "MKJamzz",
      link: "https://github.com/MKJamzz",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Waterloo, Ontario",
      link: null,
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <DecryptedText
            text="I'm always interested in new opportunities, collaborations, and connecting with fellow engineers and developers. Let's build something amazing together!"
            className="text-xl text-slate-500 max-w-3xl mx-auto"
            speed={20}
            maxIterations={10}
            animateOn="view"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a href={method.link} target="_blank" rel="noopener noreferrer" className="block">
              <Card key={index} className="border-slate-200 h-full hover:border-[var(--primary)] transition-all duration-300 star-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-[var(--primary)]" />
                  </div>
                  <h3 className="font-semibold text-[var(--text-dark)] mb-2">{method.title}</h3>
                  <p className="text-slate-500 hover:text-[var(--primary)] transition-colors text-sm break-all">
                      {method.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-slate-200 star-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">Ready to Connect?</h3>
              <DecryptedText
                text="Whether you're looking to hire, collaborate on a project, or just want to chat about technology, I'd love to hear from you. Send me an email or connect with me on LinkedIn!"
                className="text-slate-600 mb-6 leading-relaxed"
                speed={15}
                maxIterations={8}
                animateOn="view"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild
                  className="bg-[var(--primary)] text-white hover:opacity-90 font-medium"
                  size="lg"
                >
                  <a href="mailto:mjwhitem@uwaterloo.ca">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://linkedin.com/in/michael-j-whiteman/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-200">
          <p className="text-slate-400">
            © 2024 Michael Whiteman. Built with passion and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}