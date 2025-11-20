const mongoose = require('mongoose')
const booksSchema = new mongoose.Schema({
       bookName: {
        type: String,
        required: [true, "Book name is required"],
        trim: true
    },
    authorName: {
        type: String,
        required: [true, "Author name is required"],
        trim: true
    },
    bookSummary: {
        type: String,
        required: [true, "Book summary is required"]
    },
    bookURL: {
        type: String,
        required: [false, "Book url is optional"]
    },
    readerId: {
        type: mongoose.Schema.Types.ObjectId, // stores a MongoDB _id value
        ref:"User",
        required:false,
        trim:true
    },
    readerName: {
        type: String,
        ref: "User",
        required: false,
        trim: true
    },

},{timestamps:true})

module.exports = mongoose.model('Books', booksSchema)