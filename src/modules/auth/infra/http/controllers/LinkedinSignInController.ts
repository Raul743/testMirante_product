import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'

class LinkedinSignInController {
  public async handle(
    request: Request,
    response: Response
  ) {

    console.log(request)

    return response
      .status(StatusCodes.CREATED)
      .json({
        data: "created with success"
      })
  }
}

export { LinkedinSignInController }