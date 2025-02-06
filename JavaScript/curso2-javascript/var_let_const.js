/*
 var, let, e const

 Exemplo com var

var permite declarar variáveis com escopo de função ou global. 
Variáveis declaradas com var podem ser redeclaradas e atualizadas.
 */
 

// A palavra-chave 'var' é usada para declarar variáveis com escopo de função ou global, dependendo de onde a declaração ocorre.
// Variáveis declaradas com 'var' podem ser redeclaradas e atualizadas.
var nome = "João";   // Declaração de uma variável do tipo string

// Redeclara a variável 'nome', atualizando seu valor para "Maria".
// Em JavaScript, variáveis declaradas com 'var' podem ser redeclaradas no mesmo escopo.
// Essa redeclaração atualiza o valor de 'nome' de "João" para "Maria".
// Isso demonstra a flexibilidade e a dinâmica na manipulação de variáveis em JavaScript.
var nome = "Maria";  // Redeclarando a variável 'nome'

// Imprime o novo valor da variável 'nome' no console.
// Após a redeclaração, 'nome' agora contém a string "Maria", que substitui o valor anterior "João".
console.log(nome);   // Saída: Maria


// ---------------------------------------------------------------

/*Exemplo com let

let permite declarar variáveis com escopo de bloco, como dentro 
de loops ou instruções condicionais. Variáveis declaradas com let 
não podem ser redeclaradas no mesmo escopo, mas podem ser atualizadas.
*/

// diferentemente de 'var', que declara variáveis com escopo global ou de função.
// Aqui, uma variável chamada 'idade_let' é declarada e inicializada com o valor 25.
// Este tipo de declaração permite que a variável seja atualizada, mas não redeclarada dentro do mesmo escopo.
let idade_let = 25;

// Imprime o valor da variável 'idade' no console.
console.log(idade_let); // Saída esperada: 25

// Atualização da variável
// Aqui, o valor da variável 'idade_let' é atualizado de 25 para 26.
// Isso demonstra uma característica importante das variáveis declaradas com
// 'let': elas podem ter seus valores atualizados após a declaração inicial.
idade_let = 26;

// Imprime o novo valor atualizado da variável 'idade_let' no console.
// Após a atualização da linha anterior, a variável agora contém o valor 26.
// Esta linha confirma que a atualização foi bem-sucedida, exibindo o novo valor da variável.
console.log(idade_let); // Saída: 26


// ----------------------------------------------------------


// Declaração de variável com 'const'
// A palavra-chave 'const' é usada para declarar variáveis cujo valor não deve mudar ao longo da execução do programa.
// Variáveis declaradas com 'const' têm escopo de bloco, similar às variáveis declaradas com 'let'.
// Aqui, uma variável chamada 'URL' é declarada e inicializada com a string "https://www.exemplo.com".
// Uma vez atribuído um valor a uma variável 'const', esse valor não pode ser alterado (a variável é considerada uma constante).
// Tentativas de reatribuir um valor a uma variável 'const' resultarão em um erro de tempo de execução.
const URL = "https://www.exemplo.com";












