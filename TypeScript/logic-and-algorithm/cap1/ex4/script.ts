const form = document.querySelector("form") as HTMLFormElement
const inMedicine = document.querySelector("#inMedicine") as HTMLInputElement
const inPrice = document.querySelector("#inPrice") as HTMLInputElement
const outMedicine = document.querySelector("#outMedicine") as HTMLHeadingElement
const outPrice = document.querySelector("#outPrice") as HTMLHeadingElement

function calculateDiscount(price: number): { pay: number } {
  return {
    pay: (price * 2) * 0.90
  }
}

function isValidInput(price: number): boolean {
  return !isNaN(price) && price > 0
}

form.addEventListener("submit", (event: Event) => {
  event.preventDefault()

  const medicine = inMedicine.value
  const price = Number(inPrice.value)

  if (!isValidInput(price)) {
    alert("Please enter a valid number")
    inPrice.focus()
    return
  }

  const { pay } = calculateDiscount(price)

  outMedicine.textContent = `Medicine: ${medicine}`
  outPrice.textContent = `2 of ${medicine} is ${pay}`
})
