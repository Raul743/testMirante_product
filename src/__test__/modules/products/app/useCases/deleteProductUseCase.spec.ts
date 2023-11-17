import { DeleteProductUseCase } from "~/modules/products/app/useCases/deleteProductUseCase";
import { IProductsRepository } from "~/modules/products/domain/repositories/productsRepository";
import { EntityNotFound } from "~/shared/errors/entityNotFound";

describe('DeleteProductUseCase', () => {

  // Should delete a product successfully when given a valid product id
  it('should delete a product successfully when given a valid product id', async () => {
    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({ id: 'validId', isDeleted: false, delete: jest.fn() }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };

    const deleteProductUseCase = new DeleteProductUseCase(repositoryMock);
    await deleteProductUseCase.execute({ id: 'validId' });
    expect(repositoryMock.findById).toHaveBeenCalledWith('validId');
    expect(repositoryMock.update).toHaveBeenCalledWith({ id: 'validId', isDeleted: false, delete:expect.any(Function)});
  });

  // Should throw an EntityNotFound error when given an invalid product id
  it('should throw an EntityNotFound error when given an invalid product id', async () => {
    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue(null),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };
    const deleteProductUseCase = new DeleteProductUseCase(repositoryMock);
    await expect(deleteProductUseCase.execute({ id: 'invalidId' })).rejects.toThrow(EntityNotFound);
    expect(repositoryMock.findById).toHaveBeenCalledWith('invalidId');
    expect(repositoryMock.update).not.toHaveBeenCalled();
  });

  // Should throw an EntityNotFound error when given a deleted product id
  it('should throw an EntityNotFound error when given a deleted product id', async () => {
    const repositoryMock = {
      findById: jest.fn().mockResolvedValue({ id: 'deletedId', isDeleted: true }),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };
    const deleteProductUseCase = new DeleteProductUseCase(repositoryMock);
    await expect(deleteProductUseCase.execute({ id: 'deletedId' })).rejects.toThrow(EntityNotFound);
    expect(repositoryMock.findById).toHaveBeenCalledWith('deletedId');
    expect(repositoryMock.update).not.toHaveBeenCalled();
  });

  // Should throw an error if repository.findById() throws an error
  it('should throw an error if repository.findById() throws an error', async () => {
    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockRejectedValue(new Error('findById error')),
      update: jest.fn(),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };
    const deleteProductUseCase = new DeleteProductUseCase(repositoryMock);
    await expect(deleteProductUseCase.execute({ id: 'validId' })).rejects.toThrow(Error);
    expect(repositoryMock.findById).toHaveBeenCalledWith('validId');
    expect(repositoryMock.update).not.toHaveBeenCalled();
  });

  // Should throw an error if repository.update() throws an error
  it('should throw an error if repository.update() throws an error', async () => {
    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockResolvedValue({ id: 'validId', isDeleted: false, delete: jest.fn() }),
      update: jest.fn().mockRejectedValue(new Error('update error')),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };
    const deleteProductUseCase = new DeleteProductUseCase(repositoryMock);
    await expect(deleteProductUseCase.execute({ id: 'validId' })).rejects.toThrow(Error);
    expect(repositoryMock.findById).toHaveBeenCalledWith('validId');
    expect(repositoryMock.update).toHaveBeenCalledWith({ id: 'validId', isDeleted: false, delete: expect.any(Function) });
  });

  // Should handle and log errors gracefully
  it('should handle and log errors gracefully', async () => {
    const repositoryMock: IProductsRepository = {
      findById: jest.fn().mockRejectedValue(new Error('findById error')),
      update: jest.fn().mockRejectedValue(new Error('update error')),
      insert: jest.fn(),
      findAll: jest.fn(),
      delete:jest.fn(),
      findByName:jest.fn(),
    };
    const deleteProductUseCase = new DeleteProductUseCase(repositoryMock);
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    await expect(deleteProductUseCase.execute({ id: 'validId' })).rejects.toThrow(Error);
    expect(repositoryMock.findById).toHaveBeenCalledWith('validId');
    expect(repositoryMock.update).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});
