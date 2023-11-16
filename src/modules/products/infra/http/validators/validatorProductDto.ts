import { type Request } from 'express'
import * as Yup from 'yup'
import { ProductTypeEnum } from '~/modules/products/domain/enums/productTypeEnum'

export async function createProductValidated(request: Request) {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'O campo name precisa ter pelo menos 3 caracteres')
      .max(101, 'O campo name precisa ter no máximo 100 caracteres')
      .required('O campo name é obrigatório'),
    description: Yup.string()
      .min(2, 'O campo description precisa ter pelo menos 3 caracteres')
      .max(101, 'O campo description precisa ter no máximo 100 caracteres'), 
    price: Yup.number().positive(),
    type: Yup.mixed<ProductTypeEnum>()
      .oneOf(Object.values(ProductTypeEnum))
      .required('O campo tipo de produto é obrigatório'),
  })

  const create = await schema.validate(request.body)

  return create
}