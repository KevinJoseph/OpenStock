import {Router} from 'express'
const router = Router()

import * as productsController from '../controllers/product.controller'
import {authJwt} from '../middlewares'

//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)
router.post('/',[authJwt.verifyToken],productsController.createProduct)

router.get('/',[authJwt.verifyToken], productsController.getProducts)

router.get('/:productId',[authJwt.verifyToken], productsController.getProductById)

router.put('/:productId',[authJwt.verifyToken],productsController.updateProductById)

router.delete('/:productId',[authJwt.verifyToken],productsController.deleteProductById)

export default router;