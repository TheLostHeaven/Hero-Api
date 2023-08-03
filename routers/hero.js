const express = require('express')
const router = express.Router()
const heroControllers = require('../controllers/hero')

router.get('/', heroControllers.get)
router.get('/:id', heroControllers.getById)
router.post('/create', heroControllers.create)
router.patch('/update/:id', heroControllers.update)
router.delete('/delete/:id', heroControllers.delete)

module.exports = router
