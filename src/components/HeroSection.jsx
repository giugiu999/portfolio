import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/index";

export const HeroSection = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground/90 leading-tight">
                        <span className="animate-fade-in block">{t.hello}</span>
                        <span className="text-purple-500 animate-fade-in-delay-1 block">Rosy Wang</span>
                        <span className="animate-fade-in-delay-2 block">{t.fullStackDeveloper}</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-foreground/70 animate-fade-in-delay-3 max-w-2xl mx-auto leading-relaxed">
                        {t.heroDescription}
                    </p>
                    
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="px-8 py-3 text-lg bg-purple-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95">
                            {t.viewMyWork}
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-purple-500" />
            </div>
        </section>
    )
}