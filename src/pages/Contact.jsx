import React, {useState} from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { motion } from "framer-motion";
import { useToast } from "../hooks/use-toast.js";
import {BREVO_API_KEY} from "../lib/config.js";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //
    //     // Simulate form submission
    //     setTimeout(() => {
    //         toast({
    //             title: "Message sent!",
    //             description: "Thank you for your message. I'll get back to you soon.",
    //         });
    //
    //         setFormData({
    //             name: "",
    //             email: "",
    //             subject: "",
    //             message: ""
    //         });
    //
    //         setIsSubmitting(false);
    //     }, 1500);
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const brevoApiKey = BREVO_API_KEY; // Replace with your actual API key

        const emailData = {
            sender: { name: formData.name, email: formData.email },
            to: [{ email: "dhruvgupta130@gmail.com", name: "Dhruv Gupta" }],
            subject: formData.subject,
            htmlContent: `<p><b>From:</b> ${formData.name} (${formData.email})</p><p>${formData.message}</p>`
        };

        try {
            const response = await fetch("https://api.brevo.com/v3/smtp/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "api-key": brevoApiKey,
                    "Accept": "application/json"
                },
                body: JSON.stringify(emailData),
            });

            if (response.ok) {
                setTimeout(() => {
                    toast({
                        title: "Message sent!",
                        description: "Thank you for your message. I'll get back to you soon.",
                    });

                    setFormData({
                        name: "",
                        email: "",
                        subject: "",
                        message: ""
                    });

                    setIsSubmitting(false);
                }, 1500);
            } else {
                setTimeout(() => {
                    toast({ title: "Error", description: "Something went wrong, please try again." });
                }, 1500);
            }
        } catch (error) {
            console.error(error);
            setTimeout(() => {
                toast({ title: "Error", description: "Network error, please try again." });
            }, 1500);
        }

        setIsSubmitting(false);
    };

    return (
        <Layout className="pt-32 pb-16 px-8 md:px-16 lg:px-32 gap-2">
            <AnimatedText
                text="Get In Touch"
                className="font-mont font-bold !text-4xl md:!text-5xl lg:!text-6xl mb-8 text-center"
            />

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-dark/75 dark:text-light/75 text-center mb-12 max-w-2xl mx-auto"
            >
                I'm currently open to freelance opportunities, collaborations, and interesting projects. Feel free to reach out if you want to work together or just say hello!
            </motion.p>

            <div className="w-full">
                {/* Contact Form */}
                <motion.div
                    className="col-span-1 lg:col-span-3 border border-dark/2 rounded-2xl p-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-dark/20 dark:border-light/20 focus:border-dark dark:focus:border-light outline-none transition-colors text-dark dark:text-light"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-dark/20 dark:border-light/20 focus:border-dark dark:focus:border-light outline-none transition-colors text-dark dark:text-light"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-transparent border border-dark/20 dark:border-light/20 focus:border-dark dark:focus:border-light outline-none transition-colors text-dark dark:text-light"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-dark/70 dark:text-light/70 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-transparent border border-dark/20 dark:border-light/20 focus:border-dark dark:focus:border-light outline-none transition-colors text-dark dark:text-light resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full py-3 px-8 rounded-lg font-medium bg-dark text-light dark:bg-light dark:text-dark hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light border-2 border-solid border-transparent transition-colors duration-300 flex items-center justify-center"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-light dark:text-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : "Send Message"}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </Layout>
    );
};

export default Contact;