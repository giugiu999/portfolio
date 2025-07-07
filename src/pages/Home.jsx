import { ThemeToggle } from "@/components/ThemeToggle";
import {StarBackground} from '@/components/StarBackground'
import {Navbar} from '@/components/Navbar'
import {HeroSection} from '@/components/HeroSection'
import {AboutMe} from '@/components/AboutMe'
import {Skills} from '@/components/Skills'
import {Projects} from '@/components/Projects'
import {Contact} from '@/components/Contact'
import {Footer} from '@/components/Footer'

export const Home =()=>{

    return <div className="min-h-screen bg-background text-foreground overflow-hidden">
        {/* Theme toggle */}
        <ThemeToggle />
        {/*background effects*/}
        <StarBackground />

        {/*nav bar*/}
        <Navbar />
        {/*main content*/}
        <main>
            <HeroSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </main>

        {/*footer*/}
        <Footer />
    </div>
}