# Capítulo 8: Funções e Eventos

## Funções (Functions)
Funções são blocos de código reutilizáveis que podem ser definidos para realizar uma tarefa específica.

### Arrow Function (Função de Seta)
- **Definição:** Uma sintaxe mais curta e concisa para escrever funções, onde a função é frequentemente atribuída a uma variável.

**Exemplo (Comparação):**
function ola() {
  alert("Ola")
}
const ola2 = () => {
  alert("Ola. Seja muito bem vindo")
}

### Funções com Passagem de Parâmetros
Permitem que a função receba dados de entrada para processar.

### Funções com Retorno de Valor
Utilizadas quando a função precisa devolver um resultado (valor) para o código que a chamou, usando o comando `return`.

### Funções com Parâmetros Rest
- **Operador Rest (`...`)**: Permite que uma função receba um **número indefinido de argumentos**, que são convertidos e acessados dentro da função como um **vetor (Array)**.

## Funções Anônimas
- **Definição:** São funções que não possuem um nome definido.
- **Uso Comum:** Geralmente são usadas como *callback* (função de retorno) em métodos ou em eventos.

**Exemplo (Função Anônima em Evento):**
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    // ...
    e.preventDefault()
})

## Eventos em JavaScript
- **Conceito:** Evento é a ocorrência de uma ação, geralmente produzida por um usuário ou pelo navegador, em uma página web.
- **Exemplos Comuns:** Clicar em um botão (`click`), enviar um formulário (`submit`), selecionar um item, sair de um campo (`blur`), carregar a página (`load`).

### Tratamento de Eventos
A função (seja ela anônima, Arrow Function ou normal) que é executada quando o evento ocorre é chamada de **Handler** ou **Ouvinte de Evento**.
