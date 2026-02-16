import React from 'react';
import { motion } from 'framer-motion';
import { Map, AlertTriangle, Clock, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <section style={{
                padding: '6rem 0 4rem',
                background: 'linear-gradient(135deg, #f4f5f7 0%, #e6efff 100%)',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        style={{ maxWidth: '800px', margin: '0 auto' }}
                    >
                        <motion.h1 variants={fadeIn} style={{
                            fontSize: '3.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--dark-blue)',
                            letterSpacing: '-1px',
                            lineHeight: '1.1'
                        }}>
                            Tu Título Universitario,<br />
                            <span style={{ color: 'var(--primary-blue)' }}>Un Día a la Vez</span>
                        </motion.h1>
                        <motion.p variants={fadeIn} style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '2.5rem',
                            lineHeight: '1.6'
                        }}>
                            Dejá de sufrir la carrera y empezá a gestionarla. Organizá tus materias, prevení desastres con correlativas y mantené la motivación alta con MiFACU.
                        </motion.p>
                        <motion.div variants={fadeIn}>
                            <Link to="/" style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: 'var(--primary-blue)',
                                color: 'white',
                                padding: '16px 32px',
                                borderRadius: '50px',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                boxShadow: '0 10px 25px rgba(0, 82, 204, 0.3)',
                                transition: 'all 0.3s ease'
                            }}>
                                Disponible Próximamente <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '5rem 0', backgroundColor: 'var(--white)' }}>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="features-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2.5rem'
                        }}
                    >
                        <FeatureCard
                            icon={<Map size={40} color="var(--primary-blue)" />}
                            title="Mapa de Carrera"
                            description="Visualizá tu progreso real. No solo una lista de materias, sino un camino claro hacia tu título."
                        />
                        <FeatureCard
                            icon={<AlertTriangle size={40} color="var(--accent-orange)" />}
                            title="Detector de Trabas"
                            description="Nuestro sistema te avisa ANTES de que pierdas una correlativa clave. Salvá tu año académico."
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
            <section style={{ padding: '5rem 0', backgroundColor: 'var(--light-bg)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--dark-blue)' }}>¿Por qué MiFACU?</h2>
                        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
        <motion.div variants={fadeIn} style={{
            padding: '2rem',
            borderRadius: '24px',
            backgroundColor: 'white',
            border: '1px solid #f1f1f1',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
            transition: 'transform 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.08)' }}
        >
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{description}</p>
        </motion.div>
    );
}

function CheckItem({ text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-main)' }}>
            <CheckCircle size={24} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
            <span>{text}</span>
        </div>
    );
}
