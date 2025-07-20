// Datos de ramos con sus dependencias (los que desbloquean)
const courses = {
  // Primer Año
  "Fundamentos de la Psicología": [],
  "Psicología del Desarrollo I": ["Psicología del Desarrollo II"],
  "Antropología Social": [],
  "Taller de Competencias Comunicativas": [],
  "Taller de Competencias para el Aprendizaje": [],
  "Taller de Desarrollo Personal": ["Taller de Desarrollo Personal II"],
  "Taller 1: Autoconocimiento": [
    "Taller 2: Relaciones Humanas",
    "Taller 3: Identidad Profesional",
    "Taller 4: Ética Profesional en Psicología",
    "Taller 5: Autocuidado",
  ],
  "Psicobiología": ["Procesos Neuropsicológicos I", "Procesos Neuropsicológicos II"],
  "Psicología del Desarrollo II": [],
  "Teorías Cognitivas": [],
  "Teorías Psicoanalíticas": [],
  "Pensamiento Matemático para Ciencias Sociales": [],
  "Taller de Desarrollo Personal II": [],
  "Taller 2: Relaciones Humanas": [
    "Taller 3: Identidad Profesional",
    "Taller 4: Ética Profesional en Psicología",
    "Taller 5: Autocuidado",
  ],
  // Segundo Año
  "Procesos Neuropsicológicos I": ["Procesos Neuropsicológicos II"],
  "Psicología de la Personalidad": [],
  "Teorías Humanistas": [],
  "Teorías Sistémicas": [],
  "Epistemología de la Ciencia Psicológica": [],
  "Cultura y Valores": [],
  "Inglés Básico I": ["Inglés Básico II"],
  "Procesos Neuropsicológicos II": [],
  "Psicología Social": [],
  "Psicopatología del Adulto": [],
  "Investigación Cualitativa": ["Investigación Cuantitativa", "Estadística para la Psicología", "Psicometría"],
  "Persona y Sentido": [],
  "Inglés Básico II": [],
  "Evaluación del Desarrollo de Competencias I": ["Evaluación del Desarrollo de Competencias II"],
  // Tercer Año
  "Políticas Sociales": [],
  "Psicología Comunitaria": ["Diagnóstico en Psicología Comunitaria"],
  "Evaluación Psicológica Cognitiva": ["Evaluación Socioafectiva"],
  "Psicología Infanto Juvenil": [],
  "Investigación Cuantitativa": ["Estadística para la Psicología", "Psicometría"],
  "Psicología Organizacional y del Trabajo": ["Diagnóstico en Psicología Organizacional"],
  "Psicología Educacional": ["Diagnóstico en Psicología Educacional"],
  "Diagnóstico en Psicología Comunitaria": [],
  "Evaluación Socioafectiva": [],
  "Estadística para la Psicología": ["Psicometría"],
  "Diagnóstico en Psicología Organizacional": [],
  // Cuarto Año
  "Diagnóstico en Psicología Educacional": [],
  "Diagnóstico en Psicología Clínica": [],
  "Psicología Clínica y Psicoterapia": ["Intervención Psicológica I", "Intervención Psicológica II"],
  "Psicometría": [],
  "Electivo 1": ["Electivo 2", "Electivo 3"],
  "Taller 3: Identidad Personal": ["Taller 4: Ética Profesional en Psicología", "Taller 5: Autocuidado"],
  "Evaluación del Desarrollo de Competencias II": [],
  "Intervención Psicológica I": ["Intervención Psicológica II"],
  "Proyecto de Investigación en Psicología": ["Seminario de Investigación en Psicología"],
  "Electivo 2": ["Electivo 3"],
  "Taller 4: Ética Profesional en Psicología": ["Taller 5: Autocuidado"],
  // Quinto Año
  "Intervención Psicológica II": [],
  "Seminario de Investigación en Psicología": [],
  "Electivo 3": [],
  "Taller 5: Autocuidado": [],
  "Práctica Profesional Psicológica": [],
  "Examen de Título y Grado": [],
};

