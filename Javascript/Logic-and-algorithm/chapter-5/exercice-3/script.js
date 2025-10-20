/*Elaborar um programa que leia um número e verique se ele é ou não
 * perfeito. Um número dito perfeito é aquele que é igual à soma dos seus
 * divisores inteiros (exceto o próprio número
 */

const inNumber = document.getElementById("inNumber");
const btCheck = document.getElementById("btCheck");
const outExplain = document.getElementById("outExplain");
const outCheck = document.getElementById("outCheck");

function calcPerfectNumber() {
  const number = Number(inNumber.value);

  if (isNaN(number) || number <= 0) {
    alert("Please add a valid number");
    inNumber.focus();
    return;
  }

  let sum = 0;
  let divisors = "";

  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum += i;
      divisors += i + " + ";
    }
  }

  outExplain.textContent = `Divisors: ${divisors} (Sum: ${sum})`;

  if (sum === number) {
    outCheck.textContent = `${number} is a perfect number!`;
  } else {
    outCheck.textContent = `${number} is not a perfect number.`;
  }
}

btCheck.addEventListener("click", calcPerfectNumber);
