const User = require('../models/user')
const Course = require('../models/course')

// teacher adds course they will teach
exports.selectCourse = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            const course = await Course.findOne( {_id: req.params.id} )
            course === 'null'?
            course.users.addToSet({ _id: req.user._id }):
            course.users = [{_id: req.user._id }]
            await course.save()
            console.log(req.user.courses) // empty array
            req.user.courses.addToSet({_id: course._id})
            await req.user.save()
            console.log(req.user.courses)
            res.json(course)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

// teacher views course they are currently teaching
exports.showSelectedCourses = async (req, res) => {
    if (req.user.role === 'teacher') {
        try {
            const foundCourses = await Course.find({})
            res.json(foundCourses)
        } catch (error) {
            res.status(400).json( {message: error.message} )
        }
    }
}

// teacher can see all students along with assignments, assignment grades, and overall grade for the course

// teacher can give assignments to course