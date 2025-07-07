import { useState, useEffect } from "react";
import { Sun, Moon, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === 'dark') {
            setIsDark(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);
    
    const handleThemeToggle = () => {
        if (isDark) {
            setIsDark(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    }
    
    return (
        <div className="fixed top-5 right-5 z-50 flex flex-col gap-3">
            {/* Theme Toggle */}
            <button 
                onClick={handleThemeToggle} 
                className={cn(
                    "p-2 rounded-full transition-colors duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    "hover:bg-primary/10",
                    "dark:hover:bg-primary/10"
                )}
                title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            > 
                {isDark ? (
                    <Sun className="h-6 w-6 text-yellow-500" />
                ) : (
                    <Moon className="h-6 w-6 text-blue-900" />
                )}
            </button>

            {/* Language Toggle */}
            <button 
                onClick={toggleLanguage}
                className={cn(
                    "p-2 rounded-full transition-colors duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    "hover:bg-primary/10",
                    "dark:hover:bg-primary/10"
                )}
                title={language === 'en' ? "切换到中文" : "Switch to English"}
            >
                <Languages className="h-6 w-6 text-purple-500" />
            </button>
        </div>
    );
};