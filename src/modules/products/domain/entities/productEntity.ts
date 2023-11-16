import { SoftDeletableEntity } from "~/base/domain/entities/softDeletableEntity"
import { ProductTypeEnum } from "../enums/productTypeEnum"

type ProductsEntityProperties = {
  name: string,
  description?: string | null
  price?: number | null
  type: ProductTypeEnum
} 

class ProductsEntity extends SoftDeletableEntity<ProductsEntityProperties> {
    private _name: string
    private _description: string | null
    private _price: number | null
    private _type: ProductTypeEnum

    public get name() {
      return this._name
    }
  
    public set name(value: string) {
    
      this._name = value
    }

    public get description() {
      return this._description
    }
  
    public set description(value: string | null) {
      this._description = value
    }

    public get price() {
      return this._price
    }
  
    public set price(value: number | null) {
      this._price = value
    }

    public get type() {
      return this._type
    }
  
    public set type(type: ProductTypeEnum) {
      this._type = type
    }
  
 }

 export { ProductsEntity, ProductsEntityProperties }