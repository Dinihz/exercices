const idades = [12, 16, 15, 17, 14, 19];

let maiores = false;

for (const idade of idades) {
  if (idade >= 18) {
    console.log(idade);
    maiores = true;
  }
}

if (!maiores) {
  console.log("nao ha idades maiores que 18 na lista");
}

const palavras = ["casa", "arroz", "home"];

const comC = palavras.filter((palavra) =>
  palavra.toLowerCase().startsWith("c"),
);

console.log(comC);
