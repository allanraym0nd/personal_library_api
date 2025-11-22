
const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const create = async(userData) => {
    const user = User(userData)
    const hashedPassword = await bcrypt.hash(user.password,10)
    user.password = hashedPassword
    return user.save()
}

const findById = async(id) => {
    await User.findById(id)
}

const findByEmail = async(email) => {
    await User.findOne({email})
}

const updateData = async(id,updateData) => {
    await findByIdAndUpdate(id, updateData, {new:true})
}

const deleteData = async(id) => {
    await User.findByIdAndDelete(id)
}

module.exports = {
    create,
    findById,
    findByEmail,
    updateData,
    deleteData
}