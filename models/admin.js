const { model, Schema } = require('mongoose')

const adminSchema = new Schema ({
    // user: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
    //teacher: { type: Schema.Types.ObjectId, required: true, ref: 'Teacher' },
    //student: { type: Schema.Types.ObjectId, required: true, ref: 'Student' }
})

const Admin = model('Admin', adminSchema)

module.exports = Admin