# Best-challenge
This repository was created to make a Product challenge, this test require make a simple api to list products, create products, update products, get one products and remove products.

<br/>

Este é uma solução de uma API em Node.js & Typescript!

## 🚀 Tecnologias & Ferramentas utilizadas

* **[Node.js](https://nodejs.org/pt-br/)**
* **[TypeScript](https://www.typescriptlang.org/download)**
* **[Visual Studio Code](https://code.visualstudio.com/)**
* **[API DOG](https://apidog.com/)**
* **[Mongo](https://www.mongodb.com/pt-br)**
* **[Git](https://git-scm.com/downloads)**

<br/>

> ## Princípios aplicados 
* **S**ingle Responsibility Principle (SRP)
* **O**pen Closed Principle (OCP)
* **L**iskov Substitution Principle (LSP)
* **I**nterface Segregation Principle (ISP)
* **D**ependency Inversion Principle (DIP)

> ## Metodologia aplicados 
* **D**omain (D)
* **D**riven (D)
* **D**esign (D)

> ## Metodologias e Designs
* Clean Architecture
* Use Cases

> ## Bibliotecas
* NPM
* Typescript
* Git
* Express
* Eslint
* Jest
* Mongo
* Mongoose

> ## Features do Node
* API Rest com Express
* CORS


> ## Features do Git
* Alias
* Branch
* Tag
* Merge


> ## Features do Typescript
* POO
* Interface

Recursos disponíveis para acesso via API ou endpoints(URI):

- **baseURL** - localhost:3000/v1/
- **products** - /products

| Método    | Descrição                         |
| ------    | --------------------------------- |
| `POST`    | `/products`                       |
| `GET`     | `/products/{id}`                     |  
| `GET`     | `/products`                          |   
| `PUT`     | `/products/{id}`                     |   
| `DELETE`  | `/products/{id}`                     |   


Um exemplo do funcionamento das rotas.


## Dependências | Instalando o projeto

# Normal

- Rode um yarn | npm install para baixar todas as dependências


## Métodos

Requisições para a API devem seguir os padrões:

| Método | Descrição |
| -------- | ----------------------------------------------------- |
| `GET`  | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT`  | Utilizado para atualizar um registro. |
| `DELETE` | Utilizado para remover um registro. |

## Rode o Projeto

- Para executar, basta:

| Comando                       | Descrição                      |
| ----------------------------- | ------------------------------ |
| `yarn test` ou `npm run test` | Rodando os testes da Aplicação |
| `yarn dev` ou `npm run dev`   | Rodando a aplicação em geral   |
| `yarn test`                   | Rodando os testes da Aplicação |
| `yarn lint`                   | Rodando os ajusts na Aplicação |


## Respostas

| Código | Descrição                                                          |
| ------ | ------------------------------------------------------------------ |
| `200`  | Requisição executada com sucesso (success).                        |
| `201`  | Registro Criado com sucesso.                                       |
| `400`  | Erros de validação ou os campos informados não existem no sistema. |
| `404`  | Valor não encontrado                                               |
| `500`  | Erro interno do servidor.                                          |

## Padrão de Retorno dos dados

- Response 201 (application/json)

  - Body

    ```
      {
        "success": true/false,
        "message": String,
        "data": Object/String
      }
    ```

Caso a requisição não conter nenhuma resposta ou falhar o retorno será:

- Response 400(Aplication/json)

  ```
    {
      "success": false,
      "data": "Invalid User"
    }
  ```
  
  <hr>

<h4>Desenvolvido por: <strong style="color: #1f6feb; align: center">Raul Laurindo Inácio</strong></h4>
