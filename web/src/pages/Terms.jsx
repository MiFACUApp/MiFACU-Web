import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="container"
            style={{ padding: '4rem 20px', maxWidth: '800px' }}
        >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--primary-blue)', paddingBottom: '1rem', display: 'inline-block' }}>Términos y Condiciones</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}><strong>Última actualización:</strong> Febrero 2026</p>

            <section style={{ marginBottom: '2.5rem' }}>
                <p>Bienvenido a <strong>MiFACU</strong>. Al descargar, instalar o utilizar la aplicación, aceptas estos Términos y Condiciones.</p>
            </section>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Section title="1. Descripción del Servicio">
                    <p>MiFACU es un planificador universitario que permite a los estudiantes organizar materias, horarios, exámenes, y utilizar herramientas de estudio con gamificación.</p>
                </Section>

                <Section title="2. Uso de la Aplicación">
                    <h3>2.1 Requisitos</h3>
                    <ul>
                        <li>Debes tener al menos 13 años de edad.</li>
                        <li>Eres responsable de la seguridad de tu cuenta.</li>
                    </ul>
                    <h3>2.2 Conducta</h3>
                    <p>Te comprometes a no usar la app para fines ilegales ni publicar contenido ofensivo en las reseñas.</p>
                </Section>

                <Section title="3. Suscripción Premium">
                    <p>La suscripción Premium se factura mensualmente ($0.99 USD aprox) a través de Apple/Google. Se renueva automáticamente a menos que la canceles 24hs antes.</p>
                </Section>

                <Section title="4. Propiedad Intelectual">
                    <p>Todo el contenido y diseño de MiFACU es propiedad de sus desarrolladores. No está permitido copiar o distribuir la app sin permiso.</p>
                </Section>

                <Section title="5. Limitación de Responsabilidad">
                    <p>La app se ofrece "tal cual". No somos responsables por errores en datos académicos cargados por usuarios o pérdidas de información.</p>
                </Section>

                <Section title="6. Contacto">
                    <p>Dudas: <strong>mifacuapp@gmail.com</strong></p>
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
