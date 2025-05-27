const names = ["Ana", "Lucas", "Bruno", "Yui"];

const nameMap = names.map((name) => "Hello!, " + name);

console.log(nameMap[2]);

// Resultado esperado:
// ["Olá, Ana!", "Olá, Lucas!", "Olá, Bruno!", "Olá, Yui!"]
//

const students = [
  { name: "João", grades: [7, 8, 6] },
  { name: "Maria", grades: [9, 9, 10] },
  { name: "Carlos", grades: [5, 6, 7] },
];

// Resultado esperado:
// [
//   { name: "João", avg: 7 },
//   { name: "Maria", avg: 9.33 },
//   { name: "Carlos", avg: 6 }
// ]
