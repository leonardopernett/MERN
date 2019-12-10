const {Router } = require('express')
const router = Router()

const NoteController = require('../controller/NoteController.js')

router.get('/', NoteController.index)
router.post('/', NoteController.create)
router.delete('/:id', NoteController.delete)
router.get('/:id', NoteController.edit)
router.put('/:id', NoteController.update)

module.exports = router