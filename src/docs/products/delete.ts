export default {
  '/product/:id/': {
    delete: {
      tags: ['Products'],
      description: 'Endpoint para a remoção de um produto. Um produto poderá ser removido apenas se não tiver nenhum negócio ativo associado ao mesmo, se não ele será apenas desativado.',
      operationId: 'DeleteProduct',
      parameters: [
        {
          name: 'id',
          in: 'params',
          description: 'Id do produto que será removido',
          schema: {
            type: 'string',
            example: '00000000-0000-0000-0000-000000000000'
          }
        }
      ],
      responses: {
        200: {
          description: 'Success'
        },
        400: {
          description: 'Bad Request',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  type: {
                    type: 'string',
                    description: 'O nome do erro que está ocorrendo',
                    example: 'BAD_REQUEST'
                  },
                  message: {
                    type: 'string',
                    description: 'A mensagem de erro que descreve o que ocorreu',
                    example: 'Entity product was not found'
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
                $ref: '#/components/schemas/InternalServerError'
              }
            }
          }
        }
      }
    }
  }

}