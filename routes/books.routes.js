const express = require('express')
const router = express.Router()
const booksController = require('../controllers/books.controller')
const { authMiddleware } = require('../middleware/auth.middleware')

/**
 * @swagger
 * components:
 *   schemas:
 *     Books:
 *       type: object
 *       required:
 *         - bookName
 *         - authorName
 *         - bookSummary
 *         - bookURL
 *         - dateAdded
 *         - nameOfReader
 *       properties:
 *         bookName:
 *           type: string
 *         authorName:
 *           type: string
 *         bookSummary:
 *           type: string
 *         bookURL:
 *           type: string
 *         dateAdded:
 *           type: string
 *           format: date
 *         nameOfReader:
 *           type: object
 *           properties:
 *             _id:
 *               type: string
 *             name:
 *               type: string
 *       example:
 *         bookName: "The Chronicles of Narnia"
 *         authorName: "C.S. Lewis"
 *         bookSummary: "Siblings are evacuated from London during World War II and find a portal to a magical land."
 *         bookURL: "https://linktobook.com"
 *         dateAdded: "2025-09-15"
 *         nameOfReader:
 *           _id: "650fa8d9f1c2b4a39c8d1234"
 *           name: "John"
 *
 *     UpdateBook:
 *       type: object
 *       properties:
 *         bookName:
 *           type: string
 *         bookSummary:
 *           type: string
 *         bookURL:
 *           type: string
 *       example:
 *         bookSummary: "Siblings find a portal to a magical land."
 *         bookURL: "https://link1tobook.com"
 */

/**
 * @swagger
 * /books/create:
 *   post:
 *     summary: Create a new book entry
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Books'
 *     responses:
 *       201:
 *         description: Book entry created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/create', authMiddleware, booksController.createBook)

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get the books listed
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Books retrieved successfully
 *       400:
 *         description: Invalid input
 */
router.get('/', authMiddleware, booksController.getBooks)

/**
 * @swagger
 * /books/get:
 *   get:
 *     summary: Get a specific book
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book retrieved successfully
 *       400:
 *         description: Invalid input
 */
router.get('/get', authMiddleware, booksController.getBook)

/**
 * @swagger
 * /books/update:
 *   patch:
 *     summary: Update book information
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateBook'
 *     parameters:
 *       - name: id
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Invalid input
 */
router.patch('/update', authMiddleware, booksController.updateBook)

/**
 * @swagger
 * /books/delete:
 *   delete:
 *     summary: Delete a specific book
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       400:
 *         description: Invalid input
 */
router.delete('/delete', authMiddleware, booksController.deleteBook)

module.exports = router