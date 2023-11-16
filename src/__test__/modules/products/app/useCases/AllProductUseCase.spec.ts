import { AllProductUseCase } from "~/modules/products/app/useCases/AllProductUseCase";
import { ProductsEntity } from "~/modules/products/domain/entities/productEntity";
import { categoryRepository } from "~/modules/products/domain/repositories/productsRepository";
import ProductsInMemoryRepository from "~/modules/products/infra/db/inMemory/repositories/productsInMemoryRepository";
import productMock from "../../mock/entities/productsMock";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";
import { ProductOutputMapper } from "~/modules/products/app/Dtos/productsOutput";
describe('List products use case', () => {

  const productsInMemoryRepository = new ProductsInMemoryRepository()

    // Should return an empty array when there are no products in the repository
    it('should return an empty array when there are no products in the repository', async () => {
    
      const useCase = new AllProductUseCase(productsInMemoryRepository);
      const result = await useCase.execute();
      expect(result).toEqual([]);
    });

    it('should return an array of ProductOutput when there are products in the repository', async () => {
      productsInMemoryRepository.items = [
        new ProductsEntity({
          name: 'Product 1',
          description: 'Description 1',
          price: 10,
          type: ProductTypeEnum.HEALTH,
        }),
        new ProductsEntity({
          name: 'Product 2',
          description: 'Description 2',
          price: 20,
          type: ProductTypeEnum.HEALTH,
        }),
      ]

      const useCase = new AllProductUseCase(productsInMemoryRepository);
      const result = await useCase.execute();
      expect(result).toEqual(productsInMemoryRepository.items.map(ProductOutputMapper.toOutput));
    });

    it('should return only non-deleted products', async () => {

      productsInMemoryRepository.items = [
        new ProductsEntity({
          name: 'Product 1',
          description: 'Description 1',
          price: 10,
          type: ProductTypeEnum.HEALTH,
        }),
        new ProductsEntity({
          name: 'Product 2',
          description: 'Description 2',
          price: 20,
          type: ProductTypeEnum.HEALTH,
        }),
      ]
      const useCase = new AllProductUseCase(productsInMemoryRepository);
      const result = await useCase.execute();
      expect(result[0]).toEqual(productsInMemoryRepository.items.map(ProductOutputMapper.toOutput)[0]);
    });
        // Should handle errors thrown by the ProductOutputMapper when mapping ProductsEntity to ProductOutput
        it('should handle errors thrown by the ProductOutputMapper when mapping ProductsEntity to ProductOutput', async () => {
     
          const error = new Error('Failed to map ProductsEntity to ProductOutput');
          jest.spyOn(ProductOutputMapper, 'toOutput').mockImplementation(() => {
            throw error;
          });
          const useCase = new AllProductUseCase(productsInMemoryRepository);
          await expect(useCase.execute()).rejects.toThrow(error);
        });

})

