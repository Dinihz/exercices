const inSpeed = document.getElementById("inSpeed");
const inDriver = document.getElementById("inDriver");
const btCheck = document.getElementById("btCheck");
const outSituation = document.getElementById("outSituation");

function calcSpeed() {
  const speed = Number(inSpeed.value);
  const driver = Number(inDriver.value);

  if (!speed || !driver || isNaN(speed) || isNaN(driver)) {
    alert("Please, enter valid numbers");
    inSpeed.focus();
    inDriver.focus();
    return;
  }

  const fine = speed * 0.2;
  const calc = speed + fine;

  if (driver <= speed) {
    outSituation.textContent = `Sem Multa`;
  } else if (driver <= calc) {
    outSituation.textContent = `Multa Leve`;
  } else {
    outSituation.textContent = `Multa grave`;
  }
}

btCheck.addEventListener("click", calcSpeed);
