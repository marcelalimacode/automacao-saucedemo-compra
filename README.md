# 🛒 Projeto de Testes Automatizados com Cypress: Compra Bem-Sucedida

Este projeto tem como objetivo demonstrar conhecimentos em testes de automação com **Cypress**, automatizando o fluxo de compra bem-sucedida no site **SauceDemo v1**.

---

## ✅ Sobre o Projeto

Os testes simulam a jornada de um usuário:

- Login com usuário padrão  
- Adição de 3 produtos ao carrinho  
- Checkout com preenchimento de dados  
- Finalização da compra  
- Validação da mensagem de sucesso

Tudo feito de forma automatizada para garantir que o fluxo principal de compra funciona corretamente.

---

## 🧰 Tecnologias e Ferramentas

- [Cypress](https://www.cypress.io/) – Ferramenta de testes E2E  
- JavaScript – Linguagem utilizada  
- Node.js – Ambiente de execução  
- VS Code – Editor de código  
- Git + GitHub – Controle de versão e portfólio  

---

## 🚀 Instalação

1. Clone o repositório:  
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:  
   ```bash
   npm install
   ```

---

## 🧪 Como rodar os testes

- **Abrir Cypress no modo interativo (interface gráfica):**  
  ```bash
  npx cypress open
  ```

- **Rodar todos os testes direto no terminal (modo headless):**  
  ```bash
  npx cypress run
  ```

---

## 📁 Estrutura de Pastas

```
cypress/
└── e2e/
    └── compra_sucesso.cy.js
cypress.config.js
package.json
README.md
```

---

## 🔎 Caso de Teste Automatizado

| ID    | Título                         | Resultado Esperado                                               |
|-------|-------------------------------|-----------------------------------------------------------------|
| TC01  | Compra bem-sucedida no SauceDemo | Compra finalizada e exibição da mensagem **"THANK YOU FOR YOUR ORDER"** |

---

## 📌 Considerações

- Testado no site: [https://www.saucedemo.com/v1/index.html](https://www.saucedemo.com/v1/index.html)  
- Usuário utilizado: `standard_user`  
- Senha utilizada: `secret_sauce`  
- Projeto criado para fins de estudo e prática em automação de testes E2E.  
- Ideal para compor um portfólio de QA com Cypress.

---

## ✨ Autor

Feito com dedicação por **Marcela Barros Lima** – Analista de QA Júnior em evolução para Automação 🚀  
Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/marcela-lima-867592124/)
