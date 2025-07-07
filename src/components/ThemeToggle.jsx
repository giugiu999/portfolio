import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    
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
    
    const toggleTheme = () => {
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
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                "hover:bg-primary/10",
                "dark:hover:bg-primary/10"
            )}
        > 
            {isDark ? (
                <Sun className="h-6 w-6 text-yellow-500" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
}