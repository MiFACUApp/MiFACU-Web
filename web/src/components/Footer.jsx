import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--white)', padding: '3rem 0', borderTop: '1px solid #e1e4e8', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div style={{ flex: '1', minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                        <img src="/logo.jpeg" alt="miFACU Logo" style={{ height: '30px', borderRadius: '6px' }} />
                        <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>MiFACU</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                        Tu título universitario, un día a la vez using. Gestioná tu carrera, evitá trabas y motivate con Milo.
                    </p>
                    <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                        &copy; {new Date().getFullYear()} miFACU. Todos los derechos reservados.
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '3rem' }}>
                    <div>
                        <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)' }}>Legal</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link to="/privacy" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Política de Privacidad</Link>
                            <Link to="/terms" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Términos de Uso</Link>
                        </div>
                    </div>
                    <div>
                        <h4 style={{ margin: '0 0 1rem 0', color: 'var(--text-main)' }}>Contacto</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href="mailto:mifacuapp@gmail.com" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>mifacuapp@gmail.com</a>
                            <a href="https://www.instagram.com/mifacuapp" target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
