
/* ==========================================================
   ORIONPATH — TEST VOCACIONAL MULTIÁREA
   Permite múltiples respuestas y calcula afinidades
   porcentuales en las 8 áreas.
   Requiere data.js cargado antes de app.js.
   ========================================================== */

let currentQ = 0;
let userAnswers = [];

/* Inicializa las respuestas múltiples. */
function initAnswers() {
  userAnswers = questions.map((_, i) =>
    Array.isArray(userAnswers[i]) ? userAnswers[i] : []
  );
}

/* Dibuja la pregunta y conserva las selecciones anteriores. */
function loadQuestion() {
  const qData = questions[currentQ];
  const question = document.getElementById('testQuestion');
  const optsContainer = document.getElementById('testOptions');

  question.innerText = qData.q;
  optsContainer.innerHTML = '';

  // Instrucción para el usuario.
  const hint = document.createElement('p');
  hint.className = 'test-hint';
  hint.textContent =
    'Podés seleccionar varias opciones que te representen.';
  optsContainer.appendChild(hint);

  qData.opts.forEach((opt) => {
    const selected = (userAnswers[currentQ] || [])
      .includes(opt.area);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className =
      'test-option' + (selected ? ' selected' : '');
    btn.setAttribute('aria-pressed', String(selected));
    btn.innerText = (selected ? '✓  ' : '') + opt.text;

    btn.onclick = () => selectOption(opt.area);
    optsContainer.appendChild(btn);
  });

  const pct = ((currentQ + 1) / questions.length) * 100;
  document.getElementById('testProgress').style.width =
    pct + '%';

  document.getElementById('testPrev').style.display =
    currentQ > 0 ? 'inline-block' : 'none';

  document.getElementById('testNext').innerText =
    currentQ === questions.length - 1
      ? 'Ver mis resultados →'
      : 'Siguiente →';
}

/* Alterna una selección sin borrar las demás. */
function selectOption(area) {
  if (!Array.isArray(userAnswers[currentQ])) {
    userAnswers[currentQ] = [];
  }

  const selected = userAnswers[currentQ];
  const index = selected.indexOf(area);

  if (index >= 0) {
    selected.splice(index, 1);
  } else {
    selected.push(area);
  }

  loadQuestion();
}

/* Avanza solamente si hay al menos una respuesta. */
function nextQuestion() {
  if (
    !Array.isArray(userAnswers[currentQ]) ||
    userAnswers[currentQ].length === 0
  ) {
    alert('Elegí al menos una opción para continuar.');
    return;
  }

  if (currentQ < questions.length - 1) {
    currentQ++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    loadQuestion();
  }
}

