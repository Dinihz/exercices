
//object
// var eu = {
//     nome: "Dinihz",
//     idade: 18,
//     cidade: "Ribeirao",
//     profissao: "programador",
// }

// console.log(typeof eu.idade)

// var quadrado = {
//     lado: 4,
//     area: function(lado) {
//         return lado * lado
//     },
//     perimentro: function(lado) {
//         return this.lado * lado;
//     },
// }

// var quadrado = {
//     lado: 4,
//     area(lado) {
//         return lado * lado
//     },
//     perimentro(lado) {
//         return this.lado * lado;
//     },
// }

// var menu = {
//     width: 800,
//     heigh: 60,
//     backgroundColor: "#fff",
//     metadeHeigh() {
//         return this.heigh / 2; 
//     }
// }

// menu.backgroundColor = "#9E2"  ;
// menu.color = "blue" ;

// menu.esconder = function() {
//     console.log("escondi")
// }


// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
    idade: 18,
    nome: "Lucas", 
    sobrenome: " Diniz",
    cidade: "Ribeirao",
    juntarDados() {
        return this.nome + this.sobrenome
    }
}


// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

var dog = {
    raca: "labrador",
    cor: "#fff",
    idade: 10,
    nome: "luna",
    latir: function(pessoa) {
        if(pessoa === "homem") {
            return "latir";
        } else {
            return "Nada"
        }
    }
}

var btn = document.querySelector(".btn")

btn.classList.add("azul");
btn.innerText;
btn.addEventListener("click", function () {
    console.log("clicou")
})

// nomeie 3 propriedades ou métodos de strings
var namee = "Dinihz"
var nome = " Souza"
var two = namee.concat(nome);
// fixec
//concat

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
