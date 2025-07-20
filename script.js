const datos = {
  "Primer Año": {
    "I Semestre": [
      { nombre: "Fundamentos de la Psicología" },
      { nombre: "Psicología del Desarrollo I", desbloquea: ["Psicología del Desarrollo II"] },
      { nombre: "Antropología Social" },
      { nombre: "Taller de Competencias Comunicativas" },
      { nombre: "Taller de Competencias para el Aprendizaje" },
      { nombre: "Taller de Desarrollo Personal", desbloquea: ["Taller de Desarrollo Personal II"] },
      { nombre: "Taller 1: Autoconocimiento", desbloquea: ["Taller 2: Relaciones Humanas", "Taller 3: Identidad Profesional", "Taller 4: Ética Profesional en Psicología", "Taller 5: Autocuidado"] },
    ],
    "II Semestre": [
      { nombre: "Psicobiología", desbloquea: ["Procesos Neuropsicológicos I", "Procesos Neuropsicológicos II"] },
      { nombre: "Psicología del Desarrollo II" },
      { nombre: "Teorías Cognitivas" },
      { nombre: "Teorías Psicoanalíticas" },
      { nombre: "Pensamiento Matemático para Ciencias Sociales" },
      { nombre: "Taller de Desarrollo Personal II" },
      { nombre: "Taller 2: Relaciones Humanas", desbloquea: ["Taller 3: Identidad Profesional", "Taller 4: Ética Profesional en Psicología", "Taller 5: Autocuidado"] },
    ]
  },
  "Segundo Año": {
    "III Semestre": [
      { nombre: "Procesos Neuropsicológicos I", desbloquea: ["Procesos Neuropsicológicos II"] },
      { nombre: "Psicología de la Personalidad" },
      { nombre: "Teorías Humanistas" },
      { nombre: "Teorías Sistémicas" },
      { nombre: "Epistemología de la Ciencia Psicológica" },
      { nombre: "Cultura y Valores" },
      { nombre: "Inglés Básico I", desbloquea: ["Inglés Básico II"] }
    ],
    "IV Semestre": [
      { nombre: "Procesos Neuropsicológicos II" },
      { nombre: "Psicología Social" },
      { nombre: "Psicopatología del Adulto" },
      { nombre: "Investigación Cualitativa", desbloquea: ["Investigación Cuantitativa", "Estadística para la Psicología", "Psicometría"] },
      { nombre: "Persona y Sentido" },
      { nombre: "Inglés Básico II" },
      { nombre: "Evaluación del Desarrollo de Competencias I", desbloquea: ["Evaluación del Desarrollo de Competencias II"] },
    ]
  },
  "Tercer Año": {
    "V Semestre": [
      { nombre: "Políticas Sociales" },
      { nombre: "Psicología Comunitaria", desbloquea: ["Diagnóstico en Psicología Comunitaria"] },
      { nombre: "Evaluación Psicológica Cognitiva", desbloquea: ["Evaluación Socioafectiva"] },
      { nombre: "Psicología Infanto Juvenil" },
      { nombre: "Investigación Cuantitativa", desbloquea: ["Estadística para la Psicología", "Psicometría"] },
      { nombre: "Psicología Organizacional y del Trabajo", desbloquea: ["Diagnóstico en Psicología Organizacional"] },
    ],
    "VI Semestre": [
      { nombre: "Psicología Educacional", desbloquea: ["Diagnóstico en Psicología Educacional"] },
      { nombre: "Diagnóstico en Psicología Comunitaria" },
      { nombre: "Evaluación Socioafectiva" },
      { nombre: "Estadística para la Psicología", desbloquea: ["Psicometría"] },
      { nombre: "Diagnóstico en Psicología Organizacional" }
    ]
  },
  "Cuarto Año": {
    "VII Semestre": [
      { nombre: "Diagnóstico en Psicología Educacional" },
      { nombre: "Diagnóstico en Psicología Clínica" },
      { nombre: "Psicología Clínica y Psicoterapia", desbloquea: ["Intervención Psicológica I", "Intervención Psicológica II"] },
      { nombre: "Psicometría" },
      { nombre: "Electivo 1", desbloquea: ["Electivo 2", "Electivo 3"] },
      { nombre: "Taller 3: Identidad Personal", desbloquea: ["Taller 4: Ética Profesional en Psicología", "Taller 5: Autocuidado"] },
      { nombre: "Evaluación del Desarrollo de Competencias II" },
    ],
    "VIII Semestre": [
      { nombre: "Intervención Psicológica I", desbloquea: ["Intervención Psicológica II"] },
      { nombre: "Proyecto de Investigación en Psicología", desbloquea: ["Seminario de Investigación en Psicología"] },
      { nombre: "Electivo 2", desbloquea: ["Electivo 3"] },
      { nombre: "Taller 4: Ética Profesional en Psicología", desbloquea: ["Taller 5: Autocuidado"] }
    ]
  },
  "Quinto Año": {
    "IX Semestre": [
      { nombre: "Intervención Psicológica II" },
      { nombre: "Seminario de Investigación en Psicología" },
      { nombre: "Electivo 3" },
      { nombre: "Taller 5: Autocuidado" }
    ],
    "X Semestre": [
      { nombre: "Práctica Profesional Psicológica" },
      { nombre: "Examen de Título y Grado" }
    ]
  }
};

const estado = {};

function crearRamo(nombre) {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.dataset.nombre = nombre;
  div.onclick = () => aprobarRamo(nombre, div);
  return div;
}

function aprobarRamo(nombre, div) {
  if (div.classList.contains("bloqueado")) return;
  if (div.classList.contains("aprobado")) return;

  div.classList.add("aprobado");

  for (const año in datos) {
    for (const semestre in datos[año]) {
      for (const ramo of datos[año][semestre]) {
        if (ramo.desbloquea && ramo.desbloquea.includes(nombre)) {
          const desbloqueador = estado[ramo.nombre];
          if (!desbloqueador?.classList.contains("aprobado")) {
            return;
          }
        }
      }
    }
  }

  for (const año in datos) {
    for (const semestre in datos[año]) {
      for (const ramo of datos[año][semestre]) {
        if (ramo.desbloquea && ramo.desbloquea.includes(nombre)) {
          const next = estado[ramo.nombre];
          if (next) next.classList.remove("bloqueado");
        }
      }
    }
  }
}

function construirMalla() {
  const contenedor = document.getElementById("malla");

  for (const año in datos) {
    const divAño = document.createElement("div");
    divAño.className = "año";

    const tituloAño = document.createElement("div");
    tituloAño.className = "titulo-año";
    tituloAño.textContent = año;
    divAño.appendChild(tituloAño);

    const filaSemestres = document.createElement("div");
    filaSemestres.className = "semestre";

    for (const semestre in datos[año]) {
      const columna = document.createElement("div");
      columna.className = "columna";

      const tituloSemestre = document.createElement("div");
      tituloSemestre.className = "titulo-semestre";
      tituloSemestre.textContent = semestre;
      columna.appendChild(tituloSemestre);

      for (const ramo of datos[año][semestre]) {
        const div = crearRamo(ramo.nombre);
        if (!ramo.desbloquea) div.classList.remove("bloqueado");
        estado[ramo.nombre] = div;
        columna.appendChild(div);
      }

      filaSemestres.appendChild(columna);
    }

    divAño.appendChild(filaSemestres);
    contenedor.appendChild(divAño);
  }
}

document.addEventListener("DOMContentLoaded", construirMalla);
