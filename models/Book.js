const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = Book = mongoose.model("Books", BookSchema);