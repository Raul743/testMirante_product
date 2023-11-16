import { type Request } from 'express'
import * as Yup from 'yup'

export async function ProductDeleteValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.string().uuid().required('O campo name é obrigatório'),
  })

  return await schema.validate(request.params)
}