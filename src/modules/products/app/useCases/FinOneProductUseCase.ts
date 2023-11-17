import UseCase from '~/base/app/useCases/useCase';
import { IProductsRepository } from '../../domain/repositories/productsRepository';
import { ProductOutput, ProductOutputMapper } from '../Dtos/productsOutput';
import { EntityNotFound } from '~/shared/errors/entityNotFound';

export type Input = {
  id: string,
};

class FindOneProductUseCase implements UseCase<Input, ProductOutput> {
  constructor(private readonly repository: IProductsRepository) {}
  async execute(input: Input): Promise<ProductOutput> {
    const product = await this.repository.findById(input.id)
    if(!product){
      throw new EntityNotFound("Product")
    }
    return ProductOutputMapper.toOutput(product)
  }
}

export { FindOneProductUseCase };