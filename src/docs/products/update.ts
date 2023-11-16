export default {
  '/product/:id': {
    patch: {
      tags: ['Products'],
      description: 'update product',
      operationId: 'UpdateProduct',
      parameters: [
        {
          name: 'ID do produto que será atualizado',
          in: 'query',
          schema: {
            description: 'Id do produto que vai ser atualizado',
            type: 'string',
            example: '00000000-0000-0000-0000-000000000000'
          }
        },
        {
          name: 'body',
          in: 'body',
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Nome do produto',
                example: 'HomeEquity'
              },
              description: {
                type: 'string',
                description: 'descricao do produto',
                example: 'sejaBest'
              },
              price: {
                type: 'string',
                description: 'Preço do produto',
                example: 300
              }
            }
          }
        }

      ],
      responses: {
        200: {
          description: 'Success',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  data: {
                    type: 'object',
                    $ref: '#/components/schemas/Product'
                  }
                }
              }
            }
          }
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  errors: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        description: 'a propriedade que retorna a mensagem de erro ocorrido',
                        example: 'campo nao preenchido'
                      },
                      type: {
                        type: 'string',
                        description: 'a propriedade que retorna o tipo de erro ocorrido',
                        example: 'BAD_REQUEST'
                      },
                      title: {
                        type: 'string',
                        description: 'a propriedade que retorna o titulo de erro ocorrido',
                        example: 'Error in the request'
                      }
                    }
                  }
                }
              }
            }
          }
        },
        500: {
          description: 'Internal Server Error',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  errors: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'string',
                        description: 'a propriedade que retorna a mensagem de erro ocorrido',
                        example: 'campo nao preenchido'
                      },
                      type: {
                        type: 'string',
                        description: 'a propriedade que retorna o tipo de erro ocorrido',
                        example: 'BAD_REQUEST'
                      },
                      title: {
                        type: 'string',
                        description: 'a propriedade que retorna o titulo de erro ocorrido',
                        example: 'Error in the request'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}