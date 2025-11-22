require("dotenv").config()
const express = require("express")
const connectDB = require("./db")
const app = express()
const port = process.env.PORT
const userRoutes = require('./routes/user.routes')
const booksRoutes = require('./routes/books.routes')
const swagger = require('./swagger')
const setUpSwagger = require("./swagger")
setUpSwagger(app)


app.use(express.json()) // ensures that json objects are recognized
connectDB()

app.use('/users', userRoutes)
app.use('/books', booksRoutes)

app.get('/', (req,res) => {
    res.send("This awesome Library API is running")
}) 

app.listen(port, () => {
    console.log(`server is listening from port ${port}`)
})