import { ProductsEntity } from "~/modules/products/domain/entities/productEntity"
import { IDocumentProductModel } from "../models/interface/IModelProduct"
import { Document, Types } from "mongoose"

interface IToDomain {
  raw: Document<unknown, {}, IDocumentProductModel> & IDocumentProductModel & {
    _id: Types.ObjectId;
  }
}
const toDomain = function({ raw }: IToDomain): ProductsEntity {

  return new ProductsEntity({
    name: raw.name,
    description: raw?.description,
    price: raw?.price,
    type: raw?.type,
  }, {
    id: raw._id,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    deletedAt: raw.deletedAt 
  })
}

const toMongo = function(entity: ProductsEntity) {
  return {
    _id: entity.id,
    name: entity.name,
    description: entity?.description,
    price: entity?.price,
    type: entity?.type,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
    deletedAt: entity.deletedAt
  }
}

export { toDomain, toMongo }