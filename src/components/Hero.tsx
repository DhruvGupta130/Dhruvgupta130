import {ArrowDown, Github, Linkedin, Mail, ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-improved.jpg";
import { RESUME_URL } from "@/lib/url";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            />
            <div className="absolute inset-0 bg-background/80 z-10"/>

            {/* Floating Elements */}
            <div
                className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full blur-xl opacity-30 animate-float"/>
            <div
                className="absolute top-40 right-32 w-16 h-16 bg-gradient-accent rounded-full blur-lg opacity-20 animate-float"
                style={{animationDelay: '2s'}}/>
            <div className="absolute bottom-32 left-16 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float"
                 style={{animationDelay: '4s'}}/>

            {/* Main Content */}
            <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
                <div className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span className="gradient-text">Dhruv</span>{" "}
                        <span className="text-premium">Gupta</span>
                    </h1>

                    <div className="text-xl md:text-2xl lg:text-3xl text-secondary mb-8 font-medium">
                        <span className="gradient-accent-text">Full-Stack Java Developer</span>
                    </div>

                    <p className="text-lg md:text-xl text-subtle max-w-2xl mx-auto mb-12 leading-relaxed">
                        Aspiring developer from <span className="text-primary font-semibold">IIIT Ranchi</span>,
                        passionate about crafting scalable solutions with Java, React.js, and Spring Boot.
                        Transforming ideas into powerful digital experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Button
                            onClick={() => window.open("https://github.com/DhruvGupta130", "_blank")}
                            size="lg"
                            className="bg-gradient-primary hover:shadow-glow hover:scale-105 transform transition-all duration-300 text-lg px-8 py-4 font-semibold group"
                        >
                            <span>View My Work</span>
                            <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform"/>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() => window.open(RESUME_URL, "_blank")}
                            className="glass border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-glow text-lg px-8 py-4 font-semibold group"
                        >
                            <span>View Resume</span>
                            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://github.com/DhruvGupta130"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass hover:bg-primary/20 hover:shadow-glow transition-all duration-300 hover-lift rounded-full group"
                        >
                            <Github className="h-6 w-6 text-text-secondary group-hover:text-primary transition-colors"/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dhruvgupta130/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 glass hover:bg-accent/20 hover:shadow-accent-glow transition-all duration-300 hover-lift rounded-full group"
                        >
                            <Linkedin
                                className="h-6 w-6 text-text-secondary group-hover:text-accent transition-colors"/>
                        </a>

                        <a
                            href="mailto:dhruvgupta130@gmail.com"
                            className="p-3 glass hover:bg-primary/20 hover:shadow-glow transition-all duration-300 hover-lift rounded-full group"
                        >
                            <Mail className="h-6 w-6 text-text-secondary group-hover:text-primary transition-colors"/>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="animate-bounce">
                    <ArrowDown className="h-6 w-6 text-primary animate-pulse"/>
                </div>
            </div>
        </section>
    );
};