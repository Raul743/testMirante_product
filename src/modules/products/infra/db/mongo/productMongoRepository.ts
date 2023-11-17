import { toDomain, toMongo } from './mappers/mongoProductMapper'
import { IProductsRepository } from '~/modules/products/domain/repositories/productsRepository'
import { ProductsEntity } from '~/modules/products/domain/entities/productEntity'
import { ProductModel } from './models/products'

class ProductMongoRepository implements IProductsRepository {
  async findByName(name: string): Promise<ProductsEntity | null> {
    const product = await ProductModel.findOne({
      name,
      deletedAt: null
    })

    if(!product){
      return null
    }

    return toDomain({raw: product })
  }
  async insert(entity: ProductsEntity): Promise<void> {
   await ProductModel.create(toMongo(entity))
  }
  async findById(id: string): Promise<ProductsEntity | null> {
    const product = await ProductModel.findOne({
      _id: id,
      deletedAt: null
    })

    if(!product){
      return null
    }

    return toDomain({raw: product })
  }
  async findAll(): Promise<ProductsEntity[]> {
   const products = await ProductModel.find({
     deletedAt: null
   })
 
   const productsEntities = products.map((product) => {
       return toDomain({ raw:product  }) 
   })
   return productsEntities;
  }
  async update(entity: ProductsEntity): Promise<void> {
    await ProductModel.findByIdAndUpdate(entity.id, toMongo(entity))
  }
  async delete(id: string): Promise<void> {
    const date = Date.now()

    await ProductModel.findByIdAndUpdate(id, { deletedAt: date })
  }

}

export { ProductMongoRepository }