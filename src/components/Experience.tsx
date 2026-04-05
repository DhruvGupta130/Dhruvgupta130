import {Card, CardContent} from "@/components/ui/card";

// import logos from assets
import ackoLogo from "@/assets/acko-logo.png";
import xurgeLogo from "@/assets/xurge-logo.jpg";
// import emmLogo from "@/assets/earn-my-money-logo.jpg";
import tdLogo from "@/assets/trulydesignfirm-logo.jpg";

const experiences = [
    {
        company: "ACKO",
        role: "Software Development Engineer (Intern)",
        duration: "Jan 2026 – Present",
        logo: ackoLogo,
        description: [
            "Architecting the end-to-end backend for a B2B Partner Portal, managing complex insurance workflows for enterprise clients.",
            "Engineered a high-performance Access Management System (AMS) using Zanzibar-inspired RBAC to handle large-scale permissions.",
            "Developed 20+ production-grade microservices with Java/Spring Boot, ensuring 99.9% availability through resilient API design.",
            "Optimized critical database paths and service layers, slashing latency by 30% and significantly boosting throughput.",
            "Leveraging Kafka for event-driven synchronization and Redis for low-latency distributed caching."
        ],
        tech: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Redis", "System Design", "Zanzibar RBAC"],
    },
    {
        company: "Xurge",
        role: "Backend Developer (Intern)",
        duration: "Aug 2025 – Jan 2026",
        logo: xurgeLogo,
        description: [
            "Led the backend development of 'Earn My Money', a reward-based platform, from conceptualization to production.",
            "Built a reactive API layer using Spring WebFlux, handling high-concurrency chat and onboarding features.",
            "Implemented a secure authentication suite with JWT (Access/Refresh tokens) and robust session management.",
            "Drove a 30% increase in DB throughput via strategic indexing, query optimization, and Redis caching.",
            "Integrated PostHog for real-time analytics and Brevo for automated lifecycle communications."
        ],
        tech: ["Java", "Spring Boot", "WebFlux", "PostgreSQL", "Redis", "Kafka", "JWT", "PostHog"],
    },
    {
        company: "Truly Design Firm",
        role: "Full Stack Developer (Intern)",
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
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                    <span className="text-premium">Professional</span>{" "}
                    <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-xl text-subtle max-w-3xl mx-auto font-light leading-relaxed">
                    Hands-on roles in backend and full-stack development, delivering
                    scalable microservices, production-ready systems, and real-world
                    business impact.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative border-l border-gray-800 pl-6 space-y-20 perspective-1000 max-w-7xl mx-auto">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative group hover-premium">
                        {/* Timeline Dot */}
                        <span
                            className="absolute -left-[14px] top-8 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent border-4 border-gray-950 shadow-md group-hover:scale-125 transition-transform duration-300"></span>

                        {/* Card */}
                        <Card
                            className="glass-premium rounded-2xl shadow-xl bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-primary/50 hover:shadow-primary/10">
                            <CardContent className="p-8">
                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 p-2 border border-white/20 shadow-inner group-hover:bg-white/20 transition-all">
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-contain filter brightness-110"
                                            />
                                        </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-2xl font-black text-premium group-hover:gradient-text transition-all">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-lg font-bold gradient-accent-text">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <span className="text-xs font-mono text-subtle bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                                                {exp.duration}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <ul className="space-y-4 mb-8 text-gray-300 leading-relaxed">
                                    {exp.description.map((point, i) => (
                                        <li key={i} className="flex items-start group/item">
                                            <span className="w-1.5 h-1.5 mt-2.5 mr-4 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-125 transition-all"></span>
                                            <span className="text-sm group-hover/item:text-gray-100 transition-colors">{point}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded bg-gray-800 border border-gray-700 text-gray-400 group-hover:border-primary/30 group-hover:text-primary/80 transition-all cursor-default"
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