// Organización por año y semestre (orden importante)
const malla = [
  {
    year: "Primer Año",
    semesters: [
      {
        semester: "I Semestre",
        courses: [
          "Fundamentos de la Psicología",
          "Psicología del Desarrollo I",
          "Antropología Social",
          "Taller de Competencias Comunicativas",
          "Taller de Competencias para el Aprendizaje",
          "Taller de Desarrollo Personal",
          "Taller 1: Autoconocimiento",
        ],
      },
      {
        semester: "II Semestre",
        courses: [
          "Psicobiología",
          "Psicología del Desarrollo II",
          "Teorías Cognitivas",
          "Teorías Psicoanalíticas",
          "Pensamiento Matemático para Ciencias Sociales",
          "Taller de Desarrollo Personal II",
          "Taller 2: Relaciones Humanas",
        ],
      },
    ],
  },
  {
    year: "Segundo Año",
    semesters: [
      {
        semester: "III Semestre",
        courses: [
          "Procesos Neuropsicológicos I",
          "Psicología de la Personalidad",
          "Teorías Humanistas",
          "Teorías Sistémicas",
          "Epistemología de la Ciencia Psicológica",
          "Cultura y Valores",
          "Inglés Básico I",
        ],
      },
      {
        semester: "IV Semestre",
        courses: [
          "Procesos Neuropsicológicos II",
          "Psicología Social",
          "Psicopatología del Adulto",
          "Investigación Cualitativa",
          "Persona y Sentido",
          "Inglés Básico II",
          "Evaluación del Desarrollo de Competencias I",
        ],
      },
    ],
  },
  {
    year: "Tercer Año",
    semesters: [
      {
        semester: "V Semestre",
        courses: [
          "Políticas Sociales",
          "Psicología Comunitaria",
          "Evaluación Psicológica Cognitiva",
          "Psicología Infanto Juvenil",
          "Investigación Cuantitativa",
          "Psicología Organizacional y del Trabajo",
        ],
      },
      {
        semester: "VI Semestre",
        courses: [
          "Psicología Educacional",
          "Diagnóstico en Psicología Comunitaria",
          "Evaluación Socioafectiva",
          "Estadística para la Psicología",
          "Diagnóstico en Psicología Organizacional",
        ],
      },
    ],
  },
  {
    year: "Cuarto Año",
    semesters: [
      {
        semester: "VII Semestre",
        courses: [
          "Diagnóstico en Psicología Educacional",
          "Diagnóstico en Psicología Clínica",
          "Psicología Clínica y Psicoterapia",
          "Psicometría",
          "Electivo 1",
          "Taller 3: Identidad Personal",
          "Evaluación del Desarrollo de Competencias II",
        ],
      },
      {
        semester: "VIII Semestre",
        courses: [
          "Intervención Psicológica I",
          "Proyecto de Investigación en Psicología",
          "Electivo 2",
          "Taller 4: Ética Profesional en Psicología",
        ],
      },
    ],
  },
  {
    year: "Quinto Año",
    semesters: [
      {
        semester: "IX Semestre",
        courses: [
          "Intervención Psicológica II",
          "Seminario de Investigación en Psicología",
          "Electivo 3",
          "Taller 5: Autocuidado",
        ],
      },
      {
        semester: "X Semestre",
        courses: [
          "Práctica Profesional Psicológica",
          "Examen de Título y Grado",
        ],
      },
    ],
  },
];

// Estados: aprobado, desbloqueado
// Al inicio, desbloqueamos sólo los ramos que no tienen prerequisitos visibles (los que no son desbloqueados por otro ramo)

// Para saber qué ramos dependen de otros (inverso del objeto courses)
const prereqs = {};

// Construimos prereqs para cada ramo: quién los desbloquea
Object.keys(courses).forEach((course) => {
  courses[course].forEach((unlock) => {
    if (!prereqs[unlock]) prereqs[unlock] = [];
    prereqs[unlock].push(course);
  });
});

// Función para saber si un ramo está desbloqueado: si no tiene prereqs o alguno de sus prereqs está aprobado
// Para eso, guardamos en approvedCourses el set de aprobados
let approvedCourses = new Set();

function canUnlock(course) {
  if (!prereqs[course]) return true; // no tiene prereq, desbloqueado
  // si alguno de sus prereqs está aprobado, se desbloquea
  return prereqs[course].some((pre) => approvedCourses.has(pre));
}

// Crear el HTML
const container = document.getElementById("malla-container");

function createCourseButton(courseName) {
  const btn = document.createElement("button");
  btn.classList.add("course-btn");
  btn.textContent = courseName;
  btn.dataset.course = courseName;
  btn.disabled = !canUnlock(courseName);
  return btn;
}

function renderMalla() {
  container.innerHTML = "";

  malla.forEach((yearBlock) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("year");

    const yearTitle = document.createElement("h2");
    yearTitle.classList.add("year-title");
    yearTitle.textContent = yearBlock.year;
    yearDiv.appendChild(yearTitle);

    const semestersDiv = document.createElement("div");
    semestersDiv.classList.add("semesters-container");

    yearBlock.semesters.forEach((sem) => {
      const semDiv = document.createElement("div");
      semDiv.classList.add("semester");

      const semTitle = document.createElement("div");
      semTitle.classList.add("semester-title");
      semTitle.textContent = sem.semester;
      semDiv.appendChild(semTitle);

      sem.courses.forEach((course) => {
        const btn = createCourseButton(course);
        if (approvedCourses.has(course)) {
          btn.classList.add("approved");
          btn.disabled = false;
        }
        semDiv.appendChild(btn);
      });

      semestersDiv.appendChild(semDiv);
    });

    yearDiv.appendChild(semestersDiv);
    container.appendChild(yearDiv);
  });
}

// Actualizar desbloqueos tras un cambio
function updateUnlocks() {
  // Para cada botón: si no está aprobado, chequear si se desbloquea
  document.querySelectorAll(".course-btn").forEach((btn) => {
    const course = btn.dataset.course;
    if (!approvedCourses.has(course)) {
      btn.disabled = !canUnlock(course);
      btn.classList.remove("approved");
    } else {
      btn.disabled = false;
      btn.classList.add("approved");
    }
  });
}

// Evento click para aprobar/desaprobar
container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("course-btn") || e.target.disabled) return;

  const course = e.target.dataset.course;

  if (approvedCourses.has(course)) {
    // Si está aprobado, quitar aprobado y actualizar
    approvedCourses.delete(course);
  } else {
    approvedCourses.add(course);
  }

  updateUnlocks();
});

// Render inicial
renderMalla();
updateUnlocks();
