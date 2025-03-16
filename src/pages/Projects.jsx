import { useState } from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../lib/data";
import { motion } from "framer-motion";

const Projects = () => {
    const [filter, setFilter] = useState("All");

    // Extract unique categories from all projects
    const allCategories = ["All", ...new Set(projects.flatMap(project => project.category))];

    // Filter projects based on selected category
    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(project => project.category.includes(filter));

    return (
        <Layout className="pt-32 pb-16">
            <AnimatedText
                text="Imagination Trumps Knowledge!"
                className="font-mont font-bold !text-4xl md:!text-5xl lg:!text-6xl mb-8 text-center"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-dark/75 dark:text-light/75 text-center mb-12 max-w-2xl mx-auto px-8"
            >
                Browse through my showcase of meticulously crafted web applications and digital experiences. Each project reflects my commitment to clean code, intuitive user interfaces, and seamless functionality.
            </motion.p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 px-8">
                {allCategories.map((category, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setFilter(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            filter === category
                                ? "bg-selected text-light dark:bg-light dark:text-dark"
                                : "bg-light/50 dark:bg-dark/50 text-dark dark:text-light border border-dark/10 dark:border-light/10 hover:bg-dark/10 dark:hover:bg-light/10"
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-16 lg:px-32">
                {filteredProjects.map((project, index) => (
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

            {filteredProjects.length === 0 && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-dark/75 dark:text-light/75 mt-8"
                >
                    No projects found with the selected filter.
                </motion.p>
            )}
        </Layout>
    );
};

export default Projects;