const prompt = require("prompt-sync")();
console.log("Inform students, Then type 'And' to finish");

const students = [];

do {
  const name = prompt("Name: ");
  if (name === "And") {
    break;
  }
  const test = Number(prompt("Test Value: "));
  students.push({ name, test });
  console.log("Ok! Students registered");
} while (true);
console.log("-".repeat(40));
const larger = students.reduce((max, student) => {
  return student.test > max ? student.test : max;
}, 0);
console.log(`Highest test score: ${larger}`);

if (larger >= 7) {
  const highlights = students.filter((student) => student.test === larger);
  for (const highlight of highlights) {
    console.log(`- ${highlight.name}`);
  }
} else {
  console.log("There are no highlight students in the class");
}
