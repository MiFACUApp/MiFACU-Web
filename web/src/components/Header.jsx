import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { opacity: 0, height: 0 },
        open: { opacity: 1, height: 'auto' }
    };

    return (
        <header style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid #e1e4e8',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 20px' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/logo.jpeg" alt="miFACU Logo" style={{ height: '40px', borderRadius: '8px' }} />
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        background: 'linear-gradient(45deg, var(--primary-blue), var(--secondary-blue))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        miFACU
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <style>{`@media(min-width: 768px) { .desktop-nav { display: flex !important; gap: 2rem; } .mobile-menu-btn { display: none !important; } }`}</style>
                    <Link to="/" style={{ fontWeight: isActive('/') ? '600' : '400', color: isActive('/') ? 'var(--primary-blue)' : 'var(--text-secondary)' }}>Inicio</Link>
                    <Link to="/privacy" style={{ fontWeight: isActive('/privacy') ? '600' : '400', color: isActive('/privacy') ? 'var(--primary-blue)' : 'var(--text-secondary)' }}>Privacidad</Link>
                    <Link to="/terms" style={{ fontWeight: isActive('/terms') ? '600' : '400', color: isActive('/terms') ? 'var(--primary-blue)' : 'var(--text-secondary)' }}>Términos</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        style={{ overflow: 'hidden', backgroundColor: 'white', borderBottom: '1px solid #eee' }}
                    >
                        <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '1rem 20px', gap: '1rem' }}>
                            <Link to="/" onClick={toggleMenu} style={{ color: isActive('/') ? 'var(--primary-blue)' : 'var(--text-main)' }}>Inicio</Link>
                            <Link to="/privacy" onClick={toggleMenu} style={{ color: isActive('/privacy') ? 'var(--primary-blue)' : 'var(--text-main)' }}>Privacidad</Link>
                            <Link to="/terms" onClick={toggleMenu} style={{ color: isActive('/terms') ? 'var(--primary-blue)' : 'var(--text-main)' }}>Términos</Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
