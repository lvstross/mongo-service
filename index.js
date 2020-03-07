const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = "mongodb://localhost/mern-books";

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Mongo connected"))
.catch(err => console.log(err));

app.use(bookRoutes);

app.listen(process.env.PORT || 5000);
