const inSpeed = document.getElementById("inSpeed");
const inDriver = document.getElementById("inDriver");
const btCheck = document.getElementById("btCheck");
const outSituation = document.getElementById("outSituation");

function calcSpeed() {
  const speed = Number(inSpeed.value);
  const driver = Number(inDriver.value);

  let errorMessage = "";

  if (inSpeed.value.trim() === "" || isNaN(speed)) {
    errorMessage += "Please, enter a valid speed. ";
  }

  if (inDriver.value.trim() === "" || isNaN(driver)) {
    errorMessage += "Please, enter a valid driver speed.";
  }

  if (errorMessage) {
    alert(errorMessage);
    if (inSpeed.value.trim() === "" || isNaN(speed)) {
      inSpeed.focus();
    } else {
      inDriver.focus();
    }
    return;
  }

  const speedLimit20 = speed * 1.2;

  if (driver <= speed) {
    outSituation.textContent = `Sem Multa`;
  } else if (driver <= speedLimit20) {
    outSituation.textContent = `Multa Leve`;
  } else {
    outSituation.textContent = `Multa Grave`;
  }
}

btCheck.addEventListener("click", calcSpeed);
