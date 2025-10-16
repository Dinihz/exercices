const frm = document.querySelector("form");
const answer = document.querySelector("pre");
const inputName = document.querySelector("#inName");
const inputAge = document.querySelector("#inAge");
const btList = document.querySelector("#btList");
const btFilter = document.querySelector("#btFilter");

const children = [];

// add child
frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = inputName.value.trim();
  const age = Number(inputAge.value);

  if (!name || isNaN(age)) return;

  children.push({ name, age });

  inputName.value = "";
  inputAge.value = "";
  inputName.focus();

  btList.dispatchEvent(new Event("click"));
});

// list all childs
btList.addEventListener("click", () => {
  if (children.length === 0) {
    alert("There are no children listed");
    return;
  }
  const list = children
    .map((child) => `${child.name} - ${child.age} years`)
    .join("\n");

  answer.innerText = list;
});

// Groups by age with percentage
btFilter.addEventListener("click", () => {
  if (children.length === 0) {
    alert("There are no children listed");
    return;
  }

  const sorted = [...children].sort((a, b) => a.age - b.age);
  let currentAge = sorted[0].age;
  let names = [];
  let result = "";

  for (const child of sorted) {
    if (child.age === currentAge) {
      names.push(child.name);
    } else {
      result += formatGroup(currentAge, names, sorted.length);
      currentAge = child.age;
      names = [child.name];
    }
  }

  result += formatGroup(currentAge, names, sorted.length);
  answer.innerText = result;

  function formatGroup(age, names, total) {
    const count = names.length;
    const percent = ((count / total) * 100).toFixed(2);

    return `${age} years: ${count} children - ${percent}%\n(${names.join(", ")})\n\n`;
  }
});
