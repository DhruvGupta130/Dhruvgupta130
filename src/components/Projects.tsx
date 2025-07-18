import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Github, Code2} from "lucide-react";

import ecommerceImg from "@/assets/ecommerce-project.jpg";
import bankingImg from "@/assets/banking-project.jpg";
import taskManagementImg from "@/assets/task-management-project.jpg";
import chatImg from "@/assets/chat-project.jpg";
import studentPortalImg from "@/assets/student-portal-project.jpg";

const projects = [
    {
        title: "TaskPulse – Distributed Task Management",
        description:
            "A production-grade task management system using microservices, Kafka, and Spring Boot. Real-time updates via WebSockets and horizontal scalability with Redis and Docker.",
        image: taskManagementImg,
        tech: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Spring Cloud",
            "Kafka",
            "PostgreSQL",
            "Redis",
            "WebSocket",
            "Docker",
            "Docker Compose",
        ],
        github: "https://github.com/DhruvGupta130/TaskManagementSystem",
        category: "Microservices",
        year: "2025"
    },
    {
        title: "Ayumed – Hospital & Pharmacy System",
        description:
            "A full-featured hospital and pharmacy management system for appointments, prescriptions, and real-time inventory. Includes OTP/email login, Apache POI Excel tools, and Google Maps integration.",
        image: ecommerceImg,
        tech: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "MySQL",
            "JWT",
            "JPA",
            "Apache POI",
            "SMTP (Brevo)",
            "Google Maps API",
            "Local Storage Server",
        ],
        github: "https://github.com/DhruvGupta130/HospitalManagementSystem",
        category: "Healthcare",
        year: "2024"
    },
    {
        title: "Real-time Chat Application",
        description:
            "Real-time messaging app with group chat, file sharing, and offline support using Socket.io and Node.js. Built with a responsive React UI and MongoDB backend.",
        image: chatImg,
        tech: [
            "Java",
            "Spring Boot",
            "WebSockets",
            "JPA",
            "Maven",
            "Docker",
            "Docker Compose",
            "React.js",
            "PostgreSQL",
            "REST API"
        ],
        github: "https://github.com/DhruvGupta130/ChatApp",
        category: "Real-time",
        year: "2023"
    },
    {
        title: "Food Ordering System",
        description:
            "An end-to-end food delivery system featuring restaurant menus, orders, role-based access, and cart tracking. Uses Spring Boot for backend and React.js for UI.",
        image: ecommerceImg,
        tech: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "React.js",
            "Redux",
            "JWT",
            "MySQL",
            "JPA",
            "Cloudinary",
            "Maven"
        ],
        github: "https://github.com/DhruvGupta130/FoodOrderingSystem",
        category: "Enterprise",
        year: "2023"
    },
    {
        title: "Hotel Management System",
        description:
            "A web-based hotel platform for managing bookings, guests, and staff with a dashboard interface. Implements Spring MVC with Thymeleaf templates and MySQL.",
        image: bankingImg,
        tech: [
            "Java",
            "Spring Boot",
            "SMTP (Brevo)",
            "MySQL",
            "React.js",
            "Node.js",
            "JPA",
            "Maven",
            "Local Storage Server",
            "Axios"
        ],
        github: "https://github.com/DhruvGupta130/HotelManagementSystem",
        category: "Enterprise",
        year: "2023"
    },
    {
        title: "Video Streaming Portal",
        description:
            "A secure, scalable video streaming portal for uploading and watching video content. Built with Spring Boot and React.js, supports file uploads and playback.",
        image: studentPortalImg,
        tech: [
            "Spring Boot",
            "Spring MVC",
            "MySQL",
            "Thymeleaf",
            "JWT",
            "HTML",
            "CSS",
            "FFmpeg",
            "Local Storage Server",
            "Maven"
        ],
        github: "https://github.com/DhruvGupta130/VideoStream",
        category: "Media",
        year: "2022"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Featured</span>{" "}
                        <span className="text-premium">Projects</span>
                    </h2>
                    <p className="text-lg text-subtle max-w-2xl mx-auto">
                        Showcasing my expertise through real-world applications and innovative solutions
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="glass hover-lift group overflow-hidden flex flex-col"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>

                                {/* Category Badge */}
                                <Badge className="absolute top-4 left-4 bg-gradient-primary text-background">
                                    {project.category}
                                </Badge>

                                {/* Year Badge */}
                                <Badge className="absolute top-4 right-4 bg-gradient-accent text-background">
                                    {project.year}
                                </Badge>

                                {/* GitHub Hover Icon Only */}
                                <div
                                    className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Button
                                        size="sm"
                                        className="bg-background/20 backdrop-blur-sm hover:bg-primary/20 border border-primary/50"
                                        asChild
                                    >
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4"/>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-bold text-premium mb-3 group-hover:gradient-text transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-secondary text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="glass text-xs hover:bg-primary/20 transition-colors cursor-pointer"
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
                                        className="glass border-primary/50 hover:bg-primary/10 hover:border-primary group"
                                        asChild
                                    >
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Code2 className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform"/>
                                            View Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* GitHub CTA Button */}
                <div className="text-center mt-12">
                    <Button
                        size="lg"
                        variant="outline"
                        className="glass border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow group"
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