// map: cria um novo vetor com o resultado do processamento de cada um dos elementos do vetor original.
const numbers = [10, 13, 20, 8, 15];

const final = numbers.map((num) => num * 2);

console.log(final.join(", "));

// another example

const friends = [
  { name: "Ana", age: 20 },
  { name: "Lucas", age: 19 },
  { name: "Carlos", age: 23 },
  { name: "Yui", age: 29 },
];

const friends2 = friends.map((aux) => ({
  name: aux.name,
  birth: 2025 - aux.age,
}));

for (const friend of friends2) {
  console.log(`${friend.name} - was born in ${friend.birth}`);
}

//filter: o vetor de origem e submetido a uma condicao e se for verdadeiro adiciona um elemento ao novo array;

const numbersFilter = [10, 13, 20, 15];

const pares = numbersFilter.filter((num) => num % 2 === 0);

console.log(pares.join(", "));

// another example

const adult = [
  { name: "Frederico", age: 16 },
  { name: "Nadia", age: 19 },
  { name: "Pietro", age: 72 },
  { name: "yudi", age: 10 },
];

const isAdults = adult.filter((aux) => aux.age >= 18 || aux.name.includes("8"));

for (const adults of isAdults) {
  console.log(`${adults.name} - age: ${adults.age} years`);
}

//reduce: usado para obter valores acumulativos

const ages = [
  { name: "Frederico", age: 16 },
  { name: "Nadia", age: 19 },
  { name: "Pietro", age: 72 },
  { name: "yudi", age: 10 },
];

const sum = ages.reduce((accumulator, age) => accumulator + age.age, 0);

console.log(`sum: ${sum}`);

const numeros = [10, 15, 20, 25];

const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(`Soma: ${soma}`);
