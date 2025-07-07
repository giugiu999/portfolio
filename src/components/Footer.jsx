import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/index";

export const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Rosy Wang. All rights reserved.</p>
            <a 
                href="#hero" 
                className="p-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300 flex items-center gap-2"
            >
                Back to Top
                <ArrowUp className="w-4 h-4" />
            </a>
        </footer>
    );
};