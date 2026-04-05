import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Github, Code2} from "lucide-react";

import ayumed from "@/assets/ayumed.png";
import theguptasImg from "@/assets/the-guptas.png";
import workStreamImg from "@/assets/workstream.png";
import chatImg from "@/assets/chatapp.png";
import videoStream from "@/assets/videostream.png"
import myHotel from "@/assets/my-hotel.png"

const projects = [
    {
        title: "WorkStream – Event-Driven Microservices",
        description: [
            "Engineered an asynchronous event-driven architecture handling 10k+ requests/day using Kafka for reliable service orchestration.",
            "Optimized real-time task synchronization via STOMP/WebSockets, achieving sub-100ms latency for 1k+ concurrent users.",
            "Architected a secure RBAC ecosystem with OAuth2 and Redis-backed session management for enterprise-grade security.",
            "Implemented advanced fault tolerance using Resilience4j (Circuit Breaker, Rate Limiter) and distributed tracing with Zipkin.",
            "Containerized entire microservices stack with Docker Compose for consistent, scalable deployment."
        ],
        image: workStreamImg,
        tech: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "PostgreSQL", "Redis", "Docker", "Eureka", "WebSocket"],
        github: "https://github.com/dhruv-xyz/WorkStream",
        category: "Microservices",
        year: "2025",
        metrics: "Event-Driven"
    },
    {
        title: "AyuMed – Hospital Management System",
        description: [
            "Architected a comprehensive hospital management system emphasizing 99.9% uptime for critical medical workflows.",
            "Optimized complex PostgreSQL schemas and indexing strategies, resulting in a 40% reduction in query execution time.",
            "Engineered a multi-tenant RBAC system with JWT for granular access control across Admins, Doctors, and Patients.",
            "Automated critical healthcare workflows including OTP-based authentication and intelligent appointment scheduling.",
            "Integrated third-party communication layers (Brevo SMTP) for real-time patient alerts and reporting."
        ],
        image: ayumed,
        tech: ["Java", "Spring Boot", "Spring Security", "MySQL", "JWT", "JPA", "Apache POI", "SMTP (Brevo)", "Google Maps API"],
        github: "https://github.com/DhruvGupta130/HospitalManagementSystem",
        category: "Healthcare",
        year: "2024",
        metrics: "99.9% Uptime Path"
    },
    {
        title: "ChatApp – Real-time Messaging Mesh",
        description: [
            "Developed a high-concurrency messaging engine using Spring WebFlux for non-blocking I/O operations.",
            "Orchestrated a polyglot communication bridge between Spring Boot (Java) and Node.js for optimized throughput.",
            "Implemented a robust message persistence layer with PostgreSQL and Redis for instant delivery and history retrieval.",
            "Built a highly responsive React.js frontend with Redux Toolkit for real-time state synchronization.",
            "Streamlined CI/CD and deployment using Docker, ensuring environment parity across the development lifecycle."
        ],
        image: chatImg,
        tech: ["Java", "Spring Boot", "WebSockets", "PostgreSQL", "React.js", "Node.js", "Docker"],
        github: "https://github.com/DhruvGupta130/ChatApp",
        category: "Real-time",
        year: "2023",
        metrics: "Low Latency"
    },
    {
        title: "The Gupta's – Food Ordering System",
        description: [
            "Engineered an end-to-end food delivery ecosystem with high-availability RESTful APIs and secure workflows.",
            "Implemented a granular RBAC system for diverse user personas (Admin, Manager, Customer) with Spring Security.",
            "Architected real-time order tracking and state-driven payment pipelines for a seamless user experience.",
            "Optimized menu discovery and cart management using high-performance MySQL queries and caching.",
            "Integrated Cloudinary for optimized media delivery and JWT for stateless, secure session management."
        ],
        image: theguptasImg,
        tech: ["Java", "Spring Boot", "Spring Security", "React.js", "Redux", "JWT", "MySQL", "Cloudinary"],
        github: "https://github.com/DhruvGupta130/FoodOrderingSystem",
        category: "E-Commerce",
        year: "2023",
        metrics: "Scalable API"
    },
    {
        title: "My Hotel – Hotel Management System",
        description: [
            "Developed a robust resource management system for high-volume hotel operations and guest interactions.",
            "Engineered an automated notification engine using Brevo SMTP for real-time booking lifecycle events.",
            "Designed a high-performance database schema for guest, room, and staff management with complex joins.",
            "Built an interactive dashboard for operational analytics and role-based administrative control.",
            "Leveraged Spring MVC and Thymeleaf for SEO-friendly, server-side rendered dynamic interfaces."
        ],
        image: myHotel,
        tech: ["Java", "Spring Boot", "Thymeleaf", "MySQL", "SMTP (Brevo)", "React.js", "Axios"],
        github: "https://github.com/DhruvGupta130/HotelManagementSystem",
        category: "Enterprise",
        year: "2023",
        metrics: "Workflow Automation"
    },
    {
        title: "VideoStream – Media Streaming Hub",
        description: [
            "Architected a scalable video streaming platform with efficient media ingestion and delivery pipelines.",
            "Integrated FFmpeg-driven transcoding engines for optimized multi-bitrate playback and low buffering.",
            "Implemented secure, JWT-based content access control and user metadata management.",
            "Engineered a high-performance local storage strategy for handling large-scale binary video data.",
            "Built a responsive server-rendered UI using Thymeleaf for optimized content discovery."
        ],
        image: videoStream,
        tech: ["Java", "Spring Boot", "Spring MVC", "MySQL", "Thymeleaf", "JWT", "FFmpeg"],
        github: "https://github.com/DhruvGupta130/VideoStream",
        category: "Media",
        year: "2022",
        metrics: "Low-Buffering"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 relative bg-gray-950 text-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        <span className="gradient-text">Featured</span>{" "}
                        <span className="text-premium">Projects</span>
                    </h2>
                    <p className="text-xl text-subtle max-w-3xl mx-auto font-light leading-relaxed">
                        Showcasing production-grade systems, real-time applications, and scalable solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 perspective-1000">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="glass-premium hover-premium group overflow-hidden flex flex-col bg-gray-900/50 border border-white/5 rounded-[32px] shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-700"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-56 md:h-64 lg:h-80 m-3 rounded-[24px]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition duration-500"/>

                                {/* Category / Year */}
                                <div className="absolute top-4 left-4 flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <Badge
                                            className="bg-primary/90 text-background backdrop-blur-md shadow-lg px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border-none">
                                            {project.category}
                                        </Badge>
                                        <Badge
                                            className="bg-gray-950/80 backdrop-blur-md text-gray-300 border border-white/10 shadow-md px-3 py-1 rounded-full text-[10px] font-bold">
                                            {project.year}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Metrics Badge - Floating */}
                                {project.metrics && (
                                    <div className="absolute bottom-4 right-4">
                                        <div
                                            className="bg-accent/90 backdrop-blur-xl text-white shadow-[0_0_20px_rgba(var(--accent),0.3)] px-4 py-1.5 rounded-2xl text-[11px] font-black uppercase tracking-tighter animate-pulse border border-white/20">
                                            {project.metrics}
                                        </div>
                                    </div>
                                )}

                                {/* Animated Gradient Overlay on Hover */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>
                            </div>

                            {/* Project Content */}
                            <div className="p-7 flex flex-col h-full relative">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-black text-premium leading-tight group-hover:gradient-text transition-all duration-300">
                                        {project.title}
                                    </h3>
                                </div>

                                {/* Bullet Points */}
                                <ul className="text-sm text-gray-400 mb-6 space-y-3.5 flex-grow">
                                    {project.description.map((point, i) => (
                                        <li key={i} className="flex items-start group/item">
                                            <div className="relative flex items-center justify-center mt-1.5 mr-3">
                                                <span
                                                    className="absolute w-2 h-2 rounded-full bg-primary/20 animate-ping"></span>
                                                <span
                                                    className="relative w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-all"></span>
                                            </div>
                                            <span
                                                className="group-hover/item:text-gray-200 transition-colors leading-relaxed">
                        {point}
                      </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-8">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-[9px] font-extrabold px-2.5 py-1 rounded-lg bg-white/5 text-gray-400 border border-white/5 group-hover:border-primary/20 group-hover:text-primary/90 transition-all cursor-default uppercase tracking-tight"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                                    <Button
                                        variant="link"
                                        size="sm"
                                        className="text-primary hover:text-accent p-0 h-auto font-bold flex items-center group/link"
                                        asChild
                                    >
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Code2
                                                className="h-4 w-4 mr-2 group-hover/link:-rotate-12 transition-transform"/>
                                            Explore Source
                                        </a>
                                    </Button>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/50 transition-all group/gh"
                                    >
                                        <Github className="h-4 w-4 text-gray-400 group-hover/gh:text-primary"/>
                                    </a>
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
                            <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform"/>
                            View All Projects on GitHub
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};