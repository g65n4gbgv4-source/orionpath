/* ==========================================================================
   ORIONPATH — DATOS (data.js)
   --------------------------------------------------------------------------
   Solo información (sin lógica de interfaz). La lógica que lee estos
   datos vive en js/app.js.

   Cambios de esta versión:
   1. Cada carrera de careersData ahora tiene un campo "desc" (descripción
      corta) además de "duration" — antes solo Deporte tenía esa info.
   2. Cada área tiene como mínimo 3 carreras (varias tienen 4 o 5).
   3. Se eliminó por completo la Universidad Columbia del Paraguay de
      todas las listas (resultsInfo). Se la reemplazó por UPAP en el
      área de Arte (UPAP tiene facultad de Artes y Tecnologías real).
   4. Se agregó una nueva área: "Educación y Pedagogía" (educ), con sus
      propias carreras y su propio resultado de test.
   5. El test pasó de 5 a 8 preguntas, y cada pregunta ahora tiene una
      opción para cada una de las 8 áreas (antes eran 6-7).
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. CARRERAS (usadas en la sección "Explorá tus opciones")
   Cada carrera tiene:
     area      -> coincide con el filtro/resultsInfo (tech, salud, social,
                  admin, arte, exactas, deporte, educ)
     name      -> nombre visible de la carrera
     duration  -> duración aproximada, como texto
     desc      -> descripción corta (1 línea) de qué estudia esa carrera
-------------------------------------------------------------------------- */
const careersData = [
  // ---- Tecnología e Informática (4) ----
  { area: "tech", name: "Ingeniería en Informática", duration: "5 años", desc: "Diseño y desarrollo de software, sistemas complejos y arquitecturas tecnológicas." },
  { area: "tech", name: "Análisis de Sistemas", duration: "4 años", desc: "Programación, bases de datos y gestión de proyectos informáticos." },
  { area: "tech", name: "Ciberseguridad", duration: "4 años", desc: "Protección de redes, sistemas e información contra ataques digitales." },
  { area: "tech", name: "Desarrollo de Software", duration: "4 años", desc: "Creación de aplicaciones web, móviles y de escritorio." },

  // ---- Ciencias de la Salud (4) ----
  { area: "salud", name: "Medicina", duration: "6 años", desc: "Diagnóstico, tratamiento y prevención de enfermedades en pacientes." },
  { area: "salud", name: "Enfermería", duration: "4 años", desc: "Cuidado directo del paciente y promoción de la salud comunitaria." },
  { area: "salud", name: "Odontología", duration: "5 años", desc: "Salud bucal, tratamientos dentales y prevención de enfermedades orales." },
  { area: "salud", name: "Nutrición", duration: "4 años", desc: "Planificación alimentaria y hábitos saludables para prevenir enfermedades." },

  // ---- Ciencias Sociales y Jurídicas (4) ----
  { area: "social", name: "Derecho", duration: "5 años", desc: "Estudio y aplicación de las leyes para defender derechos y resolver conflictos." },
  { area: "social", name: "Psicología", duration: "5 años", desc: "Comprensión del comportamiento humano y acompañamiento en salud mental." },
  { area: "social", name: "Ciencias de la Comunicación", duration: "4 años", desc: "Producción de contenidos, periodismo y comunicación institucional." },
  { area: "social", name: "Ciencias Políticas", duration: "4 años", desc: "Análisis de sistemas de gobierno, políticas públicas y procesos electorales." },

  // ---- Administración y Negocios (4) ----
  { area: "admin", name: "Administración de Empresas", duration: "4 años", desc: "Gestión de recursos, equipos y estrategias dentro de organizaciones." },
  { area: "admin", name: "Contabilidad Pública", duration: "4 años", desc: "Registro, control y análisis financiero de empresas e instituciones." },
  { area: "admin", name: "Marketing y Publicidad", duration: "4 años", desc: "Estrategias de marca, campañas publicitarias y comportamiento del consumidor." },
  { area: "admin", name: "Comercio Internacional", duration: "4 años", desc: "Importación, exportación y negociación entre países." },

  // ---- Arte y Diseño (4) ----
  { area: "arte", name: "Diseño Gráfico", duration: "4 años", desc: "Comunicación visual mediante imagen, tipografía y branding." },
  { area: "arte", name: "Arquitectura", duration: "5 años", desc: "Diseño, planificación y construcción de espacios funcionales." },
  { area: "arte", name: "Diseño Industrial", duration: "4 años", desc: "Creación de productos y objetos que combinan función y forma." },
  { area: "arte", name: "Artes Audiovisuales", duration: "4 años", desc: "Producción de cine, video y contenido audiovisual." },

  // ---- Ciencias Exactas y Naturales (5) ----
  { area: "exactas", name: "Ingeniería Civil", duration: "5 años", desc: "Diseño y construcción de infraestructuras como edificios y puentes." },
  { area: "exactas", name: "Biotecnología", duration: "5 años", desc: "Aplicación de procesos biológicos para desarrollos científicos e industriales." },
  { area: "exactas", name: "Química Industrial", duration: "4 años", desc: "Procesos químicos aplicados a la industria y control de calidad." },
  { area: "exactas", name: "Licenciatura en Biología", duration: "4 años", desc: "Estudio de los seres vivos, ecosistemas y procesos naturales." },
  // Carrera sin oferta académica en Paraguay: se deja igual en el filtro
  // "exactas" (es su área real) pero con nota clara sobre estudiar afuera.
  { area: "exactas", name: "Biología Marina (no se dicta en Paraguay)", duration: "4-5 años (en el exterior)", desc: "Estudio de la vida marina y ecosistemas oceánicos; se cursa en el exterior." },

  // ---- Deporte y Ciencias del Ejercicio (3) ----
  { area: "deporte", name: "Ciencias del Deporte / Educación Física", duration: "4 años", desc: "Formación en entrenamiento, actividad física y enseñanza deportiva." },
  { area: "deporte", name: "Kinesiología y Fisioterapia", duration: "5 años", desc: "Rehabilitación física y recuperación motora de pacientes." },
  { area: "deporte", name: "Gestión y Marketing Deportivo", duration: "4 años", desc: "Administración de clubes, eventos y marcas deportivas." },

  // ---- NUEVA ÁREA: Educación y Pedagogía (3) ----
  { area: "educ", name: "Profesorado en Educación Escolar Básica", duration: "4 años", desc: "Formación docente para acompañar el aprendizaje en los primeros años." },
  { area: "educ", name: "Ciencias de la Educación", duration: "4 años", desc: "Diseño curricular, gestión educativa e investigación pedagógica." },
  { area: "educ", name: "Educación Especial / Inclusiva", duration: "4 años", desc: "Acompañamiento pedagógico a estudiantes con necesidades específicas." }
];


