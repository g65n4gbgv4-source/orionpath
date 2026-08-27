/* ==========================================================================
   ORIONPATH — LÓGICA DE LA APLICACIÓN (app.js)
   --------------------------------------------------------------------------
   Este archivo asume que js/data.js ya se cargó antes (por eso index.html
   incluye primero data.js y después app.js) y usa las variables globales
   careersData, resultsInfo y questions definidas ahí.

   Está dividido en 3 partes:
   1. TEST VOCACIONAL   -> preguntas, navegación, cálculo del resultado
   2. FILTRO DE CARRERAS -> botones "Todas / Tecnología / Salud / ..."
   3. MENÚ MÓVIL + ANIMACIONES AL SCROLLEAR (IntersectionObserver)
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. TEST VOCACIONAL
-------------------------------------------------------------------------- */

// currentQ  -> número de la pregunta que se está mostrando (empieza en 0)
// userAnswers -> guarda el área elegida en cada pregunta, ej: ["tech","arte",...]
let currentQ = 0;
let userAnswers = [];

/**
 * Dibuja en pantalla la pregunta actual (currentQ) y sus opciones.
 * Se llama al cargar la página y cada vez que se avanza/retrocede.
 */
function loadQuestion() {
  const qData = questions[currentQ];
  document.getElementById('testQuestion').innerText = qData.q;

  // Vuelve a crear los botones de opciones desde cero para esta pregunta
  const optsContainer = document.getElementById('testOptions');
  optsContainer.innerHTML = '';

  qData.opts.forEach((opt) => {
    const btn = document.createElement('button');
    // Si el usuario ya había elegido esta opción antes (al volver con
    // "Anterior"), se le deja marcada la clase "selected"
    btn.className = 'test-option' + (userAnswers[currentQ] === opt.area ? ' selected' : '');
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.area, btn);
    optsContainer.appendChild(btn);
  });

  // Actualiza la barra de progreso de arriba (en % según la pregunta actual)
  const pct = (currentQ / questions.length) * 100;
  document.getElementById('testProgress').style.width = pct + '%';

  // El botón "Anterior" solo se muestra a partir de la 2da pregunta
  document.getElementById('testPrev').style.display = currentQ > 0 ? 'inline-block' : 'none';

  // En la última pregunta, el botón cambia de texto a "Finalizar"
  document.getElementById('testNext').innerText =
    currentQ === questions.length - 1 ? 'Finalizar' : 'Siguiente →';
}

/**
 * Se ejecuta al tocar una opción de respuesta.
 * Guarda la respuesta y marca visualmente el botón elegido.
 */
function selectOption(area, btnElement) {
  userAnswers[currentQ] = area;

  // Quita "selected" de todos los botones de esta pregunta...
  const allOpts = document.querySelectorAll('.test-option');
  allOpts.forEach(b => b.classList.remove('selected'));
  // ...y se lo agrega solo al que se acaba de tocar
  btnElement.classList.add('selected');
}

/**
 * Botón "Siguiente →" / "Finalizar".
 */
function nextQuestion() {
  if (!userAnswers[currentQ]) {
    alert('Por favor elegí una opción antes de continuar.');
    return;
  }
  if (currentQ < questions.length - 1) {
    currentQ++;
    loadQuestion();
  } else {
    showResult(); // era la última pregunta -> mostrar resultado
  }
}

/**
 * Botón "← Anterior".
 */
function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    loadQuestion();
  }
}

/**
 * Cuenta las respuestas por área y muestra el resultado del área ganadora.
 */
function showResult() {
  document.getElementById('testProgress').style.width = '100%';
  document.getElementById('testContent').style.display = 'none';

  // Cuenta cuántas veces se eligió cada área, ej: {tech: 3, arte: 2}
  const counts = {};
  userAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);

  // Busca el área con más votos (en caso de empate, gana la primera que
  // aparece al recorrer el objeto)
  let topArea = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  const res = resultsInfo[topArea];
  document.getElementById('resultEmoji').innerText = res.emoji;
  document.getElementById('resultTitle').innerText = res.title;
  document.getElementById('resultDesc').innerText = res.desc;

  // Convierte cada carrera/universidad en una "píldora" (span.result-tag)
  document.getElementById('resultCareers').innerHTML =
    res.careers.map(c => `<span class="result-tag">${c}</span>`).join('');
  document.getElementById('resultUnis').innerHTML =
    res.unis.map(u => `<span class="result-tag">${u}</span>`).join('');

  document.getElementById('testResult').style.display = 'block';
}

/**
 * Botón "Volver a hacer el test": reinicia todo al estado inicial.
 */
function resetTest() {
  currentQ = 0;
  userAnswers = [];
  document.getElementById('testResult').style.display = 'none';
  document.getElementById('testContent').style.display = 'block';
  loadQuestion();
}


/* --------------------------------------------------------------------------
   2. FILTRO DE CARRERAS (sección "Explorá tus opciones")
-------------------------------------------------------------------------- */

/**
 * Filtra y dibuja las tarjetas de carrera según el área elegida.
 * area === 'all' muestra todas las carreras sin filtrar.
 */
function filterCareers(area, btn) {
  // Marca visualmente el botón de filtro activo
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const grid = document.getElementById('careersGrid');
  grid.innerHTML = '';

  const filtered = area === 'all'
    ? careersData
    : careersData.filter(c => c.area === area);

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'career-card';
    card.innerHTML = `
      <div class="career-area-tag">${c.area}</div>
      <div class="career-name">${c.name}</div>
      <div class="career-duration">${c.duration}</div>
    `;
    grid.appendChild(card);
  });
}


/* --------------------------------------------------------------------------
   3. MENÚ MÓVIL + ANIMACIONES AL HACER SCROLL
-------------------------------------------------------------------------- */

/** Abre/cierra el menú de navegación en pantallas chicas (botón hamburguesa) */
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/** Cierra el menú móvil (se llama al tocar un link o la "X") */
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/**
 * Punto de entrada: se ejecuta una sola vez, cuando el HTML terminó de
 * cargar (DOMContentLoaded).
 */
window.addEventListener('DOMContentLoaded', () => {
  // Muestra la primera pregunta del test apenas carga la página
  loadQuestion();

  // Dibuja todas las carreras al inicio (filtro "Todas" activo por defecto)
  filterCareers('all', document.querySelector('.filter-btn'));

  // IntersectionObserver: detecta cuándo un elemento con clase "reveal"
  // entra en la pantalla al hacer scroll, y le agrega "visible" para que
  // la animación CSS (opacity/translateY) se dispare.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
