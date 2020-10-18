import {Router} from 'express'
const router = Router()

import * as productsController from '../controllers/products.controller'
import {authJwt} from '../middlewares'

router.post('/',productsController.createProduct)

router.get('/', productsController.getProducts)

router.get('/:productId', productsController.getProductById)

router.put('/:productId',productsController.updateProductById)

router.delete('/:productId',productsController.deleteProductById)

export default router;