/* --------------------------------------------------------------------------
   2. RESULTADOS DEL TEST (una entrada por cada área posible)
   NOTA: se eliminó "COLUMBIA" de todas las listas de universidades.
   En el área de Arte, Columbia se reemplazó por UPAP, que cuenta con
   una Facultad de Artes y Tecnologías real.
-------------------------------------------------------------------------- */
const resultsInfo = {
  tech: {
    emoji: "💻",
    title: "Tecnología e Informática",
    desc: "Tenés una mente lógica, orientada a la resolución de problemas y la innovación digital.",
    careers: ["Ingeniería en Informática", "Análisis de Sistemas", "Ciberseguridad", "Desarrollo de Software"],
    unis: ["UNA (Politécnica)", "UCA", "UNINORTE"]
  },
  salud: {
    emoji: "⚕️",
    title: "Ciencias de la Salud",
    desc: "Tu vocación está claramente guiada por la empatía, el cuidado y el bienestar de los demás.",
    careers: ["Medicina", "Enfermería", "Odontología", "Nutrición"],
    unis: ["UNA (Medicina)", "UCA", "UNIBE", "UPAP"]
  },
  social: {
    emoji: "⚖️",
    title: "Ciencias Sociales y Jurídicas",
    desc: "Te apasiona la justicia, la comunicación y el análisis del comportamiento humano.",
    careers: ["Derecho", "Psicología", "Ciencias Políticas", "Comunicación"],
    unis: ["UNA (Derecho)", "UCA", "UNIBE", "UNINORTE"]
  },
  admin: {
    emoji: "📊",
    title: "Administración y Negocios",
    desc: "Tenés visión estratégica, capacidad organizativa y espíritu emprendedor.",
    careers: ["Administración de Empresas", "Contabilidad", "Marketing", "Comercio Internacional"],
    unis: ["UNA (Económicas)", "UCA", "UNINORTE"]
  },
  arte: {
    emoji: "🎨",
    title: "Arte y Diseño",
    desc: "Destacás por tu creatividad, pensamiento visual y capacidad estética.",
    careers: ["Diseño Gráfico", "Arquitectura", "Diseño Industrial", "Artes Audiovisuales"],
    unis: ["UNA (FADA)", "UCA", "UPAP"]
  },
  exactas: {
    emoji: "🔬",
    title: "Ciencias Exactas y Naturales",
    desc: "Te caracteriza la curiosidad científica, el rigor analítico y la pasión por el descubrimiento.",
    careers: ["Ingeniería Civil", "Química Industrial", "Biología", "Biotecnología"],
    unis: ["UNA (FACEN/FIUNA)", "UCA"]
  },
  deporte: {
    emoji: "🏅",
    title: "Deporte y Ciencias del Ejercicio",
    desc: "Tenés energía, disciplina y pasión por el movimiento, la actividad física y el rendimiento.",
    careers: ["Ciencias del Deporte", "Educación Física", "Kinesiología y Fisioterapia", "Gestión Deportiva"],
    unis: ["UNA (FACM)", "UNINORTE", "UAA"]
  },
  // NUEVO resultado posible del test
  educ: {
    emoji: "📚",
    title: "Educación y Pedagogía",
    desc: "Tenés vocación por enseñar, acompañar y transformar la vida de otros a través del conocimiento.",
    careers: ["Educación Escolar Básica", "Ciencias de la Educación", "Educación Especial", "Educación Inicial"],
    unis: ["UNA (FILO)", "UCA", "UNINORTE"]
  }
};


