import { Input, UpdateProductUseCase } from "~/modules/products/app/useCases/UpdateProductUseCase";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";
import { IProductsRepository } from "~/modules/products/domain/repositories/productsRepository";
import { EntityNotFound } from "~/shared/errors/entityNotFound";

describe('UpdateProductUseCase', () => {

  // Should update a product with valid input
  it('should update a product with valid input', async () => {
    // Arrange
    const input: Input = {
      id: '1',
      name: 'New Product Name',
      description: 'New Product Description',
      price: 10,
      type: ProductTypeEnum.HEALTH
    };

    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({
        id: '1',
        name: 'Old Product Name',
        description: 'Old Product Description',
        price: 5,
        type: ProductTypeEnum.HEALTH,
        isDeleted: false
      }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const updateProductUseCase = new UpdateProductUseCase(repositoryMock);

    // Act
    await updateProductUseCase.execute(input);

    // Assert
    expect(repositoryMock.findById).toHaveBeenCalledWith('1');
    expect(repositoryMock.update).toHaveBeenCalledWith({
      id: '1',
      name: 'New Product Name',
      description: 'New Product Description',
      price: 10,
      type: ProductTypeEnum.HEALTH,
      isDeleted: false
    });
  });

  // Should update a product with only name input
  it('should update a product with only name input', async () => {
    // Arrange
    const input: Input = {
      id: '1',
      name: 'New Product Name'
    };

    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({
        id: '1',
        name: 'Old Product Name',
        description: 'Old Product Description',
        price: 5,
        type: ProductTypeEnum.HEALTH,
        isDeleted: false
      }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const updateProductUseCase = new UpdateProductUseCase(repositoryMock);

    // Act
    await updateProductUseCase.execute(input);

    // Assert
    expect(repositoryMock.findById).toHaveBeenCalledWith('1');
    expect(repositoryMock.update).toHaveBeenCalledWith({
      id: '1',
      name: 'New Product Name',
      description: 'Old Product Description',
      price: 5,
      type: ProductTypeEnum.HEALTH,
      isDeleted: false
    });
  });

  // Should update a product with only description input
  it('should update a product with only description input', async () => {
    // Arrange
    const input: Input = {
      id: '1',
      description: 'New Product Description'
    };

    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({
        id: '1',
        name: 'Old Product Name',
        description: 'Old Product Description',
        price: 5,
        type: ProductTypeEnum.HEALTH,
        isDeleted: false
      }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const updateProductUseCase = new UpdateProductUseCase(repositoryMock);

    // Act
    await updateProductUseCase.execute(input);

    // Assert
    expect(repositoryMock.findById).toHaveBeenCalledWith('1');
    expect(repositoryMock.update).toHaveBeenCalledWith({
      id: '1',
      name: 'Old Product Name',
      description: 'New Product Description',
      price: 5,
      type: ProductTypeEnum.HEALTH,
      isDeleted: false
    });
  });

  // Should throw an EntityNotFound error when product is not found
  it('should throw an EntityNotFound error when product is not found', async () => {
    // Arrange
    const input: Input = {
      id: '1',
      name: 'New Product Name'
    };

    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue(null),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const updateProductUseCase = new UpdateProductUseCase(repositoryMock);

    // Act & Assert
    await expect(updateProductUseCase.execute(input)).rejects.toThrow(EntityNotFound);
  });

  // Should update a product with null name input
  it('should update a product with null name input', async () => {
    // Arrange
    const input: Input = {
      id: '1',
      name: 'Old Product Name'
    };

    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({
        id: '1',
        name: 'Old Product Name',
        description: 'Old Product Description',
        price: 5,
        type: ProductTypeEnum.HEALTH,
        isDeleted: false
      }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const updateProductUseCase = new UpdateProductUseCase(repositoryMock);

    // Act
    await updateProductUseCase.execute(input);

    // Assert
    expect(repositoryMock.findById).toHaveBeenCalledWith('1');
    expect(repositoryMock.update).toHaveBeenCalledWith({
      id: '1',
      name: 'Old Product Name',
      description: 'Old Product Description',
      price: 5,
      type: ProductTypeEnum.HEALTH,
      isDeleted: false
    });
  });

  // Should update a product with null description input
  it('should update a product with null description input', async () => {
    // Arrange
    const input: Input = {
      id: '1',
      description: "Old Product Description"
    };

    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({
        id: '1',
        name: 'Old Product Name',
        description: 'Old Product Description',
        price: 5,
        type: ProductTypeEnum.HEALTH,
        isDeleted: false
      }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const updateProductUseCase = new UpdateProductUseCase(repositoryMock);

    // Act
    await updateProductUseCase.execute(input);

    // Assert
    expect(repositoryMock.findById).toHaveBeenCalledWith('1');
    expect(repositoryMock.update).toHaveBeenCalledWith({
      id: '1',
      name: 'Old Product Name',
      description: 'Old Product Description',
      price: 5,
      type: ProductTypeEnum.HEALTH,
      isDeleted: false
    });
  });
});
