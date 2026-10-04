/* ==========================================================
   ORIONPATH — TEST VOCACIONAL MULTIÁREA
   Permite múltiples respuestas y calcula afinidades
   porcentuales en las 8 áreas.
   Requiere data.js cargado antes de app.js.
   ========================================================== */

let currentQ = 0;
let userAnswers = [];


/* ==========================================================
   TEST VOCACIONAL
   ========================================================== */

function initAnswers() {
  userAnswers = questions.map(() => []);
}


/* ----------------------------------------------------------
   Cargar pregunta
   ---------------------------------------------------------- */

function loadQuestion() {
  const qData = questions[currentQ];
  const question = document.getElementById('testQuestion');
  const optsContainer = document.getElementById('testOptions');

  if (!qData || !question || !optsContainer) return;

  question.innerText = qData.q;
  optsContainer.innerHTML = '';

  const hint = document.createElement('p');
  hint.className = 'test-hint';
  hint.textContent =
    'Podés seleccionar varias opciones que te representen.';
  optsContainer.appendChild(hint);

  qData.opts.forEach(opt => {
    const selected =
      (userAnswers[currentQ] || []).includes(opt.area);

    const btn = document.createElement('button');

    btn.type = 'button';
    btn.className =
      'test-option' + (selected ? ' selected' : '');

    btn.setAttribute(
      'aria-pressed',
      String(selected)
    );

    btn.innerText =
      (selected ? '✓  ' : '') + opt.text;

    btn.onclick = () => selectOption(opt.area);

    optsContainer.appendChild(btn);
  });

  const pct =
    ((currentQ + 1) / questions.length) * 100;

  const progress =
    document.getElementById('testProgress');

  if (progress) {
    progress.style.width = `${pct}%`;
  }

  const prev =
    document.getElementById('testPrev');

  if (prev) {
    prev.style.display =
      currentQ > 0 ? 'inline-block' : 'none';
  }

  const next =
    document.getElementById('testNext');

  if (next) {
    next.innerText =
      currentQ === questions.length - 1
        ? 'Ver mis resultados →'
        : 'Siguiente →';
  }
}


/* ----------------------------------------------------------
   Seleccionar / quitar opción
   ---------------------------------------------------------- */

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


/* ----------------------------------------------------------
   Siguiente pregunta
   ---------------------------------------------------------- */

function nextQuestion() {
  const currentAnswers =
    userAnswers[currentQ] || [];

  if (currentAnswers.length === 0) {
    alert(
      'Elegí al menos una opción para continuar.'
    );
    return;
  }

  if (currentQ < questions.length - 1) {
    currentQ++;
    loadQuestion();
  } else {
    showResult();
  }
}


/* ----------------------------------------------------------
   Pregunta anterior
   ---------------------------------------------------------- */

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    loadQuestion();
  }
}


/* ==========================================================
   RESULTADOS
   ========================================================== */

