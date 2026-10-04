/* ==========================================================
   ORIONPATH — DATOS PRINCIPALES
   Carreras, áreas, universidades y preguntas.
   ========================================================== */


/* ==========================================================
   CARRERAS
   ========================================================== */

const careersData = [

  /* --------------------------------------------------------
     TECNOLOGÍA E INFORMÁTICA
     -------------------------------------------------------- */

  {
    name: "Ingeniería en Informática",
    area: "tech",
    duration: "Aproximadamente 5 años",
    desc: "Diseño, desarrollo y gestión de sistemas informáticos, software y soluciones tecnológicas."
  },

  {
    name: "Análisis de Sistemas",
    area: "tech",
    duration: "Aproximadamente 4 años",
    desc: "Análisis, diseño y desarrollo de sistemas de información para organizaciones."
  },

  {
    name: "Ciberseguridad",
    area: "tech",
    duration: "Aproximadamente 4 años",
    desc: "Protección de sistemas, redes, información y servicios digitales frente a amenazas."
  },

  {
    name: "Desarrollo de Software",
    area: "tech",
    duration: "Aproximadamente 4 años",
    desc: "Creación, programación, prueba y mantenimiento de aplicaciones y soluciones digitales."
  },


  /* --------------------------------------------------------
     CIENCIAS DE LA SALUD
     -------------------------------------------------------- */

  {
    name: "Medicina",
    area: "salud",
    duration: "Aproximadamente 6 años",
    desc: "Prevención, diagnóstico y tratamiento de enfermedades y cuidado integral de la salud."
  },

  {
    name: "Enfermería",
    area: "salud",
    duration: "Aproximadamente 4 años",
    desc: "Cuidado integral de las personas y participación en la promoción, prevención y recuperación de la salud."
  },

  {
    name: "Odontología",
    area: "salud",
    duration: "Aproximadamente 5 años",
    desc: "Prevención, diagnóstico y tratamiento de enfermedades y alteraciones de la salud bucal."
  },

  {
    name: "Nutrición",
    area: "salud",
    duration: "Aproximadamente 4 años",
    desc: "Estudio de la alimentación y su relación con la salud, el bienestar y la prevención de enfermedades."
  },


  /* --------------------------------------------------------
     CIENCIAS SOCIALES Y JURÍDICAS
     -------------------------------------------------------- */

  {
    name: "Derecho",
    area: "social",
    duration: "Aproximadamente 5 años",
    desc: "Estudio de las normas jurídicas, derechos, obligaciones y sistemas legales."
  },

  {
    name: "Psicología",
    area: "social",
    duration: "Aproximadamente 5 años",
    desc: "Estudio del comportamiento humano, los procesos mentales y las relaciones interpersonales."
  },

  {
    name: "Ciencias de la Comunicación",
    area: "social",
    duration: "Aproximadamente 4 años",
    desc: "Estudio y producción de contenidos y procesos de comunicación en diferentes medios y contextos."
  },

  {
    name: "Ciencias Políticas",
    area: "social",
    duration: "Aproximadamente 4 años",
    desc: "Análisis de los sistemas políticos, instituciones, gobiernos y procesos sociales."
  },


  /* --------------------------------------------------------
     ADMINISTRACIÓN Y NEGOCIOS
     -------------------------------------------------------- */

  {
    name: "Administración de Empresas",
    area: "admin",
    duration: "Aproximadamente 4 años",
    desc: "Gestión de organizaciones, recursos, proyectos y procesos empresariales."
  },

  {
    name: "Contabilidad Pública",
    area: "admin",
    duration: "Aproximadamente 4 años",
    desc: "Gestión y análisis de información contable, financiera y tributaria."
  },

  {
    name: "Marketing y Publicidad",
    area: "admin",
    duration: "Aproximadamente 4 años",
    desc: "Desarrollo de estrategias de comunicación, promoción, marcas y comportamiento del consumidor."
  },

  {
    name: "Comercio Internacional",
    area: "admin",
    duration: "Aproximadamente 4 años",
    desc: "Estudio de operaciones comerciales, negocios y relaciones económicas entre países."
  },


  /* --------------------------------------------------------
     ARTE Y DISEÑO
     -------------------------------------------------------- */

  {
    name: "Diseño Gráfico",
    area: "arte",
    duration: "Aproximadamente 4 años",
    desc: "Creación de soluciones visuales para comunicar ideas mediante composición, imagen, tipografía y medios digitales."
  },

  {
    name: "Arquitectura",
    area: "arte",
    duration: "Aproximadamente 5 años",
    desc: "Diseño y planificación de espacios, edificios y entornos considerando aspectos funcionales y estéticos."
  },

  {
    name: "Diseño Industrial",
    area: "arte",
    duration: "Aproximadamente 4 años",
    desc: "Diseño y desarrollo de productos considerando funcionalidad, estética, materiales y necesidades de los usuarios."
  },

  {
    name: "Artes Audiovisuales",
    area: "arte",
    duration: "Aproximadamente 4 años",
    desc: "Producción y creación de contenidos audiovisuales mediante imagen, sonido, narrativa y tecnología."
  },


  /* --------------------------------------------------------
     CIENCIAS EXACTAS Y NATURALES
     -------------------------------------------------------- */

  {
    name: "Ingeniería Civil",
    area: "exactas",
    duration: "Aproximadamente 5 años",
    desc: "Diseño, planificación y construcción de infraestructura y obras civiles."
  },

  {
    name: "Biotecnología",
    area: "exactas",
    duration: "Aproximadamente 5 años",
    desc: "Aplicación de conocimientos biológicos y tecnológicos para desarrollar productos y procesos."
  },

  {
    name: "Química Industrial",
    area: "exactas",
    duration: "Aproximadamente 4 años",
    desc: "Aplicación de la química a procesos industriales, producción, control y desarrollo de materiales."
  },

  {
    name: "Licenciatura en Biología",
    area: "exactas",
    duration: "Aproximadamente 4 años",
    desc: "Estudio de los seres vivos, sus procesos, diversidad, evolución y relación con el ambiente."
  },

  {
    name: "Biología Marina",
    area: "exactas",
    duration: "Variable según la institución y el país",
    location: "exterior",
    desc: "Estudio de organismos marinos y ecosistemas acuáticos. Requiere explorar opciones de formación en el exterior."
  },


  /* --------------------------------------------------------
     DEPORTE Y CIENCIAS DEL EJERCICIO
     -------------------------------------------------------- */

  {
    name: "Educación Física",
    area: "deporte",
    duration: "Aproximadamente 4 años",
    desc: "Educación, enseñanza y promoción de la actividad física, el movimiento y los hábitos saludables."
  },

  {
    name: "Ciencias del Deporte",
    area: "deporte",
    duration: "Variable según la institución",
    desc: "Estudio científico del deporte, el rendimiento físico, el entrenamiento y la actividad deportiva."
  },

  {
    name: "Kinesiología y Fisioterapia",
    area: "deporte",
    duration: "Aproximadamente 5 años",
    desc: "Prevención, evaluación y recuperación del movimiento y las funciones físicas."
  },

  {
    name: "Gestión y Marketing Deportivo",
    area: "deporte",
    duration: "Variable según la institución",
    desc: "Gestión de organizaciones, eventos, proyectos, comunicación y marketing relacionados con el deporte."
  },


  /* --------------------------------------------------------
     EDUCACIÓN Y PEDAGOGÍA
     -------------------------------------------------------- */

  {
    name: "Profesorado en Educación Escolar Básica",
    area: "educ",
    duration: "Aproximadamente 4 años",
    desc: "Formación para la enseñanza y acompañamiento educativo en los primeros niveles de escolaridad."
  },

  {
    name: "Ciencias de la Educación",
    area: "educ",
    duration: "Aproximadamente 4 años",
    desc: "Estudio de los procesos educativos, pedagógicos y sociales relacionados con la enseñanza y el aprendizaje."
  },

  {
    name: "Educación Especial / Inclusiva",
    area: "educ",
    duration: "Variable según la institución",
    desc: "Formación orientada a la atención educativa de personas con diferentes necesidades y al desarrollo de prácticas inclusivas."
  },

  {
    name: "Educación Inicial",
    area: "educ",
    duration: "Variable según la institución",
    desc: "Formación orientada al desarrollo, aprendizaje y educación de niños y niñas durante la primera infancia."
  }

];


