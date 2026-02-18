import { useState } from 'react'
import { motion } from 'framer-motion'

const palette = [
    { name: 'Rosa',    shades: ['#FCA5A5','#F87171','#EF4444','#DC2626','#B91C1C'] },
    { name: 'Naranja', shades: ['#FDBA74','#FB923C','#F97316','#EA580C','#C2410C'] },
    { name: 'Ámbar',   shades: ['#FCD34D','#FBBF24','#F59E0B','#D97706','#B45309'] },
    { name: 'Lima',    shades: ['#BEF264','#A3E635','#84CC16','#65A30D','#4D7C0F'] },
    { name: 'Verde',   shades: ['#86EFAC','#4ADE80','#22C55E','#16A34A','#15803D'] },
    { name: 'Teal',    shades: ['#5EEAD4','#2DD4BF','#14B8A6','#0D9488','#0F766E'] },
    { name: 'Azul',    shades: ['#93C5FD','#60A5FA','#3B82F6','#2563EB','#1D4ED8'] },
    { name: 'Índigo',  shades: ['#A5B4FC','#818CF8','#6366F1','#4F46E5','#4338CA'] },
    { name: 'Violeta', shades: ['#C4B5FD','#A78BFA','#8B5CF6','#7C3AED','#6D28D9'] },
    { name: 'Rosa 2',  shades: ['#F9A8D4','#F472B6','#EC4899','#DB2777','#BE185D'] },
    { name: 'Fucsia',  shades: ['#E879F9','#D946EF','#C026D3','#A21CAF','#86198F'] },
    { name: 'Gris',    shades: ['#E2E8F0','#CBD5E1','#94A3B8','#64748B','#475569'] },
]

const elements = [
    { key: 'clase',    label: 'Próxima Clase',      defaultIdx: 6, defaultShade: 2 },
    { key: 'cursando', label: 'Materias Cursando',   defaultIdx: 8, defaultShade: 2 },
    { key: 'accesos',  label: 'Accesos Directos',    defaultIdx: 2, defaultShade: 2 },
    { key: 'horarios', label: 'Horarios',            defaultIdx: 4, defaultShade: 2 },
    { key: 'simul',    label: 'Simulador',           defaultIdx: 5, defaultShade: 2 },
    { key: 'milo',     label: 'Milo',               defaultIdx: 3, defaultShade: 2 },
]

