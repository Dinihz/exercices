# Capítulo 4: Condições

## Estruturas de Decisão (If / Else)
As estruturas condicionais permitem que um algoritmo tome decisões e execute diferentes blocos de código com base em uma condição ser **verdadeira** ou **falsa**.

- **`if` (Se)**: O bloco de código dentro do `if` é executado **somente se** a condição for verdadeira.
- **`else` (Senão)**: O bloco de código dentro do `else` é executado **se a condição do `if` for falsa**.

**Exemplo (Sem bloco de código):**
if (condicao) {
    // Executa este código se a condição for VERDADEIRA
} else {
    // Executa este código se a condição for FALSA
}

---

## Operadores Relacionais (Comparação)
Usados para comparar valores e retornar um resultado booleano (`true` ou `false`).

| Operador | Nome | Descrição |
| :--- | :--- | :--- |
| `==` | Igual | Retorna `true` se os valores tiverem o mesmo **conteúdo** (ignora o tipo). |
| `!=` | Diferente | Retorna `true` se os valores tiverem **conteúdos diferentes** (ignora o tipo). |
| `>` | Maior que | Compara números ou palavras (ordem alfabética). |
| `<` | Menor que | Compara números ou palavras. |
| `>=` | Maior ou Igual | |
| `<=` | Menor ou Igual | |
| `===` | **Estritamente Igual** | Retorna `true` se os valores e os **tipos** forem idênticos. (Uso recomendado) |
| `!==` | **Estritamente Diferente** | Retorna `true` se os valores ou os **tipos** forem diferentes. (Uso recomendado) |

---

## Operadores Lógicos
Usados para combinar múltiplas condições booleanas em uma única expressão.

| Operador | Nome | Descrição |
| :--- | :--- | :--- |
| `!` | **NOT** (Negação) | Inverte o resultado de uma comparação. `true` se torna `false`, e vice-versa. |
| `&&` | **AND** (Conjunção) | Retorna `true` somente quando **TODAS** as comparações são verdadeiras. |
| `||` | **OR** (Disjunção) | Retorna `true` se **PELO MENOS UMA** das condições for verdadeira. |
---

## Operador Ternário (Condicional Abreviado)
Uma forma abreviada de escrever uma instrução `if...else` simples, geralmente para atribuição de valor.

**Estrutura:** `condição ? valor_se_verdadeiro : valor_se_falso`

**Exemplo:**
const idade = 20;
// Se a idade for >= 18, a categoria é 'Adulto', senão é 'Juvenil'
const categoria = idade >= 18 ? "Adulto" : "Juvenil";

// A variável 'categoria' receberá o valor "Adulto"

---

## Estrutura `Switch...Case`
É útil para lidar com **várias alternativas** (múltiplas condições) definidas a partir do conteúdo de **uma única variável**. É recomendado quando o número de opções é grande.

- O comando `switch` começa pela definição da variável de escolha.
- Cada instrução `case` representa um valor possível para a variável.
- O comando `break` é essencial para finalizar cada `case` e evitar a execução do próximo bloco.

### Exemplo Explicativo (Sem bloco de código):

let diaSemana = 3;
let nomeDia;

switch (diaSemana) {
    case 1:
        nomeDia = "Domingo";
        break; // Interrompe o switch
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira"; // nomeDia recebe "Terça-feira"
        break; // Interrompe o switch
    case 7:
        nomeDia = "Sábado";
        break;
    default: // Executado se nenhum dos 'cases' for correspondido
        nomeDia = "Dia inválido";
}

// nomeDia será: "Terça-feira"
