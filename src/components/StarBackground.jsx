import { useState, useEffect } from 'react'

//id,size,x,y,opacity,animationduration
export const StarBackground = () => {
    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])
    
    useEffect(() => {
        generateStars()
        generateMeteors()
        const handleResize = () => {
            generateStars()
            generateMeteors()
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight * 0.0001)
        const newStars = []
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 1.5 + 0.5,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 2 + 1
            })
        }
        setStars(newStars)
    }

    const generateMeteors = () => {
        const numberOfMeteors = 8  // 减少数量，让每个更明显
        const newMeteors = []
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1.5,  // 调整尺寸
                x: window.innerWidth - Math.random() * 400,  // 从右侧开始
                y: Math.random() * 300,  // 从顶部开始
                delay: Math.random() * 8,  // 错开时间
                animationDuration: Math.random() * 2 + 2  // 2-4秒
            })
        }
        setMeteors(newMeteors)
    }
    
    return (
        <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
            {stars.map((star) => (
                <div 
                    key={star.id} 
                    className='star animate-pulse-subtle' 
                    style={{
                        width: star.size + 'px',
                        height: star.size + 'px',
                        left: `${star.x}px`,
                        top: `${star.y}px`,
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + 's'
                    }}
                />
            ))}
            {meteors.map((meteor) => (
                <div key={meteor.id}>
                    {/* 流星主体 */}
                    <div 
                        className='meteor' 
                        style={{
                            width: meteor.size * 10 + 'px',
                            height: meteor.size + 'px',
                            left: `${meteor.x}px`,
                            top: `${meteor.y}px`,
                            animationDelay: meteor.delay + 's',
                            animationDuration: meteor.animationDuration + 's'
                        }}
                    />
                    {/* 流星尾迹 */}
                    <div 
                        className='meteor-trail' 
                        style={{
                            width: meteor.size * 12 + 'px',
                            height: meteor.size * 0.3 + 'px',
                            left: `${meteor.x + meteor.size * 4}px`,
                            top: `${meteor.y + meteor.size * 0.35}px`,
                            animationDelay: meteor.delay + 's',
                            animationDuration: meteor.animationDuration + 's'
                        }}
                    />
                </div>
            ))}
        </div>
    );
};