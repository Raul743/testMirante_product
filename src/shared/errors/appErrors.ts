import { IAppError } from "./interfaces/IAppError"

class AppError extends Error {
  public readonly name: string
  public readonly message: string
  public readonly statusCode: number

  constructor({
    name,
    message,
    statusCode
  }: IAppError) {
    super(message)

    this.name = name
    this.message = message
    this.statusCode = statusCode
  }
}

export { AppError };
