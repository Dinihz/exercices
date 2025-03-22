const frm = document.querySelector("form") as HTMLFormElement
const inputVehicle = document.querySelector("#inVehicle") as HTMLInputElement
const inputPrice = document.querySelector("#inPrice") as HTMLInputElement
const outVehicle = document.querySelector("#outVehicle") as HTMLHeadingElement
const outEntry = document.querySelector("#outEntry") as HTMLHeadingElement
const outCard = document.querySelector("#outCard") as HTMLHeadingElement

function calculateFinancing(price: number): { entry: number; card: number } {
	return {
		entry: Math.floor(price / 2),
		card: Math.floor(price / 12),
	};
}

function isValidInput(vehicle: string, price: number): boolean {
	return vehicle.trim() !== "" && !isNaN(price) && price > 0;
}

frm.addEventListener("submit", (event: Event) => {
	event.preventDefault();

	const vehicle = inputVehicle.value;
	const price = Number(inputPrice.value);

	if (!isValidInput(vehicle, price)) {
		alert("Please enter a valid vehicle name and price.");
		inputVehicle.focus();
		return
	}

	const { entry, card } = calculateFinancing(price);

	outVehicle.textContent = `Vehicle: ${vehicle}`;
	outEntry.textContent = `Entry: R$ ${entry.toFixed(2)}`;
	outCard.textContent = `12x of R$ ${card.toFixed(2)}`;
});
