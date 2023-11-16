import { AppError } from './appErrors'

class EntityAlreadyDeletedError extends AppError {
  constructor() {
    super({
      name: 'Entity already deleted',
      message: 'Selected entity was already deleted',
      statusCode: 404
    })
  }
}

export { EntityAlreadyDeletedError }