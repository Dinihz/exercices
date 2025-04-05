const family = ["Lucas Diniz", "Vander Diniz"];

family.push("Patricia Diniz"); // Push adiciona

family.unshift("Nathan Diniz"); // Unshift adiciona na frente dos outros

// family.shift(); // ele apaga o primeiro (nathan)

// family.pop(); // ele apaga o ultimo (patricia)

console.log(family);

//// Slice e Splice

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

const numberSliceTest = numbers.slice(2, 4); // quero entre o 2(3) e o 4(5)

const numbersRemove = numbers.slice(-2); // quero os dois ultimos

const numbersSplice = numbers.splice(2, 1);

console.log(numbers);

console.log(numberSliceTest);

console.log(numbersRemove);

console.log(numbersSplice); // remover apartir do 2 e 1.

// forEach

family.forEach(function (nome, i) {
  console.log(`${i + 1}: ${nome}`);
});
