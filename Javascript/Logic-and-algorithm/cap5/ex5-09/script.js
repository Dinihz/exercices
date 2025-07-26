const inNumber = document.querySelector("#inNumber");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("#btList");

const preNumbers = document.querySelector("#preNumbers");
const preResult = document.querySelector("preResult");

const nums = [];

btAdd.addEventListener("click", () => {
  const number = inNumber.value.trim();
  if (number.length === 0) return;
  nums.push(number);
  inNumber.value = "";
  inNumber.focus();
});
