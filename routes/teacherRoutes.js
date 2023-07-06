const express = require('express')
const router = express.Router()
const teacherController = require('../controllers/teacherController')
const userController = require('../controllers/userController')

router.get('/course', userController.auth, teacherController.showSelectedCourses)
router.get('/course/:id', userController.auth, teacherController.showSelectedCourse)
router.post('/course/:id', userController.auth, teacherController.selectCourse)
router.get('/course/student/:id', userController.auth, teacherController.updateStudentGrade)

module.exports = router