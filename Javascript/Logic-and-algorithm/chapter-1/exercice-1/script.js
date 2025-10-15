const inNumber = document.getElementById("inNumber");
const btCheck = document.getElementById("btCheck");
const outNumber = document.getElementById("outNumber");

function calc() {
  const number = Number(inNumber.value);

  const predecessor = number - 1;
  const successor = number + 1;

  outNumber.textContent = `The predecessor in thenumber ${number} is ${predecessor} and the successor is ${successor}`;
}

btCheck.addEventListener("click", calc);
