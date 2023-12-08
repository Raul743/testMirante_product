import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'


import { CreateProductUseCase } from '~/modules/products/app/useCases/CreateProductUseCase'
import { createProductValidated } from '../validators/validatorProductDto'

class CreateProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase
  ) {}

  public async handle(
    request: Request,
    response: Response
  ) {
    const addProductValidated = await createProductValidated(request)

     await this.createProductUseCase.execute(addProductValidated)

    return response
      .status(StatusCodes.CREATED)
      .json({
        data: "product created with success"
      })
  }
}

export { CreateProductController }