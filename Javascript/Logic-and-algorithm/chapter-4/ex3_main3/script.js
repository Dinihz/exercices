const inValue = document.getElementById("inValue");
const btConfirm = document.getElementById("btConfirm");
const outTime = document.getElementById("outTime");
const outCharge = document.getElementById("outChange");

function calcProgram() {
  const value = Number(inValue.value);

  if (isNaN(value) || value < 1) {
    alert("Valor insuficiente.");
    return;
  }

  let time = 0;
  let change = 0;

  if (value >= 1 && value < 1.75) {
    time = 30;
  } else if (value >= 1.75 && value < 3) {
    time = 60;
  } else if (value >= 3) {
    time = 120;
    change = value - 3;
  }

  outTime.textContent = `Tempo: ${time} minutos`;

  if (change > 0) {
    outCharge.textContent = `Troco: R$ ${change.toFixed(2)}`;
  } else {
    outCharge.textContent = "";
  }
}

btConfirm.addEventListener("click", calcProgram);
