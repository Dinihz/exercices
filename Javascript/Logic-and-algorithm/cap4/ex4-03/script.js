//Select elements DOM
const inDescription = document.getElementById("inDescription");
const inValue = document.getElementById("inValue");
const btRegistration = document.getElementById("btRegistration");
const outList = document.getElementById("outList");
const outTotal = document.getElementById("outTotal");
const btAllClear = document.getElementById("btAllClear");
const btClear = document.getElementById("btClear");

//Global variable
let numContas = 0;
let listAccont = "";
let totalValue = 0;

function calcAccont() {
  const description = inDescription.value.trim();
  const value = Number(inValue.value);

  //Data validation
  if (description === "" || isNaN(value) || value <= 0) {
    alert("Please, put a valid number");
    inDescription.focus();
    return;
  }

  //increments the values
  numContas++;
  totalValue += value;
  listAccont += `${description}: R$ ${value.toFixed(2)}<br>`;

  //update and show in html
  outList.innerHTML = listAccont + "<hr>";
  outTotal.innerHTML = `${numContas} account(s) - Total: R$ ${totalValue.toFixed(2)}`;

  //clean
  inDescription.value = "";
  inValue.value = "";
  inDescription.focus();
}

//clean inputs
function clearButton() {
  inDescription.value = "";
  inValue.value = "";
}

//clean all
function clearAllButton() {
  numContas = 0;
  listAccont = "";
  totalValue = 0;

  outList.innerHTML = "";
  outTotal.innerHTML = "No registered account";

  inDescription.value = "";
  inValue.value = "";
  inDescription.focus();
}

btRegistration.addEventListener("click", calcAccont);
btAllClear.addEventListener("click", clearAllButton);
btClear.addEventListener("click", clearButton);
