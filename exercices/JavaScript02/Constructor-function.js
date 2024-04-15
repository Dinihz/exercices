// function Carro(marca, precoInicial) {
//   const taxa = 1.2;
//   const precoFinal = precoInicial * taxa;
//   this.marca = marca;
//   this.preco = precoFinal;
//   console.log(this);
// }

// const honda = new Carro('Honda', 2000);

//pratica

// function Dom() {
//   this.seletor = "li";
//   const element = document.querySelector(this.seletor);
//   this.ativo = function () {
//     element.classList.add("ativo");
//   };
// }

// const lista = new Dom();
// lista.seletor = "ul";
// lista.ativo();

// const lastLi = new Dom();
// lastLi.seletor = "li:last-child";
// lastLi.ativo();

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(nome + " Andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const joao = new Pessoa("Joao", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(selector) {
  const elementList = document.querySelectorAll(selector);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeCLass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });S
  };
}

const listaItens = new Dom("li");
const ul = new Dom("ul");

listaItens.addClass("active");
ul.addClass("active-ul");
