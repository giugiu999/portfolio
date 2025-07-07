

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-8">

                    <h1 className="text-5xl md:text-7xl font-bold text-foreground/90 leading-tight">
                        <span className="animate-fade-in block">👋 Hello, I'm</span>
                        <span className="text-purple-500 animate-fade-in-delay-1 block">Rosy Wang</span>
                        <span className="animate-fade-in-delay-2 block">Software Developer</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-foreground/70 animate-fade-in-delay-3 max-w-2xl mx-auto leading-relaxed">
                        Crafting digital experiences with modern technologies and creative solutions
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-4">
                        <button className="cosmic-button px-8 py-3 text-lg">
                            View My Work
                        </button>
                        <button className="px-8 py-3 text-lg border-2 border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                            Download CV
                        </button>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-3 animate-fade-in-delay-4 mt-8">
                        {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill, index) => (
                            <span 
                                key={skill}
                                className="px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-all duration-300"
                                style={{ animationDelay: `${2.5 + index * 0.1}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in-delay-4">
                <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-bounce"></div>
                </div>
            </div>
        </section>
    )
}