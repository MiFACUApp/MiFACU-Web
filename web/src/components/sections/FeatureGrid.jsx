import { motion } from 'framer-motion'

const items = [
    { icon: '🌙', title: 'Dark Mode', desc: 'Modo oscuro completo en toda la app. Tus ojos te lo van a agradecer a las 2am antes del parcial.' },
    { icon: '🔔', title: 'Notificaciones Inteligentes', desc: 'Configurá con cuánta anticipación querés que te avisen de cada parcial o entrega. Nunca más un "se me olvidó".' },
    { icon: '📊', title: 'Progreso de Carrera', desc: 'Seguí en porcentaje cuánto de tu carrera completaste, con desglose por aprobadas, regulares y cursando.' },
    { icon: '🎨', title: 'Personalización PRO', desc: 'Elegí el color de acento de 6 elementos distintos de la app. 60 opciones, tu estilo.' },
    { icon: '⚡', title: 'Accesos Directos', desc: 'Configurá qué herramientas querés en tu pantalla de inicio. Acceso rápido a lo que más usás.' },
    { icon: '🏫', title: 'Calendario Académico Oficial', desc: 'Según la universidad y carrera que elijas, podés sincronizar tu app con el calendario académico oficial. Fechas de exámenes, días libres y eventos de tu facultad. Más carreras próximamente.' },
    { icon: '📋', title: 'Tareas Rápidas', desc: 'Una lista de tareas integrada en el Home. Creá recordatorios rápidos con fecha, color y ordenálos como quieras.' },
    { icon: '🔄', title: 'Sincronización en la Nube', desc: 'Tus datos siempre sincronizados. Cambiás de teléfono y no perdés nada.' },
]

export default function FeatureGrid() {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-2)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="eyebrow">Y mucho más</span>
                    <h2 className="section-heading">Todo lo que necesitás en un solo lugar</h2>
                </motion.div>

                <div className="mini-grid" style={{ marginTop: '3rem' }}>
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.45 }}
                            whileHover={{ y: -3 }}
                            style={{
                                background: 'var(--card)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius)',
                                padding: '1.5rem',
                                boxShadow: 'var(--shadow)',
                            }}
                        >
                            <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                                {item.title}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
