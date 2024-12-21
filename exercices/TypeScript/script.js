"use strict";
// Com o Typscript, podemos indicar queal será o tipo de um valor
const price = 100;
const game = {
    name: "Elden Ring",
    price: 250,
};
// O TS consegue inferir o tipo de um valor(inference). Entao sempre que ele conseguir, ele usa o tipo inferido nao precisamos escrever o tipo.
// Quando for funcoes vai ser necessario especificar o tipo de retorno
function add(a, b) {
    return a + b;
}
const ps5 = {
    name: "PlayStation 5",
    price: "3500",
};
function priceTransformer(product) {
    product.price = "R$" + product.price;
    return product;
}
const newProduct = priceTransformer(ps5);
console.log(newProduct);
//exercico 1:
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
