// //area de um triangulo

// function areaTriangulo(base,altura) {
//     var areaTriangulo = base * altura / 2
//     return areaTriangulo
// }       

// console.log(areaTriangulo(8,4))

// //calc imc
// function imc(peso, altura,){
//     var imc = peso / (altura * altura)
//     return imc
// }

// console.log(imc(63,1.74))

//cores
// function corFavorita(cor) {
//     if(cor === "azul") {
//         return "Vc gosta do zul"
//     } else if(cor === "verde") {
//         return "Vc gosta de verde"
//     } else if(cor === "vermelho") {
//         return "Vc gosta de vermelho"
//     } else {
//         return "cor nao verificada"
//     }
// }

// console.log(corFavorita("azul"))

// //argumento pd ser funcao
// addEventListener("click", function(){
//     console.log("clicou")
// })


//
// function maiorIdade(idade) {
//     if(typeof idade !== "number"){
//         return "Por favor preencha com um numero"
//     } else if(idade >= 18) {
//         console.log("voce e maior de idade")
//     } else {
//         console.log("e menor de idade")
//     }
// }

// console.log(maiorIdade(19))


// //ESCOPO
// Variáveis e funções definidas dentro de um bloco {},
// não são visíveis fora dele.      

// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
// }
// console.log(totalPaises); // erro, totalPaises não definido


// Crie uma função para verificar se um valor é Truthy
// function isTrufy(valor) {
//   return !!valor
// }
// isTrufy(23)


// Crie uma função matemática que retorne o perímetro de um quadrado
// function perimetroQuadrado(lado) {
//   var perimetroQuadrado = lado * 4
//   return perimetroQuadrado  
// } 

// console.log(perimetroQuadrado(9))



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
// function nomeCompleto(nome, sobrenome) {
//   var nomeCompleto = nome + sobrenome
//   return nomeCompleto
// }

// console.log(nomeCompleto("Lucas", " Diniz"))


// Crie uma função que verifica se um número é par
// function isIven(number) {
//   var modulo = number % 2;
//   if(modulo === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
// function type(valor) {
//   return typeof valor;
// }

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer
addEventListener("scroll", function() {
  console.log("Lucas Souza Diniz")
})


// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }

// console.log(jaVisitei(23))

var totalPaises = (193)
function jaVisitei(paisesVisitados) {
  return `Ja visitei ${paisesVisitados} do total de ${totalPaises} paises`
}

function precisoVisitar(paisesprecisovisitar) {
  var totalPaises = (193)
  return `Ainda faltam ${totalPaises - paisesprecisovisitar} países para visitar`
}



