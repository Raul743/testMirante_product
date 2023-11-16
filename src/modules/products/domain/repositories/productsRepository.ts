import { RepositoryContract } from "~/base/domain/repositories/repositoryContract";
import { ProductsEntity } from "../entities/productEntity";

  export interface categoryRepository
    extends RepositoryContract<ProductsEntity> {
      findByName(name: string): Promise<ProductsEntity | null>;
    }
