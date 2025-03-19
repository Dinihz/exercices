const inDescription = document.getElementById("inDescription");
const inValue = document.getElementById("inValue");
const btRegistration = document.getElementById("btRegistration");
const outList = document.getElementById("outList");
const outTotal = document.getElementById("outTotal");
const btAllClear = document.getElementById("btAllClear");
const btClear = document.getElementById("btClear");

let listAccont = "";
let totalValue = 0;

function calcAccont() {
  const description = inDescription.value;
  const value = Number(inValue.value);

  listAccont += `${description}: R$ ${value.toFixed(2)}<br>`;
  totalValue += value;

  if (description === "" || isNaN(value) || value <= 0) {
    alert("Please, put a valid number");
  }

  outList.innerHTML = listAccont;
  outTotal.innerHTML = `Total: R$ ${totalValue.toFixed(2)}`;

  inDescription.value = "";
  inValue.value = "";
  inDescription.focus();
}

function clearButton() {
  inDescription.value = "";
  inValue.value = "";
}

function clearAllButton() {
  listAccont = "";
  totalValue = 0;
  outList.innerHTML = "";
  outTotal.innerHTML = "";
  inDescription.value = "";
  inValue.value = "";
}

btRegistration.addEventListener("click", calcAccont);
btAllClear.addEventListener("click", clearAllButton);
btClear.addEventListener("click", clearButton);
