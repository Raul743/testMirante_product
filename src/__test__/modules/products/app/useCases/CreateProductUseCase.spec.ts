import { CreateProductUseCase, Input } from "~/modules/products/app/useCases/CreateProductUseCase";
import { ProductsEntity } from "~/modules/products/domain/entities/productEntity";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";
import { IProductsRepository } from "~/modules/products/domain/repositories/productsRepository";
import { EntityAlreadyExistError } from "~/shared/errors/entityAlreadyExistError";

describe('CreateProductUseCase', () => {
  

  // Should successfully create a new product when all required fields are provided
  it('should successfully create a new product when all required fields are provided', async () => {
    // Arrange
    const input: Input = {
      name: 'Test Product',
      type: ProductTypeEnum.HEALTH
    };

    const repositoryMock: IProductsRepository = {
      findByName: jest.fn().mockResolvedValue(null),
      insert: jest.fn(),
      findById:jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete:jest.fn()
    };

    const useCase = new CreateProductUseCase(repositoryMock);

    // Act
    await useCase.execute(input);

    // Assert
    expect(repositoryMock.findByName).toHaveBeenCalledWith(input.name);
    expect(repositoryMock.insert).toHaveBeenCalledWith(expect.any(ProductsEntity));
  });

  // Should successfully create a new product when only required fields are provided
  it('should successfully create a new product when only required fields are provided', async () => {
    // Arrange
    const input: Input = {
      name: 'Test Product',
      type: ProductTypeEnum.HEALTH
    };

    const repositoryMock: IProductsRepository = {
      findByName: jest.fn().mockResolvedValue(null),
      insert: jest.fn(),
      findById:jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete:jest.fn()
    };

    const useCase = new CreateProductUseCase(repositoryMock);

    // Act
    await useCase.execute(input);

    // Assert
    expect(repositoryMock.findByName).toHaveBeenCalledWith(input.name);
    expect(repositoryMock.insert).toHaveBeenCalledWith(expect.any(ProductsEntity));
  });

  // Should successfully create a new product when all fields are provided
  it('should successfully create a new product when all fields are provided', async () => {
    // Arrange
    const input: Input = {
      name: 'Test Product',
      description: 'Test Description',
      price: 10,
      type: ProductTypeEnum.TECHNOLOGY
    };

    const repositoryMock: IProductsRepository = {
      findByName: jest.fn().mockResolvedValue(null),
      insert: jest.fn(),
      findById:jest.fn(),
      findAll: jest.fn(),
      update: jest.fn(),
      delete:jest.fn()
    };

    const useCase = new CreateProductUseCase(repositoryMock);

    // Act
    await useCase.execute(input);

    // Assert
    expect(repositoryMock.findByName).toHaveBeenCalledWith(input.name);
    expect(repositoryMock.insert).toHaveBeenCalledWith(expect.any(ProductsEntity));
  });

});
