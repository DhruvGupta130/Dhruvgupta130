import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import javaIcon from "@/assets/java-icon.jpg";
import reactIcon from "@/assets/react-icon.jpg";
import springIcon from "@/assets/spring-icon.jpg";

const skillCategories = [
    {
        title: "Backend Engineering",
        icon: javaIcon,
        color: "primary",
        description: "Designing scalable, secure microservices and APIs",
        skills: [
            "Java", "Spring Boot", "Spring Security", "REST APIs", "JPA", "Hibernate",
            "OAuth2", "Kafka", "WebSockets", "Microservices", "Resilience4j"
        ]
    },
    {
        title: "Frontend & UI",
        icon: reactIcon,
        color: "accent",
        description: "Building responsive interfaces with modern frameworks",
        skills: [
            "React.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"
        ]
    },
    {
        title: "Databases & DevOps",
        icon: springIcon,
        color: "primary",
        description: "Optimizing data, deployments, and automation pipelines",
        skills: [
            "PostgreSQL", "MySQL", "Redis", "Docker", "GitHub Actions", "Swagger",
            "Postman", "Kubernetes", "CI/CD", "Load Balancing"
        ]
    },
    {
        title: "Cloud & Architecture",
        icon: javaIcon,
        color: "accent",
        description: "Deploying scalable solutions and managing infrastructure",
        skills: [
            "AWS (EC2, S3, RDS)", "Google Cloud", "System Design", "API Gateway",
            "Eureka", "YAML", "Linux", "Maven", "Gradle", "Netty"
        ]
    },
    {
        title: "Testing & Monitoring",
        icon: springIcon,
        color: "accent",
        description: "Ensuring reliability, test coverage and observability of systems",
        skills: [
            "JUnit", "Mockito", "Testcontainers", "Spring Boot Test", "Swagger/OpenAPI",
            "Grafana", "Prometheus", "Spring Boot Admin", "Logging", "Monitoring Dashboards"
        ]
    },
    {
        title: "Scripting & Utilities",
        icon: reactIcon,
        color: "primary",
        description: "Essential tools for automation, scripting, and backend productivity",
        skills: [
            "Node.js", "Python", "Shell Scripts", "JSON", "YAML",
            "Apache POI", "Google APIs", "dotenv", "VS Code"
        ]
    }
];

const stats = [
    { skill: "Spring Boot & Java", level: 92, color: "primary" },
    { skill: "React.js & JS/TS", level: 85, color: "accent" },
    { skill: "DevOps & CI/CD", level: 80, color: "primary" },
    { skill: "System Design & DSA", level: 90, color: "accent" }
];

export const Skills = () => {
    const getGradientClass = (color: string) => {
        return color === "primary" ? "bg-gradient-primary" : "bg-gradient-accent";
    };

    const getHoverShadow = (color: string) => {
        return color === "primary" ? "hover:shadow-glow" : "hover:shadow-accent-glow";
    };

    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-premium">Technical</span>{" "}
                        <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-lg text-subtle max-w-2xl mx-auto">
                        A complete development toolkit for building resilient, modern systems
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="glass hover-lift p-8 group relative overflow-hidden"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            {/* Background Pattern */}
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
                                        className={`p-3 ${getGradientClass(category.color)} rounded-xl mr-4 ${getHoverShadow(category.color)} group-hover:scale-110 transition-all duration-300`}>
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

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="secondary"
                                            className={`
                        glass hover:${getGradientClass(category.color)} 
                        hover:text-background transition-all duration-300 
                        hover:scale-105 cursor-pointer text-secondary
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <Card
                            key={index}
                            className="glass p-6 hover-lift"
                            style={{animationDelay: `${index * 0.1}s`}}
                        >
                            <div className="text-center">
                                <h4 className="font-semibold text-premium mb-4">{item.skill}</h4>

                                {/* Progress Circle */}
                                <div className="relative w-20 h-20 mx-auto mb-4">
                                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                        <path
                                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                            fill="none"
                                            stroke="hsl(var(--muted))"
                                            strokeWidth="2"
                                        />
                                        <path
                                            d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                                            fill="none"
                                            stroke={item.color === "primary" ? "hsl(var(--primary))" : "hsl(var(--accent))"}
                                            strokeWidth="2"
                                            strokeDasharray={`${item.level}, 100`}
                                            className="transition-all duration-1000"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                    <span className={`text-lg font-bold ${item.color === "primary" ? "text-primary" : "text-accent"}`}>
                      {item.level}%
                    </span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};