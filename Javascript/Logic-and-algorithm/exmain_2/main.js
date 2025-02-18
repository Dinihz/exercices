//Elaborar um programa para uma lan house de um aeroporto – O programa deve
//ler o valor de cada 15 minutos de uso de um computador e o tempo de
//uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
//sabendo que as frações extras de 15 minutos devem ser cobradas de
//forma integral. A Figura 2.12 exibe um exemplo com dados do
//programa.

function calcTempo() {
  const inValor = document.getElementById('inValor');
  const inTempo = document.getElementById('inTempo');
  const outValor = document.getElementById('outValor');

  const valor = Number(inValor.value);
  const tempo = Number(inTempo.value);

  const valorTotal = Math.ceil(tempo / 15) * valor;

  outValor.textContent = 'Valor a pagar R$: ' + valorTotal.toFixed(2);
}

const btCalcular = document.getElementById('btCalcular');

btCalcular.addEventListener('click', calcTempo);
