import {Router} from 'express'
const router = Router()

import * as productsController from '../controllers/product.controller'
import {authJwt} from '../middlewares'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)
router.post('/',productsController.createProduct)

router.get('/', productsController.getProducts)

router.get('/:productId', productsController.getProductById)

router.put('/:productId',productsController.updateProductById)

router.delete('/:productId',productsController.deleteProductById)

export default router;