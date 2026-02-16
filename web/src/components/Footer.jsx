import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <div className="footer-logo-group">
                        <img src="/logo.jpeg" alt="miFACU Logo" className="footer-logo-img" />
                        <span className="footer-logo-text">MiFACU</span>
                    </div>
                    <p className="footer-description">
                        Tu título universitario, un día a la vez using. Gestioná tu carrera, evitá trabas y motivate con Milo.
                    </p>
                    <div className="footer-copyright">
                        &copy; {new Date().getFullYear()} miFACU. Todos los derechos reservados.
                    </div>
                </div>

                <div className="footer-links-group">
                    <div>
                        <h4 className="footer-section-title">Legal</h4>
                        <div className="footer-links-column">
                            <Link to="/privacy" className="footer-link">Política de Privacidad</Link>
                            <Link to="/terms" className="footer-link">Términos de Uso</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="footer-section-title">Contacto</h4>
                        <div className="footer-links-column">
                            <a href="mailto:mifacuapp@gmail.com" className="footer-link">mifacuapp@gmail.com</a>
                            <a href="https://www.instagram.com/mifacuapp" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
