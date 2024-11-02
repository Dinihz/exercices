const {NOMEM} = require('dns');

const readline = require('readline').createInterface({

  input: process.stdin,

  output: process.stdout

});

readline.question('Por favor, insira seu nome: ', (nome) =>{

  readline.question('Por Favor, insira a sua idade: ', (idade) => {

    readline.question('Por favor, insira a cidade onde voce mora', (cidade) => {
      

      console.log(`Ola, ${nome}! Voce tem ${idade} e mora em ${cidade}.`);

      readline.close();
    });
  });
});
