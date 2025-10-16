const inTable = document.getElementById("inTable");
const btShow = document.getElementById("btShow");
const outTable = document.getElementById("outTable");

function calcMultiplication() {
  const table = Number(inTable.value);

  let numbers = "";
  for (let i = 1; i <= 10; i++) {
    let total = table * i;
    numbers += `${table} x ${i} = ${total}<br>`;
    outTable.innerHTML = numbers;
  }
}
btShow.addEventListener("click", calcMultiplication);
