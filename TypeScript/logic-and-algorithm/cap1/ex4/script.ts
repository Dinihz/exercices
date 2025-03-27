const frm = document.querySelector("form") as HTMLFormElement;
const inputFarm = document.querySelector("#inMedicine") as HTMLInputElement;
const inputPrice = document.querySelector("#inPrice") as HTMLInputElement;
const outMedicine = document.querySelector("#outMedicine") as HTMLHeadingElement;
const outPrice = document.querySelector("#outPrice") as HTMLHeadingElement;

function calculateMedicinePrice(price: number): { pay: number } {
  return {
    pay: (price * 2) * 0.80,
  }
}

function isValidInput(price: number,): boolean {
  return !isNaN(price) && price > 0
}

frm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const medicine = inputFarm.value
  const price = Number(inputPrice.value)

  if (!isValidInput(price)) {
    alert("Please, enter a valid price above zero.")
    inputPrice.focus();
    return
  }

  const { pay } = calculateMedicinePrice(price)

  outMedicine.textContent = `Promotion of ${medicine}`
  outPrice.textContent = `Two for R$ ${pay.toFixed(2)}`
})


