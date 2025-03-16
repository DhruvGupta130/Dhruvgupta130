import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const AnimatedText = ({ text, className = "" }) => {
    // If text is not a string (like a ReactNode), render it directly
    if (typeof text !== "string") {
        return (
            <motion.h1
                className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text}
            </motion.h1>
        );
    }

    // If text is a string, split and animate each word
    const words = text.split(" ");

    return (
        <motion.h1
            className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
            variants={quote}
            initial="initial"
            animate="animate"
        >
            {words.map((word, index) => (
                <motion.span
                    key={word + "-" + index}
                    className="inline-block"
                    variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default AnimatedText;