import { Card, CardContent } from "@/components/ui/card";

// import logos from assets
import xurgeLogo from "@/assets/xurge-logo.jpg";
import emmLogo from "@/assets/earn-my-money-logo.jpg";
import tdLogo from "@/assets/trulydesignfirm-logo.jpg";

const experiences = [
    {
        company: "Xurge (Earn My Money Product)",
        role: "Backend Developer — Part-Time",
        duration: "Aug 2025 – Present",
        logo: xurgeLogo,
        description: [
            "Delivering backend services for Earn My Money using Java, Spring Boot, PostgreSQL, and Redis.",
            "Built 20+ secure and production-grade REST APIs including onboarding and real-time chat features.",
            "Improved database throughput by ~30% through optimized queries, indexing, and caching strategies.",
            "Integrated Brevo and PostHog for analytics-driven user retention and behavior insights.",
            "Strengthened security with JWT (access + refresh tokens), RBAC, and reliable session handling."
        ],
        tech: ["Spring Boot", "WebFlux", "PostgreSQL", "Redis", "Kafka", "JWT"],
    },
    {
        company: "Truly Design Firm",
        role: "Full Stack Developer — Internship",
        duration: "Mar 2025 – Jun 2025",
        logo: tdLogo,
        description: [
            "Optimized Spring Boot APIs and PostgreSQL queries, reducing latency by 35%.",
            "Built full-stack modules using React + Spring Boot, improving dynamic UI responsiveness by 20%.",
            "Designed and deployed real-time features using WebSockets (STOMP) and CI/CD pipelines.",
            "Independently launched features like GetE-Menu, Laundry Adda & TFSC from backend to UI delivery."
        ],
        tech: ["Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "GitHub Actions"],
    }
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
      <div className="relative border-l border-gray-800 pl-6 space-y-20">
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