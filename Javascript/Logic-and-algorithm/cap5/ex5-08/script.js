const inTeam = document.querySelector("#inTeam");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("#btList");
const btSchedule = document.querySelector("#btSchedule");
const result = document.querySelector("pre");

const teams = [];

btAdd.addEventListener("click", () => {
  const team = inTeam.value.trim();
  if (team === "") return;

  teams.push(team);
  result.textContent += `\nTeam "${team}" added!`;
  inTeam.value = "";
  inTeam.focus();
});
