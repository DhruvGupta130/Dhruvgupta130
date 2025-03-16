import { motion } from "framer-motion";

const ProjectCard = ({
                         title,
                         description,
                         image,
                         github,
                         demo,
                         category,
                         index = 0
                     }) => {
    return (
        <motion.div
            className="project-card w-full p-6 rounded-2xl bg-light dark:bg-dark border border-dark/10 dark:border-light/10 shadow-md cursor-pointer overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
        >
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl mb-4">
                <img
                    src={image}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light bg-dark/80 p-2 rounded-full hover:bg-dark transition go-to"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-light bg-dark/80 p-2 rounded-full hover:bg-dark transition go-to"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
                {category.slice(0, 6).map((cat, i) => (
                    <span
                        key={i}
                        className="text-xs px-3 py-1 bg-dark/10 dark:bg-light/10 rounded-full text-dark/80 dark:text-light/80 font-medium text-center truncate"
                    >
            {cat}
        </span>
                ))}
                {category.length > 6 && (
                    <span className="text-xs px-3 py-1 bg-dark/20 dark:bg-light/20 bg-badge rounded-full text-dark/80 dark:text-light/80 font-medium text-center">
            +{category.length - 6} more
        </span>
                )}
            </div>


            <h3 className="text-xl font-bold text-dark dark:text-light mb-2 group-hover:text-primary1 dark:group-hover:text-primaryDark transition-colors">
                {title}
            </h3>

            <p className="text-dark/70 dark:text-light/70 text-sm">
                {description}
            </p>
        </motion.div>
    );
};

export default ProjectCard;
