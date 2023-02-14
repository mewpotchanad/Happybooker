const express = require('express');

const ebookController = require('../controllers/ebook-controller')

const router = express.Router()

router.get('/', ebookController.getAllEbook)

router.get('/:ebookId', ebookController.getEbookById )

router.post('/:ebookId/:userId', ebookController.createEbookToShelf )

router.get('/shelf/:userId', ebookController.getShowEbookFromShelf)

module.exports = router