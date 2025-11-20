require("dotenv").config()
const express = require("express")
const connectDB = require("./db")
const app = express()
const port = process.env.PORT

app.use(express.json()) // ensures that json objects are recognized
connectDB()


app.get('/', (req,res) => {
    res.send("This awesome Library API is running")
}) 

app.listen(port, () => {
    console.log(`server is listening from port ${port}`)
})