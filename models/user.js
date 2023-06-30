
const { model, Schema } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_KEY

// Template for documents(objects) added to database
const userSchema = new Schema({
    schoolId: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: { type: String, enum: ['admin', 'teacher', 'student'], required: true},
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course'}]
}, {
    timestamps: true
})

// Each time documents(objects) are saved to the database
// check to see if password has been changed
// if password has been changed
// re-encrypt password
userSchema.pre('save', async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(`${this.password}${secret}`, 8)
    }
    next()
})

// generate token for user login recognition
userSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign({_id: this._id}, secret)
    return token
}

const User = model('User', userSchema)

module.exports = User