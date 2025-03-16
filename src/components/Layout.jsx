import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";

const Layout = ({ children, className = "" }) => {
    return (
        <div className="min-h-screen bg-light dark:bg-dark w-full">
            <TransitionEffect />
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`flex flex-col items-center justify-center w-full ${className}`}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;