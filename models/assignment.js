const {model, Schema} = require('mongoose')

const assignmentSchema = new Schema({
    title: {type: String, required: true},
    grade: {type: String, required: true},
    students: [{type: Schema.Types.ObjectId, ref: "Student"}]
})

const Assignment = model('Assignment', assignmentSchema)

module.exports = Assignment