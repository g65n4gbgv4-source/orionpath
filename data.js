/* ==========================================================================
   ORIONPATH — DATOS (data.js)
   --------------------------------------------------------------------------
   Este archivo NO tiene lógica de interfaz: solo guarda la "información"
   del sitio en forma de arreglos y objetos de JavaScript. La lógica que
   LEE estos datos y arma la pantalla vive en js/app.js.

   Contiene 3 partes:
   1. careersData   -> lista de carreras (usada en la sección "Carreras")
   2. resultsInfo    -> resultado que se muestra según el área ganadora del test
   3. questions      -> las 5 preguntas del test vocacional, con sus opciones

   Se agregó una nueva área: "deporte" (Deporte y Ciencias del Ejercicio),
   con sus propias carreras, una entrada en resultsInfo y una opción nueva
   en cada pregunta del test, para que el test también pueda dar ese
   resultado.

   También se agregó, dentro del área "exactas", la carrera "Biología
   Marina" con una nota aclarando que no se dicta en Paraguay y que la
   alternativa es estudiar en el exterior. No se creó una "dimensión" de
   test para esto porque no es un rasgo de personalidad en sí mismo (no
   tendría sentido preguntar "¿te gustaría irte del país?" junto a
   preguntas de vocación) — se lo muestra como una carrera más dentro del
   área de Ciencias Exactas, que es a la que realmente pertenece.
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. CARRERAS (usadas en la sección "Explorá tus opciones")
   Cada carrera tiene:
     area      -> debe coincidir con el "area" usado en los filtros y en
                  resultsInfo (tech, salud, social, admin, arte, exactas,
                  deporte)
     name      -> nombre visible de la carrera
     duration  -> duración aproximada, como texto
-------------------------------------------------------------------------- */
const careersData = [
  { area: "tech", name: "Ingeniería en Informática", duration: "5 años" },
  { area: "tech", name: "Análisis de Sistemas", duration: "4 años" },
  { area: "tech", name: "Ciberseguridad", duration: "4 años" },

  { area: "salud", name: "Medicina", duration: "6 años" },
  { area: "salud", name: "Enfermería", duration: "4 años" },
  { area: "salud", name: "Odontología", duration: "5 años" },

  { area: "social", name: "Derecho", duration: "5 años" },
  { area: "social", name: "Psicología", duration: "5 años" },
  { area: "social", name: "Ciencias de la Comunicación", duration: "4 años" },

  { area: "admin", name: "Administración de Empresas", duration: "4 años" },
  { area: "admin", name: "Contabilidad Pública", duration: "4 años" },
  { area: "admin", name: "Marketing y Publicidad", duration: "4 años" },

  { area: "arte", name: "Diseño Gráfico", duration: "4 años" },
  { area: "arte", name: "Arquitectura", duration: "5 años" },

  { area: "exactas", name: "Ingeniería Civil", duration: "5 años" },
  { area: "exactas", name: "Biotecnología", duration: "5 años" },
  // NUEVO: carrera sin oferta académica en Paraguay. Se deja igual en el
  // filtro "exactas" (es su área real) pero con una nota clara para que
  // el estudiante sepa que implica estudiar en el exterior.
  { area: "exactas", name: "Biología Marina (no se dicta en Paraguay — estudiar en el exterior)", duration: "4-5 años (en el exterior)" },

  // NUEVO: área "Deporte y Ciencias del Ejercicio"
  { area: "deporte", name: "Ciencias del Deporte / Educación Física", duration: "4 años" },
  { area: "deporte", name: "Kinesiología y Fisioterapia", duration: "5 años" },
  { area: "deporte", name: "Gestión y Marketing Deportivo", duration: "4 años" }
];


/* --------------------------------------------------------------------------
   2. RESULTADOS DEL TEST (una entrada por cada área posible)
   Cuando el estudiante termina el test, se cuenta qué área sumó más
   respuestas y se muestra la info de resultsInfo[esa_area].
-------------------------------------------------------------------------- */
const resultsInfo = {
  tech: {
    emoji: "💻",
    title: "Tecnología e Informática",
    desc: "Tenés una mente lógica, orientada a la resolución de problemas y la innovación digital.",
    careers: ["Ingeniería en Informática", "Análisis de Sistemas", "Ciberseguridad", "Desarrollo de Software"],
    unis: ["UNA (Politécnica)", "UCA", "UNINORTE", "COLUMBIA"]
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
    unis: ["UNA (Económicas)", "UCA", "COLUMBIA", "UNINORTE"]
  },
  arte: {
    emoji: "🎨",
    title: "Arte y Diseño",
    desc: "Destacás por tu creatividad, pensamiento visual y capacidad estética.",
    careers: ["Diseño Gráfico", "Arquitectura", "Diseño Industrial", "Artes Audiovisuales"],
    unis: ["UNA (FADA)", "UCA", "COLUMBIA"]
  },
  exactas: {
    emoji: "🔬",
    title: "Ciencias Exactas y Naturales",
    desc: "Te caracteriza la curiosidad científica, el rigor analítico y la pasión por el descubrimiento.",
    careers: ["Ingeniería Civil", "Química Pura", "Biología", "Biotecnología"],
    unis: ["UNA (FACEN/FIUNA)", "UCA"]
  },
  // NUEVO resultado posible del test
  deporte: {
    emoji: "🏅",
    title: "Deporte y Ciencias del Ejercicio",
    desc: "Tenés energía, disciplina y pasión por el movimiento, la actividad física y el rendimiento.",
    careers: ["Ciencias del Deporte", "Educación Física", "Kinesiología y Fisioterapia", "Gestión Deportiva"],
    unis: ["UNA (FACM)", "UNINORTE", "UAA"]
  }
};


/* --------------------------------------------------------------------------
   3. PREGUNTAS DEL TEST VOCACIONAL
   Cada pregunta tiene:
     q     -> el texto de la pregunta
     opts  -> un arreglo de opciones, cada una con:
                text -> lo que lee el estudiante
                area -> a qué área "vota" si el estudiante la elige

   Se agregó una 7ma opción (area: "deporte") a cada una de las 5
   preguntas ya existentes, para que el test pueda dar "deporte" como
   resultado igual que con cualquier otra área.
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
      { text: "Entrenar, practicar algún deporte o mantenerte físicamente activo", area: "deporte" }
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
      { text: "Motivo al equipo con energía y espíritu de superación, como en un desafío deportivo", area: "deporte" }
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
      { text: "Educación Física, Deportes o actividades recreativas", area: "deporte" }
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
      { text: "Un gimnasio, club deportivo, centro de alto rendimiento o al aire libre", area: "deporte" }
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
      { text: "Ayudar a un equipo o a una persona a alcanzar su máximo rendimiento físico", area: "deporte" }
    ]
  }
];