export default function Personalization() {
    const [selected, setSelected] = useState(() =>
        Object.fromEntries(elements.map(e => [e.key, { palIdx: e.defaultIdx, shade: e.defaultShade }]))
    )
    const [activeEl, setActiveEl] = useState('clase')

    const getColor = (key) => {
        const s = selected[key]
        return palette[s.palIdx].shades[s.shade]
    }

    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg-2)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <span className="eyebrow">
                        Personalizar miFACU <span className="badge-pro">PRO</span>
                    </span>
                    <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>Hacela tuya</h2>
                    <p className="section-sub" style={{ marginTop: '1rem', marginInline: 'auto' }}>
                        Elegí el color de acento de 6 partes distintas de la app.
                        12 colores × 5 tonalidades = <strong>60 combinaciones</strong>.
                    </p>
                </motion.div>

                <div className="personalization-inner">
                    {/* Left: element selector + palette */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                        {/* Element list */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                                Elegí qué personalizar
                            </p>
                            {elements.map(el => (
                                <button
                                    key={el.key}
                                    onClick={() => setActiveEl(el.key)}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: 10,
                                        padding: '10px 14px', borderRadius: 10, cursor: 'pointer',
                                        background: activeEl === el.key ? 'var(--card)' : 'transparent',
                                        border: activeEl === el.key ? `1.5px solid ${getColor(el.key)}` : '1.5px solid transparent',
                                        transition: 'all 0.15s ease',
                                        textAlign: 'left',
                                    }}
                                >
                                    <span style={{
                                        width: 14, height: 14, borderRadius: '50%',
                                        background: getColor(el.key), flexShrink: 0,
                                        boxShadow: `0 0 0 3px ${getColor(el.key)}30`,
                                    }} />
                                    <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)' }}>{el.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Color palette for active element */}
                        <div style={{
                            background: 'var(--card)', border: '1px solid var(--border)',
                            borderRadius: 14, padding: '1.25rem',
                        }}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.875rem' }}>
                                Color de {elements.find(e => e.key === activeEl)?.label}
                            </p>

                            {/* Palette grid */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                                {palette.map((col, pi) => (
                                    <div key={col.name} style={{ display: 'flex', gap: 5 }}>
                                        {col.shades.map((shade, si) => {
                                            const isActive = selected[activeEl].palIdx === pi && selected[activeEl].shade === si
                                            return (
                                                <motion.button
                                                    key={shade}
                                                    whileHover={{ scale: 1.2 }}
                                                    onClick={() => setSelected(s => ({ ...s, [activeEl]: { palIdx: pi, shade: si } }))}
                                                    style={{
                                                        width: 26, height: 26, borderRadius: '50%',
                                                        background: shade, border: 'none', cursor: 'pointer',
                                                        outline: isActive ? `2.5px solid ${shade}` : '2.5px solid transparent',
                                                        outlineOffset: 2,
                                                        transition: 'outline 0.1s',
                                                    }}
                                                    aria-label={`${col.name} tono ${si + 1}`}
                                                />
                                            )
                                        })}
                                        <span style={{ fontSize: '0.6875rem', color: 'var(--muted)', alignSelf: 'center', marginLeft: 4 }}>{col.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: live preview */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            background: 'var(--card)', border: '1px solid var(--border)',
                            borderRadius: 20, padding: '1.5rem',
                            boxShadow: 'var(--shadow)',
                        }}
                    >
                        <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1.25rem' }}>
                            Preview de Home
                        </p>

                        {/* Próxima clase card */}
                        <div style={{
                            borderRadius: 14, padding: '1rem',
                            background: `${getColor('clase')}18`,
                            border: `1px solid ${getColor('clase')}30`,
                            marginBottom: 10,
                        }}>
                            <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: getColor('clase'), textTransform: 'uppercase', letterSpacing: '0.06em' }}>Próxima Clase</p>
                            <p style={{ fontWeight: 700, color: 'var(--text)', margin: '2px 0' }}>Análisis Matemático II</p>
                            <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>Hoy · 14:00 hs</p>
                        </div>

                        {/* Cursando carrusel */}
                        <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Cursando</p>
                        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4, marginBottom: 10 }}>
                            {['Análisis II', 'Álgebra', 'Física I'].map(m => (
                                <div key={m} style={{
                                    flexShrink: 0, padding: '8px 12px', borderRadius: 10,
                                    background: `${getColor('cursando')}18`,
                                    border: `1px solid ${getColor('cursando')}30`,
                                }}>
                                    <p style={{ fontSize: '0.75rem', fontWeight: 600, color: getColor('cursando'), whiteSpace: 'nowrap' }}>{m}</p>
                                </div>
                            ))}
                        </div>

                        {/* Accesos directos */}
                        <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Accesos Directos</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 10 }}>
                            {['📅', '⏱️', '📝', '🗺️'].map(ic => (
                                <div key={ic} style={{
                                    aspectRatio: '1', borderRadius: 10,
                                    background: `${getColor('accesos')}18`,
                                    border: `1px solid ${getColor('accesos')}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.25rem',
                                }} />
                            ))}
                        </div>

                        {/* Milo XP bar */}
                        <div style={{ borderRadius: 10, padding: '0.75rem', background: 'var(--bg-2)', border: '1px solid var(--border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text)' }}>⚡ Milo · Nivel 7</span>
                                <span style={{ fontSize: '0.6875rem', color: 'var(--muted)' }}>2,450 XP</span>
                            </div>
                            <div style={{ background: 'var(--border)', borderRadius: 99, height: 6, overflow: 'hidden' }}>
                                <div style={{ width: '65%', height: '100%', background: getColor('milo'), borderRadius: 99, transition: 'background 0.3s' }} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
