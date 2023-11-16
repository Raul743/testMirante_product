import { ProductsEntity } from "../../domain/entities/productEntity";
import { ProductTypeEnum } from "../../domain/enums/productTypeEnum";

export type ProductOutput = {
  id: string;
  name: string,
  description?: string | null
  price?: number | null
  type: ProductTypeEnum
  createdAt: Date | null
  updatedAt: Date | null
  deletedAt?: Date | null
};

export class ProductOutputMapper {
  static toOutput(entity: ProductsEntity): ProductOutput {
    return entity.toJSON() 
  }
}