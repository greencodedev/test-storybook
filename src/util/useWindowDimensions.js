import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
    const [hasRan, setHasRan] = useState(false)
    const [screenSize, setScreenSize] = useState({
        width: 1200,
        height: 780,
    })
    const updateScreenSize = () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    useEffect(() => {
        if (!hasRan) {
            setHasRan(true)
            updateScreenSize()
        }
        window.addEventListener('resize', updateScreenSize)
        return () => {
            window.removeEventListener('resize', updateScreenSize)
        }
    }, [screenSize])

    return screenSize
}
