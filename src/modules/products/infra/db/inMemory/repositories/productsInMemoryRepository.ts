import { InMemoryRepository } from "~/base/domain/repositories/inMemoryRepository";
import { ProductsEntity } from "../../../../domain/entities/productEntity";
import { IProductsRepository} from "../../../../domain/repositories/productsRepository";

export class ProductsInMemoryRepository
  extends InMemoryRepository<ProductsEntity>
  implements IProductsRepository
{
  async findByName(name: string): Promise<ProductsEntity | null> {
    const item = this.items.find((i) => i.name === name);
    if (!item) {
     return null;
    }
    return item;
  }
}

export default ProductsInMemoryRepository;