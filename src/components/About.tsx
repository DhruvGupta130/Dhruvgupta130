import {GraduationCap, MapPin, Server, Trophy, Globe, Infinity} from "lucide-react";
import {Card} from "@/components/ui/card";

const stats = [
    {number: "20+", label: "Production APIs Built"},
    {number: "1750+", label: "LeetCode Rating"},
    {number: "800+", label: "DSA Problems Solved"},
    {number: "30%", label: "System Optimization"},
];

const highlights = [
    {
        icon: GraduationCap,
        title: "Education",
        description: "Indian Institute of Information Technology, Ranchi",
        detail: "B.Tech in Electronics & Communication Engineering",
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Jhansi, Uttar Pradesh, India",
        detail: "Open to remote & hybrid roles",
    },
    {
        icon: Server,
        title: "Specialization",
        description: "Backend-First Architecture",
        detail: "Java • Spring Boot • Kafka • Microservices",
    },
    {
        icon: Globe,
        title: "Full-Stack Capability",
        description: "React & Modern Web Ecosystems",
        detail: "Building seamless UIs to complement robust backends",
    },
    {
        icon: Infinity,
        title: "DevOps & Cloud",
        description: "Infrastructure Fundamentals",
        detail: "Learning Docker • GitHub Actions • CI/CD Workflows",
    },
    {
        icon: Trophy,
        title: "Achievements",
        description: "Hackathons & Competitive Coding",
        detail: "SIH 2024 Finalist • Flipkart GRiD Qualifier",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-20 relative bg-gray-950 text-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                        <span className="gradient-text">Engineering</span>{" "}
                        <span className="text-premium">Impact</span>
                    </h2>
                    <p className="text-xl text-subtle max-w-3xl mx-auto font-light leading-relaxed">
                        Bridging the gap between complex backend architectures and scalable, production-ready systems.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
                    {/* Left Column - Image + Story */}
                    <div className="space-y-10">
                        {/* Profile Image with Advanced Border */}
                        <div className="relative group mx-auto w-48 h-48">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div
                                className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl border border-white/10 p-1.5 bg-gray-900">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover rounded-full transition-all duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Story Section */}
                        <div className="animate-fade-in-up">
                            <h3 className="text-4xl md:text-5xl font-black text-premium mb-8 tracking-tight">
                                Architecting <span className="gradient-text">High-Scale</span> Backend Ecosystems
                            </h3>

                            <div className="space-y-6 text-secondary text-xl leading-relaxed font-light">
                                <p>
                                    I am a high-impact backend engineer specializing in
                                    <span className="text-primary font-bold">
                                        {" "}
                                        Distributed Systems & Java Microservices.{" "}
                                    </span>
                                    Currently architecting B2B insurance portals at <span
                                    className="text-primary font-bold">ACKO</span>.
                                </p>

                                <p>
                                    While my core expertise lies in <span className="text-white font-bold">Backend Engineering</span>,
                                    I am an architect who understands the entire stack.
                                    I leverage <span className="text-primary font-semibold">React.js & Next.js</span> to
                                    build intuitive frontends that seamlessly interface with high-performance backends.
                                </p>

                                <p>
                                    My engineering philosophy centers on <span
                                    className="gradient-accent-text font-bold uppercase tracking-widest text-sm">Resilience & Scalability</span>.
                                    I am also exploring <span
                                    className="text-primary font-bold decoration-primary/50">DevOps Fundamentals</span> bridging
                                    the gap between development and cloud-native infrastructure with Docker and
                                    automated CI/CD pipelines.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-8">
                        {highlights.map((item, index) => (
                            <Card
                                key={index}
                                className="glass hover-lift p-6 group cursor-pointer hover:shadow-card bg-gray-900 border border-gray-800 rounded-2xl transition duration-300 hover:border-indigo-500 hover:shadow-indigo-500/20"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div
                                        className="p-3 bg-gradient-primary rounded-full group-hover:shadow-glow transition-all duration-300">
                                        <item.icon className="h-6 w-6 text-background"/>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-premium mb-1">{item.title}</h4>
                                        <p className="text-secondary text-sm mb-2">
                                            {item.description}
                                        </p>
                                        <p className="text-subtle text-xs">{item.detail}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div
                    className="mt-32 p-12 glass-premium rounded-3xl border border-primary/10 grid grid-cols-2 md:grid-cols-4 gap-12 relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-50"/>
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center animate-fade-in-up relative z-10"
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            <div className="text-5xl md:text-6xl font-black gradient-text mb-4 tracking-tighter">
                                {stat.number}
                            </div>
                            <div className="text-subtle text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};