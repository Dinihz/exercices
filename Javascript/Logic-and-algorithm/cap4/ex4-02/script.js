const inTable = document.getElementById("inTable");
const btShow = document.getElementById("btShow");
const outTable = document.getElementById("outTable");

function calcDecreasing() {
  const table = Number(inTable.value);

  let number = "";
  for (let i = table; i >= 1; i--) {
    number += `${i}, `;
  }
  outTable.textContent = `Entre ${table} e 1: ${number.slice(0, -1)}`;
}

btShow.addEventListener("click", calcDecreasing);
