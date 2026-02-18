import { motion } from 'framer-motion'

const features = [
    {
        icon: '📚',
        accent: '#2563EB',
        title: 'Materias y Horarios',
        description:
            'Agregá todas tus materias con su estado y hasta 3 bloques de horario. miFACU detecta conflictos automáticamente antes de que los descubras el primer día de clases.',
        bullets: [
            'Múltiples horarios por materia',
            'Detección de conflictos en tiempo real',
            'Estados: Cursando · Regular · Aprobado',
            'Vista semanal por día',
        ],
        preview: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                    { name: 'Análisis Matemático II', state: 'Cursando', color: '#2563EB' },
                    { name: 'Álgebra',                state: 'Regular',  color: '#F59E0B' },
                    { name: 'Física I',               state: 'Aprobada', color: '#22C55E' },
                    { name: 'Algoritmos',             state: 'Aprobada', color: '#22C55E' },
                ].map(m => (
                    <div
                        key={m.name}
                        style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '8px 10px', borderRadius: 8,
                            background: 'var(--bg)', border: '1px solid var(--border)',
                        }}
                    >
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text)', fontWeight: 500 }}>{m.name}</span>
                        <span style={{
                            fontSize: '0.6875rem', fontWeight: 600, padding: '2px 8px', borderRadius: 20,
                            background: `${m.color}18`, color: m.color,
                        }}>{m.state}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: '📝',
        accent: '#F59E0B',
        title: 'Parciales y Finales',
        description:
            'Nunca más te olvidés de una fecha. Cargá parciales y finales con hora, materia y recordatorio. Notificaciones con la anticipación que vos elegís.',
        bullets: [
            'Countdown hasta cada examen',
            'Notificaciones personalizables',
            'Colores y etiquetas propias',
            'Integrado con el Calendario Académico',
        ],
        preview: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                    { materia: 'Álgebra',           tipo: 'Parcial 1',   dias: 5,  urgent: true  },
                    { materia: 'Análisis II',        tipo: 'TP Final',    dias: 12, urgent: false },
                    { materia: 'Física I',           tipo: 'Final',       dias: 28, urgent: false },
                ].map(e => (
                    <div
                        key={e.materia}
                        style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '8px 10px', borderRadius: 8,
                            background: 'var(--bg)', border: `1px solid ${e.urgent ? '#EF444430' : 'var(--border)'}`,
                        }}
                    >
                        <div>
                            <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)' }}>{e.materia}</p>
                            <p style={{ fontSize: '0.6875rem', color: 'var(--muted)' }}>{e.tipo}</p>
                        </div>
                        <span style={{
                            fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: 20,
                            background: e.urgent ? '#EF444418' : 'var(--bg-2)',
                            color: e.urgent ? '#EF4444' : 'var(--muted)',
                        }}>
                            {e.dias === 5 ? '⚠ ' : ''}en {e.dias}d
                        </span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: '🗺️',
        accent: '#8B5CF6',
        pro: true,
        title: 'Simulador de Correlativas',
        description:
            'Visualizá el mapa completo de tu carrera. Navegá entre materias, descubrí qué necesitás para avanzar y simulá distintos recorridos.',
        bullets: [
            'Diagrama visual con nodos y conexiones',
            'Color por estado de cada materia',
            'Detalle de correlativas al tocar un nodo',
            'Planificación de semestres futuros',
        ],
        preview: (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[
                    { label: 'Análisis I',  color: '#22C55E' },
                    { label: 'Álgebra',     color: '#22C55E' },
                    { label: 'Análisis II', color: '#3B82F6' },
                    { label: 'Física I',    color: '#22C55E' },
                    { label: 'Física II',   color: '#94A3B8' },
                    { label: 'Análisis III',color: '#EF4444' },
                    { label: 'POO',         color: '#3B82F6' },
                    { label: 'Sist. Op.',   color: '#EF4444' },
                ].map(n => (
                    <span
                        key={n.label}
                        style={{
                            fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: 20,
                            background: `${n.color}18`, color: n.color,
                            border: `1px solid ${n.color}30`,
                        }}
                    >
                        {n.label}
                    </span>
                ))}
            </div>
        ),
    },
    {
        icon: '🔗',
        accent: '#14B8A6',
        title: 'Repositorio',
        description:
            'Tu biblioteca personal de recursos académicos. Guardá links a apuntes, PDFs y videos, organizados por materia con colores para encontrarlos al instante.',
        bullets: [
            'Organizado por materia',
            'Abrí links con un tap',
            'Búsqueda instantánea',
            'Colores personalizados',
        ],
        preview: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                    { title: 'Apuntes Parcial 2',   type: 'PDF',   color: '#EF4444' },
                    { title: 'Playlist Álgebra YT', type: 'Video', color: '#F97316' },
                    { title: 'Drive — TPs 2026',    type: 'Drive', color: '#3B82F6' },
                    { title: 'Libro Análisis PDF',  type: 'PDF',   color: '#EF4444' },
                ].map(l => (
                    <div
                        key={l.title}
                        style={{
                            display: 'flex', alignItems: 'center', gap: 8,
                            padding: '7px 10px', borderRadius: 8,
                            background: 'var(--bg)', border: '1px solid var(--border)',
                        }}
                    >
                        <span style={{
                            width: 8, height: 8, borderRadius: '50%', background: l.color, flexShrink: 0,
                        }} />
                        <span style={{ fontSize: '0.8125rem', color: 'var(--text)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title}</span>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--muted)' }}>{l.type}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: '📅',
        accent: '#10B981',
        pro: true,
        title: 'Línea de Tiempo',
        description:
            'Un calendario académico anual que combina tus eventos personales con el calendario institucional de tu universidad. Sabés exactamente qué pasa cada día del año.',
        bullets: [
            'Vista mensual navegable',
            'Eventos personales + institucionales',
            'Soporte para UTN y UNNE (2026)',
            'Indicador de semanas de alta carga',
        ],
        preview: (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>Marzo 2026</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>3 eventos</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, fontSize: '0.625rem', color: 'var(--muted)', textAlign: 'center', marginBottom: 4 }}>
                    {['L','M','X','J','V','S','D'].map(d => <span key={d}>{d}</span>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                    {Array.from({ length: 31 }, (_, i) => {
                        const day = i + 1
                        const isEvent = [7, 14, 22].includes(day)
                        const isToday = day === 18
                        return (
                            <div
                                key={day}
                                style={{
                                    aspectRatio: '1',
                                    borderRadius: 6,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.625rem',
                                    fontWeight: isEvent || isToday ? 700 : 400,
                                    background: isToday ? '#10B981' : isEvent ? '#10B98118' : 'transparent',
                                    color: isToday ? '#fff' : isEvent ? '#10B981' : 'var(--muted)',
                                }}
                            >
                                {day}
                            </div>
                        )
                    })}
                </div>
            </div>
        ),
    },
    {
        icon: '⭐',
        accent: '#F97316',
        pro: true,
        title: 'Comunidad Universitaria',
        description:
            'Reseñas reales de profesores y materias, y temas frecuentes de finales según quienes ya rindieron. Moderado por IA.',
        bullets: [
            'Reseñas anónimas de profesores',
            'Temas frecuentes de finales',
            'Sistema de votos (útil / no útil)',
            'Moderación automática con IA',
        ],
        preview: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                    { prof: 'Dr. Rodríguez', materia: 'Análisis II', estrellas: 4, review: 'Excelente para la teoría, muy claro en los finales.' },
                    { prof: 'Ing. García',   materia: 'Algoritmos',   estrellas: 5, review: 'Muy buen profesor, siempre dispuesto a ayudar.' },
                ].map(r => (
                    <div
                        key={r.prof}
                        style={{
                            padding: '8px 10px', borderRadius: 8,
                            background: 'var(--bg)', border: '1px solid var(--border)',
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text)' }}>{r.prof}</span>
                            <span style={{ fontSize: '0.75rem', color: '#F59E0B' }}>{'★'.repeat(r.estrellas)}</span>
                        </div>
                        <p style={{ fontSize: '0.6875rem', color: 'var(--muted)', lineHeight: 1.4, margin: 0 }}>{r.review}</p>
                    </div>
                ))}
            </div>
        ),
    },
]

