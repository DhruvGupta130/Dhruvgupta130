import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import profile from "../assets/1729278055151.jpg";
import { Typewriter } from "react-simple-typewriter";
import {useState} from "react";
import { Dialog } from "@headlessui/react";

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-8 md:px-16 lg:px-32 mt-16 md:mt-0">
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-1 mt-6 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col items-start self-start space-y-5"
                >
                    {/* Greeting */}
                    <h2 className="font-mont text-3xl text-left text-dark/75 dark:text-light/75 font-medium">
                        Hi there, I’m
                    </h2>

                    {/* Name Animation */}
                    <AnimatedText
                        text="Dhruv Gupta"
                        className="!text-4xl lg:!text-7xl !text-left !font-mont !font-bold text-dark dark:text-light"
                    />

                    {/* Typing Animation for Title */}
                    <h2 className="font-mont font-semibold text-2xl md:text-3xl lg:text-4xl text-primary dark:text-secondary">
                        <Typewriter
                            words={[
                                "Java Full-Stack Developer",
                                "Spring Boot & React.js Developer",
                                "Building Scalable Microservices",
                                "Crafting Robust Backends",
                                "Optimizing System Performance",
                                "Designing APIs & Databases",
                                "Deploying with Docker & Cloud",
                                "Solving Real-World Problems",
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1200}
                        />
                    </h2>

                    {/* Description */}
                    <p className="font-medium text-base md:text-lg text-dark/75 dark:text-light/75 max-w-lg leading-relaxed">
                        I’m a dedicated <strong>Java Full-Stack Developer</strong> with a strong foundation in <strong>Spring Boot</strong> and <strong>React.js</strong>. I specialize in designing <strong>scalable microservices</strong>, optimizing <strong>backend performance</strong>, and delivering seamless user experiences. With hands-on expertise in <strong>RESTful APIs</strong>, <strong>Docker</strong>, and modern development practices, I focus on building efficient, high-performance applications.
                    </p>
                    <p className="font-medium text-base md:text-lg text-dark/75 dark:text-light/75 max-w-lg leading-relaxed">
                        Currently in my final year at <strong>IIIT Ranchi</strong>, I’ve tackled real-world challenges through my projects and as a <strong>Smart India Hackathon 2024 finalist</strong>. Passionate about solving problems through technology, I strive to create robust, well-architected solutions that drive impact.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center self-start mt-8 space-x-8">
                        {/* Download Resume Button */}
                        <motion.div>
                            {/* Button to Open Modal */}
                            <motion.button
                                className="relative bg-badge rounded-4xl border border-dark/2 text-lg font-bold text-dark dark:text-light px-8 py-3 border-dark dark:border-light transition-all duration-300 ease-in-out hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark hover:scale-105 hover:shadow-lg flex items-center gap-2"
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(true)}
                            >
                                📥 Download Resume
                            </motion.button>

                            {/* Modal */}
                            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                                <Dialog.Panel className="relative bg-preview p-6 rounded-lg shadow-lg w-[90%] max-w-3xl">
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-3 right-3 text-xl"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        ✖
                                    </button>

                                    {/* PDF Preview */}
                                    <iframe src="/Dhruv_Java_Full_Stack_resume.pdf" className="w-full h-[500px] rounded-lg border" />

                                    {/* Download Button */}
                                    <div className="flex justify-end mx-6">
                                        <a
                                            href="/Dhruv_Java_Full_Stack_resume.pdf"
                                            download
                                            className="px-6 py-3 w-fit rounded-2xl mt-4 bg-selected font-semibold hover:bg-opacity-80 transition-all"
                                        >
                                            📥 Download
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Dialog>
                        </motion.div>

                        {/* Contact Button */}
                        <motion.a
                            href="mailto:dhruvgupta@gmail.com"
                            target="_blank"
                            className="relative text-lg font-bold text-dark dark:text-light transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-secondary flex items-center gap-2"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📧 Get in Touch
                            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-dark dark:bg-light transition-all duration-300 ease-in-out group-hover:w-full"></span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-3/4 max-w-xs md:max-w-sm lg:max-w-md relative"
                >
                    <div className="absolute top-0 -left-4 -right-4 -bottom-4 rounded-xl bg-dark/5 dark:bg-light/5 -z-10"></div>
                    <motion.div
                        className="w-full h-auto rounded-xl overflow-hidden border-2 border-dark dark:border-light p-2 bg-light dark:bg-dark shadow-lg"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img
                            src={profile}
                            alt="Dhruv Gupta"
                            className="w-full h-auto rounded-lg object-cover"
                            style={{ filter: "grayscale(5%)" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
