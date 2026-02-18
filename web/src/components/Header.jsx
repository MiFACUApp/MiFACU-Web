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
        <header className="header">
            <div className="container header-container">
                <Link to="/" className="logo-link">
                    <img src="/logo.jpeg" alt="miFACU Logo" className="logo-img" />
                    <span className="logo-text">
                        miFACU
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Inicio</Link>
                    <Link to="/privacy" className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}>Privacidad</Link>
                    <Link to="/terms" className={`nav-link ${isActive('/terms') ? 'active' : ''}`}>Términos</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
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
                        className="mobile-menu"
                    >
                        <div className="container mobile-menu-container">
                            <Link to="/" onClick={toggleMenu} className={`nav-link ${isActive('/') ? 'active' : ''}`}>Inicio</Link>
                            <Link to="/privacy" onClick={toggleMenu} className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}>Privacidad</Link>
                            <Link to="/terms" onClick={toggleMenu} className={`nav-link ${isActive('/terms') ? 'active' : ''}`}>Términos</Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
