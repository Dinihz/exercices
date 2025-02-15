function buffetQuilo() {
  const inQuilo = document.getElementById('inQuilo');
  const inConsumo = document.getElementById('inConsumo');
  const outValor = document.getElementById('outValor');

  const quilo = Number(inQuilo.value);
  const consumo = Number(inConsumo.value);

  const valor = (quilo / 1000) * consumo;
  outValor.textContent = 'valor a pagar R$: ' + valor.toFixed(2);
}

const btCalcular = document.getElementById('btCalcular');

btCalcular.addEventListener('click', buffetQuilo);
