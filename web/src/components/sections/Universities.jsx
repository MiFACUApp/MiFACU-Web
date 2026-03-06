import { motion } from 'framer-motion'

const unis = [
    {
        name: 'UTN',
        full: 'Universidad Tecnológica Nacional',
        carreras: [
            { name: 'Ingeniería en Sistemas', calendar: true },
            { name: 'Ingeniería Electromecánica', calendar: true },
            { name: 'Ingeniería Química', calendar: true },
            { name: 'Licenciatura en Administración Rural', calendar: true },
        ],
    },
    {
        name: 'UNNE Arquitectura',
        full: 'Arquitectura y Urbanismo',
        carreras: [
            { name: 'Diseño Gráfico', calendar: true },
            { name: 'Arquitectura', calendar: true },
        ],
    },
    {
        name: 'UNCAS',
        full: 'Universidad Nacional del Chaco Austral',
        carreras: [
            { name: 'Ingeniería en Sistemas de Información', calendar: false },
            { name: 'Licenciatura en Psicología', calendar: false },
            { name: 'Ingeniería Industrial', calendar: false },
            { name: 'Ingeniería Química', calendar: false },
            { name: 'Ingeniería en Alimentos', calendar: false },
            { name: 'Licenciatura en Nutrición', calendar: false },
            { name: 'Contador Público', calendar: false },
            { name: 'Farmacia', calendar: false },
            { name: 'Licenciatura en Administración', calendar: false },
            { name: 'Medicina', calendar: false },
            { name: 'Ingeniería Agronómica', calendar: false },
            { name: 'Ciencias Veterinarias', calendar: false },
        ],
    },
    {
        name: 'UNNE Agrarias',
        full: 'Ciencias Agrarias',
        carreras: [
            { name: 'Ingeniería Industrial', calendar: false },
            { name: 'Ingeniería Agronómica', calendar: false },
        ],
    },
    {
        name: 'UNNE Económicas',
        full: 'Ciencias Económicas',
        carreras: [
            { name: 'Contador Público', calendar: false },
            { name: 'Licenciado en Administración', calendar: false },
            { name: 'Licenciado en Economía', calendar: false },
        ],
    },
    {
        name: 'UNNE Exactas',
        full: 'Ciencias Exactas y Naturales y Agrimensura',
        carreras: [
            { name: 'Ingeniería en Agrimensura', calendar: false },
            { name: 'Ingeniería Eléctrica', calendar: false },
            { name: 'Ingeniería en Electrónica', calendar: false },
        ],
    },
    {
        name: 'UNNE Veterinarias',
        full: 'Ciencias Veterinarias',
        carreras: [
            { name: 'Ciencias Veterinarias', calendar: false },
            { name: 'Tecnicatura en Administración de Empresas', calendar: false },
        ],
    },
    {
        name: 'UNNE Derecho',
        full: 'Derecho y Ciencias Sociales y Políticas',
        carreras: [
            { name: 'Martillero Público', calendar: false },
            { name: 'Abogacía', calendar: false },
        ],
    },
    {
        name: 'UNNE Ingeniería',
        full: 'Ingeniería',
        carreras: [
            { name: 'Ingeniería Civil', calendar: false },
            { name: 'Ingeniería Electromecánica', calendar: false },
            { name: 'Ingeniería Mecánica', calendar: false },
        ],
    },
    {
        name: 'UNNE Medicina',
        full: 'Medicina',
        carreras: [
            { name: 'Licenciatura en Enfermería', calendar: false },
            { name: 'Medicina', calendar: false },
            { name: 'Licenciatura en Kinesiología y Fisiatría', calendar: false },
        ],
    },
    {
        name: 'UNNE Odontología',
        full: 'Odontología',
        carreras: [
            { name: 'Odontología', calendar: false },
        ],
    },
]

export default function Universities() {
    return (
        <section id="universidades" style={{ padding: '5rem 0', background: 'var(--bg)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="eyebrow">Soporte institucional</span>
                    <h2 className="section-heading">Integrado con tu universidad</h2>
                    <p className="section-sub" style={{ marginTop: '1rem' }}>
                        Carreras disponibles desde el primer día. Las marcadas con 📅 tienen
                        el calendario académico oficial sincronizado automáticamente.
                    </p>
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{ display: 'flex', gap: 16, marginTop: '1.5rem', flexWrap: 'wrap' }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: 'var(--muted)' }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block' }} />
                        Carrera disponible
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: 'var(--muted)' }}>
                        <span style={{ fontSize: '0.875rem' }}>📅</span>
                        Con calendario académico integrado
                    </span>
                </motion.div>

                <div className="uni-grid" style={{ marginTop: '2rem' }}>
                    {unis.map((u, i) => (
                        <motion.div
                            key={u.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            style={{
                                background: 'var(--card)',
                                border: '1px solid var(--border)',
                                borderRadius: 'var(--radius)',
                                padding: '1.75rem',
                                boxShadow: 'var(--shadow)',
                            }}
                        >
                            {/* Header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: '1.25rem' }}>
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 12,
                                        background: 'var(--bg-2)',
                                        border: '1px solid var(--border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.25rem',
                                    }}
                                >
                                    🏫
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text)', lineHeight: 1.2 }}>{u.name}</p>
                                    <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{u.full}</p>
                                </div>
                            </div>

                            {/* Carreras */}
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {u.carreras.map(c => (
                                    <li
                                        key={c.name}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            gap: 8,
                                            padding: '8px 12px',
                                            borderRadius: 8,
                                            background: 'var(--bg-2)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.875rem', color: 'var(--text)' }}>
                                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                                            {c.name}
                                        </span>
                                        {c.calendar && (
                                            <span
                                                title="Calendario académico integrado"
                                                style={{
                                                    fontSize: '0.75rem',
                                                    background: 'rgba(37,99,235,0.1)',
                                                    color: 'var(--accent)',
                                                    padding: '2px 8px',
                                                    borderRadius: 20,
                                                    fontWeight: 600,
                                                    whiteSpace: 'nowrap',
                                                    flexShrink: 0,
                                                }}
                                            >
                                                📅 Calendario
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.875rem', color: 'var(--muted)' }}
                >
                    ¿Tu carrera o universidad no está? Próximamente agregamos más. Podés sugerir la tuya desde la app.
                </motion.p>
            </div>
        </section>
    )
}
