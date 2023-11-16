import { Schema, model } from "mongoose"
import { IDocumentProductModel } from "./interface/IModelProduct"
import { ProductTypeEnum } from "~/modules/products/domain/enums/productTypeEnum"

export const ProductModel = model<IDocumentProductModel>("Products", new Schema({
    _id: String,
    name: String,
    description: String,
    price: Number,
    type: {
        type:String,
        enum:ProductTypeEnum
    },
    deletedAt: Date,
    updatedAt: Date,
    createdAt: Date
}))
