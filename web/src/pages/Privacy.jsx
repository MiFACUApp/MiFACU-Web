import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container"
            style={{ padding: '4rem 20px', maxWidth: '800px' }}
        >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '1rem', display: 'inline-block' }}>Política de Privacidad</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}><strong>Última actualización:</strong> Febrero 2026</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Section title="1. Información que Recopilamos">
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        <li><strong>Cuenta:</strong> Email, nombre (opcional).</li>
                        <li><strong>Académica:</strong> Carreras, materias, notas, horarios.</li>
                        <li><strong>Uso:</strong> Sesiones de estudio, estadísticas, reseñas.</li>
                        <li><strong>Técnica:</strong> Modelo de dispositivo, identificadores para notificaciones.</li>
                    </ul>
                </Section>

                <Section title="2. Uso de la Información">
                    <p>Usamos tus datos para brindarte el servicio, sincronizar entre dispositivos y mejorar la app. <strong>No vendemos tus datos a terceros.</strong></p>
                </Section>

                <Section title="3. Servicios de Terceros">
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f4f5f7' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', borderRadius: '8px 0 0 8px' }}>Servicio</th>
                                    <th style={{ padding: '12px', textAlign: 'left', borderRadius: '0 8px 8px 0' }}>Propósito</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Supabase</td><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Base de datos y Auth</td></tr>
                                <tr><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>RevenueCat</td><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Suscripciones</td></tr>
                                <tr><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Google/Apple</td><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Login Social</td></tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="4. Tus Derechos">
                    <p>Puedes acceder, corregir, eliminar o exportar tus datos contactándonos a <strong>mifacuapp@gmail.com</strong>.</p>
                </Section>
            </div>
        </motion.div>
    );
}

function Section({ title, children }) {
    return (
        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.03)' }}>
            <h2 style={{ color: 'var(--dark-blue)', marginBottom: '1rem', fontSize: '1.5rem' }}>{title}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {children}
            </div>
        </div>
    );
}
