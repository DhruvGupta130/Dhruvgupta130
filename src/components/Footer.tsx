import { RESUME_URL } from "@/config.ts";
import { Heart, Github, Linkedin, Mail, ExternalLink, FileText, ArrowUp, Terminal, Shield, Cpu } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dhruvgupta130/",
      label: "LinkedIn",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: Github,
      url: "https://github.com/DhruvGupta130",
      label: "GitHub",
      color: "hover:text-[#333]"
    },
    {
      icon: Mail,
      url: "mailto:dhruvgupta130@gmail.com",
      label: "Email",
      color: "hover:text-primary"
    },
    {
      icon: FileText,
      url: RESUME_URL,
      label: "Resume",
      color: "hover:text-accent"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand & Mission Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                    <span className="text-primary font-black tracking-widest text-xs uppercase">Engineering Philosophy</span>
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-white">
                    Architecting the <span className="text-primary">Next Generation</span> of Backend Systems.
                </h3>
                <p className="text-secondary text-lg leading-relaxed max-w-md">
                    Focused on high-scale distributed systems, microservices resiliency, and production-grade engineering at ACKO.
                </p>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 glass-premium rounded-2xl transition-all duration-300 hover:-translate-y-2 group ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-black tracking-tight text-xl">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-secondary hover:text-primary font-bold transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specs / Status */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-premium p-8 rounded-3xl border border-white/5 space-y-6">
                <h4 className="text-white font-black tracking-tight text-xl flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-primary" />
                    System Status
                </h4>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Current Role</p>
                        <p className="text-white font-bold text-sm flex items-center gap-2">
                            <Shield className="h-3 w-3 text-green-500" />
                            SDE Intern @ ACKO
                        </p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Tech Stack</p>
                        <p className="text-white font-bold text-sm flex items-center gap-2">
                            <Cpu className="h-3 w-3 text-primary" />
                            Java / Spring / Kafka
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-white/5">
                    <a 
                        href="mailto:dhruvgupta130@gmail.com"
                        className="text-primary hover:text-white font-black tracking-tight transition-colors flex items-center gap-2"
                    >
                        dhruvgupta130@gmail.com
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-2 text-white font-black tracking-tight text-lg">
                    <span>© {currentYear}</span>
                    <span className="text-primary">DHRUV GUPTA</span>
                </div>
                <div className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase">
                    Made with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> for the ecosystem
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-secondary font-black">Architecture</p>
                    <p className="text-white font-bold text-sm italic">Scalability by Design</p>
                </div>
                <button
                    onClick={() => scrollToSection("#home")}
                    className="p-4 glass-premium rounded-2xl hover:bg-primary/20 transition-all duration-500 group relative"
                    aria-label="Scroll to top"
                >
                    <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <ArrowUp className="relative h-6 w-6 text-white transition-transform group-hover:-translate-y-1" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};