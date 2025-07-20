// Agrupar los ramos por año y semestre
const semestres = [
  {
    titulo: "1° Año - Semestre 1",
    ramos: ['fundamentos', 'desarrollo1', 'antropologia', 'comunicativas', 'aprendizaje', 'personal1', 'taller1']
  },
  {
    titulo: "1° Año - Semestre 2",
    ramos: ['psicobiologia', 'desarrollo2', 'cognitivas', 'psicoanaliticas', 'matematico', 'personal2', 'taller2']
  },
  {
    titulo: "2° Año - Semestre 1",
    ramos: ['neuro1', 'personalidad', 'humanistas', 'sistemicas', 'epistemologia', 'valores', 'ingles1']
  },
  {
    titulo: "2° Año - Semestre 2",
    ramos: ['neuro2', 'social', 'psicopatologia', 'investCualitativa', 'personaSentido', 'ingles2', 'eval1']
  },
  {
    titulo: "3° Año - Semestre 1",
    ramos: ['politicas', 'comunitaria', 'evalCognitiva', 'infantoJuvenil', 'investCuantitativa', 'orgTrabajo']
  },
  {
    titulo: "3° Año - Semestre 2",
    ramos: ['educacional', 'diagComunitaria', 'evalSocioafectiva', 'estadistica', 'diagOrganizacional']
  },
  {
    titulo: "4° Año - Semestre 1",
    ramos: ['diagEducacional', 'diagClinica', 'clinicaYpsicoterapia', 'psicometria', 'electivo1', 'taller3', 'eval2']
  },
  {
    titulo: "4° Año - Semestre 2",
    ramos: ['intervencion1', 'proyecto', 'electivo2', 'taller4']
  },
  {
    titulo: "5° Año - Semestre 1",
    ramos: ['intervencion2', 'seminario', 'electivo3', 'taller5']
  },
  {
    titulo: "5° Año - Semestre 2",
    ramos: ['practica', 'examen']
  }
];

