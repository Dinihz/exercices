const inputNumber = document.getElementById("inNumber");
const btBet = document.getElementById("btBet");
const outError = document.getElementById("outError");
const outChances = document.getElementById("outChances");
const outTip = document.getElementById("outTip");

const theNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
const guesses = [];

function findNumber() {
  const usrNumber = Number(inputNumber.value);

  if (usrNumber <= 0 || usrNumber > 100 || isNaN(usrNumber)) {
    alert("Enter a number between 1 and 100");
    inputNumber.focus();
    return;
  }

  if (guesses.indexOf(usrNumber) !== -1) {
    alert("You've alredy bet that number!");
    inputNumber.focus();
    return;
  }

  guesses.push(usrNumber);
  attemptsLeft--;

  if (usrNumber === theNumber) {
    outTip.textContent = `You got it!`;
    btBet.disabled = true;
    return;
  }

  const tip =
    usrNumber < theNumber ? `Try a higher number` : "Try a lower number";
  outTip.textContent = `Tip: ${tip}`;
  outError.textContent = `Errors: ${guesses.join(", ")}`;
  outChances.textContent = `You still have ${attemptsLeft} attempts`;

  if (attemptsLeft === 0) {
    outTip.textContent = `Game Over! The number was ${theNumber}`;
    btBet.disabled = true;
  }

  inputNumber = "";
  inputNumber.focus();
}

btBet.addEventListener("click", findNumber);
