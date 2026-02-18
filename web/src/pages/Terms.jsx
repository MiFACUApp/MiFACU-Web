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
                <p>
                    Bienvenido a <strong>miFACU</strong>. Estos Términos y Condiciones ("Términos") rigen tu acceso y uso de la aplicación móvil miFACU y nuestro sitio web.
                    Al descargar, instalar o utilizar la aplicación, aceptas estar legalmente vinculado por estos Términos. Si no estás de acuerdo, no debes utilizar la aplicación.
                </p>
            </section>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <Section title="1. Descripción del Servicio">
                    <p>
                        miFACU es una herramienta de gestión académica y productividad diseñada para estudiantes universitarios.
                        Ofrece funcionalidades como seguimiento de materias, control de correlatividades, agenda de exámenes, herramientas de estudio (Pomodoro) y elementos de gamificación.
                    </p>
                    <p style={{ marginTop: '1rem', fontStyle: 'italic', fontWeight: '500', color: 'var(--dark-blue)' }}>
                        <strong>Descargo de responsabilidad importante:</strong> miFACU NO es una aplicación oficial de ninguna universidad ni institución educativa.
                        La información académica (planes de estudio, notas, fechas) es gestionada u cargada por el usuario. miFACU no garantiza la exactitud de los datos cargados ni su coincidencia con los registros oficiales (como SIU Guaraní u otros sistemas institucionales).
                    </p>
                </Section>

                <Section title="2. Cuentas y Registro">
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                        <li>Debes proporcionar información precisa y completa al crear tu cuenta.</li>
                        <li>Eres responsable de mantener la confidencialidad de tus credenciales de acceso.</li>
                        <li>Nos reservamos el derecho de suspender o eliminar tu cuenta si detectamos actividad sospechosa o violaciones a estos términos.</li>
                    </ul>
                </Section>

                <Section title="3. Uso Aceptable">
                    <p>Te comprometes a utilizar la aplicación de manera legal y ética. Está prohibido:</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Utilizar la app para actividades ilegales o fraudulentas.</li>
                        <li>Intentar acceder, manipular o realizar ingeniería inversa del código fuente de la aplicación.</li>
                        <li>Publicar contenido ofensivo, difamatorio o falso en las secciones de comunidad o reseñas de materias.</li>
                        <li>Interferir con el funcionamiento de la aplicación o nuestros servidores.</li>
                    </ul>
                </Section>

                <Section title="4. Suscripciones y Pagos">
                    <p>miFACU ofrece una versión gratuita y una suscripción "Premium" con funcionalidades adicionales.</p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '1rem' }}>
                        <li><strong>Facturación:</strong> Las suscripciones se facturan a través de tu cuenta de Apple App Store o Google Play Store.</li>
                        <li><strong>Renovación Automática:</strong> Tu suscripción se renovará automáticamente al final de cada período (mensual o anual) a menos que la canceles al menos 24 horas antes del vencimiento.</li>
                        <li><strong>Cancelación:</strong> Puedes gestionar y cancelar tu suscripción desde la configuración de tu cuenta de Apple o Google. La cancelación detendrá la renovación automática pero no reembolsará el período actual.</li>
                        <li><strong>Cambios de Precio:</strong> Nos reservamos el derecho de modificar los precios de la suscripción, notificándote con antelación razonable.</li>
                    </ul>
                </Section>

                <Section title="5. Propiedad Intelectual">
                    <p>
                        La aplicación miFACU, incluyendo su diseño, código, gráficos, la marca "miFACU" y el personaje "Milo", son propiedad exclusiva de sus desarrolladores y están protegidos por leyes de derechos de autor y propiedad intelectual.
                        Se te otorga una licencia limitada, no exclusiva e intransferible para usar la aplicación estrictamente para fines personales y no comerciales.
                    </p>
                </Section>

                <Section title="6. Limitación de Responsabilidad">
                    <p>
                        La aplicación se proporciona "tal cual" y "según disponibilidad". En la máxima medida permitida por la ley, miFACU y sus desarrolladores no serán responsables por:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '0.5rem' }}>
                        <li>Daños indirectos, incidentales o consecuentes derivados del uso de la aplicación.</li>
                        <li>Pérdida de datos académicos o errores en la planificación de la carrera del usuario (p.ej., perder una fecha de examen o calcular mal una correlativa). Es tu responsabilidad verificar la información con fuentes oficiales.</li>
                        <li>Interrupciones del servicio o fallos técnicos.</li>
                    </ul>
                </Section>

                <Section title="7. Modificaciones a los Términos">
                    <p>
                        Podemos actualizar estos Términos en cualquier momento. Te notificaremos sobre cambios significativos a través de la aplicación o por correo electrónico.
                        El uso continuo de la aplicación después de dichos cambios constituye tu aceptación de los nuevos Términos.
                    </p>
                </Section>

                <Section title="8. Contacto">
                    <p>Si tienes alguna duda sobre estos términos, por favor contáctanos en:</p>
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
