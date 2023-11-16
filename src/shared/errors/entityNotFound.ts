import { AppError } from "./appErrors"

class EntityNotFound extends AppError {
  constructor(entity: string) {
    super({
      name: 'ENTITY_NOT_FOUND',
      message: `Entity ${entity} could not found`,
      statusCode: 404
    })
  }
}

export { EntityNotFound }