// map: cria um novo vetor com o resultado do processamento de cada um dos elementos do vetor original.
const numbers = [10, 13, 20, 8, 15];

const final = numbers.map((num) => num * 2);

console.log(final.join(", "));

//filter: o vetor de origem e submetido a uma condicao e se for verdadeiro adiciona um elemento ao novo array;

const numbersFilter = [10, 13, 20, 15];

const pares = numbersFilter.filter((num) => num % 2 === 0);

console.log(pares.join(", "));

//reduce: usado para obter valores acumulativos

const numeros = [10, 15, 20, 25];

const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);

console.log(`Soma: ${soma}`);
