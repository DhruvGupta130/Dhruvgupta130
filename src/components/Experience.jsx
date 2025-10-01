import { Card, CardContent } from "@/components/ui/card";

// import logos from assets
import xurgeLogo from "@/assets/xurge-logo.jpg";
import emmLogo from "@/assets/earn-my-money-logo.jpg";
import tdLogo from "@/assets/trulydesignfirm-logo.jpg";

const experiences = [
  {
    company: "Xurge",
    role: "Backend Developer",
    duration: "Aug 2025 – Present",
    logo: xurgeLogo,
    description: [
      "Developed 12+ REST APIs with Spring Boot, enabling real-time chat and onboarding for 1K+ users.",
      "Optimized PostgreSQL schema/queries, reducing execution time by 25% and improving consistency.",
      "Implemented structured logging & error handling, cutting debug time by 40%."
    ],
    tech: ["Spring Boot", "PostgreSQL", "WebSockets", "Redis"],
  },
  {
    company: "Earn My Money",
    role: "Backend Developer",
    duration: "Aug 2025 – Present",
    logo: emmLogo,
    description: [
      "Built 20+ REST APIs with Spring Boot & WebFlux, improving concurrency and response time by 30%.",
      "Tuned PostgreSQL/MySQL queries with caching, reducing database load by 35%.",
      "Maintained 85%+ test coverage with JUnit/Mockito in Agile sprints."
    ],
    tech: ["Spring Boot", "Spring WebFlux", "PostgreSQL", "MySQL", "JUnit"],
  },
  {
    company: "Truly Design Firm",
    role: "Full Stack Developer",
    duration: "Mar 2025 – Jun 2025",
    logo: tdLogo,
    description: [
      "Built scalable modules with Spring Boot, React.js, and PostgreSQL.",
      "Reduced API latency by 35% via Redis caching.",
      "Implemented JWT/OAuth2 RBAC, WebSocket STOMP, and CI/CD via Docker & GitHub Actions, cutting release time by 50%."
    ],
    tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
  },
];

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 lg:px-24 bg-gray-950 text-gray-100"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-premium">Professional</span>{" "}
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-lg text-subtle max-w-2xl mx-auto">
          Hands-on roles in backend and full-stack development, delivering
          scalable microservices, production-ready systems, and real-world
          business impact.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-gray-800 pl-6 space-y-20 space-x-20">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[14px] top-8 w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 border-4 border-gray-950 shadow-md"></span>

            {/* Card */}
            <Card className="rounded-2xl shadow-xl bg-gray-900 border border-gray-800 transition duration-300 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  {exp.logo && (
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 object-contain rounded-full border border-gray-700 shadow-md bg-white p-1"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-300 leading-relaxed">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 border border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};