const inNumber = document.querySelector("#inNumber");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("#btList");

const preNumbers = document.querySelector("#preNumbers");
const preResult = document.querySelector("#preResult");

const nums = [];

btAdd.addEventListener("click", () => {
  const number = Number(inNumber.value.trim());
  if (isNaN(number)) {
    alert(`Please enter a valid number.`);
  }

  if (nums.includes(number)) {
    alert(`This number has alredy been added.`);
    inNumber.value = "";
    return;
  }

  nums.push(number);
  inNumber.value = "";
  inNumber.focus();

  preNumbers.textContent = `Numbers: ${nums.join(", ")}`;
});

btList.addEventListener("click", () => {
  const test = nums.every((num, i) => {
    if (i === nums.length - 1) return true;
    return num <= nums[i + 1];
  });

  preResult.textContent = test
    ? "The numbers are in ascending order."
    : "The numbers are not in ascending order.";
});
