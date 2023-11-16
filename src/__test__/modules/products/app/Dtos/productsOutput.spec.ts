import { ProductOutputMapper } from "~/modules/products/app/Dtos/productsOutput";
import { ProductsEntity, ProductsEntityProperties } from "~/modules/products/domain/entities/productEntity";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";

    // Should return a ProductOutput object with all properties filled when given a ProductsEntity with all properties filled
    it('should return a ProductOutput object with all properties filled when given a ProductsEntity with all properties filled', () => {
      // Arrange

      const properties: ProductsEntityProperties = {
        name: 'Product 1',
        description: 'This is a product',
        price: 10,
        type: ProductTypeEnum.HEALTH
      };

      const entity = new ProductsEntity(properties);
      entity.name = "Test Product";
      entity.description = "Test Description";
      entity.price = 10.99;
      entity.type = ProductTypeEnum.HEALTH;
      entity.updatedAt = new Date();
      entity.deletedAt = null;

      // Act
      const output = ProductOutputMapper.toOutput(entity);

      // Assert
      expect(output).toEqual({
        id: expect.any(String),
        name: "Product 1",
        description: "This is a product",
        price: 10,
        type: ProductTypeEnum.HEALTH,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
