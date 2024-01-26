
## Description

Este é um projeto de exemplo que demonstra a criação de usuários, tipos de segmento, grupos de componentes e componentes usando o NestJS e o TypeORM. A seguir, você encontrará informações sobre como configurar e utilizar o projeto.

Configuração do Ambiente
Instale as Dependências

Execute o seguinte comando para instalar todas as dependências necessárias:

```bash
$ yarn
```
Configuração do Banco de Dados

Certifique-se de ter um servidor MySQL em execução localmente. O banco de dados será criado automaticamente quando a aplicação for iniciada.

Rodar a Aplicação

Execute o seguinte comando para iniciar a aplicação:

```bash
$ yarn run start:dev
```
A aplicação estará disponível em http://localhost:3000.

Importar Coleção do Postman

Encontre as coleções do Postman no diretório postman-collections e importe-as no Postman para obter exemplos de requisições para as APIs.

Fluxo de Dados
Siga os seguintes passos para utilizar corretamente as APIs:

Criar Usuário

Antes de criar outros registros, certifique-se de criar um usuário usando a API de usuários.

Criar Tipo de Seguimento

Em seguida, utilize a API de tipos de seguimento para criar os tipos de seguimento necessários.

Criar Grupo de Componentes

Agora, crie grupos de componentes usando a API de grupos de componentes.

Criar Componente

Finalmente, utilize a API de componentes para criar componentes associados aos grupos e tipos de seguimento previamente criados.

Documentação da API
A documentação da API pode ser acessada em http://localhost:3000/api.(em construção)


## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

