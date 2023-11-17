import { ProductOutputMapper } from "~/modules/products/app/Dtos/productsOutput";
import { FindOneProductUseCase } from "~/modules/products/app/useCases/FinOneProductUseCase";
import { ProductsEntity, ProductsEntityProperties } from "~/modules/products/domain/entities/productEntity";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";
import { EntityNotFound } from "~/shared/errors/entityNotFound";

describe('FindOneProductUseCase', () => {

  // Should return a ProductOutput when a valid id is provided and the product is found in the repository
  it('should return a ProductOutput when a valid id is provided and the product is found in the repository', async () => {
    // Arrange
    const input = { id: 'validId' };
    const properties: ProductsEntityProperties = {
      name: 'Product 1',
      description: 'This is a product',
      price: 10,
      type: ProductTypeEnum.HEALTH
    };
  
    const product = new ProductsEntity(properties);
    const repositoryMock = {
      findById: jest.fn().mockResolvedValue(product),
      findAll: jest.fn(),
      update: jest.fn(),
      delete:jest.fn(),
      findByName: jest.fn(),
      insert: jest.fn(),
    };
    const useCase = new FindOneProductUseCase(repositoryMock);

    // Act
    const result = await useCase.execute(input);

    // Assert
    expect(repositoryMock.findById).toHaveBeenCalledWith(input.id);
    expect(result).toEqual(ProductOutputMapper.toOutput(product));
  });

  // Should throw an EntityNotFound error when a non-existent id is provided
  it('should throw an EntityNotFound error when a non-existent id is provided', async () => {
    // Arrange
    const input = { id: 'nonExistentId' };
    const repositoryMock = {
      findById: jest.fn().mockResolvedValue(null),
      findAll: jest.fn(),
      update: jest.fn(),
      delete:jest.fn(),
      findByName: jest.fn(),
      insert: jest.fn(),
    };
    const useCase = new FindOneProductUseCase(repositoryMock);

    // Act & Assert
    await expect(useCase.execute(input)).rejects.toThrow(EntityNotFound);
  });

  // Should throw an error when the repository throws an unexpected error
  it('should throw an error when the repository throws an unexpected error', async () => {
    // Arrange
    const input = { id: 'validId' };
    const repositoryMock = {
      findById: jest.fn().mockRejectedValue(new Error('Unexpected error')),
      findAll: jest.fn(),
      update: jest.fn(),
      delete:jest.fn(),
      findByName: jest.fn(),
      insert: jest.fn(),
    };
    const useCase = new FindOneProductUseCase(repositoryMock);

    // Act & Assert
    await expect(useCase.execute(input)).rejects.toThrow(Error);
  });
});
