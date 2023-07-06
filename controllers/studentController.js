const User = require('../models/user')
const Course = require('../models/course')

// student can see a list of all courses using users routes

// student selects course they will take
exports.enrollCourse = async (req, res) => {
    if (req.user.role === 'student') {
        try {
            const course = await Course.findOne( {_id: req.params.id} )
            course.users.addToSet({ _id: req.user._id })
            await course.save()
            req.user.courses.addToSet({_id: course._id})
            await req.user.save()
            res.json(course)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

// student sees all courses they are enrolled in
exports.showEnrolledCourses = async (req, res) => {
    if (req.user.role === 'student') {
        try {
            const enrolledCourses = req.user.courses
            const enrolledCoursesInfo = await Course.find({'_id':{ $in: enrolledCourses}})
            res.json(enrolledCoursesInfo)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

// student clicks on course they are enrolled in
exports.showEnrolledCourse = async (req, res) => {
    if (req.user.role === 'student') {
        try {
            const enrolledCourses = req.user.courses
            const enrolledCoursesInfo = await Course.find( {_id: req.params.id} )
            res.json(enrolledCoursesInfo)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

exports.dropEnrolledCourse = async (req, res) => {
    if (req.user.role === 'student') {
        try {
            const enrolledCourses = req.user.courses
            // delete a specific course
            res.json(enrolledCourses)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}
