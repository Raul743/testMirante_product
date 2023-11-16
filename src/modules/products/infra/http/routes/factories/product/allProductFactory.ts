

import { ProductMongoRepository } from '~/modules/products/infra/db/mongo/productMongoRepository'
import { AllProductController } from '../../../controllers/allProductController'
import { AllProductUseCase } from '~/modules/products/app/useCases/AllProductUseCase'

const repository = new ProductMongoRepository()
const useCase = new AllProductUseCase(repository)
const controller = new AllProductController(useCase)

export default controller