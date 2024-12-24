// Com o Typscript, podemos indicar queal será o tipo de um valor

const price: number = 100;

const game: {
  name: string;
  price: number;
} = {
  name: "Elden Ring",
  price: 250,
};

// O TS consegue inferir o tipo de um valor(inference). Entao sempre que ele conseguir, ele usa o tipo inferido nao precisamos escrever o tipo.

// Quando for funcoes vai ser necessario especificar o tipo de retorno

function add(a: number, b: number): number {
  return a + b;
}

const ps5 = {
  name: "PlayStation 5",
  price: "3500",
};

function priceTransformer(product: { name: string; price: string }) {
  product.price = "R$" + product.price;
  return product;
}

const newProduct = priceTransformer(ps5);

console.log(newProduct);

//string

const me: string = "Diniz";

//number

let age: number = 19;

//boolean

const condition: boolean = true;

//typeof

//typeof é um operador de JavaScript que retorna uma string indicando o tipo do dado.

const frase = "Front End";
const preco = 500;
const condi = preco > 100;

if (typeof frase === "string") {
  console.log("frase é string");
}
if (typeof preco === "number") {
  console.log("preco é number");
}
if (typeof condi === "boolean") {
  console.log("condi é boolean");
}

//Não confundir string, number e boolean com String, Number e Boolean. Os últimos são as funções construtoras desses tipos de dados, responsáveis pela herança das propriedades e métodos dos mesmos.

const frase1 = new String("Front End");
const frase2 = String("Front End");
const frase3 = "Front End";

console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);

//Union Types

//É comum termos funções que podem retornar ou receber tipos diferentes. Para isso usamos a barra vertical string | number | boolean.

let all: string | number = 200;
all = "300";

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return "Não é número";
  }
}

// Retorna HTMLButtonElement | null
const button = document.querySelector("button");
// Optional chaining
// Executa click() se button for diferente de null/undefined
button?.click();

//exercico 3
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    return Number(value);
  }
  throw "value deve ser um número ou uma string";
}

// Object

//Usa-se uma sintaxe parecida com a criação de objetos literales, mas com um par de chaves {}.

function preencherDados(dados: {
  nome: string;
  sobrenome: string;
  maiorDeIdade: boolean;
}) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>${dados.sobrenome}</p>
    <p>Maior de idade: ${dados.maiorDeIdade ? "Sim" : "Não"}</p>
  </div>
  `;
}

preencherDados({
  nome: "Diniz",
  sobrenome: "Dinihz",
  maiorDeIdade: true,
});

preencherDados({
  nome: "Lucas",
  sobrenome: "Souza",
  maiorDeIdade: false,
});

// Type

//Cria um atalho (alias) para um tipo.

type NumberOrString = number | string;

let TotalA: NumberOrString = 10;
TotalA = "200";

type Categoria = "A" | "B" | "C";

function isCategoria(categoria: Categoria) {
  if (categoria === "A") {
    return true;
  } else {
    return false;
  }
}

isCategoria("A");

//Interface

//Usado para definir objetos.

interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  maiorDeIdade: boolean;
}

//Arrays

const numbers = [10, 40, 50, 5, 100];

function maior(data: number[]) {
  data.filter((n) => n >= 10);
}

//filtrar valores

const valores = [10, 30, "Home", 60, "name"];

function isNumbers(data: (number | string)[]) {
  return data.filter((item) => typeof item === "number");
}

// Outra Sinxtaxe

const otherNumbers = [10, 30, 250, 60, 360];

function more(data: Array<number>) {
  return data.filter((n) => n > 10);
}

// Any

//O any indica que o dado pode conter qualquer tipo de dado do TypeScript.

//O any faz sentido  no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.

async function fetchJSON(url: string) {
  const response = await fetch(url);
  const data = await response.json();
}

fetchJSON("https://www.openstreetmap.org/export#map=7/-19.684/-42.836");

//Tome cuidado pois o any pode quebrar o seu código.

//Null e Undefined

//Null

//null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

const button05 = document.querySelector("button");
const configs = localStorage.getItem("config");

if (button !== null) {
  button.click();
}
if (button) {
  button.click();
}
if (button) button.click();
button?.click();

// undefined

//undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.

let total05;
console.log(total); // undefined

//Propriedades Opcionais

//Utilizando opcional?: string. Quando opcional, elas poderão sempre retornar como o valor definido ou undefined.

interface Products1 {
  nome05?: string;
}

const libre: Products1 = {};
const games: Products1 = {
  nome05: "Ragnarok",
};

games.nome05?.toLowerCase();
libre.nome05?.toLowerCase();
