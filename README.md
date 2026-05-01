# Luna CS Bot

Chatbot de suporte ao cliente desenvolvido como parte de um desafio prático para uma vaga de Analista de Customer Success.

---

## Sobre o projeto

O projeto propõe uma solução de automação para o atendimento de suporte de nível 1, com o objetivo de reduzir o esforço operacional de times de CS em dúvidas simples e repetitivas, liberando a atenção humana para onde ela é mais eficaz: retenção, resolução de conflitos e relacionamento com clientes estratégicos.

A solução foi construída seguindo os requisitos técnicos do desafio, utilizando n8n para automação do fluxo, Google Sheets como base de conhecimento e inteligência artificial para geração das respostas. Uma interface gráfica de chat foi desenvolvida para demonstração.

---

## Como funciona

O usuário envia uma pergunta pela interface de chat. O fluxo no n8n recebe a mensagem, consulta a base de conhecimento, aplica um algoritmo de busca por similaridade para encontrar a resposta mais relevante e envia o contexto para o modelo de linguagem, que retorna uma resposta humanizada.

Quando a dúvida não está mapeada na base, o bot aciona um protocolo de transbordo e comunica ao usuário que a questão será encaminhada para um especialista humano.

---

## Tecnologias utilizadas

- **n8n** — automação do fluxo, conforme requisito do desafio
- **Google Sheets** — base de conhecimento, conforme requisito do desafio
- **Groq (Llama 3.3 70b)** — modelo de linguagem para geração das respostas
- **HTML, CSS e JavaScript** — interface gráfica de demonstração

---

## IAs utilizadas no desenvolvimento

O projeto foi construído com apoio de múltiplas ferramentas de IA, cada uma aplicada em etapas diferentes:

- **Claude** — desenvolvimento do algoritmo de busca e da interface gráfica
- **ChatGPT** — montagem e ajuste do fluxo no n8n
- **Gemini** — produção de textos e materiais de apresentação
- **Groq / Llama 3.3 70b** — motor de linguagem em produção

---

## Estrutura do projeto

Este repositório contém apenas o frontend da solução. O workflow de automação roda na plataforma n8n Cloud e não está versionado aqui.

```
luna-cs-bot/
├── index.html       # Interface do chat
├── style.css        # Estilos com modo claro/escuro
├── script.js        # Comunicação com o webhook
├── favicon.svg      # Ícone
└── README.md
```

---

## Como rodar localmente

1. Clone o repositório
2. Abra a pasta no VS Code
3. Instale a extensão **Live Server** (Ritwick Dey)
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**
5. O chat abre em `http://127.0.0.1:5500`

### 🌐 Demonstração Online

O bot está configurado e disponível para teste no link abaixo:

👉 **[Acesse a demonstração aqui](https://majestic-biscotti-f658ff.netlify.app/)**

> O workflow no n8n precisa estar ativo para o bot responder. Deixarei majoritariamente ativo, mas caso não esteja respondendo é só entrar em contato comigo pelo Linkedin ou pelo meu Instagram
https://linkedin.com/in/jessica-kaczmarkiewicz
https://instagram.com/jessicakaczmarkiewicz 
