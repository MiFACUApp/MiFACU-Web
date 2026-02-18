import { motion } from 'framer-motion'

/* ─── Data ───────────────────────────────────────────────────── */
// viewBox: 0 0 540 420  — 3 columns, rect width=130 height=38
const W = 130, H = 38, RX = 10
const COL = [10, 195, 380]  // rect x per column

const nodes = [
    // Col 0 — approved
    { id: 'a1',  x: COL[0], y: 30,  label: 'Análisis I',    state: 'approved' },
    { id: 'al',  x: COL[0], y: 112, label: 'Álgebra',       state: 'approved' },
    { id: 'f1',  x: COL[0], y: 194, label: 'Física I',      state: 'approved' },
    { id: 'ag',  x: COL[0], y: 276, label: 'Algoritmos',    state: 'approved' },
    // Col 1 — mixed
    { id: 'a2',  x: COL[1], y: 60,  label: 'Análisis II',   state: 'current'  },
    { id: 'f2',  x: COL[1], y: 180, label: 'Física II',     state: 'pending'  },
    { id: 'po',  x: COL[1], y: 300, label: 'POO',           state: 'current'  },
    // Col 2 — blocked/pending
    { id: 'a3',  x: COL[2], y: 30,  label: 'Análisis III',  state: 'blocked'  },
    { id: 'so',  x: COL[2], y: 140, label: 'Sist. Op.',     state: 'blocked'  },
    { id: 'bd',  x: COL[2], y: 250, label: 'B. de Datos',   state: 'pending'  },
    { id: 'el',  x: COL[2], y: 360, label: 'Electiva ISI',  state: 'pending'  },
]

// Edges: [fromId, toId]
const edges = [
    ['a1', 'a2'], ['al', 'a2'],
    ['f1', 'f2'],
    ['ag', 'po'],
    ['a2', 'a3'],
    ['po', 'so'], ['po', 'bd'], ['po', 'el'],
]

const stateStyle = {
    approved: { fill: '#22C55E', stroke: '#16A34A', text: '#ffffff' },
    current:  { fill: '#3B82F6', stroke: '#2563EB', text: '#ffffff' },
    pending:  { fill: 'transparent', stroke: '#94A3B8', text: '#94A3B8' },
    blocked:  { fill: 'transparent', stroke: '#EF4444', text: '#EF4444' },
}

function nodeCenter(n) {
    return { x: n.x + W / 2, y: n.y + H / 2 }
}

function edgePath(from, to) {
    const fx = from.x + W, fy = from.y + H / 2
    const tx = to.x,        ty = to.y + H / 2
    const mx = (fx + tx) / 2
    return `M ${fx} ${fy} C ${mx} ${fy} ${mx} ${ty} ${tx} ${ty}`
}

/* ─── Component ──────────────────────────────────────────────── */
function NodeGraph() {
    const byId = Object.fromEntries(nodes.map(n => [n.id, n]))

    return (
        <div style={{
            background: 'var(--bg-2)',
            border: '1px solid var(--border)',
            borderRadius: 20,
            padding: '1.5rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
        }}>
            <svg
                viewBox="0 0 540 418"
                style={{ width: '100%', minWidth: 380, maxWidth: 540, display: 'block', overflow: 'visible' }}
                aria-label="Mapa de correlativas"
            >
                {/* Edges */}
                {edges.map(([fid, tid]) => {
                    const from = byId[fid], to = byId[tid]
                    return (
                        <path
                            key={`${fid}-${tid}`}
                            d={edgePath(from, to)}
                            fill="none"
                            stroke="var(--border)"
                            strokeWidth="1.5"
                            strokeDasharray="4 3"
                        />
                    )
                })}

                {/* Nodes */}
                {nodes.map((n, i) => {
                    const s = stateStyle[n.state]
                    return (
                        <motion.g
                            key={n.id}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.35, ease: 'backOut' }}
                            style={{ transformOrigin: `${n.x + W / 2}px ${n.y + H / 2}px` }}
                        >
                            <rect
                                x={n.x} y={n.y} width={W} height={H} rx={RX}
                                fill={s.fill}
                                stroke={s.stroke}
                                strokeWidth="1.5"
                                fillOpacity={s.fill === 'transparent' ? 1 : 0.9}
                                style={{ filter: n.state === 'current' ? 'drop-shadow(0 2px 6px rgba(59,130,246,0.4))' : n.state === 'approved' ? 'drop-shadow(0 2px 6px rgba(34,197,94,0.3))' : 'none' }}
                            />
                            <text
                                x={n.x + W / 2}
                                y={n.y + H / 2 + 1}
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="11"
                                fontWeight="600"
                                fontFamily="Inter, system-ui, sans-serif"
                                fill={s.text}
                            >
                                {n.label}
                            </text>
                        </motion.g>
                    )
                })}
            </svg>
        </div>
    )
}

/* ─── Legend ─────────────────────────────────────────────────── */
const legend = [
    { color: '#22C55E', label: 'Aprobada' },
    { color: '#3B82F6', label: 'Cursando' },
    { color: '#94A3B8', label: 'Pendiente' },
    { color: '#EF4444', label: 'Bloqueada' },
]

export default function CorrelativasSpotlight() {
    return (
        <section style={{ padding: '6rem 0', background: 'var(--bg)' }}>
            <div className="container correlativas-inner">
                {/* Left: graph */}
                <motion.div
                    className="correlativas-visual"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <NodeGraph />

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: '1rem' }}>
                        {legend.map(l => (
                            <span key={l.label} style={{
                                display: 'flex', alignItems: 'center', gap: 6,
                                padding: '4px 12px', borderRadius: 20,
                                background: 'var(--bg-2)', border: '1px solid var(--border)',
                                fontSize: '0.8125rem', color: 'var(--muted)',
                            }}>
                                <span style={{ width: 10, height: 10, borderRadius: '50%', background: l.color, flexShrink: 0 }} />
                                {l.label}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Right: text */}
                <motion.div
                    className="correlativas-text"
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <span className="eyebrow">
                        Simulador <span className="badge-pro">PRO</span>
                    </span>
                    <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
                        El mapa de tu carrera universitaria
                    </h2>
                    <p className="section-sub" style={{ marginTop: '1rem' }}>
                        Visualizá en un solo grafo todas tus materias, sus correlativas y tu
                        progreso. Planificá el próximo cuatrimestre sin sorpresas.
                    </p>

                    <ul style={{ marginTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {[
                            '"¿Puedo rendir este final?" — lo ves al instante',
                            '"¿Qué necesito para avanzar?" — un tap y lo sabés',
                            'Tocá cualquier nodo para ver el detalle completo',
                            'Cambiá el estado de una materia directamente',
                            'Soporta carreras con correlativas complejas',
                        ].map(b => (
                            <li key={b} style={{
                                display: 'flex', alignItems: 'flex-start', gap: 10,
                                fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.5,
                            }}>
                                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                                {b}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}
