const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const { authMiddleware } = require('../middleware/auth.middleware')

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           format: password
 *       example:
 *         name: "John"
 *         email: "john@example.com"
 *         password: "strongPassword123"
 *
 *     UpdateUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "John"
 *       description: Allowed fields for updating a user.
 *
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           format: password
 *       example:
 *         email: "john@example.com"
 *         password: "strongPassword123"
 */

/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
router.post('/create', userController.createUser)

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post('/login', userController.loginUser)

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User retrieved successfully
 */
router.get('/get', authMiddleware, userController.getUser)

/**
 * @swagger
 * /users/update:
 *   patch:
 *     summary: Update user information
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     parameters:
 *       - name: id
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Invalid input
 */
router.patch('/update', authMiddleware, userController.updateUser)

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Update user information
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Invalid input
 */
router.delete('/delete', authMiddleware, userController.deleteUser)

module.exports = router