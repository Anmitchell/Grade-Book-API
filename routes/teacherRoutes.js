const express = require('express')
const router = express.Router()
const teacherController = require('../controllers/teacherController')
const userController = require('../controllers/userController')

router.get('/course', userController.auth, teacherController.showSelectedCourses)
router.post('/course/:id', userController.auth, teacherController.selectCourse)
//router.post('/courses/:id', userController.auth, teacherController.updateCourse)

module.exports = router