import { motion } from 'framer-motion'
import { Apple, Smartphone } from 'lucide-react'
import { useLaunch } from '../../context/LaunchContext'

export default function FinalCTA() {
    const { openModal } = useLaunch()

    return (
        <section
            id="descargar"
            style={{
                padding: '7rem 0',
                background: 'linear-gradient(135deg, #0D1B2E 0%, #1A2B4A 50%, #0D1B2E 100%)',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center',
            }}
        >
            <div className="hero-grid-bg" aria-hidden="true" style={{ opacity: 0.15 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                        fontWeight: 800, color: '#F8FAFC',
                        letterSpacing: '-0.03em', lineHeight: 1.15,
                        marginBottom: '1.25rem',
                    }}>
                        Tu mejor cuatrimestre empieza acá.
                    </h2>
                    <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', maxWidth: 480, marginInline: 'auto' }}>
                        Descargá miFACU gratis y empezá a organizarte hoy. Sin cuenta, en segundos.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                        <button
                            onClick={openModal}
                            className="btn"
                            style={{ background: '#fff', color: '#0F172A', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                        >
                            <Apple size={18} /> App Store
                        </button>
                        <button
                            onClick={openModal}
                            className="btn"
                            style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
                        >
                            <Smartphone size={18} /> Google Play
                        </button>
                    </div>

                    <p style={{ marginTop: '1.5rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)' }}>
                        Gratis para siempre · Funciones PRO opcionales · iOS & Android
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
