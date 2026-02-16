# MiFACU - Documento de Producto

## 🎯 Visión General

**MiFACU** es una aplicación móvil para estudiantes universitarios de la UTN (Universidad Tecnológica Nacional) que les ayuda a organizar su carrera, estudiar de forma efectiva, y mantenerse motivados.

La app combina:
- Gestión académica (materias, horarios, exámenes)
- Gamificación (mascota virtual, rachas, logros)
- Comunidad y Monitoreo (calificaciones de profesores, simuladores)

---

## 📱 Navegación Principal

La app tiene **5 tabs** en la parte inferior de la pantalla:

| Tab | Icono | Función |
|-----|-------|---------|
| Home | 🏠 | Dashboard diario - lo más urgente |
| Materias | 📚 | Gestión de materias y progreso |
| Milo | 🐾 | Mascota + Pomodoro + Gamificación |
| Herramientas | 🛠️ | Utilidades extra |
| Perfil | 👤 | Configuración y cuenta |

---

## 💰 Estrategia de Monetización (Premium)

Estas son las funciones exclusivas para usuarios de pago, diseñadas para resolver **dolores críticos** del estudiante (incertidumbre y falta de tiempo).

### 🏆 Lista de Features Premium

1.  **Línea de Tiempo del Cuatrimestre (Gantt Académico)**
    *   **Qué es:** Una visualización horizontal (scrollable) de todo el cuatrimestre, semana por semana.
    *   **Heatmap de Estrés:** Las semanas se pintan de colores (Verde/Amarillo/Rojo) según la cantidad de entregas y parciales que se juntan. Detecta "Hell Weeks" automáticamente.
    *   **Eventos:** Muestra parciales, finales y entregas como hitos en la línea de tiempo.
    *   **Valor:** Permite prever desastres y organizar el estudio con meses de anticipación.

2.  **Simulador de Impacto de Correlativas (Alertas de Traba)**
    *   **Qué es:** Análisis automático del plan de estudios.
    *   **Valor:** Te avisa con alertas críticas: "Si no metés Análisis II, trabás 4 materias del año que viene". Evita atrasarte en la carrera.

3.  **"La Fija" (Temas de Finales)**
    *   **Qué es:** Un banco de datos colaborativo donde los alumnos votan qué temas tomaron en la última mesa de final.
    *   **Valor Premium:** Acceso al Top 3 de temas más recurrentes y estadísticas históricas ("Bolzano lo tomaron en el 80% de los finales de 2024").

4.  **Widgets de Inicio (Android/iOS)**
    *   **Qué es:** Widgets interactivos para la pantalla de inicio del celular.
    *   **Valor:** Ver tu próxima clase, racha de Milo o cuenta regresiva al parcial sin abrir la app.

5.  **Reseñas de Cátedras (Acceso Total)**
    *   **Qué es:** Acceso ilimitado a leer todas las reseñas, filtrar por profesor y ver ránkings de dificultad.
    *   **Valor:** Información privilegiada para elegir con quién cursar y evitar cátedras "filtro".

6.  **Estadísticas Avanzadas de Estudio**
    *   **Qué es:** Análisis profundo del rendimiento con el Pomodoro.
    *   **Valor:** Gráficos históricos, comparación con el promedio de la facultad, y desglose de productividad por horario.

---

## 🚀 Roadmap de Mejoras de UX (Herramientas Actuales)

Propuestas para potenciar las herramientas gratuitas existentes y mejorar la retención.

### 💬 Reseñas de Cátedras
- **Tags Rápidos:** Votación de etiquetas ("Toma asistencia", "Exigente", "Promocionable").

### 📂 Repositorio
- **Favoritos:** Marcar carpetas o archivos estrella para acceso rápido.
- **Listas de Links:** Crear colecciones anidadas (carpetas dentro de carpetas) para organizar mejor los recursos.

---

## 🏠 Pantalla: Home

### Propósito
Mostrar al estudiante **qué necesita hacer HOY** de un vistazo rápido. No sobrecargarlo con información.

### Lo que el usuario ve (de arriba a abajo)

1. **Saludo personalizado**
   - "Hola, [Nombre del usuario] 👋"
   - Foto de perfil a la derecha (clickeable para ir a Perfil)

2. **Barra de progreso de carrera**
   - Muestra el porcentaje de materias aprobadas
   - Ej: "Progreso de Carrera: 45%"
   - Clickeable para ver detalles

