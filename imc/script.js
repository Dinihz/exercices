function calculateIMC() {
  const altura = parseFloat(document.getElementById('altura').value);
  const peso = parseFloat(document.getElementById('peso').value);
}

if (altura && peso) {
  const imc = peso / (altura * altura);
  document.getElementById('resultado').textContent = 'Seu IMC é ${imc.toFixed(2)}'

}else {
    document.getElementById('resultado').textContent = "Por favor, insira valores válidos."
  }

