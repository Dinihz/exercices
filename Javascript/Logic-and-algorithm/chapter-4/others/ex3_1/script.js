function calcMedia() {
  const inName = document.getElementById('inName');
  const inScore1 = document.getElementById('inScore1');
  const inScore2 = document.getElementById('inScore2');
  const outMedia = document.getElementById('outMedia');
  const outSituation = document.getElementById('outSituation');

  const nome = inName.value;
  const score1 = parseFloat(inScore1.value);
  const score2 = parseFloat(inScore2.value);

  const media = (score1 + score2) / 2;

  outMedia.textContent = 'Media das Notas: ' + media.toFixed(1);

  if (media >= 7) {
    return (outSituation.textContent =
      'Parabens ' + nome + ' voce foi aprovado');
  }
  if (media < 7);
  {
    return (outSituation.textContent = nome + ' voce foi reprovado.');
  }
}

const btResult = document.getElementById('btResult');

btResult.addEventListener('click', calcMedia);
