import { type Request, type Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { GoogleSignInUseCase } from '~/modules/auth/app/useCases/googleSignIn/GoogleSignInUseCase'
import { googleSignInValidator } from '../validators/GoogleSignInValidator'


class GoogleSignInController {
  constructor(
    private readonly googleSignInUseCase: GoogleSignInUseCase
  ) {}

  public async handle(
    request: Request,
    response: Response
  ) {
    const googleSignInValidated = await googleSignInValidator(request)

     await this.googleSignInUseCase.execute(googleSignInValidated)

    return response
      .status(StatusCodes.CREATED)
      .json({
        data: "created with success"
      })
  }
}

export { GoogleSignInController }