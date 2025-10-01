import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BREVO_API_KEY } from "@/config.ts";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "dhruvgupta130@gmail.com",
    href: "mailto:dhruvgupta130@gmail.com",
    color: "primary",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Jhansi, Uttar Pradesh, India",
    href: "#",
    color: "primary",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/DhruvGupta130",
    color: "primary",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dhruvgupta130/",
    color: "accent",
  },
  {
    icon: ExternalLink,
    name: "Portfolio",
    url: "https://dhruv-gupta-portfolio.netlify.app/",
    color: "primary",
  },
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const emailData = {
      sender: { name: formData.name, email: formData.email },
      to: [{ email: "dhruvgupta130@gmail.com", name: "Dhruv Gupta" }],
      subject: formData.subject,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; font-size: 15px; color: #333;">
          <h2 style="margin-bottom: 0;">📩 New Contact Message</h2>
          <hr style="margin: 10px 0;" />
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <hr style="margin: 20px 0;" />
          <p style="white-space: pre-line;">${formData.message}</p>
        </div>
      `,
    };

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
          Accept: "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        toast({
          title: "✅ Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "⚠️ Error",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "⚠️ Network Error",
        description: "Unable to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-premium">Get In</span>{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let’s connect and make it happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass p-8 hover-lift h-full">
            <h3 className="text-2xl font-bold text-premium mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-subtle mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="glass border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-subtle mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="glass border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-subtle mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/40"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-subtle mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/40 resize-none"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-background mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-premium mb-6">Contact Information</h3>
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass p-6 hover-lift group cursor-pointer">
                  <a href={info.href} className="flex items-center space-x-4">
                    <div
                      className={`p-3 bg-gradient-${info.color} rounded-full group-hover:scale-110 transition-transform`}
                    >
                      <info.icon className="h-6 w-6 text-background" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-premium">{info.title}</h4>
                      <p className="text-secondary">{info.value}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold text-premium mb-6">Connect With Me</h3>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <Card
                    key={index}
                    className="glass p-4 hover-lift group transition-all duration-300 border border-gray-800 hover:border-primary/40"
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 bg-gradient-${social.color} rounded-lg group-hover:scale-110 transition-transform`}
                        >
                          <social.icon className="h-5 w-5 text-background" />
                        </div>
                        <span className="font-medium text-premium">{social.name}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-subtle group-hover:text-primary group-hover:scale-110 transition-all" />
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <Card className="glass p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h4 className="text-xl font-bold text-premium mb-2">📅 Ready to Start?</h4>
              <p className="text-secondary mb-4">
                Let’s discuss how I can bring your vision to life with modern web technologies.
              </p>
              <Button
                variant="outline"
                className="glass border-primary/50 hover:bg-primary/10 hover:border-primary group"
                asChild
              >
                <a href="mailto:dhruvgupta130@gmail.com?subject=Collaboration Opportunity">
                  <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Start Conversation
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};