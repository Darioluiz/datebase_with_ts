# Projeto Backend com Fastify, TypeScript e Knex

Este repositório é um projeto em fase inicial de desenvolvimento criado para praticar conceitos de desenvolvimento backend utilizando Node.js, Fastify, TypeScript e Knex com banco de dados SQLite.

O objetivo no momento é testar a comunicação com o banco de dados e entender a integração do Knex rodando nativamente com TypeScript, além de manter o código padronizado com ESLint.

## Status do Projeto

Em desenvolvimento.

Atualmente o projeto possui uma rota HTTP GET básica configurada para validar o servidor Fastify e o funcionamento das migrações do banco de dados SQLite.

## Funcionalidades e Aprendizados Até o Momento

- Configuração de servidor HTTP utilizando o Fastify.
- Execução de arquivos TypeScript em modo de desenvolvimento utilizando `tsx`.
- Integração do Knex.js com SQLite e suporte para arquivos `.ts`.
- Criação e execução de migrações para gerenciar tabelas no banco de dados.
- Padronização de código com ESLint e Prettier (utilizando a configuração da Rocketseat).

## Tecnologias e Ferramentas Utilizadas

### Principais
- **Fastify:** Framework web para criação das rotas e do servidor.
- **Knex.js:** Query builder para manipulação do banco de dados.
- **SQLite3:** Banco de dados relacional em arquivo local.
- **TypeScript:** Tipagem estática no código.

### Ferramentas de Desenvolvimento
- **tsx:** Executor de TypeScript com suporte a watch mode.
- **ESLint e Prettier:** Linter e formatador de código para manter o padrão estilístico do projeto.

## Scripts Disponíveis

No arquivo `package.json`, estão configurados os seguintes scripts:

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload (`tsx watch src/server.ts`).
- `npm run knex`: Executa a CLI do Knex para migrações e seeds usando o interpretador do TypeScript.
- `npm run lint`: Executa a verificação do ESLint em todos os arquivos `.ts` do projeto.


