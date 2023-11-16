import { Document } from "mongoose"
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum"

export interface IDocumentProductModel extends Document {
    name: string,
    description?: string,
    price: number
    type: ProductTypeEnum,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}