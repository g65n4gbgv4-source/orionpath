/* ==========================================================================
   ORIONPATH — LÓGICA DE LA APLICACIÓN (app.js)
   --------------------------------------------------------------------------
   Asume que js/data.js ya se cargó antes (index.html incluye primero
   data.js y después app.js) y usa careersData, resultsInfo y questions.

   Está dividido en 3 partes:
   1. TEST VOCACIONAL   -> preguntas, navegación, cálculo del resultado
   2. FILTRO DE CARRERAS -> botones "Todas / Tecnología / Salud / ..."
      (ahora cada tarjeta de carrera también muestra su descripción corta)
   3. MENÚ MÓVIL + ANIMACIONES AL SCROLLEAR (IntersectionObserver)
   ========================================================================== */


/* --------------------------------------------------------------------------
   1. TEST VOCACIONAL
-------------------------------------------------------------------------- */
let currentQ = 0;
let userAnswers = [];

/**
 * Dibuja en pantalla la pregunta actual (currentQ) y sus opciones.
 */
function loadQuestion() {
  const qData = questions[currentQ];
  document.getElementById('testQuestion').innerText = qData.q;

  const optsContainer = document.getElementById('testOptions');
  optsContainer.innerHTML = '';

  qData.opts.forEach((opt) => {
    const btn = document.createElement('button');
    btn.className = 'test-option' + (userAnswers[currentQ] === opt.area ? ' selected' : '');
    btn.innerText = opt.text;
    btn.onclick = () => selectOption(opt.area, btn);
    optsContainer.appendChild(btn);
  });

  const pct = (currentQ / questions.length) * 100;
  document.getElementById('testProgress').style.width = pct + '%';
  document.getElementById('testPrev').style.display = currentQ > 0 ? 'inline-block' : 'none';
  document.getElementById('testNext').innerText =
    currentQ === questions.length - 1 ? 'Finalizar' : 'Siguiente →';
}

/**
 * Se ejecuta al tocar una opción de respuesta.
 */
function selectOption(area, btnElement) {
  userAnswers[currentQ] = area;
  const allOpts = document.querySelectorAll('.test-option');
  allOpts.forEach(b => b.classList.remove('selected'));
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
    showResult();
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

  const counts = {};
  userAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);
  let topArea = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

  const res = resultsInfo[topArea];
  document.getElementById('resultEmoji').innerText = res.emoji;
  document.getElementById('resultTitle').innerText = res.title;
  document.getElementById('resultDesc').innerText = res.desc;

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
 * Cada tarjeta ahora incluye: área, nombre, descripción corta y duración.
 */
function filterCareers(area, btn) {
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
      <div class="career-desc">${c.desc}</div>
      <div class="career-duration">${c.duration}</div>
    `;
    grid.appendChild(card);
  });
}


/* --------------------------------------------------------------------------
   3. MENÚ MÓVIL + ANIMACIONES AL HACER SCROLL
-------------------------------------------------------------------------- */

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  loadQuestion();
  filterCareers('all', document.querySelector('.filter-btn'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
