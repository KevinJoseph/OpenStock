import {Router} from 'express'
const router = Router()

import * as roleController from '../controllers/role.controller'
import {authJwt} from '../middlewares'

router.post('/',roleController.createRole)

router.get('/', roleController.getRoles)

router.get('/:roleId', roleController.getRoleById)

router.put('/:roleId',roleController.updateRoleById)

router.delete('/:roleId',roleController.deleteRoleById)

export default router;