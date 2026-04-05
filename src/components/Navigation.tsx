import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Menu, X, Home, User, Code, Briefcase, Terminal} from "lucide-react";

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["home", "about", "skills", "projects", "experience", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {name: "Home", href: "#home", id: "home", icon: Home},
        {name: "About", href: "#about", id: "about", icon: User},
        {name: "Skills", href: "#skills", id: "skills", icon: Code},
        {name: "Experience", href: "#experience", id: "experience", icon: Briefcase},
        {name: "Projects", href: "#projects", id: "projects", icon: Terminal},
    ];

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);
        const id = href.replace("#", "");
        if (id === "home") {
            window.scrollTo({top: 0, behavior: "smooth"});
        } else {
            const element = document.getElementById(id);
            element?.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav
                className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled
                    ? 'py-3'
                    : 'py-6'
                }
        `}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className={`
                        flex items-center justify-between transition-all duration-500 rounded-full px-6
                        ${isScrolled 
                            ? 'glass-premium border border-white/10 shadow-2xl h-14' 
                            : 'bg-transparent h-16'
                        }
                    `}>
                        {/* Logo */}
                        <div className="flex items-center">
                            <a
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("#home");
                                }}
                                aria-label="Go to home"
                                className="group flex items-center gap-3 select-none"
                            >
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                                    <img
                                        src="/Logo.png"
                                        alt="DG Logo"
                                        className="relative h-10 w-10 rounded-full border border-white/20 p-0.5 object-contain bg-background"
                                    />
                                </div>
                                <div className="flex flex-col -space-y-1">
                                    <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-white via-white to-white/60 text-transparent bg-clip-text">
                                        DHRUV GUPTA
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className={`
                                        px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group
                                        ${activeSection === item.id 
                                            ? 'text-primary' 
                                            : 'text-secondary hover:text-white'
                                        }
                                    `}
                                >
                                    <span className="relative z-10">{item.name}</span>
                                    {activeSection === item.id && (
                                        <span className="absolute inset-0 bg-primary/10 rounded-full -z-0 blur-[2px]"></span>
                                    )}
                                    <span className={`
                                        absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300
                                        ${activeSection === item.id ? 'w-4' : 'group-hover:w-4'}
                                    `}></span>
                                </a>
                            ))}

                            <div className="pl-4 border-l border-white/10 ml-2">
                                <Button
                                    size="sm"
                                    className="bg-primary hover:bg-primary/80 text-white rounded-full px-6 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5"
                                    onClick={() => scrollToSection("#contact")}
                                >
                                    Initiate
                                </Button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden glass-premium h-10 w-10 rounded-full hover:bg-primary/20"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5 text-primary"/>
                            ) : (
                                <Menu className="h-5 w-5 text-white"/>
                            )}
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div className="fixed inset-0 bg-background/98 backdrop-blur-2xl animate-in fade-in duration-300"/>
                    <div className="fixed inset-0 flex flex-col justify-center px-8 space-y-8 animate-in slide-in-from-bottom-10 duration-500">
                        {navItems.map((item, idx) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`
                                    flex items-center space-x-6 text-3xl font-black tracking-tighter transition-all duration-300
                                    ${activeSection === item.id ? 'text-primary translate-x-4' : 'text-secondary hover:text-white'}
                                `}
                                style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                                <item.icon className={`h-8 w-8 ${activeSection === item.id ? 'text-primary' : 'text-white/20'}`}/>
                                <span>{item.name}</span>
                            </a>
                        ))}

                        <div className="pt-8 border-t border-white/10">
                            <Button
                                className="w-full py-8 text-xl font-black tracking-tight bg-primary hover:bg-primary/80 text-white rounded-2xl shadow-2xl shadow-primary/30"
                                onClick={() => scrollToSection("#contact")}
                            >
                                Get In Touch
                            </Button>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white/40 hover:text-white transition-colors"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};