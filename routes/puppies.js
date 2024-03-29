import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

// ========== Public Routes ===========
router.post('/', puppiesCtrl.create)
router.get('/', puppiesCtrl.index)
router.get('/:puppyId', puppiesCtrl.show)
router.delete('/:puppyId', puppiesCtrl.delete)
router.put('/:puppyId', puppiesCtrl.update)

export {
  router
}