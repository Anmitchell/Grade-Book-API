const {model, Schema} = require('mongoose')

const courseSchema = new Schema ({
    id: {type: String, required: true, unique: true},
    title: {type: String, required: true},
    subject: {type: String, required: true},
    grade: {type: String}, // do not make required, teachers do not require a grade
    users: [{ type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
})

const Course = model('Course', courseSchema)

module.exports = Course