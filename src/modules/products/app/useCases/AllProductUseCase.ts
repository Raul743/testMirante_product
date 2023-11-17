import UseCase from '~/base/app/useCases/useCase';
import { IProductsRepository } from '../../domain/repositories/productsRepository';
import { ProductOutput, ProductOutputMapper } from '../Dtos/productsOutput';

class AllProductUseCase implements UseCase<void, ProductOutput[]> {
  constructor(private readonly repository: IProductsRepository) {}
  async execute(): Promise<ProductOutput[]> {
    const products = await this.repository.findAll()   
    return products.map(ProductOutputMapper.toOutput)
  }
}

export { AllProductUseCase };