const ramos = {
  fundamentos: { nombre: 'Fundamentos de la Psicología', requisitos: [] },
  desarrollo1: { nombre: 'Psicología del Desarrollo I', requisitos: [] },
  antropologia: { nombre: 'Antropología Social', requisitos: [] },
  comunicativas: { nombre: 'Taller de Competencias Comunicativas', requisitos: [] },
  aprendizaje: { nombre: 'Taller de Competencias para el Aprendizaje', requisitos: [] },
  personal1: { nombre: 'Taller de Desarrollo Personal', requisitos: [] },
  taller1: { nombre: 'Taller 1: Autoconocimiento', requisitos: [] },

  psicobiologia: { nombre: 'Psicobiología', requisitos: [] },
  desarrollo2: { nombre: 'Psicología del Desarrollo II', requisitos: ['desarrollo1'] },
  cognitivas: { nombre: 'Teorías Cognitivas', requisitos: [] },
  psicoanaliticas: { nombre: 'Teorías Psicoanalíticas', requisitos: [] },
  matematico: { nombre: 'Pensamiento Matemático para Ciencias Sociales', requisitos: [] },
  personal2: { nombre: 'Taller de Desarrollo Personal II', requisitos: ['personal1'] },
  taller2: { nombre: 'Taller 2: Relaciones Humanas', requisitos: ['taller1'] },

  neuro1: { nombre: 'Procesos Neuropsicológicos I', requisitos: ['psicobiologia'] },
  personalidad: { nombre: 'Psicología de la Personalidad', requisitos: [] },
  humanistas: { nombre: 'Teorías Humanistas', requisitos: [] },
  sistemicas: { nombre: 'Teorías Sistémicas', requisitos: [] },
  epistemologia: { nombre: 'Epistemología de la Ciencia Psicológica', requisitos: [] },
  valores: { nombre: 'Cultura y Valores', requisitos: [] },
  ingles1: { nombre: 'Inglés Básico I', requisitos: [] },

  neuro2: { nombre: 'Procesos Neuropsicológicos II', requisitos: ['psicobiologia', 'neuro1'] },
  social: { nombre: 'Psicología Social', requisitos: [] },
  psicopatologia: { nombre: 'Psicopatología del Adulto', requisitos: [] },
  investCualitativa: { nombre: 'Investigación Cualitativa', requisitos: [] },
  personaSentido: { nombre: 'Persona y Sentido', requisitos: [] },
  ingles2: { nombre: 'Inglés Básico II', requisitos: ['ingles1'] },
  eval1: { nombre: 'Evaluación del Desarrollo de Competencias I', requisitos: [] },

  politicas: { nombre: 'Políticas Sociales', requisitos: [] },
  comunitaria: { nombre: 'Psicología Comunitaria', requisitos: [] },
  evalCognitiva: { nombre: 'Evaluación Psicológica Cognitiva', requisitos: [] },
  infantoJuvenil: { nombre: 'Psicología Infanto Juvenil', requisitos: [] },
  investCuantitativa: { nombre: 'Investigación Cuantitativa', requisitos: ['investCualitativa'] },
  orgTrabajo: { nombre: 'Psicología Organizacional y del Trabajo', requisitos: [] },

  educacional: { nombre: 'Psicología Educacional', requisitos: [] },
  diagComunitaria: { nombre: 'Diagnóstico en Psicología Comunitaria', requisitos: ['comunitaria'] },
  evalSocioafectiva: { nombre: 'Evaluación Socioafectiva', requisitos: ['evalCognitiva'] },
  estadistica: { nombre: 'Estadística para la Psicología', requisitos: ['investCualitativa', 'investCuantitativa'] },
  diagOrganizacional: { nombre: 'Diagnóstico en Psicología Organizacional', requisitos: ['orgTrabajo'] },

  diagEducacional: { nombre: 'Diagnóstico en Psicología Educacional', requisitos: ['educacional'] },
  diagClinica: { nombre: 'Diagnóstico en Psicología Clínica', requisitos: [] },
  clinicaYpsicoterapia: { nombre: 'Psicología Clínica y Psicoterapia', requisitos: [] },
  psicometria: { nombre: 'Psicometría', requisitos: ['investCualitativa', 'investCuantitativa', 'estadistica'] },
  electivo1: { nombre: 'Electivo 1', requisitos: [] },
  taller3: { nombre: 'Taller 3: Identidad Personal', requisitos: ['taller1', 'taller2'] },
  eval2: { nombre: 'Evaluación del Desarrollo de Competencias II', requisitos: ['eval1'] },

  intervencion1: { nombre: 'Intervención Psicológica I', requisitos: ['clinicaYpsicoterapia'] },
  proyecto: { nombre: 'Proyecto de Investigación en Psicología', requisitos: [] },
  electivo2: { nombre: 'Electivo 2', requisitos: ['electivo1'] },
  taller4: { nombre: 'Taller 4: Ética Profesional en Psicología', requisitos: ['taller1', 'taller2', 'taller3'] },

  intervencion2: { nombre: 'Intervención Psicológica II', requisitos: ['intervencion1'] },
  seminario: { nombre: 'Seminario de Investigación en Psicología', requisitos: ['proyecto'] },
  electivo3: { nombre: 'Electivo 3', requisitos: ['electivo1', 'electivo2'] },
  taller5: { nombre: 'Taller 5: Autocuidado', requisitos: ['taller1', 'taller2', 'taller3', 'taller4'] },

  practica: { nombre: 'Práctica Profesional Psicológica', requisitos: [] },
  examen: { nombre: 'Examen de Título y Grado', requisitos: [] }
};

function crearMalla() {
  const grid = document.getElementById('malla-grid');
  semestres.forEach(sem => {
    const divSemestre = document.createElement('div');
    divSemestre.classList.add('semestre');

    const titulo = document.createElement('h2');
    titulo.innerText = sem.titulo;
    divSemestre.appendChild(titulo);

    sem.ramos.forEach(id => {
      const ramoData = ramos[id];
      const div = document.createElement('div');
      div.classList.add('ramo');
      if (ramoData.requisitos.length > 0) div.classList.add('locked');
      div.id = id;
      div.innerText = ramoData.nombre;
      div.onclick = () => aprobarRamo(id);
      divSemestre.appendChild(div);
    });

    grid.appendChild(divSemestre);
  });
}

function aprobarRamo(id) {
  const ramo = document.getElementById(id);
  if (!ramo.classList.contains('approved')) {
    ramo.classList.add('approved');
    actualizarDesbloqueos();
  }
}

function actualizarDesbloqueos() {
  Object.keys(ramos).forEach(id => {
    const reqs = ramos[id].requisitos;
    if (reqs.length > 0) {
      const cumplidos = reqs.every(req =>
        document.getElementById(req)?.classList.contains('approved')
      );
      if (cumplidos) {
        document.getElementById(id).classList.remove('locked');
      }
    }
  });
}

crearMalla();
