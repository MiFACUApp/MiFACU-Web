import { motion, useReducedMotion } from 'framer-motion'
import { Apple, Smartphone } from 'lucide-react'
import { useLaunch } from '../../context/LaunchContext'

const float = (y, delay = 0, reduced = false) => reduced ? {} : ({
    animate: { y: [0, y, 0] },
    transition: { duration: 4 + delay * 0.5, repeat: Infinity, ease: 'easeInOut', delay },
})

function UICard({ children, style = {}, floatY = -8, floatDelay = 0, reduced = false }) {
    return (
        <motion.div
            {...float(floatY, floatDelay, reduced)}
            style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '1rem 1.25rem',
                boxShadow: 'var(--shadow)',
                ...style,
            }}
        >
            {children}
        </motion.div>
    )
}

export default function Hero() {
    const reduced = useReducedMotion()
    const { openModal } = useLaunch()

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg)',
                padding: '6rem 0 4rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div className="hero-grid-bg" aria-hidden="true" />

            <div className="container hero-inner">
                {/* ── Text ── */}
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <span className="hero-badge">
                        🎓 Para estudiantes universitarios argentinos
                    </span>

                    <h1 className="hero-title">
                        Todo lo que necesitás para la facu,{' '}
                        <span style={{ color: 'var(--accent)' }}>en una sola app.</span>
                    </h1>

                    <p className="hero-subtitle">
                        Organizá materias, seguí parciales y finales, simulá correlativas
                        y estudiá con Milo — tu compañero gamificado de estudio.
                    </p>

                    {/* ── CTAs ── */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                        <button onClick={openModal} className="btn btn-primary hero-cta-btn">
                            <Apple size={18} /> App Store
                        </button>
                        <button onClick={openModal} className="btn btn-outline hero-cta-btn">
                            <Smartphone size={18} /> Google Play
                        </button>
                    </div>

                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                        Gratis para siempre · Funciones PRO opcionales
                    </p>
                </motion.div>

                {/* ── UI cards preview ── */}
                <motion.div
                    className="hero-mockup"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                    <UICard reduced={reduced} floatY={-9} floatDelay={0}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                                background: 'rgba(37,99,235,0.12)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '1.25rem',
                            }}>📚</div>
                            <div>
                                <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Próxima Clase</p>
                                <p style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>Análisis Matemático II</p>
                                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>Hoy · 14:00 hs · Aula 302</p>
                            </div>
                        </div>
                    </UICard>

                    <div style={{ display: 'flex', gap: 12 }}>
                        <UICard reduced={reduced} floatY={7} floatDelay={0.6} style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
                                <span style={{ fontSize: '1rem' }}>⚡</span>
                                <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>Nivel 7</span>
                                <span style={{
                                    fontSize: '0.6875rem', fontWeight: 600, color: '#58CC02',
                                    background: 'rgba(88,204,2,0.12)', padding: '1px 7px', borderRadius: 20,
                                }}>+20 XP</span>
                            </div>
                            <div style={{ background: 'var(--bg-2)', borderRadius: 99, height: 6, overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '65%' }}
                                    transition={{ delay: 1, duration: 1.2, ease: 'easeOut' }}
                                    style={{ height: '100%', background: '#58CC02', borderRadius: 99 }}
                                />
                            </div>
                            <p style={{ fontSize: '0.6875rem', color: 'var(--muted)', marginTop: 5 }}>2,450 / 3,200 XP · El Parcialero</p>
                        </UICard>

                        <UICard reduced={reduced} floatY={-6} floatDelay={1.1} style={{ flex: 1 }}>
                            <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Próximo Parcial</p>
                            <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', margin: '4px 0 2px' }}>Álgebra</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#EF4444', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.8125rem', color: '#EF4444', fontWeight: 600 }}>en 5 días</span>
                            </div>
                        </UICard>
                    </div>

                    <UICard reduced={reduced} floatY={5} floatDelay={0.3} style={{ padding: '0.75rem 1.25rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {[
                                { icon: '📊', label: 'Carrera', value: '38%' },
                                { icon: '✅', label: 'Aprobadas', value: '14' },
                                { icon: '📖', label: 'Cursando', value: '4' },
                                { icon: '🔥', label: 'Racha', value: '12d' },
                            ].map(s => (
                                <div key={s.label} style={{ textAlign: 'center' }}>
                                    <p style={{ fontSize: '1rem' }}>{s.icon}</p>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)' }}>{s.value}</p>
                                    <p style={{ fontSize: '0.625rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </UICard>
                </motion.div>
            </div>
        </section>
    )
}
