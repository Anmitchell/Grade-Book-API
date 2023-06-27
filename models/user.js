require('dotenv').config()
const { model, Schema } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY

// Template for documents(objects) added to database
const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['admin', 'teacher', 'student']}
}, {
        timestamps: true
})

// Whenever documents(objects) are saved to the database
// check to see if password has been changed
// if password has been changed
// re-encrypt password
userSchema.pre('save', async function(next){
    this.isModified('password')?
    this.password = await bcrypt.hash(this.password, 8):
    null;
    next()
})

// generate token for user login recognition
userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({_id: this._id}, secret)
    return token
}

const User = model('User', userSchema)

module.exports = User