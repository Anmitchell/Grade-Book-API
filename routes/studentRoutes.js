const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const userController = require('../controllers/userController')

router.post('/course/:id', userController.auth, studentController.enrollCourse)
router.get('/course', userController.auth, studentController.showEnrolledCourses)
router.get('/course/:id', userController.auth, studentController.showEnrolledCourse)
router.get('/course/:id', userController.auth, studentController.dropEnrolledCourse)

module.exports = router

