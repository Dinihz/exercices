/* Digamos que o número de chinchilas de uma fazenda triplica a cada ano,
 * após o primeiro ano. Elaborar um programa que leia o número inicial de
 * chinchilas e anos e informe ano a ano o número médio previsto de chinchilas
 * da fazenda. Validar a entrada para que o número inicial de chinchilas seja
 * maior ou igual a 2 (um casal). A Figura 4.16 exibe a página com um exemplo
 * de saída do programa.
 */

const inputChin = document.getElementById("inChin");
const inputYears = document.getElementById("inYears");
const btCheck = document.getElementById("btCheck");
const outCheck = document.getElementById("outCheck");

function calcChinchillas() {
  const chin = Number(inputChin.value);
  const years = Number(inputYears.value);

  if (isNaN(chin) || isNaN(years) || chin < 2 || years <= 0) {
    alert(
      "Please, enter a valid number (For Chinchillas must be greater than 2)",
    );
    return;
  }

  let result = "";
  let total = chin;

  for (let i = 1; i <= years; i++) {
    if (i > 1) {
      total *= 3;
    }
    result += `Year ${i}: ${total} chinchillas <br>`;
  }

  outCheck.innerHTML = result;
}

btCheck.addEventListener("click", calcChinchillas);
