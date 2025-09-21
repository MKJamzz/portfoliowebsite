
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mjwhitem@uwaterloo.ca",
      link: "mailto:mjwhitem@uwaterloo.ca",
      color: "bg-red-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "michael-j-whiteman",
      link: "https://linkedin.com/in/michael-j-whiteman/",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "MKJamzz",
      link: "https://github.com/MKJamzz",
      color: "bg-gray-800"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Waterloo, Ontario",
      link: null,
      color: "bg-green-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[var(--text-dark)] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-[var(--primary)] mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and connecting 
            with fellow engineers and developers. Let's build something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${method.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">{method.title}</h3>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-slate-300 text-sm">{method.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
              <p className="text-purple-100 mb-6 leading-relaxed">
                Whether you're looking to hire, collaborate on a project, or just want to chat about technology, 
                I'd love to hear from you. Send me an email or connect with me on LinkedIn!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-[var(--text-dark)] hover:bg-slate-100 font-medium px-8 py-3"
                  onClick={() => window.open("mailto:mjwhitem@uwaterloo.ca")}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-[var(--text-dark)] font-medium px-8 py-3"
                  onClick={() => window.open("https://linkedin.com/in/michael-j-whiteman/", "_blank")}
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-gray-800">
          <p className="text-slate-400">
            © 2024 Michael Whiteman. Built with passion and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}
