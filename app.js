const studentA = {
  name: "Pedro",
  surname1: "Fernandez",
  surname2: "Fraga",
  age: 22,
};
const studentB = {
  name: "Salomé",
  surname1: "Agapita",
  surname2: "García",
  age: 30,
};

const courseA = {
  name: "Introducción al Macramé",
  level: "básico",
  duration: 5,
};
const courseB = {
  name: "Creando una pulsera",
  level: "intermedio",
  duration: 10,
};
const courseC = {
  name: "Fabrica tu propia red para atunes",
  level: "avanzado",
  duration: 100,
};

const averageStudentAge = (studentA.age + studentB.age) / 2;

console.log(
  `INFORME DE LA ESCUELA

Cursos:
- ${courseA.name} (nivel ${courseA.level}, ${courseA.duration} horas)
- ${courseB.name} (nivel ${courseB.level}, ${courseB.duration} horas)
- ${courseC.name} (nivel ${courseC.level}, ${courseC.duration} horas)

Alumnos:
- ${studentA.name} ${studentA.surname1}, ${studentA.age} años
- ${studentB.name} ${studentB.surname1}, ${studentB.age} años

Edad media de los alumnos: ${averageStudentAge} años
`
);
