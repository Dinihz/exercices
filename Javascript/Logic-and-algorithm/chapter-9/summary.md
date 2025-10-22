# Capítulo 9: Persistência de Dados com `localStorage`

## Conceito de `localStorage`
O `localStorage` é uma API de armazenamento web que permite salvar dados de forma persistente no navegador do usuário. É ideal para guardar listas de itens, informações de usuário, preferências, etc.

### Outras Formas de Armazenamento no Navegador
Além do `localStorage`, existem:
- **`cookies`**
- **`sessionStorage`** (dados persistem apenas durante a sessão da página)
- **`indexedDB`** (para grandes volumes de dados)
- **`Web SQL`** (obsoleto)

### Persistência e Limitações
- Os dados salvos no `localStorage` persistem até que uma ação do usuário ocorra para alterá-los ou excluí-los.
- O usuário pode remover "acidentalmente" os dados se limpar o **histórico de navegação** do browser.

---

## Salvar e Recuperar Dados

### Salvar Informações (`setItem()`)
- **Função:** Salva um par de chave-valor no armazenamento local do navegador.

**Sintaxe:** `localStorage.setItem(chave, valor)`
**Exemplo:**
localStorage.setItem("idade", 20)

### Recuperar Informações (`getItem()`)
- **Função:** Recupera o valor de uma chave armazenada.

**Sintaxe:** `localStorage.getItem(chave)`
**Exemplo:**
const idade = localStorage.getItem("idade")

---

## Remover Dados do `localStorage`

### Remover Variável Específica (`removeItem()`)
- **Função:** Remove o conteúdo de uma variável específica salva no domínio da página.

**Sintaxe:** `localStorage.removeItem(chave)`

### Remover Todos os Dados (`clear()`)
- **Função:** Remove **todas** as variáveis pertencentes ao domínio da página e armazenadas no navegador do usuário.

**Sintaxe:** `localStorage.clear()`
