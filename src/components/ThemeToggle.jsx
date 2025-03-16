import { useEffect, useState } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark-mode');
        } else {
            document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-5 right-5 bg-primary1 dark:bg-primaryDark text-light dark:text-dark p-3 rounded-full shadow-lg hover:bg-primary1/90 dark:hover:bg-primaryDark/90 transition"
        >
            {theme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
    );
};

export default ThemeToggle;