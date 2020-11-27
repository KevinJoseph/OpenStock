import {Router} from 'express'
const router = Router()

import * as movementsController from '../controllers/movement.controller'
import {authJwt} from '../middlewares'


//router.post('/',[authJwt.verifyToken, authJwt.isAdmin],productsController.createProduct)
router.post('/',movementsController.createMovement)

router.get('/', movementsController.getMovements)

router.get('/:movementId', movementsController.getMovementById)

router.put('/:movementId',movementsController.updateMovementById)

router.delete('/:movementId',movementsController.deleteMovementById)

export default router;