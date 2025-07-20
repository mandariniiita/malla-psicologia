const ramos = [
  // Primer Año
  { id: 'fundamentos', nombre: 'Fundamentos de la Psicología', requisitos: [] },
  { id: 'desarrollo1', nombre: 'Psicología del Desarrollo I', requisitos: [] },
  { id: 'antropologia', nombre: 'Antropología Social', requisitos: [] },
  { id: 'comunicativas', nombre: 'Taller de Competencias Comunicativas', requisitos: [] },
  { id: 'aprendizaje', nombre: 'Taller de Competencias para el Aprendizaje', requisitos: [] },
  { id: 'personal1', nombre: 'Taller de Desarrollo Personal', requisitos: [] },
  { id: 'taller1', nombre: 'Taller 1: Autoconocimiento', requisitos: [] },

  { id: 'psicobiologia', nombre: 'Psicobiología', requisitos: [] },
  { id: 'desarrollo2', nombre: 'Psicología del Desarrollo II', requisitos: ['desarrollo1'] },
  { id: 'cognitivas', nombre: 'Teorías Cognitivas', requisitos: [] },
  { id: 'psicoanaliticas', nombre: 'Teorías Psicoanalíticas', requisitos: [] },
  { id: 'matematico', nombre: 'Pensamiento Matemático para Ciencias Sociales', requisitos: [] },
  { id: 'personal2', nombre: 'Taller de Desarrollo Personal II', requisitos: ['personal1'] },
  { id: 'taller2', nombre: 'Taller 2: Relaciones Humanas', requisitos: ['taller1'] },

  // Segundo Año
  { id: 'neuro1', nombre: 'Procesos Neuropsicológicos I', requisitos: ['psicobiologia'] },
  { id: 'personalidad', nombre: 'Psicología de la Personalidad', requisitos: [] },
  { id: 'humanistas', nombre: 'Teorías Humanistas', requisitos: [] },
  { id: 'sistemicas', nombre: 'Teorías Sistémicas', requisitos: [] },
  { id: 'epistemologia', nombre: 'Epistemología de la Ciencia Psicológica', requisitos: [] },
  { id: 'valores', nombre: 'Cultura y Valores', requisitos: [] },
  { id: 'ingles1', nombre: 'Inglés Básico I', requisitos: [] },

  { id: 'neuro2', nombre: 'Procesos Neuropsicológicos II', requisitos: ['psicobiologia', 'neuro1'] },
  { id: 'social', nombre: 'Psicología Social', requisitos: [] },
  { id: 'psicopatologia', nombre: 'Psicopatología del Adulto', requisitos: [] },
  { id: 'investCualitativa', nombre: 'Investigación Cualitativa', requisitos: [] },
  { id: 'personaSentido', nombre: 'Persona y Sentido', requisitos: [] },
  { id: 'ingles2', nombre: 'Inglés Básico II', requisitos: ['ingles1'] },
  { id: 'eval1', nombre: 'Evaluación del Desarrollo de Competencias I', requisitos: [] },

  // Tercer Año
  { id: 'politicas', nombre: 'Políticas Sociales', requisitos: [] },
  { id: 'comunitaria', nombre: 'Psicología Comunitaria', requisitos: [] },
  { id: 'evalCognitiva', nombre: 'Evaluación Psicológica Cognitiva', requisitos: [] },
  { id: 'infantoJuvenil', nombre: 'Psicología Infanto Juvenil', requisitos: [] },
  { id: 'investCuantitativa', nombre: 'Investigación Cuantitativa', requisitos: ['investCualitativa'] },
  { id: 'orgTrabajo', nombre: 'Psicología Organizacional y del Trabajo', requisitos: [] },

  { id: 'educacional', nombre: 'Psicología Educacional', requisitos: [] },
  { id: 'diagComunitaria', nombre: 'Diagnóstico en Psicología Comunitaria', requisitos: ['comunitaria'] },
  { id: 'evalSocioafectiva', nombre: 'Evaluación Socioafectiva', requisitos: ['evalCognitiva'] },
  { id: 'estadistica', nombre: 'Estadística para la Psicología', requisitos: ['investCualitativa', 'investCuantitativa'] },
  { id: 'diagOrganizacional', nombre: 'Diagnóstico en Psicología Organizacional', requisitos: ['orgTrabajo'] },

  // Cuarto Año
  { id: 'diagEducacional', nombre: 'Diagnóstico en Psicología Educacional', requisitos: ['educacional'] },
  { id: 'diagClinica', nombre: 'Diagnóstico en Psicología Clínica', requisitos: [] },
  { id: 'clinicaYpsicoterapia', nombre: 'Psicología Clínica y Psicoterapia', requisitos: [] },
  { id: 'psicometria', nombre: 'Psicometría', requisitos: ['investCualitativa', 'investCuantitativa', 'estadistica'] },
  { id: 'electivo1', nombre: 'Electivo 1', requisitos: [] },
  { id: 'taller3', nombre: 'Taller 3: Identidad Personal', requisitos: ['taller1', 'taller2'] },
  { id: 'eval2', nombre: 'Evaluación del Desarrollo de Competencias II', requisitos: ['eval1'] },

  { id: 'intervencion1', nombre: 'Intervención Psicológica I', requisitos: ['clinicaYpsicoterapia'] },
  { id: 'proyecto', nombre: 'Proyecto de Investigación en Psicología', requisitos: [] },
  { id: 'electivo2', nombre: 'Electivo 2', requisitos: ['electivo1'] },
  { id: 'taller4', nombre: 'Taller 4: Ética Profesional en Psicología', requisitos: ['taller1', 'taller2', 'taller3'] },

  // Quinto Año
  { id: 'intervencion2', nombre: 'Intervención Psicológica II', requisitos: ['intervencion1'] },
  { id: 'seminario', nombre: 'Seminario de Investigación en Psicología', requisitos: ['proyecto'] },
  { id: 'electivo3', nombre: 'Electivo 3', requisitos: ['electivo1', 'electivo2'] },
  { id: 'taller5', nombre: 'Taller 5: Autocuidado', requisitos: ['taller1', 'taller2', 'taller3', 'taller4'] },

  { id: 'practica', nombre: 'Práctica Profesional Psicológica', requisitos: [] },
  { id: 'examen', nombre: 'Examen de Título y Grado', requisitos: [] }
];

function crearMalla() {
  const container = document.getElementById('malla-container');

  ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.classList.add('ramo');
    if (ramo.requisitos.length > 0) div.classList.add('locked');
    div.id = ramo.id;
    div.innerText = ramo.nombre;
    div.onclick = () => aprobarRamo(ramo.id);
    container.appendChild(div);
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
  ramos.forEach(ramo => {
    if (ramo.requisitos.length > 0) {
      const cumplidos = ramo.requisitos.every(req =>
        document.getElementById(req)?.classList.contains('approved')
      );
      if (cumplidos) {
        document.getElementById(ramo.id).classList.remove('locked');
      }
    }
  });
}

crearMalla();

