import { useState } from "react";
import {
    FileText,
    Code,
    Coffee,
    Server,
    GitBranch,
    Container,
    Cloud,
    Database,
    DatabaseBackup,
    DatabaseZap,
    Palette,
    Globe,
    Grid3X3
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/index";

const skillCategories = [
    {
        nameKey: "frontend",
        icon: Palette,
        skills: [
            { name: "HTML/CSS", icon: FileText },
            { name: "JavaScript", icon: Code },
            { name: "Tailwind CSS", icon: Palette },
            { name: "React", icon: Code },
        ]
    },
    {
        nameKey: "backend",
        icon: Server,
        skills: [
            { name: "Java", icon: Coffee },
            { name: "C++", icon: Code },
            { name: "Python", icon: Server },
            { name: "Node.js", icon: Server },
        ]
    },
    {
        nameKey: "tools",
        icon: GitBranch,
        skills: [
            { name: "Git", icon: GitBranch },
            { name: "Kubernetes", icon: Container },
            { name: "Docker", icon: Container },
        ]
    },
    {
        nameKey: "database",
        icon: Database,
        skills: [
            { name: "MySQL", icon: Database },
            { name: "PostgreSQL", icon: DatabaseBackup },
            { name: "MongoDB", icon: DatabaseZap },
        ]
    },
    {
        nameKey: "cloud",
        icon: Cloud,
        skills: [
            { name: "AWS", icon: Cloud },
        ]
    },
];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const { language } = useLanguage();
    const t = translations[language];

    // 获取当前激活的分类
    const currentCategory = skillCategories.find(cat => t[cat.nameKey] === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    {t.mySkills.split(' ')[0]} <span className="text-purple-500">{t.mySkills.split(' ')[1]}</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
                    {/* All 按钮 */}
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={cn(
                            "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                            activeCategory === "All" ? "bg-purple-500 text-white" : "text-foreground/70 hover:text-foreground"
                        )}
                    >
                        <div className="flex items-center gap-2">
                            <Grid3X3 className="w-5 h-5" />
                            <span>{t.all}</span>
                        </div>
                    </button>

                    {/* 分类按钮 */}
                    {skillCategories.map((category, index) => {
                        const CategoryIcon = category.icon;
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(t[category.nameKey])}
                                className={cn(
                                    "px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                    activeCategory === t[category.nameKey] ? "bg-purple-500 text-white" : "text-foreground/70 hover:text-foreground"
                                )}
                            >
                                <div className="flex items-center gap-2">
                                    <CategoryIcon className="w-5 h-5" />
                                    <span>{t[category.nameKey]}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* 显示技能 */}
                {activeCategory === "All" ? (
                    // 显示所有分类的技能
                    <div className="space-y-8">
                        {skillCategories.map((category, categoryIndex) => {
                            const CategoryIcon = category.icon;
                            return (
                                <div key={categoryIndex} className="space-y-4">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-full bg-purple-500/10">
                                            <CategoryIcon className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground">{t[category.nameKey]}</h3>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {category.skills.map((skill, skillIndex) => {
                                            const SkillIcon = skill.icon;
                                            return (
                                                <div key={skillIndex} className="bg-background/80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2 rounded-full bg-purple-500/10">
                                                            <SkillIcon className="w-5 h-5 text-purple-500" />
                                                        </div>
                                                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // 显示单个分类的技能
                    currentCategory && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-full bg-purple-500/10">
                                    <currentCategory.icon className="w-6 h-6 text-purple-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">{activeCategory}</h3>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {currentCategory.skills.map((skill, skillIndex) => {
                                    const SkillIcon = skill.icon;
                                    return (
                                        <div key={skillIndex} className="bg-background/80 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 rounded-full bg-purple-500/10">
                                                    <SkillIcon className="w-5 h-5 text-purple-500" />
                                                </div>
                                                <h4 className="text-lg font-semibold">{skill.name}</h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};