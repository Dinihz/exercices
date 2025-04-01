/* Elaborar um programa que leia um número e exiba estrelas na página, em
 * linhas diferentes. A cada nova linha, o número de estrelas deve ser
 * incrementado. Observação: caso você informe um valor alto, as linhas
 * podem ultrapassar o tamanho da imagem e se alinhar à margem esquerda
 * da página. Para evitar que isso ocorra, crie uma nova classe no arquivo
 * estilos.css, que dena uma utuação à direita para essa imagem. A Figura
 * 4.18 ilustra uma execução do programa desse exercício
 */

const inNumber = document.getElementById("inNumber");
const btFill = document.getElementById("btFill");
const outSpace = document.getElementById("outSpace");

function calculateStars() {
  const num = Number(inNumber.value);

  if (isNaN(num) || num <= 0) {
    alert("Please enter a valid number greater than zero.");
    inNumber.focus();
    return;
  }

  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*".repeat(i) + "<br>";
  }
  outSpace.innerHTML = result;
}

btFill.addEventListener("click", calculateStars);
