import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

import javaIcon from "@/assets/java-icon.jpg";
import reactIcon from "@/assets/react-icon.jpg";
import springIcon from "@/assets/spring-icon.jpg";

const skillCategories = [
    {
        title: "Backend Engineering & Architecture",
        icon: javaIcon,
        color: "primary",
        description: "Building scalable backend systems with focus on clean architecture, performance, and real-world production use cases.",
        skills: [
            "Java", "Spring Boot", "REST APIs", "Microservices",
            "System Design (LLD + Basics of HLD)",
            "Kafka (Event-Driven Systems)", "Redis (Caching)",
            "RBAC (Zanzibar-inspired)", "Concurrency Basics"
        ]
    },
    {
        title: "Database & Data Layer",
        icon: springIcon,
        color: "accent",
        description: "Designing efficient data models and optimizing queries for performance and scalability.",
        skills: [
            "PostgreSQL", "MySQL", "Redis",
            "Database Indexing", "Query Optimization",
            "Schema Design", "Transaction Management",
            "JPA/Hibernate"
        ]
    },
    {
        title: "Infrastructure & DevOps (Working Knowledge)",
        icon: springIcon,
        color: "primary",
        description: "Experience with containerization and basic cloud deployment workflows.",
        skills: [
            "Docker", "GitHub Actions (CI/CD Basics)",
            "Linux", "AWS (EC2, S3 - Basics)", "Git"
        ]
    },
    {
        title: "Testing & Reliability",
        icon: springIcon,
        color: "accent",
        description: "Writing reliable backend systems with proper testing and failure handling.",
        skills: [
            "JUnit", "Mockito", "Integration Testing",
            "Testcontainers (Basic)",
            "Resilience Patterns (Retry, Timeout - Conceptual)"
        ]
    },
    {
        title: "Frontend (Supporting Skills)",
        icon: reactIcon,
        color: "primary",
        description: "Comfortable building frontend interfaces when needed.",
        skills: [
            "React.js", "TypeScript", "Redux Toolkit",
            "Tailwind CSS", "WebSockets (Usage)"
        ]
    },
    {
        title: "Developer Tools",
        icon: reactIcon,
        color: "accent",
        description: "Tools used for development, debugging, and productivity.",
        skills: [
            "Git", "Postman", "Maven/Gradle",
            "Basic Node.js", "Basic Python"
        ]
    }
];

const stats = [
    {skill: "Backend Engineering (Java + Spring Boot)", level: 95, color: "primary"},
    {skill: "API Design & Microservices", level: 92, color: "accent"},
    {skill: "Distributed Systems (Kafka, Redis)", level: 88, color: "primary"},
    {skill: "Database Design & Optimization", level: 90, color: "accent"}
];

export const Skills = () => {
    const getGradientClass = (color: string) => {
        return color === "primary"
            ? "bg-gradient-to-r from-indigo-500/80 to-blue-500/80 text-white shadow-[0_0_10px_rgba(99,102,241,0.4)]"
            : "bg-gradient-to-r from-pink-500/80 to-purple-500/80 text-white shadow-[0_0_10px_rgba(236,72,153,0.4)]";
    };

    return (
        <section id="skills" className="py-20 relative bg-gray-950 text-gray-100 overflow-hidden">
            {/* Background Decorative Elements */}
            <div
                className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"/>
            <div
                className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse"
                style={{animationDelay: '2s'}}/>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        <span className="text-premium">Engineered</span>{" "}
                        <span className="gradient-text">Competencies</span>
                    </h2>
                    <p className="text-xl text-subtle max-w-3xl mx-auto font-light leading-relaxed">
                        A comprehensive suite of <span
                        className="text-primary font-bold">production-hardened</span> technical skills, focused on
                        architectural integrity, system resilience, and high-performance execution.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-10 mb-20">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="glass hover-lift p-8 group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                        >
                            {/* Background Overlay */}
                            <div className="absolute inset-0 opacity-5">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{backgroundImage: `url(${category.icon})`}}
                                />
                            </div>

                            <div className="relative z-10">
                                {/* Header */}
                                <div className="flex items-center mb-6">
                                    <div
                                        className={`p-3 ${getGradientClass(
                                            category.color
                                        )} rounded-xl mr-4 shadow-md transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <div
                                            className="w-8 h-8 bg-cover bg-center rounded"
                                            style={{backgroundImage: `url(${category.icon})`}}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-premium">{category.title}</h3>
                                        <p className="text-subtle text-sm">{category.description}</p>
                                    </div>
                                </div>

                                {/* Skills Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className={`
                            glass-premium border border-white/5 text-gray-400
                            bg-white/5 text-[10px] font-bold uppercase tracking-widest
                            hover:border-primary/50 hover:text-primary 
                            hover:bg-primary/5 transition-all duration-300 
                            hover:scale-105 cursor-default py-1.5 px-3
                        `}
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Proficiency Levels */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {stats.map((item, index) => (
                        <Card
                            key={index}
                            className="glass p-8 hover-lift bg-gray-900 border border-gray-800 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
                        >
                            <h4 className="font-semibold text-premium mb-6">{item.skill}</h4>

                            {/* Progress Circle */}
                            <div className="relative w-28 h-28 mx-auto mb-4">
                                <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 36 36">
                                    {/* Background track */}
                                    <path
                                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                        fill="none"
                                        stroke="hsl(var(--muted))"
                                        strokeWidth="2.5"
                                    />
                                    {/* Animated stroke */}
                                    <path
                                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                        fill="none"
                                        stroke={`url(#grad-${index})`}
                                        strokeWidth="2.5"
                                        strokeDasharray={`${item.level}, 100`}
                                        className="transition-all duration-1000 ease-out drop-shadow-lg"
                                    />
                                    {/* Gradient definition */}
                                    <defs>
                                        <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                            {item.color === "primary" ? (
                                                <>
                                                    <stop offset="0%" stopColor="#6366F1"/>
                                                    {/* indigo-500 */}
                                                    <stop offset="100%" stopColor="#3B82F6"/>
                                                    {/* blue-500 */}
                                                </>
                                            ) : (
                                                <>
                                                    <stop offset="0%" stopColor="#EC4899"/>
                                                    {/* pink-500 */}
                                                    <stop offset="100%" stopColor="#8B5CF6"/>
                                                    {/* purple-500 */}
                                                </>
                                            )}
                                        </linearGradient>
                                    </defs>
                                </svg>

                                {/* Percentage */}
                                <div className="absolute inset-0 flex items-center justify-center">
                <span
                    className={`text-2xl font-extrabold ${
                        item.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                >
                    {item.level}%
                </span>
                                </div>
                            </div>

                            {/* Optional label */}
                            <p className="text-subtle text-sm">
                                {item.level >= 90
                                    ? "Expert"
                                    : item.level >= 80
                                        ? "Advanced"
                                        : "Intermediate"}
                            </p>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};