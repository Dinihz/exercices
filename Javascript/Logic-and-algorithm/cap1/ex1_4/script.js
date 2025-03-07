const inScore1 = document.getElementById("inScore1");
const inScore2 = document.getElementById("inScore2");
const btCheck = document.getElementById("btCheck");
const outCheck = document.getElementById("outCheck");

function calcMedia() {
  const scoreOne = Number(inScore1.value);
  const scoreTwo = Number(inScore2.value);

  const calculate = (scoreOne + scoreTwo) / 2;

  outCheck.textContent = `The media is ${calculate.toFixed(1)}`;
}

btCheck.addEventListener("click", calcMedia);
