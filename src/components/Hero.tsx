import {ArrowDown, Github, Linkedin, Mail, ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-improved.jpg";
import {RESUME_URL} from "@/config";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <div className="absolute inset-0 bg-background/80 z-10"/>

            {/* Floating Elements */}
            <div
                className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float"/>
            <div
                className="absolute top-40 right-32 w-16 h-16 bg-gradient-accent rounded-full blur-lg opacity-20 animate-float"/>
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float"/>

            {/* Main Content */}
            <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full">

                {/* Status Badge */}
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-semibold tracking-wide text-primary">
                        SDE Intern @ ACKO
                    </span>
                </div>

                {/* Name */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tight">
                    <span className="gradient-text">DHRUV</span>{" "}
                    <span className="text-premium">GUPTA</span>
                </h1>

                {/* Role (UPDATED) */}
                <p className="text-xl md:text-3xl font-semibold text-secondary mb-6">
                    Software Development Engineer{" "}
                    <span className="text-subtle mx-2">•</span>
                    Java • Spring Boot • Distributed Systems
                </p>

                {/* Description */}
                <div className="max-w-2xl space-y-3 mb-12">
                    <p className="text-lg md:text-xl text-subtle leading-relaxed">
                        Backend-focused developer building production systems at{" "}
                        <span className="text-primary font-medium">ACKO</span>.
                    </p>

                    <p className="text-lg md:text-xl text-subtle leading-relaxed">
                        Event-driven microservices • RBAC systems • Database optimization
                    </p>
                </div>

                {/* CTA Buttons (FIXED alignment) */}
                <div className="flex flex-wrap gap-4 mb-10">
                    <Button
                        onClick={() => window.open("https://github.com/DhruvGupta130", "_blank")}
                        size="lg"
                        className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold group"
                    >
                        <span>View Projects</span>
                        <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform"/>
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(RESUME_URL, "_blank")}
                        className="border-primary/50 hover:bg-primary/10 hover:border-primary text-lg px-8 py-4 font-semibold group"
                    >
                        <span>View Resume</span>
                        <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform"/>
                    </Button>
                </div>

                {/* Social Links (FIXED alignment) */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/DhruvGupta130"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass hover:bg-primary/20 hover:shadow-glow transition-all rounded-full"
                    >
                        <Github className="h-6 w-6 text-text-secondary hover:text-primary"/>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/dhruvgupta130/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass hover:bg-accent/20 hover:shadow-accent-glow transition-all rounded-full"
                    >
                        <Linkedin className="h-6 w-6 text-text-secondary hover:text-accent"/>
                    </a>

                    <a
                        href="mailto:dhruvgupta130@gmail.com"
                        className="p-3 glass hover:bg-primary/20 hover:shadow-glow transition-all rounded-full"
                    >
                        <Mail className="h-6 w-6 text-text-secondary hover:text-primary"/>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">

                <span className="text-xs text-subtle mb-2 tracking-widest uppercase">
                    Scroll
                </span>

                <div className="w-5 h-9 border border-primary/40 rounded-full flex items-start justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"/>
                </div>

            </div>
        </section>
    );
};