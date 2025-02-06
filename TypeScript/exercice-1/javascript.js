const input = document.querySelector("input");

const total = localStorage.getItem("total");
input.value = total;
calcularGanho(input.value);

function calcularGanho(value) {
  const p = document.querySelector("p");
  p.innerHTML = `${value + 100 - value * 0.2}`;
}

function totalmudou() {
  const value = Number(input.value);
  localStorage.setItem("total", value);
}
input.addEventListener("keyup", totalmudou);
