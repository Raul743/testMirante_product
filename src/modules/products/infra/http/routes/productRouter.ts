import { Router } from 'express'

import ProductProductFactory from './factories/product/createProductFactory'
import AllProductFactory from './factories/product/allProductFactory'
import FindOneProductFactory from './factories/product/finOneProductFactory'
import UpdateProductFactory from './factories/product/updateProductFactory'
import DeleteProductFactory from './factories/product/deleteProductFactory'

const productRouter = Router({ mergeParams: true })

productRouter.post(
  '/',
  async(req, res) => await ProductProductFactory.handle(req, res)
)

productRouter.get(
  '/',
  async(req, res) => await AllProductFactory.handle(req, res)
)

productRouter.get(
  '/:id',
  async(req, res) => await FindOneProductFactory.handle(req, res)
)

productRouter.put(
  '/:id',
  async(req, res) => await UpdateProductFactory.handle(req, res)
)

productRouter.delete(
  '/:id',
  async(req, res) => await DeleteProductFactory.handle(req, res)
)
export { productRouter }