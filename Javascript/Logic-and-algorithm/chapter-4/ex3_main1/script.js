//Chamar os elementos do HTML
const inNumber = document.getElementById("inNumber");
const outAnswer = document.getElementById("outAnswer");
const btCheck = document.getElementById("btCheck");

function calcProblem() {
  const inputValue = inNumber.value.trim(); //remove extra spaces

  //check the space is empty
  if (inputValue === "") {
    alert("Please, add a number");
    inNumber.focus();
    return;
  }

  //get the number
  const number = Number(inputValue);

  //check if a number has been entered
  if (isNaN(number)) {
    alert("Please, add a valid number");
    inNumber.focus();
    return;
  }

  //check this number is even or odd
  outAnswer.textContent = `The number ${number} is ${number % 2 === 0 ? "even" : "odd"}`;
}
btCheck.addEventListener("click", calcProblem);
