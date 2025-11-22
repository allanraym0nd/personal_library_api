const userService  = require('../services/user.service')

const createUser = async(req,res) => {
    try{
        const newUser = await userService.createUser(req.body)
        res.status(201).json({message: "User Created Successfully"}, {data: newUser})
    }catch(err){
       res.status(500).json({error: err.message})
    }

}

const loginUser = async(req, res) => {
    try {
        const user = await userService.loginUser(req.body)
        res.status(200).json({message: "User logged in successfully", data: user})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const getUser = async(req, res) => {
    try {
        const userId = req.user.id
        const user = await userService.getUser(req.body, userId)
        res.status(200).json({message: "User retrieved successfully", data: user})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const updateUser = async(req, res) => {
    try {
        const userId = req.user.id
        const user = await userService.updateUser(userId, req.body)
        res.status(200).json({message: "User updated successfully", data: user})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

const deleteUser = async(req, res) => {
    try {
        const userId = req.user.id
        await userService.deleteUser(userId)
        res.status(200).json({message: "User deleted successfully"})
        
    } catch (err) {
        res.status(500).json({error: err.message})
        
    }
}

module.exports = {
    createUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}