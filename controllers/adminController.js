const User = require('../models/user')
const Course = require('../models/course')

// CRUD for Users

// CRUD for courses
exports.createCourse = async (req, res) => {
    try {
        if (req.user.role === "admin") {
            req.body.user = req.user._id
            const course = await Course.create(req.body)
            req.user.course?
            req.user.course.addToSet({ _id: course._id }):
            req.user.course = [{_id: course._id }]
            await req.user.save()
            res.json(course)
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.showAllCourses = async (req, res) => {
    try {
        if (req.user.role === "admin") {
            const foundCourses = await Course.find({})
            res.json(foundCourses)
        }
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

// admin updates course
exports.updateCourse = async (req, res) => {
    try {
        if (req.user.role === 'admin') {
            const course = await Course.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            res.json(course)
        }
    } catch (error) {
        res.status(400).json( {message: error.message })
    }
}

exports.deleteCourse = async (req, res) => {
    try {
        if (req.user.role === 'admin') {
            const course = await Course.findOneAndDelete({_id: req.params.id})
            res.sendStatus(204)
        }
    } catch (error) {
        res.status(400).json( {message: error.message})
    }
}

// Crud for subjects
