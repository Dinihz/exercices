//Chamar os elementos do HTML
const inNumber = document.getElementById("inNumber");
const outAnswer = document.getElementById("outAnswer");
const btCheck = document.getElementById("btCheck");

function calcProblem() {
  //pegar a resposta do usuario
  const number = Number(inNumber.value);

  //verificar se nao colocou outra coisa a nao ser number
  if (isNaN(number)) {
    alert("Please, add a valid number");
    inNumber.focus();
    return;
  }

  //verificar se o resultado e impar ou par
  if (number % 2 == 0) {
    outAnswer.textContent = `The number ${number} is even`;
  } else {
    outAnswer.textContent = `The number ${number} is odd`;
  }
}

btCheck.addEventListener("click", calcProblem);
