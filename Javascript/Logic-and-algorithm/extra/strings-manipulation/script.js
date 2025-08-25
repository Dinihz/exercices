const prompt = require("prompt-sync")();
const formula = prompt("Formula: ");

let abre = 0;
let fecha = 0;
let erro = false;

for (const simbolo of formula) {
  if (simbolo === "(") {
    abre++;
  } else if (simbolo === ")") {
    fecha++;
  }

  if (fecha > abre) {
    erro = true;
    break;
  }
}

if (!erro && abre === fecha) {
  console.log("Fórmula correta (em relação aos parênteses)");
} else {
  console.log("Erro... fórmula incorreta");
}
