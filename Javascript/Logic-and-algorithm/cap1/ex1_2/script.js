const inValue = document.getElementById("inValue");
const inPeople = document.getElementById("inPeople");
const btCheck = document.getElementById("btCheck");
const outValue = document.getElementById("outValue");

function calcBill() {
  const valueAccount = Number(inValue.value);
  const peopleQuantity = Number(inPeople.value);

  const calculate = valueAccount / peopleQuantity;

  outValue.textContent = `The value for pay with ${peopleQuantity} is ${calculate.toFixed(2)} for each`;
}

btCheck.addEventListener("click", calcBill);
