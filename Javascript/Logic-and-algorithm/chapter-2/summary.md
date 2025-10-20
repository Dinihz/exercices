# Capítulo 2: Integração com HTML

## Seleção de Elementos (DOM)

Para que o JavaScript possa interagir com o conteúdo da página, ele precisa **referenciar os elementos HTML** através do DOM (Document Object Model).

### Métodos de Seleção

| Método             | Descrição                                                                                                      |
| :----------------- | :------------------------------------------------------------------------------------------------------------- |
| `querySelector()`  | Permite criar uma referência a um elemento por sua **tag**, **classe** (`.`) ou **ID** (`#`). É mais versátil. |
| `getElementById()` | Requer que o elemento HTML seja referenciado usando o atributo **`id`**.                                       |

---

## Propriedades para Manipulação de Conteúdo

São usadas para **obter** ou **alterar** o conteúdo dos elementos HTML referenciados.

### Conteúdo de Formulários

- **`value`**: Obtém ou altera o conteúdo de campos de formulário HTML (como `<input>`, `<textarea>`).

### Conteúdo Geral

- **`innerText`**: Consulta ou altera o **texto** visível exibido por elementos (como `<p>`, `<h1>`, `<span>`, `<div>`). Ele ignora tags HTML e exibe apenas o texto.
- **`innerHTML`**: Consulta ou altera o **conteúdo** de elementos. Códigos **HTML** presentes no conteúdo são processados e **renderizados** pelo navegador.
- **`textContent`** e **`outerText`**: Propriedades semelhantes ao `innerText`.

---

## Conceitos Fundamentais (Orientação a Objetos)

A interação com o DOM (elementos HTML) é feita através de **Objetos**, que possuem **Propriedades** e **Métodos**.

- **Objeto**: Representa uma **instância** de uma classe, uma entidade com características e ações. (Ex: o elemento retornado por `querySelector()`).
- **Método**: Representa uma **instrução** ou um conjunto de instruções que executam uma **tarefa** (uma ação do objeto). (Ex: `Math.random()`).
- **Propriedade**: Representa uma **característica** (atributo) de um objeto. (Ex: `elemento.value`).

---

## Método `preventDefault()`

- **Uso**: Comumente utilizado em eventos de formulário (como o clique de um `<button type="submit">`).
- **Função**: Previne o comportamento padrão do navegador, que é o de **recarregar a página** (submit) ao tentar enviar o conteúdo do formulário.

---

## Funções Matemáticas (`Math`)

O objeto `Math` em JavaScript oferece diversas funções para operações matemáticas.

| Função                | Descrição                                                                                   | Exemplo           | Resultado |
| :-------------------- | :------------------------------------------------------------------------------------------ | :---------------- | :-------- |
| `Math.abs(num)`       | Retorna o **valor absoluto** do número (converte negativo para positivo).                   | `Math.abs(-3)`    | `3`       |
| `Math.ceil(num)`      | Arredonda o valor para o **inteiro superior** (teto).                                       | `Math.ceil(4.2)`  | `5`       |
| `Math.floor(num)`     | Arredonda o valor para o **inteiro inferior** (piso).                                       | `Math.floor(8.9)` | `8`       |
| `Math.pow(base, exp)` | Retorna a **base elevada ao expoente**.                                                     | `Math.pow(3, 2)`  | `9`       |
| `Math.random()`       | Retorna um número **aleatório** entre 0 (inclusive) e 1 (exclusivo).                        | -                 | -         |
| `Math.round(num)`     | Arredonda para o **inteiro mais próximo**. A partir de `.5` na fração, arredonda para cima. | `Math.round(2.7)` | `3`       |
| `Math.sqrt(num)`      | Retorna a **raiz quadrada** (square root) do número.                                        | `Math.sqrt(16)`   | `4`       |

### Precedência de Operadores

Ao montar expressões matemáticas, é crucial observar a **ordem de precedência** e a **hierarquia de execução** dos operadores.
