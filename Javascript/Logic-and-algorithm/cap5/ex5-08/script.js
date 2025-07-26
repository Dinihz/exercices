const inTeam = document.querySelector("#inTeam");
const btAdd = document.querySelector("#btAdd");
const btList = document.querySelector("#btList");
const btSchedule = document.querySelector("#btSchedule");
const result = document.querySelector("pre");

const teams = [];

btAdd.addEventListener("click", () => {
  const team = inTeam.value.trim();
  if (team.length === "") return;
  teams.push(team);
  result.textContent += `\nTeam "${team}" added!`;
  inTeam.value = "";
  inTeam.focus();
});

btList.addEventListener("click", () => {
  if (teams === "") {
    result.textContent = "Please add teams";
    inTeam.focus();
    return;
  }

  result.textContent = "";
  teams.forEach((team, i) => {
    result.textContent += `\nRegistered Teams: ${i + 1} - ${team}`;
  });
});

btSchedule.addEventListener("click", () => {
  if (teams.length % 2 !== 0) {
    result.textContent = `\nNumber of teams: ${teams.length}, invalid number. Must be even`;
    return;
  }

  for (let team in teams) {
  }
});
