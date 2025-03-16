import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const TransitionEffect = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
            />
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
            />
        </>
    );
};

export default TransitionEffect;