function showResult() {
  const areas = Object.keys(resultsInfo);

  const scores = Object.fromEntries(
    areas.map(area => [area, 0])
  );

  let totalSelections = 0;

  userAnswers.forEach(answer => {
    (answer || []).forEach(area => {
      if (
        Object.prototype.hasOwnProperty.call(
          scores,
          area
        )
      ) {
        scores[area]++;
        totalSelections++;
      }
    });
  });

  if (totalSelections === 0) {
    alert(
      'Respondé al menos una pregunta.'
    );
    return;
  }


  /* --------------------------------------------------------
     Ordenar áreas según afinidad
     -------------------------------------------------------- */

  const results = areas
    .map(area => ({
      area,
      score: scores[area],
      percentage: Math.round(
        (scores[area] / totalSelections) * 100
      )
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return b.percentage - a.percentage;
    });


  const topAreas = results
    .filter(result => result.score > 0)
    .slice(0, 3);


  /* --------------------------------------------------------
     Mostrar resultados
     -------------------------------------------------------- */

  const testContent =
    document.getElementById('testContent');

  const testResult =
    document.getElementById('testResult');

  const progress =
    document.getElementById('testProgress');

  if (testContent) {
    testContent.style.display = 'none';
  }

  if (progress) {
    progress.style.width = '100%';
  }

  if (testResult) {
    testResult.style.display = 'block';
  }


  /* --------------------------------------------------------
     Título
     -------------------------------------------------------- */

  const resultEmoji =
    document.getElementById('resultEmoji');

  const resultTitle =
    document.getElementById('resultTitle');

  const resultDesc =
    document.getElementById('resultDesc');

  if (resultEmoji) {
    resultEmoji.innerText = '✨';
  }

  if (resultTitle) {
    resultTitle.innerText =
      'Estas son tus áreas de mayor afinidad';
  }

  if (resultDesc) {
    resultDesc.innerText =
      'Tus respuestas muestran intereses que pueden orientarte hacia distintas áreas de estudio. Este resultado es una guía para explorar opciones y no reemplaza una orientación vocacional profesional.';
  }


  /* ========================================================
     MAPA DE INTERESES
     ======================================================== */

  let areasBox =
    document.getElementById('resultAreas');

  if (!areasBox) {
    areasBox = document.createElement('div');

    areasBox.id = 'resultAreas';
    areasBox.className = 'result-areas';

    const careersBox =
      document.getElementById('resultCareers');

    if (careersBox) {
      careersBox.parentNode.insertBefore(
        areasBox,
        careersBox
      );
    }
  }

  areasBox.innerHTML =
    '<h4>Tu mapa de intereses</h4>';


  results.forEach(result => {
    if (result.score === 0) return;

    const info =
      resultsInfo[result.area];

    if (!info) return;

    const item =
      document.createElement('div');

    item.className =
      'result-area-item';


    const label =
      document.createElement('div');

    label.className =
      'result-area-label';


    const name =
      document.createElement('span');

    name.textContent =
      `${info.emoji} ${info.title}`;


    const pct =
      document.createElement('strong');

    pct.textContent =
      `${result.percentage}%`;


    label.append(name, pct);


    const track =
      document.createElement('div');

    track.className =
      'result-bar';


    const fill =
      document.createElement('div');

    fill.className =
      'result-bar-fill';

    fill.style.width =
      `${result.percentage}%`;


    track.appendChild(fill);

    item.append(label, track);

    areasBox.appendChild(item);
  });


  /* ========================================================
     CARRERAS RECOMENDADAS
     Solo de las 3 áreas principales
     ======================================================== */

  const careerBox =
    document.getElementById('resultCareers');

  if (careerBox) {

    careerBox.innerHTML = '';

    topAreas.forEach(result => {

      const info =
        resultsInfo[result.area];

      if (!info) return;


      const areaCareers =
        careersData.filter(
          career =>
            career.area === result.area
        );


      areaCareers.forEach(career => {

        const card =
          document.createElement('div');

        card.className =
          'result-career-card';


        const title =
          document.createElement('strong');

        title.textContent =
          career.name;


        const area =
          document.createElement('span');

        area.className =
          'result-tag';

        area.textContent =
          `${info.emoji} ${info.title}`;


        const match =
          document.createElement('p');

        match.textContent =
          `Afinidad con el área: ${result.percentage}%`;


        const desc =
          document.createElement('p');

        desc.textContent =
          career.desc;


        const duration =
          document.createElement('small');

        duration.textContent =
          `Duración aproximada: ${career.duration}`;


        card.append(
          title,
          area,
          match,
          desc,
          duration
        );

        careerBox.appendChild(card);
      });
    });
  }


  /* ========================================================
     UNIVERSIDADES RELACIONADAS
     ======================================================== */

  const uniBox =
    document.getElementById('resultUnis');

  if (uniBox) {

    const universities =
      new Set();


    topAreas.forEach(result => {

      const info =
        resultsInfo[result.area];

      if (!info || !Array.isArray(info.unis)) {
        return;
      }

      info.unis.forEach(uni => {
        universities.add(uni);
      });
    });


    uniBox.innerHTML = '';

    universities.forEach(uni => {

      const tag =
        document.createElement('span');

      tag.className =
        'result-tag';

      tag.textContent =
        uni;

      uniBox.appendChild(tag);
    });
  }
}


/* ==========================================================
   REINICIAR TEST
   ========================================================== */

function resetTest() {
  currentQ = 0;

  userAnswers =
    questions.map(() => []);

  document.getElementById(
    'testResult'
  ).style.display = 'none';

  document.getElementById(
    'testContent'
  ).style.display = 'block';

  loadQuestion();
}


/* ==========================================================
   FILTRO DE CARRERAS
   ========================================================== */

function filterCareers(area, btn) {

  document
    .querySelectorAll('.filter-btn')
    .forEach(button => {
      button.classList.remove('active');
    });

  if (btn) {
    btn.classList.add('active');
  }


  const grid =
    document.getElementById('careersGrid');

  if (!grid) return;

  grid.innerHTML = '';


  const filtered =
    area === 'all'
      ? careersData
      : careersData.filter(
          career =>
            career.area === area
        );


  filtered.forEach(career => {

    const card =
      document.createElement('div');

    card.className =
      'career-card';


    const areaTag =
      document.createElement('div');

    areaTag.className =
      'career-area-tag';

    areaTag.textContent =
      resultsInfo[career.area]?.title ||
      career.area;


    const name =
      document.createElement('div');

    name.className =
      'career-name';

    name.textContent =
      career.name;


    const desc =
      document.createElement('div');

    desc.className =
      'career-desc';

    desc.textContent =
      career.desc;


    const duration =
      document.createElement('div');

    duration.className =
      'career-duration';

    duration.textContent =
      career.duration;


    card.append(
      areaTag,
      name,
      desc,
      duration
    );

    grid.appendChild(card);
  });
}


/* ==========================================================
   MENÚ MÓVIL
   ========================================================== */

function toggleMobile() {
  const menu =
    document.getElementById('mobileMenu');

  if (menu) {
    menu.classList.toggle('open');
  }
}


function closeMobile() {
  const menu =
    document.getElementById('mobileMenu');

  if (menu) {
    menu.classList.remove('open');
  }
}


/* ==========================================================
   INICIALIZACIÓN
   ========================================================== */

window.addEventListener(
  'DOMContentLoaded',
  () => {

    initAnswers();

    loadQuestion();


    const firstFilter =
      document.querySelector(
        '.filter-btn'
      );

    if (firstFilter) {
      filterCareers(
        'all',
        firstFilter
      );
    }


    /* ------------------------------------------------------
       Animaciones al hacer scroll
       ------------------------------------------------------ */

    if (
      'IntersectionObserver' in window
    ) {

      const observer =
        new IntersectionObserver(
          entries => {

            entries.forEach(entry => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add('visible');

                observer.unobserve(
                  entry.target
                );
              }
            });

          },
          {
            threshold: 0.1
          }
        );


      document
        .querySelectorAll('.reveal')
        .forEach(element => {
          observer.observe(element);
        });

    } else {

      document
        .querySelectorAll('.reveal')
        .forEach(element => {
          element.classList.add(
            'visible'
          );
        });
    }
  }
);
