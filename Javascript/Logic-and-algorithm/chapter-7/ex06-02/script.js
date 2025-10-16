const inName = document.querySelector("#inName");
const btGenerate = document.querySelector("#btGenerate");
const result = document.querySelector("#result");

btGenerate.addEventListener("click", () => {
  const name = inName.value.trim();

  const parts = name.split(" ");

  let initials = "";
  for (let i = 0; i < parts.length - 1; i++) {
    initials += parts[i][0];
  }

  const lasName = parts[parts.length - 1];

  result.textContent = `email: ${initials.toLowerCase()}${lasName.toLowerCase()}@empresa.com.br`;
});
