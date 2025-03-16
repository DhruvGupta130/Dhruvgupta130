import Layout from "../components/Layout";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import { projects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Index = () => {
    // Just show the first 3 projects on the home page
    const featuredProjects = projects.slice(0, 3);

    return (
        <Layout className="pt-20">
            {/* Hero Section */}
            <Hero />

            {/* Featured Projects Section */}
            <section className="w-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-32 mt-16 md:mt-32 mb-16">
                <AnimatedText
                    text="Featured Projects"
                    className="font-mont font-bold !text-4xl md:!text-5xl lg:!text-6xl mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            github={project.github}
                            demo={project.demo}
                            category={project.category}
                            index={index}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Link
                        to="/projects"
                        className="inline-block py-3 px-8 rounded-lg font-medium bg-dark text-light dark:bg-light dark:text-dark hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light border-2 border-solid border-transparent transition-colors duration-300"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </section>
        </Layout>
    );
};

export default Index;