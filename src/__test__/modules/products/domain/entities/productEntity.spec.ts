import { ProductsEntity, ProductsEntityProperties } from "~/modules/products/domain/entities/productEntity";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";
import { EntityAlreadyDeletedError } from "~/shared/errors/entityAlreadyDeletedError";

it('should create a new instance of ProductsEntity with valid properties', () => {
  const properties: ProductsEntityProperties = {
    name: 'Product 1',
    description: 'This is a product',
    price: 10,
    type: ProductTypeEnum.HEALTH
  };

  const product = new ProductsEntity(properties);

  expect(product).toBeInstanceOf(ProductsEntity);
  expect(product.name).toBe('Product 1');
  expect(product.description).toBe('This is a product');
  expect(product.price).toBe(10);
  expect(product.type).toBe(ProductTypeEnum.HEALTH);
});

    // Should be able to get and set the name property
    it('should get and set the name property', () => {

      const properties: ProductsEntityProperties = {
        name: 'Product 1',
        description: 'This is a product',
        price: 10,
        type: ProductTypeEnum.HEALTH
      };
    
      const product = new ProductsEntity(properties);

      product.name = 'Product 1';

      expect(product.name).toBe('Product 1');
    });

        // Should be able to get and set the description property
        it('should get and set the description property', () => {

          const properties: ProductsEntityProperties = {
            name: 'Product 1',
            description: 'This is a product',
            price: 10,
            type: ProductTypeEnum.HEALTH
          };

          const product = new ProductsEntity(properties);
    
          product.description = 'This is a product';
    
          expect(product.description).toBe('This is a product');
        });

        it('should throw an error if trying to delete an already deleted entity', () => {
          const properties: ProductsEntityProperties = {
            name: 'Product 1',
            description: 'This is a product',
            price: 10,
            type: ProductTypeEnum.HEALTH
          };
          const product = new ProductsEntity(properties);
          product.delete();
    
          expect(() => {
            product.delete();
          }).toThrow(EntityAlreadyDeletedError);
        });

            // Should be able to create a new instance of ProductsEntity with null properties
    it('should create a new instance of ProductsEntity with null properties', () => {
      const properties: ProductsEntityProperties = {
        name: 'Product 1',
        description: null,
        price: null,
        type: ProductTypeEnum.HEALTH
      };

      const product = new ProductsEntity(properties);

      expect(product).toBeInstanceOf(ProductsEntity);
      expect(product.name).toBe('Product 1');
      expect(product.description).toBeNull();
      expect(product.price).toBeNull();
      expect(product.type).toBe(ProductTypeEnum.HEALTH);
    });

        // Should be able to get and set the description property to null
        it('should get and set the description property to null', () => {
          const properties: ProductsEntityProperties = {
            name: 'Product 1',
            description: null,
            price: null,
            type: ProductTypeEnum.HEALTH
          };
          
          const product = new ProductsEntity(properties);
    
          product.description = null;
    
          expect(product.description).toBeNull();
        });