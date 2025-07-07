import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations/index";

const projects=[
    {
        id:1,
        titleKey: "scholarSync",
        descriptionKey: "scholarSyncDescription",
        tags:["Python","Flask","Machine Learning","LLM","Azure","Hackathon"],
        image:"/projects/1.png",
        link:"https://github.com/Cyl200215/Microsoft_Fabric_Hackthon"
    },
    {
        id:2,
        titleKey: "javaProjects",
        descriptionKey: "javaProjectsDescription",
        tags:["Java","JavaScript","JUnit","Integration Test","Git","XML","CI/CD"],
        image:"/projects/2.png",
        link:"https://github.com/giugiu999/androidStudio"
    },
    {
        id:3,
        titleKey: "ecommerce",
        descriptionKey: "ecommerceDescription",
        tags:["MySQL","Node.js","Docker","React","Git","CI/CD"],
        image:"/projects/3.png",
        link:"https://github.com/giugiu999/MySQL_fullStack_ecommerce"
    },
]

export const Projects = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                {t.featuredProjects} <span className="text-purple-500">{t.projectsSubtitle}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project)=>(
                    <div key={project.id} className="bg-background/80 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out border border-border group flex flex-col h-full hover:border-purple-500/50">
                        {/* Image section */}
                        <div className="flex-shrink-0">
                            <img src={project.image} alt={t[project.titleKey]} className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-500 ease-out" />
                        </div>
                        
                        {/* Content section - flex-grow to take remaining space */}
                        <div className="flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors duration-300">{t[project.titleKey]}</h3>
                            <p className="text-foreground/80 text-sm leading-relaxed mb-4 flex-grow group-hover:text-foreground transition-colors duration-300">{t[project.descriptionKey]}</p>
                            
                            {/* Tags section */}
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag)=>(
                                        <span key={tag} className="px-3 py-1 rounded-full text-xs bg-purple-500/10 text-purple-500 border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-purple-500/30 group-hover:border-purple-500/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Project link - always at bottom */}
                            <div className="mt-auto">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 hover:scale-105 transition-all duration-300 text-sm font-medium group-hover:shadow-lg group-hover:shadow-purple-500/50"
                                >
                                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                    {t.viewProject}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}