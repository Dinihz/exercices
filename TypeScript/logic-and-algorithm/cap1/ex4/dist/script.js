"use strict";
const frm = document.querySelector("form");
const inputFarm = document.querySelector("#inMedicine");
const inputPrice = document.querySelector("#inPrice");
const outMedicine = document.querySelector("#outMedicine");
const outPrice = document.querySelector("#outPrice");
function calculateMedicinePrice(price) {
    return {
        pay: (price * 2) * 0.80,
    };
}
function isValidInput(price) {
    return !isNaN(price) && price > 0;
}
frm.addEventListener("submit", (event) => {
    event.preventDefault();
    const medicine = inputFarm.value;
    const price = Number(inputPrice.value);
    if (!isValidInput(price)) {
        alert("Please, enter a valid price above zero.");
        inputPrice.focus();
        return;
    }
    const { pay } = calculateMedicinePrice(price);
    outMedicine.textContent = `Promotion of ${medicine}`;
    outPrice.textContent = `Two for R$ ${pay.toFixed(2)}`;
});
