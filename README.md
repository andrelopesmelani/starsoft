# Deploy da Aplicação Next.js na Vercel

Este documento fornece instruções passo a passo para fazer o deploy de uma aplicação Next.js na plataforma Vercel.

## Pré-requisitos

- Conta na Vercel. Se você ainda não tem uma conta, você pode se inscrever [aqui](https://vercel.com/signup).
- Repositório Git para a sua aplicação Next.js hospedado no GitHub, GitLab ou Bitbucket.

## Passos para o Deploy

### 1. Configurar o Repositório

Certifique-se de que seu projeto Next.js esteja configurado corretamente e versionado no Git. Seu repositório deve conter todos os arquivos necessários para construir e rodar sua aplicação.

### 2. Iniciar o Deploy na Vercel

Através da Interface Web
Login na Vercel:
Acesse Vercel e faça login na sua conta.

Importar o Projeto:
Após fazer login, clique no botão "New Project" e selecione a opção para importar o repositório do GitHub, GitLab ou Bitbucket onde seu projeto Next.js está hospedado.

Selecionar o Repositório:
Escolha o repositório que contém seu projeto Next.js.

Configurar as Configurações do Projeto:
Revise e ajuste as configurações do projeto conforme necessário. A Vercel detectará automaticamente que se trata de um projeto Next.js e aplicará as configurações padrão.

Adicionar Variáveis de Ambiente:
Se seu projeto Next.js usa variáveis de ambiente, você precisará adicioná-las na seção "Environment Variables". Clique em "Add" e insira as variáveis necessárias.

Deploy:
Clique em "Deploy" para iniciar o processo de deploy. A Vercel começará a construir e implantar seu projeto.

### 3. Revisar e Testar o Deploy

Após o deploy ser concluído, a Vercel fornecerá um link para visualizar a sua aplicação. Certifique-se de revisar e testar a aplicação para garantir que tudo está funcionando corretamente.