3. **Tarjeta "Tu día"**
   - Próxima clase del día (materia, hora, aula)
   - Si no hay clase: mostrar próximo evento (parcial, final)
   - Clickeable para ir a Horarios

4. **Widget de Milo (pequeño)**
   - Muestra la mascota en miniatura
   - Muestra racha actual: "🔥 5 días"
   - Clickeable para ir al tab Milo

5. **Tareas pendientes**
   - Lista de tareas rápidas que el usuario agregó
   - Input para agregar nueva tarea
   - Swipe para completar/eliminar

6. **Accesos rápidos**
   - Grid de botones personalizables
   - El usuario puede elegir qué accesos mostrar
   - Ej: Finales, Parciales, Simulador, Repositorio

---

## 📚 Pantalla: Materias

### Propósito
Ver y gestionar todas las materias de la carrera.

### Lo que el usuario ve

1. **Filtros**
   - Todas / Cursando / Regularizadas / Aprobadas / Pendientes

2. **Lista de materias**
   - Cada materia muestra:
     - Nombre de la materia
     - Estado (color: verde=aprobada, amarillo=regular, azul=cursando, gris=pendiente)
     - Año/Nivel al que pertenece
   - Clickeable para ver detalle

3. **Detalle de materia**
   - Información completa
   - Horarios de cursado
   - Correlativas
   - Opción de cambiar estado

---

## 🐾 Pantalla: Milo (La mascota)

### Propósito
Esta es la pantalla estrella para monetización. El usuario viene aquí para:
- Estudiar con el timer Pomodoro
- Ver y cuidar a su mascota
- Ver sus estadísticas y logros

### La Mascota "Milo"

**¿Qué es Milo?**
Milo es una mascota virtual que crece y evoluciona mientras el estudiante estudia. Es como un Tamagotchi pero para motivar el estudio.

**Evolución de Milo:**
1. **Huevo** - Estado inicial, el usuario acaba de empezar
2. **Milo Bebé** - Después de cierta cantidad de horas de estudio
3. **Milo Sabio** - Evolución final (puede ser un búho o personaje similar)

**Estados de ánimo de Milo:**
- **Feliz** 😊 - El usuario estudió hoy
- **Normal** 😐 - No estudió hoy pero la racha no se perdió
- **Triste** 😢 - Perdió la racha (1-2 días sin estudiar)
- **Enfermo** 🤒 - 3+ días sin estudiar, necesita atención

**Accesorios:**
- Milo puede usar accesorios (gorros, anteojos, capas, etc.)
- Se desbloquean al lograr hazañas (Gratis con esfuerzo)

### Timer Pomodoro

**¿Qué es?**
Un temporizador para estudiar usando la técnica Pomodoro (25 min estudio, 5 min descanso).

**Cómo funciona:**
1. El usuario entra a la pantalla de Milo
2. Ve a Milo en el centro
3. Debajo hay un botón grande "Empezar a estudiar"
4. Puede elegir: estudiar una materia específica o modo libre
5. El timer empieza (25 minutos por defecto, personalizable)
6. Al terminar: suena notificación, vibra, Milo se alegra
7. Empieza descanso (5 min), luego puede continuar

**Vinculación con materias:**
- Si elige una materia, el tiempo se registra para esa materia
- Esto permite ver: "Estudiaste 10 horas de Análisis Matemático este mes"

### Sistema de Gamificación

**Rachas (Streaks):**
- Días consecutivos que el usuario estudió al menos 1 pomodoro
- Se muestra: "🔥 7 días"
- Si pierde la racha, Milo se pone triste
- Motivación estilo Duolingo

**XP y Niveles:**
- Cada pomodoro completado = 25 XP
- Cada 500 XP = subir de nivel
- El nivel se muestra en el perfil
- Desbloquea accesorios para Milo

**Logros:**
- Hazañas desbloqueables con medallas
- Ejemplos:
  - "Maratonista" - 4 horas de estudio en un día
  - "Madrugador" - Estudiar antes de las 7am
  - "Nochero" - Estudiar después de las 11pm
  - "Primera racha" - 7 días consecutivos
  - "Imparable" - 30 días consecutivos

**Ranking semanal:**
- Top de usuarios que más estudiaron esa semana
- ES ANÓNIMO (solo muestra "Usuario #1234")
- Muestra: "Estás en el top 10% esta semana"

### Estadísticas

**Qué muestra:**
- Horas estudiadas esta semana (gráfico de barras por día)
- Distribución por materia (gráfico de torta)
- Mejor racha histórica
- Total de pomodoros completados
- Nivel actual y XP

