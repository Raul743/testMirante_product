import { type Request } from 'express'
import * as Yup from 'yup'

export async function ProductFindOneValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.string().uuid().required('O campo name é obrigatório'),
  })

  const findOne = await schema.validate(request.params)

  return findOne
}