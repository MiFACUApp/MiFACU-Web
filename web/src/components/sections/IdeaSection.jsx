import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Send, CheckCircle } from 'lucide-react'

const examples = [
    '💡 Nueva funcionalidad',
    '🏫 Agregar mi universidad',
    '🐛 Reportar un bug',
    '🎨 Mejora de diseño',
    '📚 Nueva materia o carrera',
]

export default function IdeaSection() {
    const [idea, setIdea] = useState('')
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        if (!idea.trim()) return
        setLoading(true)
        setError(false)
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'b3a4ae8a-3dab-42ad-9080-72fdf33f491f',
                    subject: '💡 Idea para miFACU',
                    message: idea,
                }),
            })
            const data = await res.json()
            if (!data.success) throw new Error(data.message)
            setSent(true)
        } catch (err) {
            console.error('Web3Forms error:', err)
            setError(true)
        }
        setLoading(false)
    }

    function appendExample(tag) {
        setIdea(prev => (prev ? prev + '\n' : '') + tag.replace(/^[^ ]+ /, '') + ': ')
    }

    return (
        <section id="ideas" style={{ padding: '6rem 0', background: 'var(--bg)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    style={{ maxWidth: 620, marginInline: 'auto', textAlign: 'center' }}
                >
                    {/* Icon */}
                    <div style={{
                        width: 56, height: 56, borderRadius: 16,
                        background: 'rgba(37,99,235,0.1)',
                        border: '1px solid rgba(37,99,235,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginInline: 'auto', marginBottom: '1.5rem',
                    }}>
                        <Lightbulb size={26} color="var(--accent)" />
                    </div>

                    <span className="eyebrow">Comunidad</span>
                    <h2 className="section-heading" style={{ marginTop: '0.5rem' }}>
                        ¿Tenés una idea para miFACU?
                    </h2>
                    <p className="section-sub" style={{ marginTop: '1rem', marginInline: 'auto' }}>
                        Sugerí nuevas funciones, contanos qué falta en tu facu o reportá un bug. Tu opinión hace miFACU mejor para todos.
                    </p>

                    {/* Quick tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginTop: '1.75rem', marginBottom: '1.25rem' }}>
                        {examples.map(tag => (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => appendExample(tag)}
                                style={{
                                    background: 'var(--bg-2)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 20,
                                    padding: '6px 14px',
                                    fontSize: '0.8125rem',
                                    color: 'var(--muted)',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s',
                                    fontFamily: 'var(--font)',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    {/* Form / success */}
                    {!sent ? (
                        <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                            <textarea
                                value={idea}
                                onChange={e => setIdea(e.target.value)}
                                placeholder="Ej: me gustaría poder agregar los horarios de consulta de cada profe..."
                                rows={4}
                                style={{
                                    width: '100%',
                                    background: 'var(--bg-2)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 12,
                                    padding: '14px 16px',
                                    color: 'var(--text)',
                                    fontSize: '0.9rem',
                                    resize: 'vertical',
                                    fontFamily: 'var(--font)',
                                    outline: 'none',
                                    marginBottom: '1rem',
                                    lineHeight: 1.6,
                                    boxSizing: 'border-box',
                                    transition: 'border-color 0.2s',
                                }}
                                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                onBlur={e => e.target.style.borderColor = 'var(--border)'}
                            />
                            {error && (
                                <p style={{ fontSize: '0.8125rem', color: '#EF4444', marginBottom: '0.75rem' }}>
                                    No se pudo enviar. Confirmá el email de Web3Forms en tu Gmail e intentá de nuevo.
                                </p>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={loading}
                                    style={{ gap: 8, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                                >
                                    <Send size={15} />
                                    {loading ? 'Enviando...' : 'Enviar idea'}
                                </button>
                            </div>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                padding: '1.25rem 1.5rem',
                                background: 'rgba(88,204,2,0.07)',
                                border: '1px solid rgba(88,204,2,0.2)',
                                borderRadius: 14,
                                textAlign: 'left',
                                marginTop: '0.5rem',
                            }}
                        >
                            <CheckCircle size={28} color="#58CC02" style={{ flexShrink: 0 }} />
                            <div>
                                <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>¡Gracias! Recibimos tu idea.</p>
                                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                                    La vamos a revisar y si se suma a miFACU, te avisamos. ¡Entre todos construimos la mejor app universitaria!
                                </p>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    )
}
