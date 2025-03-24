"use strict";
const form = document.querySelector("form");
const inNumber = document.querySelector("#inNumber");
const outNumber = document.querySelector("#outNumber");
//Desafio 1
function calcDouble(n) {
    return n * 2;
}
function message() {
    console.log("Bem-vindo(a) ao mundo do TypesScript!");
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => {
    event.preventDefault();
    const number = Number(inNumber.value);
    const calc = calcDouble(number);
    outNumber.textContent = `${calc}`;
});