/* Calcula porcentajes y recomienda carreras de distintas áreas. */
function showResult() {
  const areas = Object.keys(resultsInfo);
  const scores = Object.fromEntries(
    areas.map(area => [area, 0])
  );

  let totalSelections = 0;

  userAnswers.forEach(answer => {
    (answer || []).forEach(area => {
      if (Object.prototype.hasOwnProperty.call(scores, area)) {
        scores[area]++;
        totalSelections++;
      }
    });
  });

  if (totalSelections === 0) {
    alert('Respondé al menos una pregunta.');
    return;
  }

  const results = areas
    .map(area => ({
      area,
      score: scores[area],
      percentage: Math.round(
        (scores[area] / totalSelections) * 100
      )
    }))
    .sort((a, b) => b.score - a.score);

  const top = results.filter(r => r.score > 0);
  const main = resultsInfo[top[0].area];

  document.getElementById('testContent').style.display = 'none';
  document.getElementById('testProgress').style.width = '100%';

  document.getElementById('resultEmoji').innerText = '✨';
  document.getElementById('resultTitle').innerText =
    'Tu perfil tiene varias posibilidades';
  document.getElementById('resultDesc').innerText =
    'Tus respuestas muestran diferentes intereses. ' +
    'Explorá estas áreas como punto de partida, no como ' +
    'una decisión definitiva. Podés combinar intereses ' +
    'y descubrir carreras que nunca habías considerado.';

  /* Crear el bloque de afinidades sin modificar el HTML. */
  let areasBox = document.getElementById('resultAreas');

  if (!areasBox) {
    areasBox = document.createElement('div');
    areasBox.id = 'resultAreas';
    areasBox.className = 'result-areas';

    const careersTitle =
      document.getElementById('resultCareers').previousElementSibling;

    careersTitle.parentNode.insertBefore(areasBox, careersTitle);
  }

  areasBox.innerHTML = '<h4>Tu mapa de intereses</h4>';

  results.forEach(result => {
    if (result.score === 0) return;

    const info = resultsInfo[result.area];
    const item = document.createElement('div');
    item.className = 'result-area-item';

    const label = document.createElement('div');
    label.className = 'result-area-label';

    const name = document.createElement('span');
    name.textContent = info.emoji + ' ' + info.title;

    const pct = document.createElement('strong');
    pct.textContent = result.percentage + '%';

    label.append(name, pct);

    const track = document.createElement('div');
    track.className = 'result-bar';

    const fill = document.createElement('div');
    fill.className = 'result-bar-fill';
    fill.style.width = result.percentage + '%';

    track.appendChild(fill);
    item.append(label, track);
    areasBox.appendChild(item);
  });

  /*
   * Recomendar carreras de todas las áreas con afinidad.
   * Se incluyen primero las áreas más compatibles, pero
   * también se muestran opciones de las demás áreas.
   */
  const recommendations = [];
  const seen = new Set();

  results.forEach(result => {
    if (result.score === 0) return;

    const info = resultsInfo[result.area];

    // Usa las carreras registradas en el catálogo.
    const areaCareers = careersData.filter(
      career => career.area === result.area
    );

    areaCareers.forEach(career => {
      if (seen.has(career.name)) return;
      seen.add(career.name);

      recommendations.push({
        ...career,
        percentage: result.percentage,
        areaTitle: info.title
      });
    });
  });

  const careerBox = document.getElementById('resultCareers');
  careerBox.innerHTML = '';

  recommendations.forEach(career => {
    const card = document.createElement('div');
    card.className = 'result-career-card';

    const title = document.createElement('strong');
    title.textContent = career.name;

    const area = document.createElement('span');
    area.className = 'result-tag';
    area.textContent = career.areaTitle;

    const match = document.createElement('p');
    match.textContent =
      'Afinidad con el área: ' + career.percentage + '%';

    const desc = document.createElement('p');
    desc.textContent = career.desc;

    const duration = document.createElement('small');
    duration.textContent = 'Duración aproximada: ' + career.duration;

    card.append(title, area, match, desc, duration);
    careerBox.appendChild(card);
  });

  /*
   * Las universidades se presentan como opciones generales
   * relacionadas con las áreas identificadas.
   */
  const uniBox = document.getElementById('resultUnis');
  const universities = new Set();

  top.forEach(result => {
    resultsInfo[result.area].unis.forEach(uni =>
      universities.add(uni)
    );
  });

  uniBox.innerHTML = '';

  universities.forEach(uni => {
    const tag = document.createElement('span');
    tag.className = 'result-tag';
    tag.textContent = uni;
    uniBox.appendChild(tag);
  });

  document.getElementById('testResult').style.display = 'block';
}

/* Reinicia el test por completo. */
function resetTest() {
  currentQ = 0;
  userAnswers = questions.map(() => []);

  document.getElementById('testResult').style.display = 'none';
  document.getElementById('testContent').style.display = 'block';

  loadQuestion();
}

/* ==========================================================
   FILTRO DE CARRERAS
   ========================================================== */

function filterCareers(area, btn) {
  document.querySelectorAll('.filter-btn').forEach(b =>
    b.classList.remove('active')
  );

  if (btn) btn.classList.add('active');

  const grid = document.getElementById('careersGrid');
  grid.innerHTML = '';

  const filtered = area === 'all'
    ? careersData
    : careersData.filter(c => c.area === area);

  filtered.forEach(c => {
    const card = document.createElement('div');
    card.className = 'career-card';

    const areaTag = document.createElement('div');
    areaTag.className = 'career-area-tag';
    areaTag.textContent =
      resultsInfo[c.area]?.title || c.area;

    const name = document.createElement('div');
    name.className = 'career-name';
    name.textContent = c.name;

    const desc = document.createElement('div');
    desc.className = 'career-desc';
    desc.textContent = c.desc;

    const duration = document.createElement('div');
    duration.className = 'career-duration';
    duration.textContent = c.duration;

    card.append(areaTag, name, desc, duration);
    grid.appendChild(card);
  });
}

/* ==========================================================
   MENÚ MÓVIL Y ANIMACIONES
   ========================================================== */

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  initAnswers();
  loadQuestion();

  const firstFilter = document.querySelector('.filter-btn');
  if (firstFilter) filterCareers('all', firstFilter);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el =>
      observer.observe(el)
    );
  } else {
    document.querySelectorAll('.reveal').forEach(el =>
      el.classList.add('visible')
    );
  }
});
