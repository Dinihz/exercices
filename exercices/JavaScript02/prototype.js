// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Person(nome, sobrenome, idade) {
  this.nome = nome
  this.sobrenome = sobrenome
  this.idade = idade
}


Pessoa.prototype.nomeCompleto = function {
  return `${this.nome} ${this.sobrenome}`
}

const andre = new Pessoa("Andre", "Rafael", 28)

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

NodeList.prototype
HTMLCollection.prototype
document.prototype

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // htmlelement
li.click; // function
li.innerText; // string
li.value; // number
li.hidden; // boolean
li.offsetLeft; // number
li.click(); // undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // string
