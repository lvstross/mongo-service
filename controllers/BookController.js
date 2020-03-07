const Book = require('../models/Book');

exports.getAll = (req, res) => {
  Book.find({})
    .then(books => res.json(books))
    .catch(err => res.json(err));
};

exports.getOne = (req, res) => {
  Book.findOne({ _id: req.params.bookId })
    .then(book => res.json(book))
    .catch(err => res.json(err));
};

exports.create = (req, res) => {
  const newBook = new Book({
      title: req.body.title,
      description: req.body.description,
      isInStock: req.body.isInStock,
      price: req.body.price
  });

  Book.create(newBook)
    .then(book => res.json(book))
    .catch(err => res.json(err));
};

exports.update = (req, res) => {
  Book.updateOne({ _id: req.params.bookId }, { ...req.body })
    .then(book => res.json(book))
    .catch(err => res.json(err));
};

exports.delete = (req, res) => {
  Book.deleteOne({ _id: req.params.bookId })
    .then(book => res.json(book))
    .catch(err => res.json(err));
};
