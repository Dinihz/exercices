# Capítulo 1: Introdução

## O que é um Algoritmo
Um **algoritmo** é uma sequência de passos (comandos) executados para realizar uma tarefa em um tempo finito.

Resolver problemas exige **dedução lógica**, semelhante ao raciocínio da **Lógica Matemática**.
É importante tentar **várias maneiras de resolver** o mesmo problema para encontrar o caminho mais fácil ou prático.

Antes de escrever o algoritmo, **entenda o problema** e planeje a solução.

### Exemplo prático
Pense em uma **receita de bolo**:
- **Ingredientes:** dados de entrada.
- **Modo de preparo:** processamento.
- **Bolo pronto:** dados de saída.

### Estrutura básica
1. **Entrada:** ler os dados de entrada.
2. **Processamento:** realizar o cálculo ou operação.
3. **Saída:** apresentar o resultado.

#### Exemplo
Elaborar um programa que leia um número e calcule o triplo dele:
- **Entrada de dados:** ler o número.
- **Processamento:** calcular o triplo.
- **Saída:** informar o triplo.

---

## Variáveis
Uma **variável** é um espaço na memória do computador usado para **armazenar informações** e trabalhar com elas.

### Regras de nomenclatura
- Não conter **espaços**.
- Não **começar por números**.
- Não conter **caracteres especiais** como `& ! # $`.
- Não usar **palavras reservadas** da linguagem (ex: `function`, `new`, `return`).
- **Maiúsculas e minúsculas** fazem diferença (`nome` ≠ `Nome`).
- O uso de `_` é válido.
- Padrão recomendado: **camelCase**.

### Declaração de variáveis no JavaScript
- `var` – **não recomendado**, pode vazar escopos.
- `let` – usado quando o valor pode ser alterado.
- `const` – usado quando o valor **não deve ser alterado**.

---

## Tipos de dados e mensagens
Podemos exibir mensagens usando:
- Aspas simples `' '`
- Aspas duplas `" "`
- **Template Strings** com crases `` ` ``, que permitem interpolar variáveis.

### Comentários
- **Uma linha:** `// comentário`
- **Múltiplas linhas:**
  ```js
  /*
    comentário
    em várias
    linhas
  */

### Strings e Números
- Strings são textos delimitados por aspas.
- Ao usar números em operações, não devem estar entre aspas, senão serão tratados como texto.

### Conversões:
- Converter texto → número: Number(), parseInt(), parseFloat()
- Converter número → texto: toString()

### Verificação de tipo
```js
const car = 'Palio';
console.log(typeof car); // string
```

### Verificar se um número é inteiro
```js
console.log(Number.isInteger(4.67)); // false
```
