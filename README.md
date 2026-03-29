# Atividade 2 – DOM: Conceitos Básicos

Projeto desenvolvido como atividade prática da disciplina de desenvolvimento web, com foco em manipulação do DOM usando HTML e JavaScript puro.

---

## O que foi feito

A página contém quatro funcionalidades interativas:

### 1. Contador de Cliques
- Botão **Incrementar** aumenta o contador em 1 a cada clique
- Botão **Decrementar** diminui o contador, mas não permite valores negativos
- Quando o contador já está em zero e o usuário tenta decrementar, um `alert()` avisa o usuário

### 2. Adicionar Texto Dinâmico
- Campo de texto onde o usuário digita uma mensagem
- Ao pressionar **Enter**, o texto é adicionado como um novo parágrafo (`<p>`) na página
- O campo é limpo automaticamente após adicionar

### 3. Contador de Caracteres
- Exibe em tempo real quantos caracteres foram digitados no campo de texto
- **Espaços não são contados**

### 4. Adicionar Item em Lista
- O usuário escolhe o tipo de lista: **ordenada (`<ol>`)** ou **não ordenada (`<ul>`)**
- Um botão adiciona um novo item na lista escolhida

### 5. Botão de Reset
- Zera o contador de cliques
- Remove todos os parágrafos adicionados
- Remove todas as listas criadas
- Limpa o campo de texto e o contador de caracteres

---

## Como foi feito

### Tecnologias
- HTML5 para a estrutura da página
- JavaScript puro (sem frameworks ou bibliotecas)

### Conceitos de DOM aplicados

| Conceito | Como foi usado |
|---|---|
| `document.getElementById()` | Buscar cada elemento da página pelo seu `id` |
| `.textContent` | Ler e atualizar textos na tela (contador, caracteres) |
| `.innerHTML = ''` | Limpar o conteúdo de um elemento no reset |
| `addEventListener('click')` | Escutar cliques nos botões |
| `addEventListener('keydown')` | Detectar quando a tecla Enter é pressionada |
| `addEventListener('input')` | Atualizar o contador de caracteres em tempo real |
| `document.createElement()` | Criar novos elementos HTML dinamicamente |
| `.appendChild()` | Inserir elementos criados na página |
| `.value` | Ler o texto digitado em um campo `<input>` |
| `.replaceAll(' ', '')` | Remover espaços para contar apenas caracteres válidos |
| `if / else` | Impedir que o contador fique negativo |

---

## Estrutura de arquivos

```
JSDom/
├── index.HTML   → estrutura da página
├── script.js    → lógica e interações
└── README.md    → documentação
```

---

## Melhorias Futuras 🏎️

Este projeto será evoluído com um tema visual e de funcionalidades inspirado no universo de **Velozes e Furiosos**, com foco no personagem **Dom Toretto**.

### Visual
- Design escuro e agressivo com tons de laranja, cinza e preto, remetendo ao estilo das corridas de rua
- Fonte estilizada inspirada em painéis automotivos
- Animações e efeitos visuais ao interagir com os elementos

### Velocímetro interativo
- Painel de velocímetro animado, semelhante ao de um carro de corrida
- Botões de **Acelerar** e **Frear** que aumentam e diminuem a velocidade gradualmente
- A cor do velocímetro muda conforme a velocidade: verde → amarelo → vermelho
- Velocidade máxima de **300 km/h**, como nos filmes
- Mensagens especiais ao atingir certas velocidades — por exemplo: *"Modo Toretto ativado!"* ao passar de 200 km/h
