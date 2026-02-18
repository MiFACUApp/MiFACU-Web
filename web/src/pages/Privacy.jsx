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
                <Section title="1. Introducción">
                    <p>
                        En <strong>miFACU</strong>, respetamos tu privacidad y nos comprometemos a proteger los datos personales que compartes con nosotros.
                        Esta política explica cómo recopilamos, utilizamos, almacenamos y compartimos tu información cuando utilizas nuestra aplicación móvil y sitio web.
                    </p>
                </Section>

                <Section title="2. Información que Recopilamos">
                    <p>Recopilamos diferentes tipos de información para proporcionar y mejorar nuestro servicio:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '1rem' }}>
                        <li><strong>Información de la Cuenta:</strong> Al registrarte, recopilamos tu dirección de correo electrónico, nombre (opcional) y foto de perfil (si utilizas inicio de sesión social).</li>
                        <li><strong>Datos Académicos:</strong> Información ingresada voluntariamente sobre tu carrera, materias, notas, horarios de cursada y fechas de exámenes.</li>
                        <li><strong>Datos de Uso:</strong> Información sobre cómo interactúas con la aplicación, incluyendo sesiones de estudio (Pomodoro), interacción con Milo (mascota virtual) y estadísticas de progreso.</li>
                        <li><strong>Información del Dispositivo:</strong> Modelo del dispositivo, versión del sistema operativo, identificadores únicos de dispositivo y datos de fallos (logs) para mantenimiento técnico.</li>
                    </ul>
                </Section>

                <Section title="3. Finalidad del Tratamiento de Datos">
                    <p>Utilizamos tus datos para los siguientes fines:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '1rem' }}>
                        <li><strong>Provisión del Servicio:</strong> Permitirte gestionar tu vida académica, guardar tu progreso y sincronizar tus datos entre múltiples dispositivos.</li>
                        <li><strong>Mejora del Producto:</strong> Analizar tendencias de uso anónimas para desarrollar nuevas funcionalidades y corregir errores.</li>
                        <li><strong>Notificaciones:</strong> Enviarte recordatorios de exámenes, avisos de correlatividades y actualizaciones importantes sobre el servicio (puedes optar por no recibirlas).</li>
                        <li><strong>Soporte al Usuario:</strong> Responder a tus consultas y solucionar problemas técnicos.</li>
                    </ul>
                </Section>

                <Section title="4. Compartir Información con Terceros">
                    <p>No vendemos ni alquilamos tus datos personales a terceros. Sin embargo, compartimos información con proveedores de servicios de confianza necesarios para operar la aplicación:</p>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f4f5f7' }}>
                                    <th style={{ padding: '12px', textAlign: 'left', borderRadius: '8px 0 0 8px' }}>Servicio</th>
                                    <th style={{ padding: '12px', textAlign: 'left', borderRadius: '0 8px 8px 0' }}>Propósito</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}><strong>Supabase</strong></td><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Alojamiento de base de datos segura y autenticación de usuarios.</td></tr>
                                <tr><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}><strong>RevenueCat</strong></td><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Gestión de suscripciones Premium y pagos en aplicaciones.</td></tr>
                                <tr><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}><strong>Google / Apple</strong></td><td style={{ padding: '12px', borderBottom: '1px solid #eee' }}>Servicios de autenticación (Social Login).</td></tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section title="5. Seguridad de los Datos">
                    <p>
                        Implementamos medidas de seguridad técnicas y organizativas razonables para proteger tus datos contra el acceso no autorizado, la pérdida o alteración.
                        Utilizamos cifrado en tránsito (HTTPS) y en reposo para datos sensibles. Sin embargo, ningún método de transmisión por Internet es 100% seguro.
                    </p>
                </Section>

                <Section title="6. Retención de Datos">
                    <p>
                        Conservamos tus datos personales mientras tu cuenta permanezca activa o sea necesario para prestarte el servicio.
                        Si decides eliminar tu cuenta, tus datos personales se eliminarán de nuestros servidores activos, aunque pueden persistir en copias de seguridad durante un periodo limitado por razones técnicas y legales.
                    </p>
                </Section>

                <Section title="7. Privacidad de Menores">
                    <p>
                        Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años.
                        Si descubrimos que hemos recopilado información de un menor sin verificación del consentimiento de los padres, tomaremos medidas para eliminar esa información.
                    </p>
                </Section>

                <Section title="8. Tus Derechos">
                    <p>Dependiendo de tu ubicación, puedes tener derecho a:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '1rem' }}>
                        <li>Acceder a los datos personales que tenemos sobre ti.</li>
                        <li>Solicitar la corrección de datos inexactos.</li>
                        <li>Solicitar la eliminación de tu cuenta y todos tus datos ("Derecho al olvido").</li>
                        <li>Oponerte al procesamiento de tus datos.</li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>Para ejercer estos derechos, contáctanos a través de nuestro correo de soporte.</p>
                </Section>

                <Section title="9. Contacto">
                    <p>Si tienes preguntas sobre esta Política de Privacidad, por favor contáctanos en:</p>
                    <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>📧 <strong>mifacuapp@gmail.com</strong></p>
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
