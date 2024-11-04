/*
O if em JavaScript permite que você faça várias
 comparações usando operadores relacionais, como:
 
 maior que (>), 
 menor que (<), 
 maior ou igual a (>=), 
 menor ou igual a (<=), 
 igual a (===) 
 diferente de (!==)
 Operador lógico E (&&):
 Operador lógico OU (||):
 
 Vamos ver um exemplo prático de cada uma dessas comparações:

    Maior que (>)

*/

let numero = 10;

if (numero > 5) {

    console.log("O número é maior que 5.");

} else {

    console.log("O número não é maior que 5.");

}


// Menor que (<)

let idade = 16;

if (idade < 18) {

    console.log("Você é menor de idade.");

} else {

    console.log("Você é maior de idade.");

}


// Maior ou igual a (>=)

let saldo = 100;

if (saldo >= 0) {

    console.log("Seu saldo é positivo ou zero.");

} else {

    console.log("Seu saldo é negativo.");

}


// Menor ou igual a (<=)

let temperatura = 25;

if (temperatura <= 0) {

    console.log("Está muito frio.");

} else {

    console.log("A temperatura está acima de zero.");

}


// Igual a (===)

let cor = "vermelho";

// O operador '===' é usado para comparação estrita, o que significa que ele verifica tanto o valor quanto o tipo de dado.
// Isso quer dizer que a condição só será verdadeira se 'cor' for exatamente igual a "vermelho", tanto em valor quanto

if (cor === "vermelho") {

    console.log("A cor é vermelho.");

} else {

    console.log("A cor não é vermelho.");

}


// Diferente de (!==)

let diaSemana = "sábado";

// O operador '!==' é usado para uma comparação estrita de desigualdade, verificando tanto o valor quanto o tipo.
// Isso significa que a condição será verdadeira se 'diaSemana' for qualquer coisa diferente de "domingo".
if (diaSemana !== "domingo") {

    /* Se a condição é verdadeira (ou seja, se 'diaSemana' não é "domingo"),
       executa o bloco de código dentro das chaves a seguir.
       indicando que o dia da semana atual não é domingo. */
    console.log("Hoje não é domingo.");

} else {

    /* Se a condição '(diaSemana !== "domingo")' for falsa (ou seja, se 'diaSemana' é exatamente "domingo"),
       executa o bloco de código dentro do 'else'.
       Neste caso, imprime "Hoje é domingo." no console,
       informando que o dia da semana atual é domingo. */
    console.log("Hoje é domingo.");

}


/* 
Operador lógico E (&&):

O operador && é verdadeiro se ambas as condições forem verdadeiras.
*/


/* Declara uma variável chamada 'idadeE' e atribui a ela o valor 25.
   'let' é utilizado para declarar variáveis cujos valores podem ser alterados posteriormente.
   Neste caso, a variável 'idadeE' armazena a idade de uma pessoa. */
   let idadeE = 25;

   /* Declara uma variável chamada 'possuiCarteiraDeMotorista' e atribui a ela o valor true.
      Essa variável é um booleano, o que significa que pode ter apenas dois valores: true (verdadeiro) ou false (falso).
      Aqui, 'true' indica que a pessoa possui uma carteira de motorista. */
   let possuiCarteiraDeMotorista = true;
   
   /* Utiliza a estrutura de controle 'if' para verificar duas condições ao mesmo tempo:
      1. Se a idade da pessoa ('idadeE') é maior ou igual a 18.
      2. Se a pessoa possui carteira de motorista ('possuiCarteiraDeMotorista' é true).
      O operador '&&' é um operador lógico AND que requer que ambas as condições sejam verdadeiras para
      // que o bloco 'if' seja executado. */
   if (idadeE >= 18 && possuiCarteiraDeMotorista) {
   
       /* Se ambas as condições forem verdadeiras (ou seja, a pessoa tem 18 anos ou mais E possui carteira de motorista),
          executa o bloco de código dentro das chaves a seguir.
          Aqui, usamos 'console.log' para imprimir a mensagem "Você é maior de idade e possui carteira de motorista." no console,
          indicando que a pessoa atende a ambos os critérios estabelecidos. */
       console.log("Você é maior de idade e possui carteira de motorista.");
   
   } else {
   
       /* Se pelo menos uma das condições for falsa (ou seja, a pessoa tem menos de 18 anos OU não possui carteira de motorista),
          executa o bloco de código dentro do 'else'.
          Neste caso, imprime "Você não é maior de idade ou não possui carteira de motorista." no console,
          indicando que a pessoa não atende a pelo menos um dos critérios. */
       console.log("Você não é maior de idade ou não possui carteira de motorista.");
   
   }



/*
Operador lógico OU (||):

O operador || é verdadeiro se pelo menos uma das condições for verdadeira.
*/

/* Declara uma variável chamada 'diaDaSemana' e atribui a ela o valor "sábado".
   Usamos 'let' para declarar variáveis que podem ter seus valores alterados ao longo do código.
   Neste caso, 'diaDaSemana' armazena o nome do dia atual da semana como uma string. */
   let diaDaSemana = "sábado";

   /* Utiliza a estrutura condicional 'if' para verificar se hoje é sábado ou domingo.
      A condição verifica duas possíveis verdades usando o operador lógico OR '||':
      1. Se 'diaDaSemana' é igual a "sábado".
      2. Se 'diaDaSemana' é igual a "domingo".
      O operador '===' é usado para comparação estrita, significando que o valor e o tipo devem ser exatamente iguais.
      Se qualquer uma dessas condições for verdadeira, o bloco de código dentro do 'if' será executado. */
   if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
   
       /* Se a condição acima for verdadeira (ou seja, se for sábado ou domingo),
          executa o bloco de código dentro das chaves a seguir.
          Aqui, 'console.log' é usado para imprimir a mensagem "É fim de semana!" no console,
          indicando que o dia atual é sábado ou domingo. */
       console.log("É fim de semana!");
   
   } else {
   
       /* Se nenhuma das condições no 'if' for verdadeira (ou seja, não é nem sábado nem domingo),
          o bloco de código dentro do 'else' é executado.
          Isso significa que o dia atual é um dos dias úteis da semana (de segunda a sexta).
          Neste caso, imprime "Não é fim de semana." no console,
          indicando que o dia atual não é nem sábado nem domingo. */
       console.log("Não é fim de semana.");
       
   }
   
   
