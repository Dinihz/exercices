"use strict";
const frm = document.querySelector("form");
const inputVehicle = document.querySelector("#inVehicle");
const inputPrice = document.querySelector("#inPrice");
const outVehicle = document.querySelector("#outVehicle");
const outEntry = document.querySelector("#outEntry");
const outCard = document.querySelector("#outCard");
function calculateFinancing(price) {
    return {
        entry: Math.floor(price / 2),
        card: Math.floor(price / 12),
    };
}
function isValidInput(vehicle, price) {
    return vehicle.trim() !== "" && !isNaN(price) && price > 0;
}
frm.addEventListener("submit", (event) => {
    event.preventDefault();
    const vehicle = inputVehicle.value;
    const price = Number(inputPrice.value);
    if (!isValidInput(vehicle, price)) {
        alert("Please enter a valid vehicle name and price.");
        inputVehicle.focus();
        return;
    }
    const { entry, card } = calculateFinancing(price);
    outVehicle.textContent = `Vehicle: ${vehicle}`;
    outEntry.textContent = `Entry: R$ ${entry.toFixed(2)}`;
    outCard.textContent = `12x of R$ ${card.toFixed(2)}`;
});
