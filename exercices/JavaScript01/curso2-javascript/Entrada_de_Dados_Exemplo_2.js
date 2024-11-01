const readline = require('readline');

// Para isso, precisamos configurar duas coisas principais:
// 1. 'input': Onde a interface vai receber os dados. Neste caso, usamos 'process.stdin', que representa a entrada padrão do sistema, normalmente o teclado.
// 2. 'output': Para onde a interface vai enviar os dados. Usamos 'process.stdout', que representa a saída padrão do sistema, normalmente o terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Para lidar com a natureza assíncrona dessa operação (não sabemos quando o usuário vai responder), usamos Promises.
  // Uma Promise é um objeto usado para operações assíncronas. Ele representa um valor que pode estar disponível agora, no futuro, ou nunca.
  function fazerPergunta(pergunta) {

    // A função retorna uma nova Promise. A Promise recebe uma função como argumento, essa função é chamada de executor.
    // O executor é chamado imediatamente pela implementação da Promise, passando duas funções: 'resolve' e 'reject'.
    // 'resolve' é uma função que, quando chamada, resolve a Promise com um valor dado. 'reject' é usada para rejeitar a Promise com um motivo de erro.
    return new Promise((resolve) => {

      // Dentro do executor, chamamos 'rl.question' para fazer a pergunta ao usuário. 'rl.question' também é assíncrono e aceita um callback.
      // O primeiro argumento de 'rl.question' é a pergunta a ser feita. O segundo argumento é uma função callback que é chamada quando o usuário responde.
      rl.question(pergunta, (resposta) => {

        // Dentro do callback, chamamos 'resolve' com a resposta do usuário. Isso "resolve" a Promise, significando que ela foi cumprida com sucesso.
        resolve(resposta);

      });
    });
  }
  

// 'await' para esperar por Promises de forma síncrona.
async function coletarRespostas() {

  // código esperar aqui até que o usuário responda.
  const nome = await fazerPergunta('Qual é o seu nome? ');
  const corFavorita = await fazerPergunta('Qual é a sua cor favorita? ');
  const animalFavorito = await fazerPergunta('Qual é o seu animal favorito? ');
  const hobby = await fazerPergunta('Qual é o seu hobby? ');
  const pratoFavorito = await fazerPergunta('Qual é o seu prato favorito? ');

  console.log(`\nAqui estão as suas respostas:
  Nome: ${nome}
  Cor favorita: ${corFavorita}
  Animal favorito: ${animalFavorito}
  Hobby: ${hobby}
  Prato favorito: ${pratoFavorito}`);

  // Finalmente, fechamos a interface de 'readline'. Isso é necessário para terminar o programa, pois a interface mantém o programa aberto enquanto espera por entrada.
  rl.close();
}

// Chamamos a função 'coletarRespostas' para iniciar todo o processo de fazer perguntas e coletar respostas.
coletarRespostas();
