# 05-nest-clean

Este repositório é um estudo baseado no curso da Rocketseat, com foco em fundamentos do NestJS. O projeto serve como base para praticar padrões de arquitetura, integração com banco de dados via Prisma e outras ferramentas comuns em aplicações Node.js/TypeScript.

## Sobre

- Objetivo: Estudar e aplicar conceitos do NestJS seguindo o material da Rocketseat.
- Estado: Em andamento — este projeto ainda está sendo desenvolvido e aperfeiçoado.

## Tecnologias

- Framework: NestJS
- Linguagem: TypeScript
- ORM: Prisma
- Banco de Dados: PostgreSQL (utilizado com Prisma)
- Autenticação: JWT (JSON Web Tokens)
- Testes: Vitest
- Cache: Redis
- Upload de Arquivos: Suporte para upload de arquivos (ex: R2 Storage)
- Linting: ESLint
- Validação: Zod

> Observação: algumas integrações (ex.: Redis, R2, configurações de JWT) podem estar em progresso ou exemplificadas — verifique o código para o estado atual.

## Estrutura principal do projeto

- `src/` — código fonte da aplicação (módulos, controllers, services)
- `prisma/` — esquema do Prisma e migrações
- `generated/prisma/` — client gerado pelo Prisma
- `docker-compose.yml` — (opcional) composição para infra local (Postgres, Redis)

> Consulte o repositório para ver a estrutura completa e arquivos auxiliares.

## Executando localmente (exemplo)

Pré-requisitos:
- Node.js (v18+ recomendado)
- Yarn ou npm
- Docker (opcional, para Postgres/Redis)

Passos básicos:

```bash
# instalar dependências
npm install

# gerar client do Prisma
npx prisma generate

# aplicar migrations (apenas em desenvolvimento)
npx prisma migrate dev

# rodar em modo de desenvolvimento
npm run start:dev
```

Ajuste os comandos conforme os scripts definidos em `package.json` do projeto.

## Testes

O projeto utiliza o Vitest para testes. Exemplos de comando:

```bash
npm run test
npm run test:watch
```

## Status

Projeto em desenvolvimento — funcionalidades e integrações estão sendo implementadas gradualmente.
