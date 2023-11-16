import { ProductsEntity , ProductsEntityProperties} from "~/modules/products/domain/entities/productEntity";
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum";

export default function productMock(override: Partial<ProductsEntityProperties> = {}) {
  return new ProductsEntity({
    name: 'Product 2',
    description: 'Description 2',
    price: 20,
    type: ProductTypeEnum.HEALTH ,
    ...override
  })
}