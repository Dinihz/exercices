//Elaborar um programa que adicione numeros a um vetor (OK). O programa deve impedir a inclusao de numeros repetidos (OK). Exibir uma lista de numeros a cada inclusao OK. Ao clicar no botao Veficar ordem, o programa deve analisar o conteudo do vetor e informar se os numeros estao ou nao em ordem crescente.
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

  if (nums.includes(number)) {
    alert(`This number has alredy been added.`);
    inNumber.value = "";
    return;
  }

  nums.push(number);
  inNumber.value = "";
  inNumber.focus();

  preNumbers.textContent = `Numbers: ${nums.join(", ")}`;
});

btList.addEventListener("click", () => {
  const test = nums.every((num, i) => {});

  console.log(test);
});
