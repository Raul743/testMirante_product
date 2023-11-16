export default {
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID do produto',
            example: '00000000-0000-0000-0000-000000000000'
          },
          name: {
            required: true,
            type: 'string',
            description: 'Nome do produto',
            example: 'Laptop'
          },
          description: {
            required: true,
            type: 'string',
            description: 'A descricao do produto',
            example: 'Powerful laptop for professional use'
          },
          price: {
            required: true,
            type: 'number',
            description: 'O preco do produto.',
            example: '3000'
          },
          type: {
            required: true,
            type: 'string',
            enum: ['Produtos Automáticos', 'Produtos Digitais e Serviços'],
            description: 'O tipo do produto que será criado',
            example: 'Produtos Farmacêuticos e de Saúde'
          },
          createdAt: {
            type: 'string',
            format: 'date-time'
          },
          updatedAt: {
            type: 'string',
            format: 'date-time'
          },
          deletedAt: {
            type: 'string',
            format: 'date-time'
          }
        }
      },
    },
  },
};
