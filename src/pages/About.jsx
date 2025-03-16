import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";
import { experiences, education } from "../lib/data";
import { skills } from "../lib/skills.jsx";

const About = () => {
    return (
        <Layout className="pt-32 pb-16 px-8 md:px-16 lg:px-32">
            <AnimatedText
                text="Passion Fuels Purpose!"
                className="font-mont font-bold !text-4xl md:!text-5xl lg:!text-6xl mb-16 text-center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-8 gap-16">
                {/* About Me Section */}
                <motion.div
                    className="col-span-1 lg:col-span-4 flex flex-col items-start justify-start border border-dark/2 rounded-2xl p-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-dark/90 dark:text-light/90 font-bold text-2xl uppercase">About Me</h2>
                    <div className="font-medium text-md text-lg text-dark/75 dark:text-light/75 space-y-4 font-sans">
                        <p>
                            Hi, I'm <strong>Dhruv Gupta</strong> — a passionate full-stack web developer with a strong foundation in Java and modern web technologies. I’m currently pursuing my <strong>B.Tech in Electronics and Communication Engineering</strong> from <strong>IIIT Ranchi</strong>, with a keen focus on building scalable, efficient, and real-world web applications.
                        </p>
                        <p>
                            I specialize in backend development using <strong>Spring Boot</strong> and microservices architecture, with expertise in <strong>Spring Cloud</strong> (Eureka, API Gateway, Feign) and containerization with <strong>Docker</strong>. On the frontend, I build dynamic and responsive UIs with <strong>React.js</strong>, <strong>Redux</strong>, and <strong>Tailwind CSS</strong>. I’m well-versed with relational databases like <strong>MySQL</strong> and <strong>PostgreSQL</strong>, and I prioritize writing clean, scalable code.
                        </p>
                        <p>
                            I’ve worked on several real-world projects like <strong>Ayumed — a Hospital and OPD Management System</strong>, <strong>The Gupta's — a Food Ordering and Tracking System</strong>, and a <strong>Task Management System</strong> built with microservices architecture. These projects showcase my ability to integrate advanced features like role-based access control, real-time tracking, cloud-based storage, and seamless API integration.
                        </p>
                        <p>
                            Beyond development, I actively participate in coding contests on <strong>GeeksforGeeks</strong>, <strong>LeetCode</strong>, and <strong>CodeChef</strong>, constantly refining my problem-solving skills. I’m also proud to have qualified for the <strong>Smart India Hackathon 2024</strong>, where I collaborated on building innovative tech solutions.
                        </p>
                        <p>
                            I thrive on solving real-world challenges through technology and am always eager to learn and grow. If you’re looking for a developer driven by curiosity, collaboration, and impact — let’s connect!
                        </p>
                    </div>

                </motion.div>

                {/* Skills Section */}
                <motion.div
                    className="col-span-1 lg:col-span-4 flex flex-col items-start border border-dark/2 rounded-2xl p-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-dark/90 dark:text-light/90 font-bold text-2xl uppercase">Skills</h2>
                    <div className="w-full flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center space-x-2 px-4 py-2 bg-badge dark:bg-light/5 rounded-full text-dark/80 dark:text-light/80"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <span className="text-lg">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="mb-8 text-dark/90 dark:text-light/90 font-bold text-2xl uppercase text-center">Experience</h2>

                <div className="relative border-l-2 border-dark/20 dark:border-light/20 ml-3 md:ml-8 pl-8 pb-8 experience-mask">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className="mb-12 relative"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -left-[46px] md:-left-[41px] w-8 h-8 rounded-full bg-dark dark:bg-light border-4 border-light dark:border-dark z-10" />

                            <div className="rounded-xl p-6 bg-light dark:bg-dark border border-dark/10 dark:border-light/10 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="font-bold text-xl text-dark dark:text-light">{exp.role}</h3>
                                <h4 className="font-medium text-primary1 dark:text-primaryDark">{exp.company}</h4>
                                <span className="font-medium text-dark/60 dark:text-light/60 text-sm">{exp.duration}</span>

                                <p className="mt-2 text-dark/80 dark:text-light/80">{exp.description}</p>

                                <ul className="mt-3 list-disc pl-6 text-sm text-dark/70 dark:text-light/70 space-y-1">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="mb-8 text-dark/90 dark:text-light/90 font-bold text-2xl uppercase text-center">Education</h2>

                <div className="flex justify-center max-w-3xl">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="rounded-xl p-6 bg-light dark:bg-dark border border-dark/10 dark:border-light/10 shadow-sm hover:shadow-md transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="font-bold text-lg text-dark dark:text-light">{edu.degree}</h3>
                            <h4 className="font-medium text-primary1 dark:text-primaryDark">{edu.institution}</h4>
                            <span className="font-medium text-dark/60 dark:text-light/60 text-sm">{edu.duration}</span>

                            <p className="mt-2 text-dark/80 dark:text-light/80 text-sm">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Layout>
    );
};

export default About;