/* ==========================================================
   INFORMACIÓN DE LAS ÁREAS
   Las carreras se obtienen directamente desde careersData.
   ========================================================== */

const resultsInfo = {

  tech: {
    title: "Tecnología e Informática",
    emoji: "💻",
    unis: [
      "UNA (Politécnica)",
      "UCA",
      "UNINORTE"
    ]
  },

  salud: {
    title: "Ciencias de la Salud",
    emoji: "🩺",
    unis: [
      "UNA (Medicina)",
      "UCA",
      "UNIBE",
      "UPAP"
    ]
  },

  social: {
    title: "Ciencias Sociales y Jurídicas",
    emoji: "⚖️",
    unis: [
      "UNA (Derecho)",
      "UCA",
      "UNIBE",
      "UNINORTE"
    ]
  },

  admin: {
    title: "Administración y Negocios",
    emoji: "📊",
    unis: [
      "UNA (Económicas)",
      "UCA",
      "UNINORTE"
    ]
  },

  arte: {
    title: "Arte y Diseño",
    emoji: "🎨",
    unis: [
      "UNA (FADA)",
      "UCA",
      "UPAP"
    ]
  },

  exactas: {
    title: "Ciencias Exactas y Naturales",
    emoji: "🔬",
    unis: [
      "UNA (FACEN / FIUNA)",
      "UCA"
    ]
  },

  deporte: {
    title: "Deporte y Ciencias del Ejercicio",
    emoji: "🏃",
    unis: [
      "UNA",
      "UNINORTE",
      "UAA"
    ]
  },

  educ: {
    title: "Educación y Pedagogía",
    emoji: "📚",
    unis: [
      "UNA",
      "UCA",
      "UNINORTE"
    ]
  }

};