---

## 🛠️ Pantalla: Herramientas

### Propósito
Agrupar todas las utilidades extra de la app.

### Opciones disponibles

1. **Simulador de Notas**
   - Permite "simular" aprobar materias para ver cómo cambia el progreso
   - Útil para planificar qué materias rendir
   - Útil para planificar qué materias rendir

2. **Repositorio de Links**
   - Guardar links útiles (Drive, páginas, recursos)
   - Organizados por materia

3. **Finales**
   - Lista de finales pendientes y aprobados
   - Fechas de mesa

4. **Parciales**
   - Tracking de parciales y notas

5. **Calificaciones de Cátedras** (Feature de Comunidad)
   - Ver y escribir reseñas de profesores/materias
   - Sistema de identidad (Anónimo/Verificado)
   - Moderación automática

---

## 📣 Marketing Copy & App Store Description

### App Description (Elevator Pitch)
**Título:** miFACU: Tu Título Universitario, Un Día a la Vez.

**Descripción Corta:**
Dejá de sufrir la carrera y empezá a gestionarla. miFACU es el copiloto académico que te ayuda a organizar materias, prevenir desastres con correlativas y mantener la motivación alta, incluso en los finales más difíciles.

**Descripción Larga (StoryBrand):**
¿Sentís que la facultad es un caos de fechas, horarios y trámites que te chupa la energía? No estás solo. La mayoría de los estudiantes pierden más tiempo organizándose que estudiando.

Con **miFACU**, recuperás el control.
*   🗺️ **Mapa de Carrera:** Visualizá tu progreso real y no solo una lista de materias.
*   ⛔ **Detector de Trabas:** Nuestro sistema te avisa ANTES de que pierdas una correlativa clave.
*   🍅 **Estudio Inteligente:** Cronómetro Pomodoro integrado con una mascota que evoluciona con tu esfuerzo.
*   🤝 **Comunidad Real:** Opiniones honestas de cátedras para que elijas con quién cursar (y con quién no).

No curses a ciegas. Descargá miFACU y recibite sin perder la cabeza.

---

### Features Premium (Venta Persuasiva)

**1. Línea de Tiempo del Cuatrimestre (El "Anticipador")**
> *"No dejes que la 'Semana de la Muerte' te tome por sorpresa."*
>
> Ver tu cuatrimestre día a día no sirve. Necesitás ver el bosque completo. Nuestra Línea de Tiempo te muestra dónse se acumulan los parciales y entregas con meses de anticipación. Detectá los cuellos de botella hoy y ajustá tu plan de estudio antes de que sea tarde.

**2. Simulador de Impacto de Correlativas (El "Salvavidas")**
> *"Una materia desaprobada hoy puede costarte un año entero mañana."*
>
> ¿Sabías que no aprobar Análisis II te traba 4 materias de tercero? El Simulador no solo te muestra las correlativas: te alerta del **Costo de Oportunidad**. Descubrí qué materias son "indispensables" y cuáles podés dejar para después sin atrasar tu título.

**3. "La Fija" (Inteligencia Colectiva)**
> *"Estudiá inteligente, no difícil."*
>
> ¿Por qué estudiar las 20 bolillas si el profesor siempre toma las mismas 3? Accedé a la base de datos colaborativa donde estudiantes de años superiores marcan los "Temas Fija" de cada mesa final. Enfocá tu energía donde realmente cuenta.

**4. Widgets de Inicio (Tu Progreso, Siempre Visible)**
> *"Mantené el foco sin abrir la app."*
>
> Tu próxima clase, tu racha de estudio y la cuenta regresiva para el final, directo en tu pantalla de inicio. Un recordatorio constante de tu objetivo que te mantiene en el camino correcto.

**5. Reseñas de Cátedras (El Filtro Anti-Frustración)**
> *"Elegir mal al profesor es elegir sufrir."*
>
> No te arriesgues. Accedé al historial completo de reseñas y calificaciones. Filtrá por "Exigente", "Toma Asistencia" o "Explica Bien". Conocé la verdad antes de inscribirte y evitá las cátedras filtro. Tu salud mental te lo va a agradecer.

**6. Estadísticas Avanzadas (Tu Entrenador Personal)**
> *"Lo que no se mide, no se mejora."*
>
> Dejá de estudiar "a sensación". Mirá gráficos reales de tu rendimiento: cuántas horas le dedicaste a cada materia, en qué horarios sos más productivo y cómo venís respecto al promedio. Ajustá tu estrategia con datos, no con intuición.
