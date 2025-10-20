const inName = document.querySelector("#inName");
const btAdd = document.querySelector("#btAdd");
const result = document.querySelector("#result");

btAdd.addEventListener("click", () => {
  const name = inName.value.trim();

  const part = name.split(" ");

  let firstName = part[0];
  let lastName = part[part.length - 1];

  result.textContent = `Badge: ${firstName} ${lastName}`;
});
