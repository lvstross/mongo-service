const express = require('express');
const BookController = require('../controllers/BookController');
const router = express.Router();

router.get('/book', BookController.getAll);
router.get('/book/:bookId', BookController.getOne);
router.post('/book', BookController.create);
router.patch('/book/:bookId', BookController.update);
router.delete('/book/:bookId', BookController.delete);

module.exports = router;
