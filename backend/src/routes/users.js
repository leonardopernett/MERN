const {Router } = require('express')
const router = Router()

const UserController = require('../controller/UserController.js')

router.get('/', UserController.index)
router.post('/', UserController.create)
router.delete('/:id', UserController.delete)
router.get('/:id', UserController.edit)
router.put('/:id', UserController.update)

module.exports = router