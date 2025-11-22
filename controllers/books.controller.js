const booksService = require('../services/books.service')

const createBook = async(req, res) => {
    try {
        const newBook = await booksService.createBook(req.body)
        res.status(201).json({message: "Book added successfully", data: newBook})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const getBooks = async(req, res) => {
    try {
        const books = await booksService.getBooks()
        res.status(200).json({message: "Books retrieved successfully", data: books})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const getBook = async(req, res) => {
    try {
        const bookId = req.query.id
        const book = await booksService.getBook(id)
        res.status(200).json({message: "Book retrieved successfully", data: book})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const updateBook = async(req, res) => {
    try {
        const bookId = req.query.id
        const book = await booksService.updateBook(bookId, req.body)
        res.status(200).json({message: "Book updated successfully", data: book})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const deleteBook = async(req, res) => {
    try {
        const bookId = req.query.id
        await booksService.deleteBook(bookId)
        res.status(200).json({message: "Book deleted successfully"})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

module.exports = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook
}