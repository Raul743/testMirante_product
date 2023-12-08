import Router from 'express';
import { authRouter } from '~/modules/auth/infra/http/routes/authRouter';
import { productRouter } from '~/modules/products/infra/http/routes/productRouter';

const router = Router();

router.get('/', (_, res) => {
  return res.json('Bem-Vindo a api de produtos da Mirantes');
});

router.use('/products', productRouter)
router.use('/auth', authRouter)

export default router;
