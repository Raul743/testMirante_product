import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'


import { UpdateProductUseCase } from '~/modules/products/app/useCases/UpdateProductUseCase'
import { ProductUpdateValidated } from '../validators/validatorProductUpdateDto'

class UpdateProductController {
  constructor(
    private readonly updateProductUseCase: UpdateProductUseCase
  ) {}

  public async handle(
    request: Request,
    response: Response
  ) {
    const productUpdateValidated = await ProductUpdateValidated(request)

      await this.updateProductUseCase
      .execute(productUpdateValidated)

    return response
      .status(StatusCodes.NO_CONTENT)
      .json({ data:"Product Updated with success" })
  }
}

export { UpdateProductController }