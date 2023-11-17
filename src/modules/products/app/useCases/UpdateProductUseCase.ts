import UseCase from '~/base/app/useCases/useCase';
import { IProductsRepository } from '../../domain/repositories/productsRepository';
import { ProductTypeEnum } from '../../domain/enums/productTypeEnum';
import { EntityNotFound } from '~/shared/errors/entityNotFound';

export type Input = {
  id: string
  name?: string,
  description?: string | null
  price?: number | null
  type?: ProductTypeEnum
};

class UpdateProductUseCase implements UseCase<Input, void> {
  constructor(private readonly repository: IProductsRepository) {}
  async execute(input: Input): Promise<void> {
    const product = await this.repository.findById(input.id)

    if(!product || product.isDeleted){
      throw new EntityNotFound("Product")
    }
    
    product.name = input.name ??  product.name
    product.description = input.description ?? product.description
    product.price = input.price ?? product.price
    product.type = input.type ?? product.type

    await this.repository.update(product)
  }
}

export { UpdateProductUseCase };