import { motion } from 'framer-motion'
import { useLaunch } from '../../context/LaunchContext'

const freeFeatures = [
    'Gestión de Materias (organizar tu cursada)',
    'Horarios de Cursadas — vista semanal',
    'Agenda de Parciales y Entregas con notificaciones',
    'Agenda de Finales con notificaciones',
    'Repositorio de Links',
    'Tareas Rápidas',
    'Dark Mode',
    'Sincronización en la Nube',
    '1 reseña de cátedra + 1 de final (para siempre)',
]

const proFeatures = [
    { text: 'Simulador de Correlativas', note: null },
    { text: 'Calendario Académico (Línea de Tiempo)', note: null },
    { text: 'Reseñas de Profesores y Materias', note: 'reviews' },
    { text: 'Temas de Finales', note: null },
    { text: 'Electivas ISI (UTN FRRE — por ahora)', note: null },
    { text: 'Personalización de Colores (60 opciones)', note: null },
    { text: 'Todo Milo — Timer, XP y Rankings', note: null },
    { text: 'Acceso prioritario a nuevas funciones', note: null },
]

export default function Pricing() {
    const { openModal } = useLaunch()
    return (
        <section id="precios" style={{ padding: '6rem 0', background: 'var(--bg-2)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="eyebrow">Precios</span>
                    <h2 className="section-heading">Empezá gratis, potenciá con PRO</h2>
                    <p className="section-sub" style={{ marginTop: '1rem' }}>
                        El núcleo de miFACU es 100% gratis. Desbloqueá las herramientas avanzadas con PRO.
                    </p>
                </motion.div>

                <div className="pricing-grid" style={{ marginTop: '3.5rem' }}>
                    {/* FREE */}
                    <motion.div
                        className="pricing-card"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        style={{
                            background: 'var(--card)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            boxShadow: 'var(--shadow)',
                        }}
                    >
                        <div style={{ marginBottom: '1.75rem' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Gratis</p>
                            <p style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', margin: '0.25rem 0' }}>$0</p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Para siempre</p>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '2rem' }}>
                            {freeFeatures.map(f => (
                                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--muted)' }}>
                                    <span style={{ color: '#22C55E', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                                </li>
                            ))}
                        </ul>

                        <button onClick={openModal} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                            Descargar gratis
                        </button>
                    </motion.div>

                    {/* PRO */}
                    <motion.div
                        className="pricing-card pricing-card-pro"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -4 }}
                        style={{
                            background: 'var(--card)',
                            border: '1.5px solid #D4AF37',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            boxShadow: '0 8px 40px rgba(212,175,55,0.15)',
                            position: 'relative',
                        }}
                    >
                        {/* Badge más popular */}
                        <span
                            style={{
                                position: 'absolute',
                                top: -14,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(135deg, #D4AF37, #F0CC5A)',
                                color: '#1A2B4A',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                padding: '4px 16px',
                                borderRadius: 20,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            ⭐ Más popular
                        </span>

                        <div style={{ marginBottom: '1.75rem' }}>
                            <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.06em' }}>PRO</p>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, margin: '0.25rem 0 0' }}>
                                <p style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1 }}>
                                    $0,99
                                </p>
                                <span style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>/mes</span>
                            </div>
                            <p style={{ fontSize: '0.8125rem', color: '#D4AF37', fontWeight: 600, marginTop: 4 }}>
                                o $9,99/año <span style={{ fontWeight: 400, color: 'var(--muted)' }}>· 2 meses gratis</span>
                            </p>
                            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: 2 }}>Disponible en App Store y Google Play</p>
                        </div>

                        {/* All free + PRO extras */}
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>
                            Todo lo de Free, más:
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: '1.25rem' }}>
                            {proFeatures.map(f => (
                                <li key={f.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--muted)' }}>
                                    <span style={{ color: '#D4AF37', fontWeight: 700, flexShrink: 0 }}>⭐</span>
                                    <span>
                                        {f.text}
                                        {f.note === 'reviews' && (
                                            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block', marginTop: 2, lineHeight: 1.4 }}>
                                                PRO: publicá reseñas de cátedras y finales sin límite. Ver todas las reseñas también requiere PRO.
                                            </span>
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Review credibility note */}
                        <div style={{
                            background: 'rgba(212,175,55,0.07)',
                            border: '1px solid rgba(212,175,55,0.2)',
                            borderRadius: 10,
                            padding: '10px 14px',
                            marginBottom: '1.25rem',
                            fontSize: '0.8125rem',
                            color: 'var(--muted)',
                            lineHeight: 1.5,
                        }}>
                            <span style={{ color: '#D4AF37', fontWeight: 700 }}>📝 Sobre las reseñas: </span>
                            cada reseña muestra cuántas reseñas tiene ese usuario, así podés saber si es alguien de confianza. Los usuarios Free pueden publicar 1 reseña de cátedra y 1 de final para siempre — PRO las publica sin límite.
                        </div>

                        <button onClick={openModal} className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                            Obtener PRO
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
