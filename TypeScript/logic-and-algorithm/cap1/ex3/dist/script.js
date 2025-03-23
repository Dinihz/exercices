"use strict";
const form = document.querySelector("form");
const inputBuffet = document.querySelector("#inBuffet");
const inputGram = document.querySelector("#inGram");
const outPay = document.querySelector("#outPay");
function calculateConsumption(buffet, gram) {
    return {
        pay: (buffet / 1000) * gram,
    };
}
function isValidInput(buffet, gram) {
    return !isNaN(buffet) && !isNaN(gram) && buffet > 0 && gram > 0;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const buffet = Number(inputBuffet.value);
    const gram = Number(inputGram.value);
    if (!isValidInput(buffet, gram)) {
        alert("Please enter a valid buffet and consuming value");
        inputBuffet.focus();
        return;
    }
    const { pay } = calculateConsumption(buffet, gram);
    outPay.textContent = `Amount to be paid: ${pay.toFixed(2)}`;
});
