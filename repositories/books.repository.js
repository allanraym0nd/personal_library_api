const Books = require('../models/books.model')

const create = async(bookData) => {
    const book = Books(bookData)
    await book.Save()
}

const find = async() => {
    return Books.find()
}

const findById = async(id) => {
    return Books.findById(id)
}

const findByEmail = async(email) => {
    return Books.findOne({email})
}

const updateData = async(id, updateData) => {
    return Books.findByIdAndUpdate(id, updateData, {new: true})
}

const deleteData = async(id) => {
    return Books.findByIdAndDelete(id)
}

module.exports = {
    create,
    find,
    findById,
    findByEmail,
    updateData,
    deleteData
}