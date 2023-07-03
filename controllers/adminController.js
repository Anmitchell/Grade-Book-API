const User = require('../models/user')
const Course = require('../models/course')

/********************************************/
/********** Managing user accounts **********/
/********************************************/

// admin can create other user accounts that are admins, teachers, or students
exports.createUser = async (req, res) => {
    try {
        if (req.user.role === "admin") {
            const user = new User(req.body)
            user.schoolId = user._id
            user.schoolId = user.schoolId.slice(16)
            await user.save()
            const token = await user.generateAuthToken()
            res.json({ user, token })
        }
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

exports.showUser = async (req, res) => {
    try {
        if (req.user.role === 'admin') {
            const foundUser = await User.findOne({})
            res.json(foundUser)
        }
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

// admin can view all users in system
exports.showAllUsers = async (req, res) => {
    try {
        if (req.user.role === 'admin') {
            const foundUsers = await User.find({})
            res.json(foundUsers)
        }
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}

// admin can update teacher or student account

exports.updateUser = async (req, res) => {
    try {
        if (req.user.role === 'admin') {
            const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            res.json(user)
        }
    } catch (error) {
        res.status(400).json( {message: error.message })
    }
}

// admin can delete teacher or student account

exports.deleteUser = async (req, res) => {
    try {
        if (req.user.role === "admin") {
            await User.deleteOne( {_id: req.params.id} )
            res.sendStatus(204)
        }
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

/********************************************/
/********** Managing courses **********/
/********************************************/

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
            await Course.findOneAndDelete( {_id: req.params.id} )
            res.sendStatus(204)
        }
    } catch (error) {
        res.status(400).json( {message: error.message})
    }
}

// current admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGEzMTgxYWI3NmQxZGJmNjkwZjY0OTIiLCJpYXQiOjE2ODg0MTAxMzh9.v-Y4EjmAbVPPKaIwcvjrS3w4604B_7beGrI__Hhh4eE
