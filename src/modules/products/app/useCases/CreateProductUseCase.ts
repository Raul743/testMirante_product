import UseCase from '~/base/app/useCases/useCase';
import { categoryRepository } from '../../domain/repositories/productsRepository';
import { ProductTypeEnum } from '../../domain/enums/productTypeEnum';
import { ProductsEntity } from '../../domain/entities/productEntity';
import { EntityAlreadyExistError } from '~/shared/errors/entityAlreadyExistError';

export type Input = {
  name: string,
  description?: string | null
  price?: number | null
  type: ProductTypeEnum
};

class CreateProductUseCase implements UseCase<Input, void> {
  constructor(private readonly repository: categoryRepository) {}
  async execute(input: Input): Promise<void> {
    const productExist = await this.repository.findByName(input.name)

    if(productExist){
      throw new EntityAlreadyExistError()
    }

    const product = new ProductsEntity(input)
    await this.repository.insert(product);
  }
}

export { CreateProductUseCase };