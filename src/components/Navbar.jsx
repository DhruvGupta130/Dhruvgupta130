import {useState, useEffect, useCallback} from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const NavLink = ({ href, title, className = "", toggle }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link
            to={href}
            className={cn(
                "relative group text-dark dark:text-light mx-4 underline-hover",
                isActive ? "font-bold" : "font-medium",
                className
            )}
            onClick={toggle}
            aria-current={isActive ? "page" : undefined}
        >
            {title}
            {isActive && (
                <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-dark dark:bg-light"
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
        setPrevScrollPos(currentScrollPos);
        setHasScrolled(currentScrollPos > 50);
    },[prevScrollPos]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll, prevScrollPos]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !e.target.closest(".mobile-menu") && !e.target.closest(".menu-button")) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    return (
        <header
            className={cn(
                "w-full m-0 fixed top-0 z-10 px-8 md:px-16 lg:px-32 py-6 font-medium flex items-center justify-between",
                hasScrolled ? "backdrop-blur-md bg-dark/70 dark:bg-dark/70 shadow-lg" : "",
                visible ? "translate-y-0" : "-translate-y-full"
            )}
            style={{ transition: "all 0.3s ease" }}
        >
            <div className="left-side ml-2 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                >
                    <Link to="/" className="flex items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-4xl lg:text-5xl border border-solid border-light px-10 lg:px-14 py-5 hover:border-dark dark:hover:border-light duration-200">
                            Dhruv
                        </div>
                    </Link>
                </motion.div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center text-xl">
                <NavLink href="/" title="Home" />
                <NavLink href="/about" title="About" />
                <NavLink href="/projects" title="Projects" />
                <NavLink href="/contact" title="Contact" />
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col justify-center items-center z-30 menu-button"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
            >
                <span
                    className={`block h-0.5 w-6 bg-selected dark:bg-light rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'}`}
                ></span>
                <span
                    className={`block h-0.5 w-6 bg-selected dark:bg-light rounded-sm transition-all duration-300 ease-out my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                ></span>
                <span
                    className={`block h-0.5 w-6 bg-selected dark:bg-light rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
                ></span>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="mobile-menu min-w-[50vw] fixed top-0 right-0 flex flex-col items-center justify-center backdrop-blur-lg bg-badge rounded-l-xl shadow-lg h-screen z-20"
                >
                    <nav className="flex flex-col items-center gap-6 text-xl font-semibold">
                        {["Home", "About", "Projects", "Contact"].map((title) => (
                            <NavLink
                                key={title}
                                href={title === "Home"? `/` :`/${title.toLowerCase()}`}
                                title={title}
                                toggle={toggleMenu}
                                className="relative transition-all duration-300 ease-in-out hover:text-primary hover:scale-105"
                            />
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;