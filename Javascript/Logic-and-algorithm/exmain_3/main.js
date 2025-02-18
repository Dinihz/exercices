// c) Um supermercado está com uma promoção – Para aumentar suas vendas no
//setor de higiene, cada etiqueta de produto deve exibir uma mensagem
//anunciando 50% de desconto (para um item) na compra de três
//unidades do produto. Elaborar um programa que leia descrição e preço
//de um produto. Após, apresente as mensagens indicando a promoção –
//conforme o exemplo ilustrado na Figura 2.13

function calcPromo() {
  const inPreco = document.getElementById('inPreco');
  const inProduto = document.getElementById('inProduto');
  const outProduto = document.getElementById('outProduto');
  const outValor = document.getElementById('outValor');

  const preco = parseFloat(inPreco.value);
  const produto = inProduto.value.trim();

  const terceiroProduto = preco / 2;
  const promo = preco * 3 - terceiroProduto;

  outValor.textContent = produto + ' - Promocao: Leve 3 por R$: ' + promo;
  outProduto.textContent =
    'O terceiro produto sai por R$: ' + terceiroProduto.toFixed(2);
}

const btCalcular = document.getElementById('btCalcular');

btCalcular.addEventListener('click', calcPromo);
