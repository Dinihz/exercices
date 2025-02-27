function calcMoney() {
  //Chamei tudo do html
  const inSaque = document.getElementById("inSaque");
  const outNotasCem = document.getElementById("outNotasCem");
  const outNotasCinquenta = document.getElementById("outNotasCinquenta");
  const outNotasDez = document.getElementById("outNotasDez");

  //veficar se e numero
  const saque = Number(inSaque.value);

  //calcular com as notas de 100, 50 e 10
  if (saque / 10) {
    return Math.floor(saque);
    console.log(saque);
  }
}

const btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", calcMoney);