export default function Features() {
    return (
        <section id="features" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ maxWidth: 600, marginBottom: '3.5rem' }}
                >
                    <span className="eyebrow">Funciones</span>
                    <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
                        Una herramienta para cada<br />momento de tu carrera
                    </h2>
                    <p className="section-sub" style={{ marginTop: '1rem' }}>
                        Desde el primer día hasta la graduación, miFACU crece con vos.
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.5 }}
                            whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(0,0,0,0.12)' }}
                            style={{
                                background: 'var(--card)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius)',
                                padding: '1.5rem',
                                boxShadow: 'var(--shadow)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                transition: 'box-shadow 0.3s, transform 0.3s',
                            }}
                        >
                            {/* Header */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{
                                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                                    background: `${f.accent}18`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.375rem',
                                }}>
                                    {f.icon}
                                </div>
                                {f.pro && <span className="badge-pro">PRO</span>}
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.375rem' }}>
                                    {f.title}
                                </h3>
                                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                                    {f.description}
                                </p>
                            </div>

                            {/* Live preview */}
                            <div style={{
                                background: 'var(--bg-2)',
                                border: '1px solid var(--border)',
                                borderRadius: 10,
                                padding: '0.875rem',
                            }}>
                                {f.preview}
                            </div>

                            {/* Bullets */}
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                                {f.bullets.map(b => (
                                    <li key={b} style={{ display: 'flex', gap: 8, fontSize: '0.8125rem', color: 'var(--muted)' }}>
                                        <span style={{ color: f.accent, fontWeight: 700, flexShrink: 0 }}>✓</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
