const anuncio = prompt("Anuncio: ");

let numPalavras = 0;

const tam = anuncio.length;

for (let i = 0; i < tam; i++) {
  if (anuncio.charAt(i) == " ") {
    numPalavras++;
  }
}

alert(`Anuncio: ${anuncio}\nNumero de Palavras: ${numPalavras + 1}}`);
