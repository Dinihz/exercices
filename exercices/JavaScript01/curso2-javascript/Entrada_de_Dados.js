// A função 'require' é usada para incluir módulos que vêm com o Node.js ou são instalados via npm.

const readline = require('readline');

// Essa interface será usada para interagir com o terminal, permitindo fazer perguntas ao usuário e receber as respostas.
const rl = readline.createInterface({
  
    // 'process.stdin' representa o stream de entrada padrão, ou seja, onde vamos receber os dados (neste caso, do teclado do usuário).
  input: process.stdin,

  // 'process.stdout' representa o stream de saída padrão, ou seja, onde vamos exibir os dados (neste caso, no terminal).
  output: process.stdout
  
});

// Usamos o método 'question' da nossa interface 'rl' para fazer uma pergunta ao usuário.
// O primeiro parâmetro é a pergunta em si, e o segundo é uma função callback que será chamada com a resposta do usuário.
rl.question('Qual é o seu nome? ', (resposta) => {

  // Dentro desta função callback, 'resposta' contém o texto que o usuário digitou no terminal.
  
  // Aqui, exibimos uma mensagem de saudação que inclui a resposta do usuário.
  console.log(`Olá, ${resposta}!`);

  // Fechar a interface sinaliza que concluímos a interação com o usuário, permitindo que o programa termine naturalmente.
  rl.close();
});
