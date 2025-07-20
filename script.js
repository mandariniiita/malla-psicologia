const malla = document.querySelector('.malla-container');

const data = [
  {
    anio: 'Primer Año',
    semestres: [
      {
        nombre: 'I Semestre',
        ramos: [
          { nombre: 'Fundamentos de la Psicología' },
          { nombre: 'Psicología del Desarrollo I', abre: ['Psicología del Desarrollo II'] },
          { nombre: 'Antropología Social' },
          { nombre: 'Taller de Competencias Comunicativas' },
          { nombre: 'Taller de Competencias para el Aprendizaje' },
          { nombre: 'Taller de Desarrollo Personal', abre: ['Taller de Desarrollo Personal II'] },
          { nombre: 'Taller 1: Autoconocimiento', abre: ['Taller 2: Relaciones Humanas', 'Taller 3: Identidad Profesional', 'Taller 4: Ética Profesional en Psicología', 'Taller 5: Autocuidado'] }
        ]
      },
      {
        nombre: 'II Semestre',
        ramos: [
          { nombre: 'Psicobiología', abre: ['Procesos Neuropsicológicos I', 'Procesos Neuropsicológicos II'] },
          { nombre: 'Psicología del Desarrollo II' },
          { nombre: 'Teorías Cognitivas' },
          { nombre: 'Teorías Psicoanalíticas' },
          { nombre: 'Pensamiento Matemático para Ciencias Sociales' },
          { nombre: 'Taller de Desarrollo Personal II' },
          { nombre: 'Taller 2: Relaciones Humanas', abre: ['Taller 3: Identidad Profesional', 'Taller 4: Ética Profesional en Psicología', 'Taller 5: Autocuidado'] }
        ]
      }
    ]
  }
];

const estado = {};

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.textContent = ramo.nombre;

  estado[ramo.nombre] = { aprobado: false, dependientes: ramo.abre || [] };

  if (!ramo.abre) div.classList.remove('bloqueado');

  div.addEventListener('click', () => {
    if (div.classList.contains('bloqueado') || div.classList.contains('aprobado')) return;
    div.classList.add('aprobado');
    estado[ramo.nombre].aprobado = true;
    desbloquear(estado[ramo.nombre].dependientes);
  });

  return div;
}

function desbloquear(ramos) {
  ramos.forEach(nombre => {
    const divs = document.querySelectorAll('.ramo');
    divs.forEach(div => {
      if (div.textContent === nombre && div.classList.contains('bloqueado')) {
        div.classList.remove('bloqueado');
      }
    });
  });
}

function generarMalla() {
  data.forEach(anio => {
    const divAnio = document.createElement('div');
    divAnio.className = 'año';
    const tituloAnio = document.createElement('div');
    tituloAnio.className = 'titulo-año';
    tituloAnio.textContent = anio.anio;
    divAnio.appendChild(tituloAnio);

    const divSemestres = document.createElement('div');
    divSemestres.className = 'semestre';

    anio.semestres.forEach(sem => {
      const divColumna = document.createElement('div');
      divColumna.className = 'columna';
      const tituloSem = document.createElement('div');
      tituloSem.className = 'titulo-semestre';
      tituloSem.textContent = sem.nombre;
      divColumna.appendChild(tituloSem);
      sem.ramos.forEach(ramo => divColumna.appendChild(crearRamo(ramo)));
      divSemestres.appendChild(divColumna);
    });

    divAnio.appendChild(divSemestres);
    malla.appendChild(divAnio);
  });
}

generarMalla();
