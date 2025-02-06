//Resumo das aulas.

/*1. Number

Representa tanto números inteiros quanto de ponto flutuante.
*/

let idade = 19;
// A função 'console.log()' é usada para exibir mensagens ou valores no console do navegador ou do ambiente de execução do JavaScript.
// Neste caso, a mensagem "Número (inteiro):" é seguida pelo valor da variável 'idade', ilustrando que 'idade' é um número inteiro.
console.log("Número (inteiro):", idade);



/*2. String

Representa sequências de caracteres ou textos.
*/
let nome = "Dinihz";
console.log("String:", nome);

/*3. Boolean

Representa valores verdadeiros (true) ou falsos (false).
*/
let estaLogado = true;

console.log("Boolean (verdadeiro):", estaLogado);

// Utiliza a função 'console.log()' para imprimir no console a string
// "Boolean (falso):" seguida pelo valor da variável 'maiorDeIdade'.
// Assim como na linha anterior, esta instrução exibe o valor da variável
// 'maiorDeIdade' no console, destacando que seu tipo é booleano e, neste contexto, é falso.
console.log("Boolean (falso):", maiorDeIdade);


//4. Undefined

// 'endereco' é declarada sem um valor inicial, o que automaticamente a atribui o valor 'undefined'.
// O tipo 'undefined' é usado em JavaScript para indicar que uma variável foi declarada mas ainda não teve um valor atribuído a ela.

let endereco;

console.log("Undefined:", endereco);


//5. Null

//Representa a ausência intencional de um valor de objeto.


let salario = null;

console.log("Null:", salario);

/*6. Symbol

Usado para criar propriedades únicas de objetos. Symbols são sempre únicos, mesmo que tenham a mesma descrição.
*/

let id = Symbol("id");

// Imprime no console o tipo e o valor de 'id'. Como 'Symbol' não pode ser convertido diretamente para string
// para ser impresso, usamos 'id.toString()' para obter sua descrição como string.
console.log("Symbol:", id.toString());

