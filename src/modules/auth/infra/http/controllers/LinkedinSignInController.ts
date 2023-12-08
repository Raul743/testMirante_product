import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { LinkedinSignInUseCase } from '~/modules/auth/app/useCases/linkdinSignIn/LinkedinSignInUseCase'

class LinkedinSignInController {

  constructor(
    private readonly linkedinSignInUseCase: LinkedinSignInUseCase
  ) {}
  public async handle(
    request: Request,
    response: Response
  ) {

    const link = await this.linkedinSignInUseCase.execute()

    return response
      .status(StatusCodes.CREATED)
      .redirect(`https://linkedin.com/oauth/v2/authorization?client_id=77fnj0n7gvw7c0&response_type=code&scope=profile+email&redirect_uri=http://localhost:3000/v1/auth/linkedin/redirect`)
  }
}

export { LinkedinSignInController }