import { useState } from 'react'
import { motion } from 'framer-motion'

/* ─── Timer visual ───────────────────────────────────────────── */
function TimerVisual() {
    const r = 72, cx = 90, cy = 90
    const circ = 2 * Math.PI * r
    const progress = 0.72 // 72% done
    return (
        <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
        }}>
            {/* Ring */}
            <div style={{ position: 'relative', width: 180, height: 180 }}>
                <svg width="180" height="180" viewBox="0 0 180 180">
                    <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(88,204,2,0.12)" strokeWidth="10" />
                    <motion.circle
                        cx={cx} cy={cy} r={r}
                        fill="none"
                        stroke="#58CC02"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={circ}
                        initial={{ strokeDashoffset: circ }}
                        whileInView={{ strokeDashoffset: circ * (1 - progress) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                        transform={`rotate(-90 ${cx} ${cy})`}
                    />
                </svg>
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                }}>
                    <span style={{ fontSize: '1.875rem', fontWeight: 800, color: '#F8FAFC', fontVariantNumeric: 'tabular-nums' }}>32:14</span>
                    <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>Análisis II</span>
                </div>
            </div>
            {/* Mode toggles */}
            <div style={{ display: 'flex', gap: 8 }}>
                {['Focus', 'Stopwatch'].map((m, i) => (
                    <span key={m} style={{
                        padding: '6px 16px', borderRadius: 20, fontSize: '0.8125rem', fontWeight: 600,
                        background: i === 0 ? '#58CC02' : 'rgba(255,255,255,0.08)',
                        color: i === 0 ? '#0A2A00' : 'rgba(255,255,255,0.5)',
                    }}>{m}</span>
                ))}
            </div>
            {/* Subject chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center' }}>
                {['Análisis II', 'Álgebra', 'Física I', 'Algoritmos'].map((s, i) => (
                    <span key={s} style={{
                        padding: '4px 12px', borderRadius: 20, fontSize: '0.75rem',
                        background: i === 0 ? 'rgba(88,204,2,0.2)' : 'rgba(255,255,255,0.06)',
                        color: i === 0 ? '#58CC02' : 'rgba(255,255,255,0.45)',
                        border: i === 0 ? '1px solid rgba(88,204,2,0.3)' : '1px solid transparent',
                        fontWeight: i === 0 ? 600 : 400,
                    }}>{s}</span>
                ))}
            </div>
        </div>
    )
}

/* ─── XP visual ──────────────────────────────────────────────── */
function XPVisual() {
    const xpTable = [
        { value: '1 XP',  label: 'por minuto de estudio' },
        { value: '+5 XP', label: 'bonus sesión larga (25m+)' },
        { value: '+20 XP', label: 'bonus racha diaria' },
        { value: '+25 XP', label: 'bonus 7 días seguidos' },
    ]
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Level card */}
            <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '1.25rem',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <div>
                        <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Nivel actual</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F8FAFC' }}>⚡ Nivel 7 <span style={{ fontSize: '1rem', color: '#58CC02' }}>El Parcialero</span></p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>2,450 / 3,200 XP</p>
                        <p style={{ fontSize: '0.6875rem', color: '#58CC02' }}>750 XP para subir</p>
                    </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 99, height: 8, overflow: 'hidden' }}>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '76%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
                        style={{ height: '100%', background: '#58CC02', borderRadius: 99 }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.35)' }}>🔥 Racha: 12 días</span>
                    <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.35)' }}>Total: 2,450 XP</span>
                </div>
            </div>
            {/* XP table */}
            <div style={{
                background: 'rgba(88,204,2,0.06)',
                border: '1px solid rgba(88,204,2,0.15)',
                borderRadius: 12,
                overflow: 'hidden',
            }}>
                {xpTable.map((row, i) => (
                    <div key={row.value} style={{
                        display: 'flex', gap: 12, padding: '9px 14px',
                        borderBottom: i < xpTable.length - 1 ? '1px solid rgba(88,204,2,0.08)' : 'none',
                    }}>
                        <span style={{ fontFamily: 'monospace', color: '#58CC02', fontWeight: 700, minWidth: 54, fontSize: '0.8125rem' }}>
                            {row.value}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8125rem' }}>{row.label}</span>
                    </div>
                ))}
            </div>
            {/* Level samples */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[
                    { n: 1, name: 'Ingresante' },
                    { n: 5, name: 'El Primer Parcialero' },
                    { n: 15, name: 'Rata de Biblioteca' },
                    { n: 30, name: 'Crónico de la Facu' },
                    { n: 51, name: '🎓 El Graduado Mítico' },
                ].map(l => (
                    <span key={l.n} style={{
                        padding: '4px 10px', borderRadius: 20, fontSize: '0.75rem',
                        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.55)',
                    }}>
                        <span style={{ color: '#58CC02', fontWeight: 700 }}>Nv.{l.n}</span> {l.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

/* ─── Ranking visual ─────────────────────────────────────────── */
const alumnosData = {
    Semanal: [
        { pos: 1,  name: 'Valentina R.', value: '5,840 XP', medal: '🥇', highlight: false },
        { pos: 2,  name: 'Matías L.',    value: '5,120 XP', medal: '🥈', highlight: false },
        { pos: 3,  name: 'Camila T.',    value: '4,890 XP', medal: '🥉', highlight: false },
        { pos: 4,  name: 'Agustín M.',   value: '4,230 XP', medal: null,  highlight: false },
        { pos: 12, name: 'Vos',          value: '2,450 XP', medal: null,  highlight: true  },
    ],
    Mensual: [
        { pos: 1,  name: 'Agustín M.',   value: '21,400 XP', medal: '🥇', highlight: false },
        { pos: 2,  name: 'Valentina R.', value: '19,250 XP', medal: '🥈', highlight: false },
        { pos: 3,  name: 'Lucía F.',     value: '17,800 XP', medal: '🥉', highlight: false },
        { pos: 4,  name: 'Camila T.',    value: '15,620 XP', medal: null,  highlight: false },
        { pos: 9,  name: 'Vos',          value: '9,300 XP',  medal: null,  highlight: true  },
    ],
}

const carrerasData = [
    { pos: 1, name: 'ISI — UTN FRRE',       value: '148,230 XP', medal: '🥇', highlight: false },
    { pos: 2, name: 'Arquitectura — UNNE',   value: '121,080 XP', medal: '🥈', highlight: false },
    { pos: 3, name: 'IQ — UTN FRRE',         value: '98,540 XP',  medal: '🥉', highlight: false },
    { pos: 4, name: 'Diseño Gráfico — UNNE', value: '74,810 XP',  medal: null,  highlight: false },
]

function RankingVisual() {
    const [type, setType] = useState('alumnos')
    const [period, setPeriod] = useState('Semanal')

    const rows = type === 'alumnos' ? alumnosData[period] : carrerasData

    const tabBtn = (active) => ({
        flex: 1, padding: '10px 0', background: 'none', border: 'none', cursor: 'pointer',
        fontSize: '0.8125rem', fontWeight: 600,
        color: active ? '#F8FAFC' : 'rgba(255,255,255,0.35)',
        borderBottom: active ? '2px solid #58CC02' : '2px solid transparent',
        transition: 'color 0.15s',
    })

    return (
        <div style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16,
            overflow: 'hidden',
        }}>
            {/* Type tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <button style={tabBtn(type === 'alumnos')} onClick={() => setType('alumnos')}>👤 Alumnos</button>
                <button style={tabBtn(type === 'carreras')} onClick={() => setType('carreras')}>🎓 Carreras</button>
            </div>

            {/* Period tabs (solo alumnos) */}
            {type === 'alumnos' && (
                <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.15)' }}>
                    {['Semanal', 'Mensual'].map(t => (
                        <button key={t} onClick={() => setPeriod(t)} style={{
                            flex: 1, padding: '7px 0', background: 'none', border: 'none', cursor: 'pointer',
                            fontSize: '0.75rem', fontWeight: 600,
                            color: period === t ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                            borderBottom: period === t ? '2px solid rgba(88,204,2,0.6)' : '2px solid transparent',
                            transition: 'color 0.15s',
                        }}>{t}</button>
                    ))}
                </div>
            )}

            {/* Rows */}
            {rows.map((p, i) => (
                <div key={p.name} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 14px',
                    background: p.highlight ? 'rgba(88,204,2,0.08)' : 'transparent',
                    borderBottom: i < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}>
                    <span style={{ width: 26, textAlign: 'center', fontSize: p.medal ? '1rem' : '0.75rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700 }}>
                        {p.medal || `#${p.pos}`}
                    </span>
                    <span style={{ flex: 1, fontSize: '0.875rem', fontWeight: p.highlight ? 700 : 500, color: p.highlight ? '#58CC02' : '#F8FAFC' }}>
                        {p.name}
                    </span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)', fontVariantNumeric: 'tabular-nums' }}>
                        {p.value}
                    </span>
                </div>
            ))}
        </div>
    )
}

