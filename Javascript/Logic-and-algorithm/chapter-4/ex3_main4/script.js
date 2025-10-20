const sideA = document.getElementById("sideA");
const sideB = document.getElementById("sideB");
const sideC = document.getElementById("sideC");
const btCheck = document.getElementById("btCheck");
const outSides = document.getElementById("outSides");
const outType = document.getElementById("outType");

function calcTriangle() {
  const a = Number(sideA.value);
  const b = Number(sideB.value);
  const c = Number(sideC.value);

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Por favor, insira valores validos para os lados do triangulo.");
    return;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    outSides.textContent = `Nao pode formar um triangulo`;
    outType.textContent = "";
    return;
  }

  outSides.textContent = "Lados podem formar um triangulo";

  if (a === b && b === c) {
    outType.textContent = `Equilatero`;
  }

  if ((a == b && b !== c) || (a === c && c !== b) || (b === c && c !== a)) {
    outType.textContent = `Isosceles`;
  }

  if (a !== b && a !== c && b !== c) {
    outType.textContent = `Escaleno`;
  }
}

btCheck.addEventListener("click", calcTriangle);
