import Router from 'express';
import { productRouter } from '~/modules/products/infra/http/routes/productRouter';

const router = Router();

router.get('/', (_, res) => {
  return res.json('Bem-Vindo a api de produtos da Mirantes');
});

router.use('/products', productRouter)

export default router;
