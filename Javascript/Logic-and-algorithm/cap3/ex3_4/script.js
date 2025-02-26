function calcRaiz() {
  const inNumero = document.getElementById("inNumero");
  const outResposta = document.getElementById("outResposta");

  const outNumero = parseInt(inNumero.value);

  if (outNumero === 0 || isNaN(outNumero)) {
    alert("Informe um numero valido...");
    inNumero.focus();
    return;
  }

  const calculate = Math.sqrt(outNumero);

  if (calculate == Math.floor(calculate)) {
    return (outResposta.textContent =
      "A raiz de " + outNumero + " e igual a " + calculate);
  } else return (outResposta.textContent = "Nao tem raiz...");
}

const btExibir = document.getElementById("btExibir");

btExibir.addEventListener("click", calcRaiz);
