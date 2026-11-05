# Caixa em Angular

Aplicação de caixa para um pequeno comércio, feita para praticar Angular: cadastro de clientes,
produtos e receitas, cada um com formulário e tabela na mesma tela, busca e edição. Os dados ficam
no `localStorage` do navegador, então não precisa de servidor para testar.

Projeto de curso.

> **Ao vivo:** https://sammadar.github.io/caixa-ng/clientes

## Como rodar

```bash
npm install
npm start
```

Abra http://localhost:4200.

## Estrutura

```
src/app/components/clientes/   lista com busca e formulário de cadastro/edição
src/app/components/produtos/   cadastro de produtos
src/app/components/receitas/   cadastro de receitas (nome e valor)
src/app/components/estoque/    cadastro de estoque
src/app/models/                classes Cliente, Produto, Receita
```

Componentes standalone, rotas em `app.routes.ts`, formulários com `ngModel` e a sintaxe de
controle de fluxo nova do Angular (`@for`).

Angular 19 · TypeScript
