import React from 'react';
import { motion } from 'framer-motion';
import { Map, AlertTriangle, Clock, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="hero-content"
                    >
                        <motion.h1 variants={fadeIn} className="hero-title">
                            Tu Título Universitario,<br />
                            <span className="hero-title-highlight">Un Día a la Vez</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} className="hero-subtitle">
                            Dejá de sufrir la carrera y empezá a gestionarla. Organizá tus materias, prevení desastres con correlativas y mantené la motivación alta con miFACU.
                        </motion.p>
                        <motion.div variants={fadeIn}>
                            <h2 className="launch-date">
                                16 de Marzo de 2026
                            </h2>
                            <Countdown targetDate="2026-03-16T00:00:00" />
                            <Link to="/" className="cta-button">
                                Disponible Próximamente <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="features-grid"
                    >
                        <FeatureCard
                            icon={<Map size={40} color="var(--primary-blue)" />}
                            title="Mapa de Carrera"
                            description="Visualizá tu progreso real. No solo una lista de materias, sino un camino claro hacia tu título."
                        />

                        <FeatureCard
                            icon={<Clock size={40} color="var(--secondary-blue)" />}
                            title="Estudio Inteligente"
                            description="Cronómetro Pomodoro integrado con Milo, una mascota virtual que evoluciona con tu esfuerzo."
                        />
                        <FeatureCard
                            icon={<Calendar size={40} color="#10b981" />}
                            title="Línea de Tiempo"
                            description="Detectá las 'semanas de la muerte' con meses de anticipación y organizate mejor."
                        />
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="value-prop-section">
                <div className="container">
                    <div className="value-prop-container">
                        <h2 className="value-prop-title">¿Por qué miFACU?</h2>
                        <div className="value-prop-list">
                            <CheckItem text="Evita atrasarte por correlativas olvidadas." />
                            <CheckItem text="Motivación constante con gamificación (Milo)." />
                            <CheckItem text="Organización visual de fechas de exámenes." />
                            <CheckItem text=" Comunidad de estudiantes para compartir reseñas honestas." />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <motion.div variants={fadeIn} className="feature-card"
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
        >
            <div className="feature-icon-wrapper">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </motion.div>
    );
}

function CheckItem({ text }) {
    return (
        <div className="check-item">
            <CheckCircle size={24} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
            <span>{text}</span>
        </div>
    );
}
