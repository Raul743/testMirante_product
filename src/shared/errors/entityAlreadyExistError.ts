import { StatusCodes } from 'http-status-codes'
import { AppError } from './appErrors'

class EntityAlreadyExistError extends AppError {
  constructor() {
    super({
      name: 'Product already deleted',
      message: 'Selected Product was already created',
      statusCode: StatusCodes.NOT_FOUND
    })
  }
}

export { EntityAlreadyExistError }