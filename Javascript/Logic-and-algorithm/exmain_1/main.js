//Uma farmácia está com uma promoção – Na compra de duas unidades de um
//mesmo medicamento, o cliente recebe como desconto os centavos do
//valor total. Elaborar um programa que leia descrição e preço de um
//medicamento. Informe o valor do produto na promoção. A Figura 2.11
//apresenta a tela com um exemplo de dados de entrada e saída do
//programa

function calcCompra() {
  const inMedicamento = document.getElementById('inMedicamento');
  const inPreco = document.getElementById('inPreco');
  const outMedicamento = document.getElementById('outMedicamento');
  const outValor = document.getElementById('outValor');

  const medicament = inMedicamento.value;
  const preco = Number(inPreco.value);
  const calculo = preco * 2 * 0.95; //sempre 5%

  outMedicamento.textContent = 'Medicamento: ' + medicament;
  outValor.textContent = 'Valor a pagar com desconto R$ ' + calculo;
}

const btCalcular = document.getElementById('btCalcular');

btCalcular.addEventListener('click', calcCompra);
