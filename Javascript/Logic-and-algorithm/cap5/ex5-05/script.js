const prompt = require("prompt-sync")();
console.log("Inform students, Then type 'And' to finish");

const students = [];

do {
  const name = prompt("Name: ");
  if ((name = "And")) {
    break;
  }
  const test = Number(prompt("Test Value: "));
  students.push({ name, test });
  console.log("Ok! Students registered");
} while (true);
console.log("-".repeat(40));
const larger = students.reduce((a, b), Math.max(a, b.test), 0);
console.log(`Larget test: ${larger}`);

if (maior >= 7) {
  const highlights = students.filter((students) => students.test == larger);
  for (const highlight of highlights) {
    console.log(`- ${highlight.name}`);
  }
} else {
  console.log("Dont have highlist students in the class");
}
