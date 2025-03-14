console.log("Digite 0 para sair");

do {
  let num = Number(prompt("Número: "));

  if (num == 0 || isNaN(num)) {
    let sair = confirm("Confirma saída?"); // Pergunta se quer sair

    if (sair) {
      break; // Sai do loop
    } else {
      continue; // Volta ao início
    }
  }

  if (num % 2 === 0) {
    console.log(`O dobro de ${num} é: ${num * 2}`);
  } else {
    console.log(`O triplo de ${num} é: ${num * 3}`);
  }
} while (true); // Loop infinito, só sai com break

console.log("Bye, bye...");
