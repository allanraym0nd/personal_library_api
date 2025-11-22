const mongoose = require('mongoose')
const booksRepo = require('../repositories/books.repository')
const userRepo = require('../repositories/user.repository')

const create = async(bookData, userId) => {
    try{
        const newBook = await booksRepo.create(bookData)
        newBook.readerId = userId
        const reader = await userRepo.findById(userId)
        newBook.readerName = reader.name
        return newBook
    }catch(err){
        throw err

    }

}

const getBooks = async() => {
    try {
        const books = await booksRepo.find()
        return books
    }catch(err){
        throw err
    }
}

const getBook = async(id) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("Invalid book ID")
        } 

        const existingBook = await booksRepo.findById(id)
        if(existingBook) {
            return existingBook
        }else{
            throw new Error("Book not found.")
        }

    }catch(err){
        throw err

    }
}

const updateBook = async(bookId, updateData) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(bookId)){
            throw new Error("Invalid book ID")
        }
        const newUpdate = await booksRepo.updateData(bookId,updateData)
        return newUpdate
    }catch(err){
        throw err

    }

}

const deleteBook = async(bookId) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(bookId)){
            throw new Error("Invalid book ID")
        }
       await booksRepo.deleteBook(bookId)
      
    }catch(err){
        throw err

    }

}

module.exports = {
    create,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}