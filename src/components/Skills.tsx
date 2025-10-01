import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import javaIcon from "@/assets/java-icon.jpg";
import reactIcon from "@/assets/react-icon.jpg";
import springIcon from "@/assets/spring-icon.jpg";

const skillCategories = [
  {
    title: "Backend Engineering",
    icon: javaIcon,
    color: "primary",
    description: "Designing scalable, secure microservices and APIs.",
    skills: [
      "Java", "Spring Boot", "Spring Security", "REST APIs", "JPA", "Hibernate",
      "OAuth2", "Kafka", "WebSockets", "Microservices", "Resilience4j"
    ]
  },
  {
    title: "Frontend & UI",
    icon: reactIcon,
    color: "accent",
    description: "Building responsive interfaces with modern frameworks.",
    skills: [
      "React.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS", "HTML5", "CSS3"
    ]
  },
  {
    title: "Databases & DevOps",
    icon: springIcon,
    color: "primary",
    description: "Optimizing data, deployments, and automation pipelines.",
    skills: [
      "PostgreSQL", "MySQL", "Redis", "Docker", "GitHub Actions", "Swagger",
      "Postman", "Kubernetes", "CI/CD", "Load Balancing"
    ]
  },
  {
    title: "Cloud & Architecture",
    icon: javaIcon,
    color: "accent",
    description: "Deploying scalable solutions and managing infrastructure.",
    skills: [
      "AWS (EC2, S3, RDS)", "Google Cloud", "System Design", "API Gateway",
      "Eureka", "YAML", "Linux", "Maven", "Gradle", "Netty"
    ]
  },
  {
    title: "Testing & Monitoring",
    icon: springIcon,
    color: "accent",
    description: "Ensuring reliability, test coverage and observability of systems.",
    skills: [
      "JUnit", "Mockito", "Testcontainers", "Spring Boot Test", "Swagger/OpenAPI",
      "Grafana", "Prometheus", "Spring Boot Admin", "Logging", "Monitoring Dashboards"
    ]
  },
  {
    title: "Scripting & Utilities",
    icon: reactIcon,
    color: "primary",
    description: "Essential tools for automation, scripting, and productivity.",
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
        return color === "primary"
            ? "bg-gradient-to-r from-indigo-500/80 to-blue-500/80 text-white shadow-[0_0_10px_rgba(99,102,241,0.4)]"
            : "bg-gradient-to-r from-pink-500/80 to-purple-500/80 text-white shadow-[0_0_10px_rgba(236,72,153,0.4)]";
    };

  return (
    <section id="skills" className="py-20 relative bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-premium">Technical</span>{" "}
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-subtle max-w-2xl mx-auto">
            Expertise across backend, frontend, cloud, and DevOps — enabling
            end-to-end delivery of production-grade systems.
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
                  style={{ backgroundImage: `url(${category.icon})` }}
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
                      style={{ backgroundImage: `url(${category.icon})` }}
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
                            glass border border-gray-700 text-secondary 
                            bg-gray-800/70 
                            hover:from-transparent hover:to-transparent
                            hover:${getGradientClass(category.color)} 
                            hover:text-white transition-all duration-300 
                            hover:scale-110 cursor-pointer
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
                        <stop offset="0%" stopColor="#6366F1" /> {/* indigo-500 */}
                        <stop offset="100%" stopColor="#3B82F6" /> {/* blue-500 */}
                        </>
                    ) : (
                        <>
                        <stop offset="0%" stopColor="#EC4899" /> {/* pink-500 */}
                        <stop offset="100%" stopColor="#8B5CF6" /> {/* purple-500 */}
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