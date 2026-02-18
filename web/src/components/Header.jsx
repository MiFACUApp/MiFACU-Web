import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => { setIsOpen(false) }, [location])

    const navLinks = [
        { label: 'Features', href: '#features' },
        { label: 'Milo', href: '#milo' },
        { label: 'Precios', href: '#precios' },
        { label: 'Descargar', href: '#descargar' },
    ]

    return (
        <header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.3s ease',
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 24px' }}>
                {/* Logo */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <img src="/logo.jpeg" alt="miFACU" style={{ height: 36, borderRadius: 8 }} />
                    <span style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--navy)' }}>
                        miFACU
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="header-desktop-nav" aria-label="Navegación principal">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="header-nav-link">
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right side */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}
                        style={{
                            background: 'var(--bg-2)',
                            border: '1px solid var(--border)',
                            borderRadius: 8,
                            padding: '7px 8px',
                            cursor: 'pointer',
                            color: 'var(--muted)',
                            display: 'flex',
                            alignItems: 'center',
                            transition: 'var(--transition)',
                        }}
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    {/* CTA desktop */}
                    <a href="#descargar" className="btn btn-primary header-cta">
                        Descargar gratis
                    </a>

                    {/* Hamburger */}
                    <button
                        className="header-hamburger"
                        onClick={() => setIsOpen(o => !o)}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'flex' }}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        id="mobile-menu"
                        aria-label="Navegación móvil"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '1rem 24px 1.25rem' }}>
                            {navLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ padding: '0.6rem 0', color: 'var(--muted)', fontWeight: 500, fontSize: '1rem' }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a href="#descargar" className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
                                Descargar gratis
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    )
}
