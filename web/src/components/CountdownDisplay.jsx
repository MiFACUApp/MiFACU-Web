import { Fragment } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const UNITS = [
    { key: 'days',    label: 'Días'  },
    { key: 'hours',   label: 'Horas' },
    { key: 'minutes', label: 'Min'   },
    { key: 'seconds', label: 'Seg'   },
]

const SIZES = {
    //           num font   card padding       label font  gap
    xs: { num: '1.25rem', pad: '4px 8px',        label: '0.5rem',    gap: 4  },
    sm: { num: '1.75rem', pad: '0.5rem 0.8rem',  label: '0.5625rem', gap: 6  },
    md: { num: '2.75rem', pad: '0.8rem 1.1rem',  label: '0.6875rem', gap: 10 },
    lg: { num: '4rem',    pad: '1.1rem 1.5rem',  label: '0.8125rem', gap: 14 },
}

function FlipDigit({ value, dark }) {
    const str = String(value).padStart(2, '0')
    return (
        <div style={{ position: 'relative', overflow: 'hidden', lineHeight: 1 }}>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={str}
                    initial={{ y: '-100%', opacity: 0 }}
                    animate={{ y: '0%',    opacity: 1 }}
                    exit={{    y: '100%',  opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    style={{
                        display: 'block',
                        fontVariantNumeric: 'tabular-nums',
                        color: dark ? '#F8FAFC' : 'var(--text)',
                    }}
                >
                    {str}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}

export default function CountdownDisplay({ time, dark = false, size = 'md' }) {
    const s = SIZES[size] || SIZES.md

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: s.gap,
            flexWrap: 'nowrap',   /* ← never wrap */
        }}>
            {UNITS.map((u, i) => (
                <Fragment key={u.key}>
                    {/* Card */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                        <div style={{
                            background: dark ? 'rgba(255,255,255,0.08)' : 'var(--bg)',
                            border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'var(--border)'}`,
                            borderRadius: 12,
                            padding: s.pad,
                            fontSize: s.num,
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            minWidth: '2ch',
                            textAlign: 'center',
                            boxShadow: dark
                                ? '0 4px 16px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)'
                                : '0 2px 8px rgba(0,0,0,0.05)',
                        }}>
                            <FlipDigit value={time[u.key]} dark={dark} />
                        </div>
                        <span style={{
                            fontSize: s.label,
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: dark ? 'rgba(255,255,255,0.4)' : 'var(--muted)',
                        }}>
                            {u.label}
                        </span>
                    </div>

                    {/* Separator */}
                    {i < UNITS.length - 1 && (
                        <span style={{
                            fontSize: s.num,
                            fontWeight: 800,
                            color: dark ? 'rgba(255,255,255,0.2)' : 'var(--border)',
                            lineHeight: 1,
                            paddingTop: `calc(${s.pad.split(' ')[0]} + 0.1em)`,
                            userSelect: 'none',
                        }}>:</span>
                    )}
                </Fragment>
            ))}
        </div>
    )
}
