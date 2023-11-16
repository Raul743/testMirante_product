

import { ProductMongoRepository } from '~/modules/products/infra/db/mongo/productMongoRepository'
import { DeleteProductController } from '../../../controllers/deleteProductController'
import { DeleteProductUseCase } from '~/modules/products/app/useCases/deleteProductUseCase'

const repository = new ProductMongoRepository()
const useCase = new DeleteProductUseCase(repository)
const controller = new DeleteProductController(useCase)

export default controller