# Capítulo 5: Repetições

## Laço `for` (Com Variável de Controle)
O comando `for` é ideal quando se **sabe previamente** o número de vezes que a repetição deve ocorrer. Sua sintaxe é composta por três instruções separadas por ponto e vírgula:

**Sintaxe:** `for (Inicialização; Condição; Incremento/Decremento)`

1.  **Inicialização:** Define o **valor inicial** da variável de controle (Ex: `let i = 1`).
2.  **Condição:** Determina se a repetição deve continuar. É verificada **no início** de cada volta. Se for `false`, o laço termina (Ex: `i <= 10`).
3.  **Incremento/Decremento:** Atualiza a variável de controle. É realizado **após** a execução do bloco de código (Ex: `i = i + 1`).

> **Abreviação:** O incremento `i = i + 1` pode ser abreviado para `i++`.

---

## Laço `while` (Teste no Início)
O comando `while` é usado quando **não se sabe previamente** quantas vezes a repetição será executada.

- **Comportamento:** O teste condicional é realizado **logo no início**.
- **Regra:** "Enquanto a condição for verdadeira, execute o bloco de código." Se a condição for falsa na primeira verificação, o laço **não é executado** nenhuma vez.

```javascript
while (condicao) {
}
```

## Laço do...while (Teste no Final)
Também usado quando não se sabe previamente o número de repetições.
- Comportamento: A condição é verificada no final do laço.

- Diferença: O bloco de código é executado pelo menos uma vez, independentemente da condição inicial ser verdadeira ou falsa.
```javascript
do {
} while (condicao); // Ponto onde a condição é verificada
```

## Interrupções nos Laços
Podem ser usados em for, while ou do...while:

- break: Causa a saída imediata do laço de repetição, continuando a execução do código após o laço.
- continue: Faz com que o código retorne ao início do laço de repetição, pulando as instruções restantes do ciclo atual.

## Contadores e Acumuladores
São variáveis usadas dentro dos laços para somar valores ou contar ocorrências. Ambas devem receber uma atribuição inicial (geralmente zero).

### Contador

- Função: Conta a quantidade de vezes que algo acontece.
- Regra: A variável recebe ela mesma mais um valor constante (geralmente 1).
- Exemplo: contador = contador + 1 ou contador++.

### Acumulador

- Função: Soma valores variáveis ou o resultado de expressões.
- Regra: A variável recebe ela mesma mais o conteúdo de outra variável.
- Exemplo: soma = soma + preco.
- Abreviação: O operador de atribuição de soma pode ser usado: soma += preco.
