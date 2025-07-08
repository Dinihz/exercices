const prompt = require("prompt-sync")();

function collectClients() {
  const clients = [];
  console.log("Inform costumers as they arrive. Type 'and' to finish.");

  while (true) {
    const name = prompt("Name: ");
    if (name === "and") break;

    const age = Number(prompt("Age: "));
    clients.push({ name, age });

    console.log("Ok, clients added to the queue.");
  }

  return clients;
}

function printQueue(title, clients) {
  console.log(`\n${title}`);
  console.log("-".repeat(40));
  clients.forEach((client, index) => {
    console.log(`${index + 1}. ${client.name}`);
  });
}

const clients = collectClients();

const preferencial = clients.filter((client) => client.age >= 60);
const normal = clients.filter((client) => client.age < 60);

printQueue("Preferential Queue", preferencial);
printQueue("Normal Queue", normal);
