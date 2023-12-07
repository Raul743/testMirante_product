import { ProductMongoRepository } from '~/modules/products/infra/db/mongo/productMongoRepository'
import { CreateProductController } from '../../../controllers/createProductController'
import { CreateProductUseCase } from '~/modules/products/app/useCases/CreateProductUseCase'

const repository = new ProductMongoRepository()
const useCase = new CreateProductUseCase(repository)
const controller = new CreateProductController(useCase)

export default controller