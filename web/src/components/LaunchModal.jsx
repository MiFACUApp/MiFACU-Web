import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Bell, Check } from 'lucide-react'
import CountdownDisplay from './CountdownDisplay'
import { useCountdown } from '../hooks/useCountdown'

export default function LaunchModal({ open, onClose }) {
    const time = useCountdown()
    const [email, setEmail] = useState('')
    const [notified, setNotified] = useState(false)
    const [compact, setCompact] = useState(() => window.innerWidth < 540)

    useEffect(() => {
        const handler = () => setCompact(window.innerWidth < 540)
        window.addEventListener('resize', handler, { passive: true })
        return () => window.removeEventListener('resize', handler)
    }, [])

    function handleNotify(e) {
        e.preventDefault()
        if (!email) return
        setNotified(true)
    }

    // Close on backdrop click
    function handleBackdrop(e) {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleBackdrop}
                    style={{
                        position: 'fixed', inset: 0, zIndex: 999,
                        background: 'rgba(0,0,0,0.75)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 24 }}
                        animate={{ scale: 1,   opacity: 1, y: 0  }}
                        exit={{    scale: 0.9, opacity: 0, y: 24 }}
                        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                        style={{
                            background: '#0D1B2E',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 24,
                            padding: compact ? '1.5rem' : '2.5rem',
                            maxWidth: 600,
                            width: '100%',
                            position: 'relative',
                            boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Grid bg */}
                        <div style={{
                            position: 'absolute', inset: 0, zIndex: 0,
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '48px 48px',
                            pointerEvents: 'none',
                        }} />

                        {/* Glow top */}
                        <div style={{
                            position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
                            width: 300, height: 300,
                            background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)',
                            pointerEvents: 'none', zIndex: 0,
                        }} />

                        <div style={{ position: 'relative', zIndex: 1 }}>
                            {/* Close */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute', top: -8, right: -8,
                                    background: 'rgba(255,255,255,0.08)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 8, cursor: 'pointer',
                                    color: 'rgba(255,255,255,0.5)',
                                    padding: '6px', display: 'flex',
                                    transition: 'all 0.15s',
                                }}
                                aria-label="Cerrar"
                            >
                                <X size={16} />
                            </button>

                            {/* Badge */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 6,
                                    background: 'rgba(37,99,235,0.15)',
                                    border: '1px solid rgba(37,99,235,0.3)',
                                    color: '#93C5FD',
                                    fontSize: '0.8125rem', fontWeight: 600,
                                    padding: '5px 14px', borderRadius: 20,
                                }}>
                                    🚀 Próximamente
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                fontWeight: 800, color: '#F8FAFC',
                                letterSpacing: '-0.03em', lineHeight: 1.2,
                                marginBottom: '0.5rem',
                            }}>
                                miFACU llega el<br />
                                <span style={{ color: '#60A5FA' }}>16 de Marzo de 2026</span>
                            </h2>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', marginBottom: '2rem' }}>
                                Disponible en App Store y Google Play.
                            </p>

                            {/* Countdown */}
                            <div style={{ marginBottom: '2rem' }}>
                                {time.launched ? (
                                    <p style={{ fontSize: '1.5rem', fontWeight: 700, color: '#58CC02' }}>
                                        🎉 ¡Ya disponible! Descargala ahora.
                                    </p>
                                ) : (
                                    <CountdownDisplay time={time} dark size={compact ? 'xs' : 'md'} />
                                )}
                            </div>

                            {/* Divider */}
                            <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: '1.75rem' }} />

                            {/* Email notification */}
                            {!notified ? (
                                <form onSubmit={handleNotify}>
                                    <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>
                                        <Bell size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                                        Avisame cuando esté disponible
                                    </p>
                                    <div style={{ display: 'flex', gap: 8 }}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            placeholder="tu@email.com"
                                            style={{
                                                flex: 1,
                                                background: 'rgba(255,255,255,0.07)',
                                                border: '1px solid rgba(255,255,255,0.12)',
                                                borderRadius: 10, padding: '10px 14px',
                                                color: '#F8FAFC', fontSize: '0.9rem',
                                                outline: 'none',
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ padding: '10px 20px', borderRadius: 10, flexShrink: 0 }}
                                        >
                                            Notificarme
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 10,
                                        padding: '12px 16px', borderRadius: 10,
                                        background: 'rgba(88,204,2,0.12)',
                                        border: '1px solid rgba(88,204,2,0.25)',
                                    }}
                                >
                                    <Check size={18} color="#58CC02" />
                                    <span style={{ fontSize: '0.9rem', color: '#86EFAC', fontWeight: 500 }}>
                                        ¡Listo! Te avisamos el 16 de marzo.
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
