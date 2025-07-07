import {cn} from '@/lib/utils'
import {useState,useEffect} from 'react'
import {X, Menu} from 'lucide-react'
const navItems=[
    {name:'Home',href:'#hero'},
    {name:'About',href:'#about'},
    {name:'Skills',href:'#skills'},
    {name:'Projects',href:'#projects'},
    {name:'Contact',href:'#contact'},
]
export const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false)
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(true)
    useEffect(()=>{
        const handleScroll=()=>{
            setIsScrolled(window.screenY>10)
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    },[])
    return (
        <nav className={cn('fixed w-full z-40 transition-all duration-300',isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-sx":"py-5")}>
            <div className='container flex px-4 flex items-center justify-between'>
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Rosy</span> <span className="text-purple-500">Portfolio</span>
                    </span>
                </a>
                
                {/* desktop nav */}
                <div className="hidden md:flex space-x-20 mr-30">
                    {navItems.map((item,key)=>(
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-purple-500 transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button onClick={()=> setIsMobileMenuOpen((prev)=>!prev)}
                    className='md:hidden p-2 text-foreground z-50'
                    aria-label={isMobileMenuOpen?"Close Menu":"Open Menu"}> {isMobileMenuOpen?<X size={24}/>:<Menu size={24}/>} </button>
                <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMobileMenuOpen? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item,key)=>(
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-purple-500 transition-colors duration-300" onClick={()=>setIsMobileMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}