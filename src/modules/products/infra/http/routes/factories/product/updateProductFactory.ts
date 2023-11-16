

import { ProductMongoRepository } from '~/modules/products/infra/db/mongo/productMongoRepository'
import { UpdateProductController } from '../../../controllers/updateProductController'
import { UpdateProductUseCase } from '~/modules/products/app/useCases/UpdateProductUseCase'

const repository = new ProductMongoRepository()
const useCase = new UpdateProductUseCase(repository)
const controller = new UpdateProductController(useCase)

export default controller