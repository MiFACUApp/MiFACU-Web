import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ to, duration = 1.5 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    useEffect(() => {
        if (!inView) return
        let start = 0
        const step = to / (duration * 60)
        const timer = setInterval(() => {
            start += step
            if (start >= to) { setCount(to); clearInterval(timer) }
            else setCount(Math.floor(start))
        }, 1000 / 60)
        return () => clearInterval(timer)
    }, [inView, to, duration])

    return <span ref={ref}>{count}</span>
}

const stats = [
    { icon: '📚', value: 15, suffix: '+', label: 'Pantallas y herramientas' },
    { icon: '🏫', value: 2,  suffix: '+', label: 'Universidades incorporadas · y muchas más próximamente' },
    { icon: '📅', value: 4,  suffix: '',  label: 'Carreras con calendario oficial integrado' },
    { icon: '🎓', value: 7,  suffix: '',  label: 'Carreras agregadas · próximamente más' },
]

export default function StatsBar() {
    return (
        <section
            style={{
                background: 'var(--bg-2)',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                padding: '3rem 0',
            }}
        >
            <div className="container stats-grid">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        className="stat-item"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        <span className="stat-icon">{s.icon}</span>
                        <span className="stat-number">
                            <CountUp to={s.value} />
                            {s.suffix}
                        </span>
                        <span className="stat-label">{s.label}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
