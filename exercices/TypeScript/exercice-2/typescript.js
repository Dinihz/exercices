"use strict";
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (total && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerHTML = `${value + 100 - value * 0.2}`;
    }
}
function totalmudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener("keyup", totalmudou);
}
