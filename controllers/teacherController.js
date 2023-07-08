const User = require('../models/user')
const Course = require('../models/course')
const { enrollCourse } = require('./studentController') 

// teacher adds course they will teach
exports.selectCourse = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            const course = await Course.findOne( {_id: req.params.id} )
            course === 'null'?
            course.users.addToSet({ _id: req.user._id }):
            course.users = [{_id: req.user._id }]
            await course.save()
            req.user.courses.addToSet({_id: course._id})
            await req.user.save()
            res.json(course)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

// teacher views courses they are currently teaching
exports.showSelectedCourses = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            const currentCourses = req.user.courses
            const courseInfo = await Course.find({'_id':{ $in: currentCourses}})
            res.json(courseInfo)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

exports.showSelectedCourse = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            const course = await Course.find({_id: req.params.id})
            next()
            res.json(course)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}
// need help
exports.updateStudentGrade = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            // find course
            // find student in course
            // assign grade to student
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

// need help
exports.dropStudent = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            // find course
            // find student in course
            // remove student
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}