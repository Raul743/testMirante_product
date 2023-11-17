import UseCase from '~/base/app/useCases/useCase';
import { IProductsRepository } from '../../domain/repositories/productsRepository';
import { EntityNotFound } from '~/shared/errors/entityNotFound';

export type Input = {
  id: string,
};

class DeleteProductUseCase implements UseCase<Input, void> {
  constructor(private readonly repository: IProductsRepository) {}
  async execute(input: Input): Promise<void> {
    const product = await this.repository.findById(input.id)
   
    if(!product || product.isDeleted){
      throw new EntityNotFound("Product")
    }

    product.delete()
    await this.repository.update(product)
  }
}

export { DeleteProductUseCase };