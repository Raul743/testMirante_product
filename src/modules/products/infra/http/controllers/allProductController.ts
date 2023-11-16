import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'


import { AllProductUseCase } from '~/modules/products/app/useCases/AllProductUseCase'

class AllProductController {
  constructor(
    private readonly allProductUseCase: AllProductUseCase
  ) {}

  public async handle(
    request: Request,
    response: Response
  ) {

    const data = await this.allProductUseCase
      .execute()

    return response
      .status(StatusCodes.OK)
      .json({ data })
  }
}

export { AllProductController }