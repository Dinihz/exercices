function calc() {
  const inHoraBrasil = document.getElementById("inHoraBrasil");

  const outHoraFranca = document.getElementById("outHoraFranca");

  const horas = parseInt(inHoraBrasil.value);

  if (inHoraBrasil.value == "" || isNaN(horas)) {
    alert("Informe a hora no Brasil corretamente.");
    inHoraBrasil.focus();
    return;
  }

  let calcHoras = horas + 5;

  if (calcHoras > 24) {
    calcHoras = calcHoras - 24;
  }

  outHoraFranca.textContent =
    "Horas na Franca " + calcHoras.toFixed(2) + " Hora(s)";
}

const btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", calc);
