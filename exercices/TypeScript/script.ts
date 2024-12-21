// Com o Typscript, podemos indicar queal será o tipo de um valor

const price: number = 100;

const game: {
  name: string;
  price: number;
} = {
  name: "Elden Ring",
  price: 250,
};

// O TS consegue inferir o tipo de um valor(inference). Entao sempre que ele conseguir, ele usa o tipo inferido nao precisamos escrever o tipo.

// Quando for funcoes vai ser necessario especificar o tipo de retorno

function add(a: number, b: number): number {
  return a + b;
}

const ps5 = {
  name: "PlayStation 5",
  price: "3500",
};

function priceTransformer(product: { name: string; price: string }) {
  product.price = "R$" + product.price;
  return product;
}

const newProduct = priceTransformer(ps5);

console.log(newProduct);


//exercico 1:

function normalizarTexto(texto: string): string {
  return texto.trim().toLowerCase();
}


