import {Code2, GraduationCap, MapPin, Calendar} from "lucide-react";
import {Card} from "@/components/ui/card";

const stats = [
    { number: "15+", label: "Production-Grade Projects" },
    { number: "10+", label: "Tech Stack Components Used" },
    { number: "100%", label: "Backend-First Ownership" },
    { number: "∞", label: "Curiosity & Growth Mindset" }
];

const highlights = [
    {
        icon: GraduationCap,
        title: "Education",
        description: "IIIT Ranchi",
        detail: "B.Tech in Electronics & Communication Engineering"
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Jhansi, Uttar Pradesh, India",
        detail: "Open to remote & hybrid roles"
    },
    {
        icon: Code2,
        title: "Focus",
        description: "Full-Stack Java Development",
        detail: "Spring Boot • React.js • Node.js"
    },
    {
        icon: Calendar,
        title: "Experience",
        description: "Hands-on Projects & Internships",
        detail: "Building scalable, production-grade apps"
    }
];

export const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">About</span>{" "}
                        <span className="text-premium">Me</span>
                    </h2>
                    <p className="text-lg text-subtle max-w-2xl mx-auto">
                        Passionate about engineering robust systems and crafting seamless user experiences.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image + Story */}
                    <div className="space-y-6">
                        {/* Profile Image */}
                        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Story Section */}
                        <div className="animate-fade-in-up">
                            <h3 className="text-2xl md:text-3xl font-bold text-premium mb-4">
                                From ECE to Engineering Scalable Systems
                            </h3>

                            <div className="space-y-4 text-secondary text-lg leading-relaxed">
                                <p>
                                    I’m a backend-focused full-stack developer currently pursuing my
                                    <span className="text-primary font-semibold"> B.Tech in Electronics & Communication Engineering </span>
                                    from IIIT Ranchi. While my academic branch is ECE, I’ve carved a parallel path in
                                    software engineering—
                                    specializing in building distributed systems, microservices, and real-time
                                    applications.
                                </p>

                                <p>
                                    My core strength lies in the <span className="gradient-accent-text font-semibold">Java ecosystem</span>,
                                    leveraging Spring Boot, Kafka, and Docker to build robust, scalable systems. On the
                                    frontend, I create responsive
                                    user experiences with React.js and Redux. I’ve delivered projects that handle
                                    thousands of API calls daily.
                                </p>

                                <p>
                                    I'm passionate about clean architecture, microservices, and cloud-native
                                    deployments. I regularly work with tools
                                    like Redis, PostgreSQL, GitHub Actions, and Kubernetes. My journey is a blend of
                                    curiosity, self-learning, and a
                                    strong desire to turn ideas into impactful systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Highlights Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <Card
                                key={index}
                                className="glass hover-lift p-6 group cursor-pointer hover:shadow-card"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div
                                        className="p-3 bg-gradient-primary rounded-full group-hover:shadow-glow transition-all duration-300">
                                        <item.icon className="h-6 w-6 text-background"/>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-premium mb-1">{item.title}</h4>
                                        <p className="text-secondary text-sm mb-2">{item.description}</p>
                                        <p className="text-subtle text-xs">{item.detail}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center animate-fade-in-up"
                            style={{animationDelay: `${index * 0.2}s`}}
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-subtle text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};