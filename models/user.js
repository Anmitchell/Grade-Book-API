require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    dob: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    roles: {type: String, enum: ['teacher', 'student', 'admin'], required: true}
})

userSchema.pre('save', async function(next){
    this.isModified('password')?
    this.password = await bcrypt.hash(this.password, 8):
    null;
    next()
})

userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({_id: this._id}, process.env.SECRET)
    return token
}

const User = mongoose.model('User', userSchema)

module.exports = User