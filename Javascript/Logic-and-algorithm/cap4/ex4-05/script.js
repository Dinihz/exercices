const inputNumber = document.getElementById("inNumber");
const btFill = document.getElementById("btFill");
const outSpace = document.getElementById("outSpace");

function calculateStars() {
  const num = Number(inputNumber.value);

  if (isNaN(num) || num <= 0) {
    alert("Please enter a valid number greater than zero.");
    inputNumber.focus();
    return;
  }

  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i % 2 === 1 ? "*" : "-";
  }
  outSpace.textContent = result;
}

btFill.addEventListener("click", calculateStars);
