import create from './create'
import deleteProduct from './delete'
import list from './list'
import update from './update'

export default {
  ...list,
  ...create,
  ...update,
  ...deleteProduct
}