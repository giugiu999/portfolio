import { Download, Calendar, MapPin, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/index";

const workExperience = [
    {
        titleKey: "softwareEngineer",
        company: "@Keak",
        location: "Edmonton, Alberta, CA",
        period: "June 2025 - Current",
        descriptionKey: "keakDescription",
        technologies: ["Node.js", "JavaScript"],
        link: "https://keak.com/",
    },
    {
        titleKey: "softwareDeveloper",
        company: "@UAlberta Future Creators",
        location: "Edmonton, Alberta, CA",
        period: "May 2025 - August 2025",
        descriptionKey: "uafcDescription",
        technologies: ["JavaScript", "React", "Python", "Git", "Django"],
        link: "https://uafc.ca/",
    },
    {
        titleKey: "teachingAssistant",
        company: "@University of Alberta",
        location: "Edmonton, Alberta, CA",
        period: "May 2025 - June 2025",
        descriptionKey: "ualbertaDescription",
        technologies: ["Python"],
        link: "https://apps.ualberta.ca/catalogue/course/cmput/174",
    },
    {
        titleKey: "softwareEngineerIntern",
        company: "@TAL Education",
        location: "Remote, New York, NY",
        period: "June 2024 - Sep 2024",
        descriptionKey: "talDescription",
        technologies: ["Kubernetes", "DevOps", "Golang"],
        link: "https://www.100tal.com/en-us/",
    },
];

export const AboutMe = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    {t.aboutMe.split(' ')[0]} <span className="text-purple-500">{t.aboutMe.split(' ')[1]}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
                    {/* 左侧内容 */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold">{t.passionateDeveloper}</h3>
                        <p className="text-foreground/70">
                            {t.aboutDescription1}
                        </p>

                        <p className="text-foreground/70">
                            {t.aboutDescription2}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href="#contact" className="px-8 py-3 text-lg bg-purple-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95">
                                {t.getInTouch}
                            </a>
                            <a href="/resume.pdf" className="px-8 py-3 text-lg border-2 border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                                {t.downloadResume}
                            </a>
                        </div>
                    </div>

                    {/* 右侧 Work Experience */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-center md:text-left">{t.workExperience}</h3>
                        
                        <div className="max-h-96 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                            {workExperience.map((job, index) => (
                                <div key={index} className="gradient-border p-6 card-hover">
                                    <div className="space-y-4">
                                        {/* 职位和公司 */}
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1 text-left">
                                                <h4 className="text-lg font-semibold text-foreground">{t[job.titleKey]}</h4>
                                                <p className="text-purple-500 font-medium">{job.company}</p>
                                            </div>
                                            <a 
                                                href={job.link} 
                                                className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors duration-300 flex-shrink-0 ml-4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Building className="w-4 h-4 text-purple-500" />
                                            </a>
                                        </div>

                                        {/* 位置和时间 */}
                                        <div className="flex items-center gap-4 text-sm text-foreground/70">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{job.period}</span>
                                            </div>
                                        </div>

                                        {/* 描述 */}
                                        <p className="text-foreground/80 text-sm leading-relaxed text-left">
                                            {t[job.descriptionKey]}
                                        </p>

                                        {/* 技术栈 */}
                                        <div className="flex flex-wrap gap-2">
                                            {job.technologies.map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}