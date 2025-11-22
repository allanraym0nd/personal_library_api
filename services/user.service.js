const mongoose = require('mongoose')
const userRepo = require('../repositories/user.repository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async(userData) => {
    try{
        const existingUser = await userRepo.findByEmail(userData.email)
        if(!existingUser){
            const newUser = userRepo.create(userData) 
            return newUser
        }else {
            throw new Error("User already exists. Kindly login.")
        }

    }catch(error){
        throw err

    }

}

const loginUser = async(loginData) => {
    try{
        const existingUser = await userRepo.findByEmail(loginData.email)
        const validPassword = await bcrypt.compare(loginData.password, existingUser.password)

        if(existingUser && validPassword) {
            const authToken = jwt.sign(
                {id:existingUser._id, email:existingUser.email},
                process.env.JWT_SECRET,
                {expiresIn:"1h"}
            )
            return {existingUser, authToken}
        } else {
            throw new Error ("Invalid login credentials.")
        }

    }catch(err){
        throw err

    }


}

const getUser = async(userId) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            throw new Error("Invalid user Id")
        }

        const user  = await userRepo.findById(userId)

        if(userId){
            return user
        }else{
            throw new Error("You are not authorized to view this data")
        }

    }catch(err){
        throw err

    }

}

const updateUser = async (userId, userData) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            throw new Error("Invalid user ID")
        }

        const newUpdate = await userRepo.updateData(userId, userData)
        return newUpdate

    }catch(err){
        throw err
    }

}

const deleteUser = async (userId) => {
    try{
        if(!mongoose.Types.ObjectId.isValid(userId)){
            throw new Error("Invalid User Id")
        }

        await userRepo.deleteData(userId)

    }catch(err) {
        throw err

    }

}

module.exports = {
    createUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}