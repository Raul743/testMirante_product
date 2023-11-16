import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'


import { FindOneProductUseCase } from '~/modules/products/app/useCases/FinOneProductUseCase'
import { ProductFindOneValidated } from '../validators/validatorProductFindOneDto'

class FindOneProductController {
  constructor(
    private readonly findOneProductUseCase: FindOneProductUseCase
  ) {}

  public async handle(
    request: Request,
    response: Response
  ) {
    const productFindOneValidated = await ProductFindOneValidated(request)

     const data = await this.findOneProductUseCase
      .execute(productFindOneValidated)

    return response
      .status(StatusCodes.CREATED)
      .json({ data })
  }
}

export { FindOneProductController }