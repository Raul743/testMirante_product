export default {
  '/product': {
    get: {
      tags: ['Products'],
      description: 'Listing all products',
      operationId: 'ListingAllProduct',
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
                    $ref: '#/components/schemas/Product',
                    null: true
                  },
                  message: {
                    type: 'string',
                    null: true
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