require('dotenv').config
const mongoose =require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log('Database Conected Successfully')

    }catch(err){
        console.log(`A database connection error occurred: ${err.message}`)
    }
}

module.exports = connectDB