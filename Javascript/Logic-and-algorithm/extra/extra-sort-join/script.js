const names = ["Pedro", "Ana", "Lucas"];

names.sort();

console.log(names.join(", "));

names.reverse();

console.log(names.join(", "));

const num = [50, 100, 2];

num.sort();

console.log(num.join(", "));

num.sort((a, b) => a - b);
console.log(num.join(", "));

//ex

const ages = [34, 12, 45, 8, 22];

const growing = [...ages].sort((a, b) => a - b);
console.log("Ordem crescente: ", growing.join(" - "));

const decreasing = [...ages].sort((a, b) => b - a);
console.log("Ordem decrescente: ", decreasing.join(" - "));
