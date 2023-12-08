import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { LinkedinSignInCallBackUseCase } from '~/modules/auth/app/useCases/linkdinSignIn/LinkedinSignInCallBackUseCase'

class LinkedinSignInCallBackController {

  constructor(
    private readonly linkedinSignInCallBackUseCase: LinkedinSignInCallBackUseCase
  ) {}
  public async handle(
    request: Request<unknown, unknown, unknown, any >,
    response: Response
  ) {

    const data = await this.linkedinSignInCallBackUseCase.execute(request.query.code)
    
    return response
      .status(StatusCodes.CREATED)
      .json(data)
      
}
}

export { LinkedinSignInCallBackController }