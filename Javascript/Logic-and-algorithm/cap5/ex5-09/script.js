//Elaborar um programa que adicione numeros a um vetor (OK). O programa deve impedir a inclusao de numeros repetidos. Exibir uma lista de numeros a cada inclusao. Ao clicar no botao Veficar ordem, o programa deve analisar o conteudo do vetor e informar se os numeros estao ou nao em ordem crescente.
const inNumber = document.querySelector("#inNumber");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("#btList");

const preNumbers = document.querySelector("#preNumbers");
const preResult = document.querySelector("preResult");

const nums = [];

btAdd.addEventListener("click", () => {
  const number = Number(inNumber.value.trim());
  if (isNaN(number)) {
    alert(`Please enter a valid number.`);
  }
  nums.push(number);
  inNumber.value = "";
  inNumber.focus();
});

console.log(nums);
