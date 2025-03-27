const form = document.querySelector("form") as HTMLFormElement
const inputBuffet = document.querySelector("#inBuffet") as HTMLInputElement
const inputGram = document.querySelector("#inGram") as HTMLInputElement
const outPay = document.querySelector("#outPay") as HTMLHeadingElement

function calculateConsumption(buffet: number, gram: number): { pay: number } {
  return {
    pay: (buffet / gram) * 1000,
  }
}

function isValidInput(buffet: number, gram: number): boolean {
  return !isNaN(buffet) && !isNaN(gram) && buffet > 0 && gram > 0
}

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const buffet = Number(inputBuffet.value)
  const gram = Number(inputGram.value)

  if (!isValidInput(buffet, gram)) {
    alert("Please enter a valid buffet and consuming value")
    inputBuffet.focus()
    return
  }

  const { pay } = calculateConsumption(buffet, gram)

  outPay.textContent = `Amount to be paid: ${pay}`
})