/* ─── Section ────────────────────────────────────────────────── */
const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
})

export default function MiloSpotlight() {
    return (
        <section id="milo" style={{ padding: '6rem 0', background: '#0D1B2E', color: '#F8FAFC', overflow: 'hidden' }}>
            <div className="container">
                {/* Header */}
                <motion.div {...fade()} style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="eyebrow" style={{ color: '#58CC02' }}>Milo — Tu compañero de estudio</span>
                    <h2 className="section-heading" style={{ color: '#F8FAFC', marginTop: '0.5rem' }}>
                        Estudiá más. Subí de nivel.<br />Superá a tus compañeros.
                    </h2>
                    <p className="section-sub" style={{ color: 'rgba(255,255,255,0.5)', marginTop: '1rem', marginInline: 'auto' }}>
                        Milo convierte tus sesiones de estudio en una experiencia gamificada. Cada minuto que estudiás te da XP, sube tu nivel y te acerca al podio.
                    </p>
                </motion.div>

                {/* A — Timer */}
                <div className="milo-row" style={{ marginBottom: '4rem' }}>
                    <motion.div {...fade(0.1)}>
                        <TimerVisual />
                    </motion.div>
                    <motion.div {...fade(0.2)} className="milo-text-col">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.75rem' }}>El Timer de Estudio</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Elegí cuánto tiempo querés estudiar con el slider circular, seleccioná la materia y arrancá. Milo registra cada minuto.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {['Modo Focus: timer fijo con slider (25–120 min)', 'Modo Stopwatch: tiempo libre sin límite', 'Selector de materia para contexto', 'Notificación al completar'].map(b => (
                                <li key={b} style={{ display: 'flex', gap: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                                    <span style={{ color: '#58CC02', flexShrink: 0 }}>•</span> {b}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* B — XP */}
                <div className="milo-row milo-row-reverse" style={{ marginBottom: '4rem' }}>
                    <motion.div {...fade(0.1)} className="milo-text-col">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.75rem' }}>Sistema de XP y Niveles</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Cada minuto de estudio vale. Milo acumula XP, mantiene tu racha diaria y celebra cuando subís de nivel. 51 niveles con nombres de la cultura universitaria argentina.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {['1 XP por minuto de estudio', 'Bonuses por rachas y sesiones largas', '51 niveles con nombres únicos', 'Celebración animada al subir de nivel'].map(b => (
                                <li key={b} style={{ display: 'flex', gap: 8, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)' }}>
                                    <span style={{ color: '#58CC02', flexShrink: 0 }}>•</span> {b}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div {...fade(0.2)}>
                        <XPVisual />
                    </motion.div>
                </div>

                {/* C — Ranking */}
                <div className="milo-row">
                    <motion.div {...fade(0.1)}>
                        <RankingVisual />
                    </motion.div>
                    <motion.div {...fade(0.2)} className="milo-text-col">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '0.75rem' }}>Ranking de Alumnos y Carreras</h3>
                        <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1rem' }}>
                            Competí con todos los estudiantes de miFACU o mirá cómo le va a tu carrera versus las demás. El ranking semanal y mensual muestra quién estudió más — ¿vas a dejar que te ganen?
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                            {[
                                '🥇 Ranking individual de Alumnos por XP',
                                '🎓 Ranking de Carreras — ver cómo le va a la tuya',
                                '📅 Vista Semanal y Mensual',
                                '📍 Tu posición siempre visible al final',
                            ].map(b => (
                                <li key={b} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>{b}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
