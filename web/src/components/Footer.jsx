import { Link, useLocation } from 'react-router-dom'

export default function Footer() {
    const { pathname } = useLocation()

    // If we are not on the home page, we prepend '/' to the hash links
    // e.g. '#features' -> '/#features'
    const getHref = (hash) => {
        if (pathname === '/' && hash.startsWith('#')) return hash
        return `/${hash}`
    }

    return (
        <footer style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', padding: '3.5rem 0 2rem' }}>
            <div className="container footer-grid">
                {/* Brand */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '0.75rem' }}>
                        <img src="/logo.jpeg" alt="miFACU" style={{ height: 28, borderRadius: 6 }} />
                        <span style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text)' }}>miFACU</span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6, maxWidth: 280 }}>
                        El compañero académico de los estudiantes universitarios argentinos.
                    </p>
                </div>

                {/* App */}
                <div>
                    <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                        App
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {[
                            { label: 'Descargar iOS', href: '#descargar' },
                            { label: 'Descargar Android', href: '#descargar' },
                            { label: 'Ver funciones', href: '#features' },
                            { label: 'Precios', href: '#precios' },
                        ].map(l => (
                            <Link key={l.label} to={getHref(l.href)} style={{ fontSize: '0.875rem', color: 'var(--muted)', transition: 'color 0.15s', textDecoration: 'none' }}>
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Legal */}
                <div>
                    <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
                        Legal
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        <Link to="/privacy" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Privacidad</Link>
                        <Link to="/terms" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Términos de uso</Link>
                        <a href="mailto:mifacuapp@gmail.com" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Contacto</a>
                        <a href="https://www.instagram.com/mifacuapp" target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Instagram</a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div
                className="container"
                style={{
                    marginTop: '2.5rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                    © {new Date().getFullYear()} miFACU. Hecho con ❤️ para estudiantes argentinos.
                </p>
            </div>
        </footer>
    )
}
