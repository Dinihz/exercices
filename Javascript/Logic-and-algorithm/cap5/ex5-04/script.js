const frm = document.querySelector("form");
const answer = document.querySelector("pre");
const inputName = document.querySelector("#inName");
const inputAge = document.querySelector("#inAge");
const btList = document.querySelector("#btList");
const btFilter = document.querySelector("#btFilter");

const child = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = inputName.value;
  const age = Number(inputAge.value);

  child.push({ name, age });
  inputName.value = "";
  inputAge.value = "";
  inputName.focus();

  btList.dispatchEvent(new Event("click"));
});
