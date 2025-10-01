import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Code2 } from "lucide-react";

import ayumed from "@/assets/ayumed.png";
import ecommerceImg from "@/assets/ecom.png";
import bankingImg from "@/assets/banking-project.jpg";
import workStreamImg from "@/assets/workstream.png";
import chatImg from "@/assets/chat-project.jpg";
import studentPortalImg from "@/assets/student-portal-project.jpg";

const projects = [
  {
    title: "WorkStream – Event-Driven Microservices Platform",
    description: [
      "Built with Java 21, Spring Boot 3, Kafka, Redis, Docker, and PostgreSQL.",
      "Implements event-driven task orchestration with Kafka-based notifications.",
      "Supports role-based access with OAuth2 + Redis refresh token flow.",
      "Real-time WebSocket updates for managers and workers.",
      "Service discovery and load balancing via Spring Cloud + Eureka.",
      "Horizontal scalability enabled through Docker Compose setup.",
      "Fault tolerance with Resilience4j retries and per-service databases."
    ],
    image: workStreamImg,
    tech: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Redis", "Docker", "Eureka", "WebSocket"],
    github: "https://github.com/dhruv-xyz/WorkStream",
    category: "Microservices",
    year: "2025"
  },
  {
    title: "Ayumed – Hospital & Pharmacy System",
    description: [
      "Comprehensive hospital and pharmacy management system.",
      "Supports appointments, prescriptions, inventory tracking, and billing.",
      "Implemented OTP/email-based login with Brevo SMTP integration.",
      "Excel report generation using Apache POI for admins and doctors.",
      "Google Maps API integration for location-aware services.",
      "Secure authentication & multi-role access using JWT and Spring Security.",
      "Optimized SQL queries for large patient and prescription data sets."
    ],
    image: ayumed,
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "JPA", "Apache POI", "SMTP (Brevo)", "Google Maps API"],
    github: "https://github.com/DhruvGupta130/HospitalManagementSystem",
    category: "Healthcare",
    year: "2024"
  },
  {
    title: "Real-time Chat Application",
    description: [
      "Cross-platform messaging application with group chat support.",
      "Integrated file sharing and offline message persistence.",
      "Low-latency WebSocket communication using Spring Boot + Node.js.",
      "Asynchronous handling with Spring WebFlux to boost concurrency.",
      "Responsive React.js frontend optimized for mobile and desktop.",
      "Message storage and history powered by PostgreSQL database.",
      "Deployed with Docker Compose for containerized scalability."
    ],
    image: chatImg,
    tech: ["Java", "Spring Boot", "WebSockets", "PostgreSQL", "React.js", "Node.js", "Docker"],
    github: "https://github.com/DhruvGupta130/ChatApp",
    category: "Real-time",
    year: "2023"
  },
  {
    title: "Food Ordering System",
    description: [
      "End-to-end food delivery platform for restaurants and customers.",
      "Role-based access for admins, restaurant managers, and customers.",
      "Cart tracking, order placement, and payment workflows integrated.",
      "Spring Boot REST APIs powering ordering and menu services.",
      "React.js + Redux frontend for seamless cart and order updates.",
      "JWT authentication with Spring Security.",
      "Image and menu assets hosted via Cloudinary."
    ],
    image: ecommerceImg,
    tech: ["Java", "Spring Boot", "Spring Security", "React.js", "Redux", "JWT", "MySQL", "Cloudinary"],
    github: "https://github.com/DhruvGupta130/FoodOrderingSystem",
    category: "Enterprise",
    year: "2023"
  },
  {
    title: "Hotel Management System",
    description: [
      "Web-based system for managing hotel bookings, guests, and staff.",
      "Interactive dashboard with role-based access for admins and staff.",
      "Spring MVC + Thymeleaf templates for backend-rendered UI.",
      "Booking confirmation emails automated via Brevo SMTP.",
      "Optimized MySQL queries for guest, room, and staff management.",
      "Integrated React.js for some interactive components.",
      "Deployment-ready with Maven build and local storage support."
    ],
    image: bankingImg,
    tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "SMTP (Brevo)", "React.js", "Axios"],
    github: "https://github.com/DhruvGupta130/HotelManagementSystem",
    category: "Enterprise",
    year: "2023"
  },
  {
    title: "Video Streaming Portal",
    description: [
      "Scalable platform for uploading and streaming video content.",
      "Integrated FFmpeg for video transcoding and playback support.",
      "Spring Boot backend with JWT-based secure access control.",
      "Thymeleaf templates used for frontend rendering.",
      "MySQL used for storing user accounts and video metadata.",
      "Local Storage Server for handling large file uploads.",
      "Improved streaming performance with optimized FFmpeg pipelines."
    ],
    image: studentPortalImg,
    tech: ["Java", "Spring Boot", "Spring MVC", "MySQL", "Thymeleaf", "JWT", "FFmpeg"],
    github: "https://github.com/DhruvGupta130/VideoStream",
    category: "Media",
    year: "2022"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 relative bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured</span>{" "}
            <span className="text-premium">Projects</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Showcasing production-grade systems, real-time applications, and scalable solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass hover-lift group overflow-hidden flex flex-col bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/60 to-transparent opacity-70 group-hover:opacity-90 transition duration-500" />

                {/* Category / Year */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-gradient-primary text-background shadow-md px-3 py-1 rounded-full text-xs">
                    {project.category}
                  </Badge>
                  <Badge className="bg-gradient-accent text-background shadow-md px-3 py-1 rounded-full text-xs">
                    {project.year}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-bold text-premium mb-4 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Bullet Points */}
                <ul className="text-sm text-gray-400 mb-6 space-y-2">
                  {project.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 mt-1 mr-2 rounded-full bg-primary/70"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="glass text-xs px-3 py-1 rounded-full border border-gray-700 hover:bg-primary/20 transition-all cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Button */}
                <div className="flex justify-center mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border border-primary/40 hover:bg-primary/10 hover:border-primary transition-all duration-300 rounded-full px-4"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Code2 className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="glass border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow group rounded-full px-6 py-3 text-lg"
            asChild
          >
            <a href="https://github.com/DhruvGupta130" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};