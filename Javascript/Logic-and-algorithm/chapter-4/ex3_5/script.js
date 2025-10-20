function calcMoney() {
  //Pegar os elementos do HTML
  const inSaque = document.getElementById("inSaque");
  const outNotasCem = document.getElementById("outNotasCem");
  const outNotasCinquenta = document.getElementById("outNotasCinquenta");
  const outNotasDez = document.getElementById("outNotasDez");

  // Limpa mensagens anteriores
  outNotasCem.textContent = "";
  outNotasCinquenta.textContent = "";
  outNotasDez.textContent = "";

  //Pegando o valor digitado e convertendo para numero
  const saque = Number(inSaque.value);

  //Verificar se o valor do saque e maior que zero.
  if (isNaN(saque) || saque <= 0) {
    alert("Informe um valor de saque valido");
    inSaque.focus();
    return;
  }

  //Verificar se o valor pode ser sacado (Multiplo de 10)
  if (saque % 10 !== 0) {
    alert("Valor invalido! O saque deve ser um multiplo de 10.");
    return;
  }
  //Calculo de quantas notas de 100 cabem
  let notasCem = Math.floor(saque / 100);
  let resto = saque % 100; // o que sobra depois das notas de 100

  //Calculo de quantas notas 50 cabem
  let notasCinquenta = Math.floor(saque / 50);
  resto = resto % 50; // o que sobra depois da notas de 50

  //Calculando quantas notas de 10 cabem (O resto final tem que ser 0)
  let notasDez = Math.floor(resto / 10);

  //Exibindo os resultados.
  if (notasCem > 0) {
    outNotasCem.textContent = "Notas de R$ 100: " + notasCem;
  }
  if (notasCinquenta > 0) {
    outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta;
  }
  if (notasDez > 0) {
    outNotasDez.textContent = "Notas de R$ 10: " + notasDez;
  }
}
const btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", calcMoney);
