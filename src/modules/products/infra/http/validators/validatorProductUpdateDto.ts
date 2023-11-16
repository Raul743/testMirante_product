import { type Request } from 'express'
import * as Yup from 'yup'
import { ProductTypeEnum } from '~/modules/products/domain/enums/productTypeEnum'

export async function ProductUpdateValidated(request: Request) {
  const schemaProduct = Yup.object().shape({
    id: Yup.string().uuid().required('O campo name é obrigatório'),
    name: Yup.string()
      .min(2, 'O campo name precisa ter pelo menos 3 caracteres')
      .max(101, 'O campo name precisa ter no máximo 100 caracteres'),
    description: Yup.string()
      .min(2, 'O campo description precisa ter pelo menos 3 caracteres')
      .max(101, 'O campo description precisa ter no máximo 100 caracteres'), 
    price: Yup.number().positive(),
    type: Yup.mixed<ProductTypeEnum>()
      .oneOf(Object.values(ProductTypeEnum))
  })

  return await schemaProduct.validate({
    id: request.params.id,
    ...request.body
  }, { abortEarly: false, stripUnknown: true })
}