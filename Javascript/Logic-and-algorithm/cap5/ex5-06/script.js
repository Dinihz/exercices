const prompt = require("prompt-sync")();

console.log("Inform customers as they arrive. Type 'and' to finsh.");
const clients = [];

do {
  const name = prompt("Name: ");
  if (name === "and") {
    break;
  }

  const age = Number(prompt("Age: "));
  clients.push({ name, age });
  console.log("Ok, clients added in queue");
} while (true);
console.log("\nPreferencial Queue");

console.log("-".repeat(40));
const prefQueue = clients.filter((client) => client.age >= 60);
prefQueue.forEach((queue, i) => {
  console.log(`${i + 1}. ${queue.name}`);
});

console.log("\nNormal Queue");
console.log("-".repeat(40));

const normalQueue = clients.filter((client) => client.age < 60);
normalQueue.forEach((queue, i) => {
  console.log(`${i + 1}. ${queue.name}`);
});
