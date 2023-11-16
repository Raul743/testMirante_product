import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'


import { DeleteProductUseCase } from '~/modules/products/app/useCases/deleteProductUseCase'
import { ProductDeleteValidated } from '../validators/validatorProductDeleteDto'

class DeleteProductController {
  constructor(
    private readonly deleteProductUseCase: DeleteProductUseCase
  ) {}

  public async handle(
    request: Request,
    response: Response
  ) {
    const productDeleteValidated = await ProductDeleteValidated(request)

     await this.deleteProductUseCase
      .execute(productDeleteValidated)

    return response
      .status(StatusCodes.NO_CONTENT)
      .json({ data: "Product Deleted with success" })
  }
}

export { DeleteProductController }