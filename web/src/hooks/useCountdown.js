import { useEffect, useState } from 'react'

function calcTimeLeft(target) {
    const diff = new Date(target) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, launched: true }
    return {
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        launched: false,
    }
}

// March 16 2026 00:00:00 UTC-3 (Argentina)
const LAUNCH_DATE = '2026-03-16T03:00:00Z'

export function useCountdown() {
    const [time, setTime] = useState(() => calcTimeLeft(LAUNCH_DATE))

    useEffect(() => {
        const id = setInterval(() => setTime(calcTimeLeft(LAUNCH_DATE)), 1000)
        return () => clearInterval(id)
    }, [])

    return time
}
