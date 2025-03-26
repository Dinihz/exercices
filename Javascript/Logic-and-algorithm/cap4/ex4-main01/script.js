const inputFruit = document.getElementById("inFruit");
const inputNumber = document.getElementById("inNumber");
const btCheck = document.getElementById("btCheck");
const outCheck = document.getElementById("outCheck");

function calculateFruitRepeat() {
  const fruit = inputFruit.value;
  const number = Number(inputNumber.value);

  if (isNaN(number) || number <= 0) {
    alert("Please enter a valid number greater than zero.");
    return;
  }

  let result = "";
  for (let i = 1; i <= number; i++) {
    result += fruit + (i < number ? "*" : "");
  }
  outCheck.textContent = result;
}

btCheck.addEventListener("click", calculateFruitRepeat);
