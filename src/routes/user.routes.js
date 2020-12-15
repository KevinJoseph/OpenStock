import {Router} from 'express'
const router = Router()

import * as userController from '../controllers/user.controller'
import {authJwt, verifySignup} from '../middlewares'

//Example post user
router.post('/',userController.createUser)

router.get('/', userController.getUsers)

router.get('/:userId', userController.getUserById)

router.put('/:userId',userController.updateUserById)

router.delete('/:userId',userController.deleteUserById)

export default router;