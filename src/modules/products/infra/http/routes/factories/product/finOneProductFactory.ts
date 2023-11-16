

import { ProductMongoRepository } from '~/modules/products/infra/db/mongo/productMongoRepository'
import { FindOneProductController } from '../../../controllers/findOneProductController'
import { FindOneProductUseCase } from '~/modules/products/app/useCases/FinOneProductUseCase'

const repository = new ProductMongoRepository()
const useCase = new FindOneProductUseCase(repository)
const controller = new FindOneProductController(useCase)

export default controller