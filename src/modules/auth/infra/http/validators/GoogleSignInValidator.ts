import { type Request } from 'express'
import * as Yup from 'yup'

export async function googleSignInValidator(request: Request) {
  const schema = Yup.object().shape({
    clientId: Yup.string().required('O campo clientId é obrigatório'),
    tokenId: Yup.string().required('O campo tokenId é obrigatório')
  })

  const create = await schema.validate(request.body)

  return create
}