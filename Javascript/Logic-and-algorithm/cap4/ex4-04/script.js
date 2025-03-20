const inNumber = document.getElementById("inNumber");
const btCheck = document.getElementById("btCheck");
const outAnswer = document.getElementById("outAnswer");

function calcPrime() {
  const number = Number(inNumber.value);

  if (number === "" || isNaN(number) || number <= 0) {
    alert("Please, put a valid number");
    inNumber.focus();
    return;
  }

  if (number === 1) {
    outAnswer.textContent = `1 is not a prime number`;
    return;
  }

  let counter = 0;
  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      counter += 2;
    }
  }

  if (counter === 2) {
    outAnswer.textContent = `${number} is a prime number`;
  } else {
    outAnswer.textContent = `${number} is not a prime number`;
  }
}

btCheck.addEventListener("click", calcPrime);
