// Retorne o url da página atual utilizando o objeto window
console.log(window.location)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elemento = document.querySelector(".ativo")

// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem)

// Retorne a largura da janela 
const janela = window.innerWidth
console.log(janela)


// function habilitacao(A, B) 
// {
//     if(A === "carro") return "Carro";
//     if(B === "Moto") return "Moto"
//     return "nao tem carteira"
// }

// console.log("carro")

// /**
// @params typeLetter {String} - É o tipo da carteira do motorista, pode ser A ou B
// @returns retorna que tipo de veículo o tipo da carteira de motorista permite o portador a dirigir
// */
// function getDriverLicenseType(typeLetter) {
//     if(typeLetter === "A") return "motorcycle";
//     if(typeLetter === "B") return "car";

// }

function getDriverLicenseType(typeLetter) {
    const driverLicenseType = {
        A: "Moto",

    }
}