/* ==========================================================
   PREGUNTAS DEL TEST
   Cada pregunta permite seleccionar varias opciones.
   ========================================================== */

const questions = [

  {
    q: "¿Qué actividad te gustaría hacer durante tu tiempo libre?",
    opts: [
      {
        text: "Crear programas, editar o experimentar con tecnología",
        area: "tech"
      },
      {
        text: "Investigar sobre el cuerpo humano, salud o bienestar",
        area: "salud"
      },
      {
        text: "Debatir, escribir, investigar o conocer temas sociales",
        area: "social"
      },
      {
        text: "Organizar proyectos, negocios o emprendimientos",
        area: "admin"
      },
      {
        text: "Dibujar, diseñar, bailar, crear contenido o hacer arte",
        area: "arte"
      },
      {
        text: "Experimentar, investigar la naturaleza o resolver problemas",
        area: "exactas"
      },
      {
        text: "Practicar deportes, entrenar o aprender sobre movimiento",
        area: "deporte"
      },
      {
        text: "Ayudar a otras personas a aprender algo nuevo",
        area: "educ"
      }
    ]
  },

  {
    q: "Cuando aparece un problema en un trabajo grupal, ¿qué solés hacer?",
    opts: [
      {
        text: "Buscar una solución usando herramientas tecnológicas",
        area: "tech"
      },
      {
        text: "Pensar en cómo afecta a las personas involucradas",
        area: "salud"
      },
      {
        text: "Hablar con todos y tratar de entender las diferentes opiniones",
        area: "social"
      },
      {
        text: "Organizar al grupo y repartir las tareas",
        area: "admin"
      },
      {
        text: "Proponer una idea creativa y diferente",
        area: "arte"
      },
      {
        text: "Analizar el problema paso a paso",
        area: "exactas"
      },
      {
        text: "Buscar una solución práctica y activa",
        area: "deporte"
      },
      {
        text: "Ayudar a que todos entiendan qué deben hacer",
        area: "educ"
      }
    ]
  },

  {
    q: "¿Qué tipo de materias o actividades escolares te llaman más la atención?",
    opts: [
      {
        text: "Informática, programación y tecnología",
        area: "tech"
      },
      {
        text: "Biología, salud y anatomía",
        area: "salud"
      },
      {
        text: "Historia, comunicación, literatura o sociedad",
        area: "social"
      },
      {
        text: "Economía, administración o emprendimiento",
        area: "admin"
      },
      {
        text: "Arte, diseño, música o expresión corporal",
        area: "arte"
      },
      {
        text: "Matemática, química, física o ciencias naturales",
        area: "exactas"
      },
      {
        text: "Educación física, deporte y entrenamiento",
        area: "deporte"
      },
      {
        text: "Pedagogía, enseñanza o actividades educativas",
        area: "educ"
      }
    ]
  },

  {
    q: "¿En qué ambiente de trabajo te imaginarías más cómoda/o?",
    opts: [
      {
        text: "Frente a una computadora o trabajando con tecnología",
        area: "tech"
      },
      {
        text: "En un hospital, clínica, laboratorio o centro de salud",
        area: "salud"
      },
      {
        text: "En una institución, organización, medio de comunicación o estudio jurídico",
        area: "social"
      },
      {
        text: "En una empresa, oficina o emprendimiento",
        area: "admin"
      },
      {
        text: "En un estudio creativo, escenario, taller o espacio artístico",
        area: "arte"
      },
      {
        text: "En un laboratorio, centro de investigación o proyecto científico",
        area: "exactas"
      },
      {
        text: "En un gimnasio, club, cancha o espacio deportivo",
        area: "deporte"
      },
      {
        text: "En una escuela, institución educativa o espacio de aprendizaje",
        area: "educ"
      }
    ]
  },

  {
    q: "¿Qué logro profesional te haría sentir más orgullosa/o?",
    opts: [
      {
        text: "Crear una aplicación, sistema o solución tecnológica",
        area: "tech"
      },
      {
        text: "Ayudar a mejorar la salud o calidad de vida de alguien",
        area: "salud"
      },
      {
        text: "Defender una causa, comunicar una idea o generar un cambio social",
        area: "social"
      },
      {
        text: "Crear y hacer crecer una empresa o proyecto",
        area: "admin"
      },
      {
        text: "Crear una obra, diseño, espectáculo o proyecto artístico",
        area: "arte"
      },
      {
        text: "Descubrir, investigar o desarrollar algo nuevo",
        area: "exactas"
      },
      {
        text: "Mejorar el rendimiento o bienestar físico de otras personas",
        area: "deporte"
      },
      {
        text: "Enseñar y ver progresar a otras personas",
        area: "educ"
      }
    ]
  },

  {
    q: "Si tuvieras que realizar un proyecto para la escuela, ¿cuál elegirías?",
    opts: [
      {
        text: "Crear una página web o aplicación",
        area: "tech"
      },
      {
        text: "Investigar una enfermedad, alimento o tema relacionado con la salud",
        area: "salud"
      },
      {
        text: "Realizar una investigación sobre un problema social",
        area: "social"
      },
      {
        text: "Crear un emprendimiento o plan de negocios",
        area: "admin"
      },
      {
        text: "Crear una campaña visual, obra o presentación artística",
        area: "arte"
      },
      {
        text: "Realizar un experimento o investigación científica",
        area: "exactas"
      },
      {
        text: "Organizar una actividad deportiva o desafío físico",
        area: "deporte"
      },
      {
        text: "Crear una actividad para enseñar algo a otros estudiantes",
        area: "educ"
      }
    ]
  },

  {
    q: "¿Qué tipo de contenido te gustaría crear o consumir más?",
    opts: [
      {
        text: "Tecnología, programación y videojuegos",
        area: "tech"
      },
      {
        text: "Salud, nutrición y bienestar",
        area: "salud"
      },
      {
        text: "Noticias, debates, cultura y sociedad",
        area: "social"
      },
      {
        text: "Negocios, marcas, emprendimiento y marketing",
        area: "admin"
      },
      {
        text: "Arte, diseño, música, danza y audiovisual",
        area: "arte"
      },
      {
        text: "Ciencia, naturaleza y descubrimientos",
        area: "exactas"
      },
      {
        text: "Deportes, entrenamiento y rendimiento",
        area: "deporte"
      },
      {
        text: "Educación, aprendizaje y desarrollo personal",
        area: "educ"
      }
    ]
  },

  {
    q: "¿Cuál de estas descripciones se parece más a vos?",
    opts: [
      {
        text: "Curiosa/o, lógica/o y amante de la tecnología",
        area: "tech"
      },
      {
        text: "Empática/o, cuidadosa/o y preocupada/o por el bienestar",
        area: "salud"
      },
      {
        text: "Comunicativa/o, crítica/o y observadora/or",
        area: "social"
      },
      {
        text: "Organizada/o, estratégica/o y con iniciativa",
        area: "admin"
      },
      {
        text: "Creativa/o, expresiva/o e imaginativa/o",
        area: "arte"
      },
      {
        text: "Analítica/o, curiosa/o y orientada/o a la investigación",
        area: "exactas"
      },
      {
        text: "Activa/o, disciplinada/o y competitiva/o",
        area: "deporte"
      },
      {
        text: "Paciente, comunicativa/o y con facilidad para explicar",
        area: "educ"
      }
    ]
  }

];
