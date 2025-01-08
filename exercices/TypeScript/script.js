"use strict";
// Com o Typscript, podemos indicar queal será o tipo de um valor
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
const price = 100;
const game = {
    name: "Elden Ring",
    price: 250,
};
// O TS consegue inferir o tipo de um valor(inference). Entao sempre que ele conseguir, ele usa o tipo inferido nao precisamos escrever o tipo.
// Quando for funcoes vai ser necessario especificar o tipo de retorno
function add(a, b) {
    return a + b;
}
const ps5 = {
    name: "PlayStation 5",
    price: "3500",
};
function priceTransformer(product) {
    product.price = "R$" + product.price;
    return product;
}
const newProduct = priceTransformer(ps5);
console.log(newProduct);
//string
const me = "Diniz";
//number
let age = 19;
//boolean
const condition = true;
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
let all = 200;
all = "300";
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return "Não é número";
    }
}
// Retorna HTMLButtonElement | null
const button = document.querySelector("button");
// Optional chaining
// Executa click() se button for diferente de null/undefined
button === null || button === void 0 ? void 0 : button.click();
//exercico 3
// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")
function toNumber(value) {
    if (typeof value === "number") {
        return value;
    }
    else if (typeof value === "string") {
        return Number(value);
    }
    throw "value deve ser um número ou uma string";
}
// Object
//Usa-se uma sintaxe parecida com a criação de objetos literales, mas com um par de chaves {}.
function preencherDados(dados) {
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
let TotalA = 10;
TotalA = "200";
function isCategoria(categoria) {
    if (categoria === "A") {
        return true;
    }
    else {
        return false;
    }
}
isCategoria("A");
//Arrays
const numbers = [10, 40, 50, 5, 100];
function maior(data) {
    data.filter((n) => n >= 10);
}
//filtrar valores
const valores = [10, 30, "Home", 60, "name"];
function isNumbers(data) {
    return data.filter((item) => typeof item === "number");
}
// Outra Sinxtaxe
const otherNumbers = [10, 30, 250, 60, 360];
function more(data) {
    return data.filter((n) => n > 10);
}
// Any
//O any indica que o dado pode conter qualquer tipo de dado do TypeScript.
//O any faz sentido  no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
function fetchJSON(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const data = yield response.json();
    });
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
if (button)
    button.click();
button === null || button === void 0 ? void 0 : button.click();
// undefined
//undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
let total05;
console.log(total); // undefined
const libre = {};
const games = {
    nome05: "Ragnarok",
};
(_a = games.nome05) === null || _a === void 0 ? void 0 : _a.toLowerCase();
(_b = libre.nome05) === null || _b === void 0 ? void 0 : _b.toLowerCase();
//Class
//Quando definimos uma classe, o TypeScript gera a interface do objeto produzido pela mesma.
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    precoReal() {
        return `R$ ${this.preco}`;
    }
}
const livro = new Produto("Prime", 65);
//instanceof
//podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
//instanceof podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class).
class Livro {
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo {
    constructor(jogadores) {
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === "O Hobbit") {
        return new Livro("J. R. R. Tolkien");
    }
    if (busca === "Dark Souls") {
        return new Jogo(1);
    }
    return null;
}
const produto = buscarProduto("O Hobbit");
if (produto instanceof Livro) {
    produto.autor;
}
//Functions
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function round(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else if (typeof value === "string") {
        const num = Math.ceil(Number(value));
        return num.toString();
    }
}
function isCurso(curso) {
    if (curso &&
        typeof curso === "object" &&
        "nome" in curso &&
        "horas" in curso &&
        "tags" in curso) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(", ")}</p>
        </div>
      `;
        });
    }
}
//1 - Selecione o link utilizando o método getElementById.
//2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
const link = document.getElementById("origamid");
if (link && link.href.startsWith("http://")) {
    link.href = link.href.replace("http://", "https://");
}
//1 - Selecione os elementos com a classe link.
//2 - Crie uma função que deve ser executada para cada elemento.
//3 - Modificar através da função o estilo da color e border.
const links = document.querySelectorAll(".link");
links.forEach((item) => {
    if (item instanceof HTMLElement) {
        ativarElemento(item);
    }
});
function ativarElemento(elemento) {
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