/* --------------------------------------------------------------------------
   3. PREGUNTAS DEL TEST VOCACIONAL
   Ahora son 8 preguntas (antes 5), cada una con 8 opciones — una por
   cada área definida arriba en resultsInfo.
-------------------------------------------------------------------------- */
const questions = [
  {
    q: "1. ¿Qué actividad disfrutás realizar en tu tiempo libre?",
    opts: [
      { text: "Resolver acertijos, programar o explorar herramientas tecnológicas", area: "tech" },
      { text: "Aprender sobre el cuerpo humano, salud o primeros auxilios", area: "salud" },
      { text: "Debatir sobre temas sociales, historia o analizar comportamientos", area: "social" },
      { text: "Organizar eventos, gestionar proyectos o idear emprendimientos", area: "admin" },
      { text: "Dibujar, editar fotos/videos o crear proyectos artísticos", area: "arte" },
      { text: "Hacer experimentos, calcular problemas complejos o investigar la naturaleza", area: "exactas" },
      { text: "Entrenar, practicar algún deporte o mantenerte físicamente activo", area: "deporte" },
      { text: "Enseñar algo nuevo a otra persona o explicar temas que dominás", area: "educ" }
    ]
  },
  {
    q: "2. Frente a un problema en un grupo de trabajo, ¿cuál es tu reacción habitual?",
    opts: [
      { text: "Busco una solución lógica, automatizada o técnica", area: "tech" },
      { text: "Me preocupo por el bienestar de las personas afectadas", area: "salud" },
      { text: "Medio la comunicación para resolver el conflicto pacíficamente", area: "social" },
      { text: "Tomo el liderazgo para planificar y distribuir tareas eficientemente", area: "admin" },
      { text: "Aporto una perspectiva creativa e innovadora", area: "arte" },
      { text: "Analizo detalladamente las causas y los datos objetivos del problema", area: "exactas" },
      { text: "Motivo al equipo con energía y espíritu de superación", area: "deporte" },
      { text: "Explico con paciencia hasta que todos entienden la situación", area: "educ" }
    ]
  },
  {
    q: "3. ¿Qué asignaturas de la secundaria captaban más tu atención?",
    opts: [
      { text: "Informática, Robótica o Lógica", area: "tech" },
      { text: "Biología, Salud o Química", area: "salud" },
      { text: "Historia, Psicología, Ética o Formación Ciudadana", area: "social" },
      { text: "Contabilidad, Economía o Administración", area: "admin" },
      { text: "Artes Plásticas, Literatura o Diseño", area: "arte" },
      { text: "Matemática Avanzada o Física", area: "exactas" },
      { text: "Educación Física, Deportes o actividades recreativas", area: "deporte" },
      { text: "Pedagogía, o ayudar a compañeros a estudiar y entender temas", area: "educ" }
    ]
  },
  {
    q: "4. ¿En qué tipo de entorno te imaginas trabajando profesionalmente?",
    opts: [
      { text: "Un laboratorio tecnológico, empresa de software o remoto", area: "tech" },
      { text: "Un hospital, clínica, laboratorio o centro de atención a la salud", area: "salud" },
      { text: "Instituciones públicas, ONGs, juzgados o consultorios sociales", area: "social" },
      { text: "Oficinas corporativas, empresas propias o entornos financieros", area: "admin" },
      { text: "Estudios creativos, talleres de diseño, agencias o medios de comunicación", area: "arte" },
      { text: "Centros de investigación, industrias tecnológicas o de campo", area: "exactas" },
      { text: "Un gimnasio, club deportivo, centro de alto rendimiento o al aire libre", area: "deporte" },
      { text: "Una escuela, colegio o instituto de formación", area: "educ" }
    ]
  },
  {
    q: "5. ¿Qué logro te generaría mayor satisfacción profesional?",
    opts: [
      { text: "Desarrollar una aplicación o sistema informático de gran utilidad", area: "tech" },
      { text: "Contribuir a salvar vidas o mejorar la calidad de vida de un paciente", area: "salud" },
      { text: "Promover el cumplimiento de leyes o la resolución de problemas comunitarios", area: "social" },
      { text: "Construir una empresa próspera y rentable", area: "admin" },
      { text: "Diseñar una obra visual o producto reconocido", area: "arte" },
      { text: "Realizar un descubrimiento científico o avance tecnológico", area: "exactas" },
      { text: "Ayudar a un equipo o a una persona a alcanzar su máximo rendimiento físico", area: "deporte" },
      { text: "Formar a futuras generaciones y marcar una diferencia en su aprendizaje", area: "educ" }
    ]
  },
  {
    q: "6. ¿Qué tipo de proyecto escolar te gustaba más armar?",
    opts: [
      { text: "Una maqueta, robot o proyecto de programación", area: "tech" },
      { text: "Una campaña de salud o de primeros auxilios", area: "salud" },
      { text: "Un debate, investigación social o mesa redonda", area: "social" },
      { text: "Un plan de negocio o una feria de emprendedores", area: "admin" },
      { text: "Un mural, afiche o producción artística", area: "arte" },
      { text: "Un experimento científico o de laboratorio", area: "exactas" },
      { text: "Una jornada deportiva o torneo entre cursos", area: "deporte" },
      { text: "Una clase o taller para enseñarle algo a compañeros más chicos", area: "educ" }
    ]
  },
  {
    q: "7. Si tuvieras que elegir un canal o cuenta para seguir, ¿cuál sería?",
    opts: [
      { text: "Uno de tecnología, videojuegos o programación", area: "tech" },
      { text: "Uno de salud, bienestar o medicina", area: "salud" },
      { text: "Uno de actualidad, política o sociedad", area: "social" },
      { text: "Uno de negocios, finanzas o emprendimiento", area: "admin" },
      { text: "Uno de arte, diseño o moda", area: "arte" },
      { text: "Uno de ciencia, naturaleza o descubrimientos", area: "exactas" },
      { text: "Uno de deportes y vida activa", area: "deporte" },
      { text: "Uno de educación, docencia o divulgación", area: "educ" }
    ]
  },
  {
    q: "8. ¿Qué te describe mejor?",
    opts: [
      { text: "Curioso/a por entender cómo funcionan las cosas por dentro", area: "tech" },
      { text: "Sensible ante el dolor o las necesidades de otros", area: "salud" },
      { text: "Con facilidad para escuchar y mediar en conflictos", area: "social" },
      { text: "Organizado/a y con visión para planificar", area: "admin" },
      { text: "Con una mirada creativa para todo lo que hago", area: "arte" },
      { text: "Analítico/a y metódico/a a la hora de resolver problemas", area: "exactas" },
      { text: "Con energía y disciplina para superar desafíos físicos", area: "deporte" },
      { text: "Paciente y con gusto por explicar o guiar a otros", area: "educ" }
    ]
  }
];
