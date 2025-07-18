import { Heart, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/DhruvGupta130",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dhruvgupta130/",
      label: "LinkedIn"
    },
    {
      icon: ExternalLink,
      url: "https://dhruv-gupta-portfolio.netlify.app/",
      label: "Portfolio"
    },
    {
      icon: Mail,
      url: "mailto:dhruv.gupta@example.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
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
    <footer className="relative py-16 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-background opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold gradient-text mb-4">Dhruv Gupta</h3>
            <p className="text-secondary text-lg mb-6 max-w-md">
              Full-Stack Java Developer passionate about creating scalable solutions 
              and innovative web applications. Always ready for the next challenge.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass hover:bg-primary/20 hover:shadow-glow transition-all duration-300 hover-lift rounded-full group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-text-secondary group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-premium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-secondary hover:text-primary transition-colors duration-300 cursor-pointer hover:translate-x-2 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-premium mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="text-secondary">
                <p className="text-sm">Email</p>
                <a 
                  href="mailto:dhruv.gupta@example.com"
                  className="hover:text-primary transition-colors"
                >
                  dhruv.gupta@example.com
                </a>
              </div>
              <div className="text-secondary">
                <p className="text-sm">Location</p>
                <p>Ranchi, Jharkhand, India</p>
              </div>
              <div className="text-secondary">
                <p className="text-sm">Education</p>
                <p className="text-sm">IIIT Ranchi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-secondary">
              <span>© {currentYear} Dhruv Gupta. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="text-secondary text-sm">
              <span>Built with React.js • Spring Boot • Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => scrollToSection("#home")}
          className="absolute -top-6 right-6 p-3 bg-gradient-primary rounded-full shadow-glow hover:shadow-premium hover:scale-110 transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <svg 
            className="h-5 w-5 text-background group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};