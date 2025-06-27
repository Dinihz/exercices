const frm = document.querySelector("form");
const answer = document.querySelector("pre");
const inputName = document.querySelector("#inName");
const inputAge = document.querySelector("#inAge");
const btList = document.querySelector("#btList");
const btFilter = document.querySelector("#btFilter");

const children = [];

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = inputName.value;
  const age = Number(inputAge.value);

  children.push({ name, age });
  inputName.value = "";
  inputAge.value = "";
  inputName.focus();

  btList.dispatchEvent(new Event("click"));
});

btList.addEventListener("click", () => {
  if (children.length === 0) {
    alert("Dont have children listed");
    return;
  }

  let list = "";
  for (const child of children) {
    const { name, age } = child;
    list += name + " - " + age + " old\n";
  }
  answer.innerText = list;
});

btFilter.addEventListener("click", () => {
  if (children.length === 0) {
    alert("Dont have children listed");
    return;
  }

  const copy = [...children];
  copy.sort((a, b) => a.age - b.age);
  let resum = 0;
  let aux = copy[0].age;

  let names = [];
  for (const child of copy) {
    const { name, age } = child;
    if (age === aux) {
      names.push(name);
    }
  }
});
