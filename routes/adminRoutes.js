const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')
const userController = require('../controllers/userController')

// Courses CRUD
router.post('/course', userController.auth, adminController.createCourse)
router.get('/course', userController.auth, adminController.showAllCourses)
router.put('/course/:id', userController.auth, adminController.updateCourse)
router.delete('/course/:id', userController.auth, adminController.deleteCourse)

// User CRUD

module.exports = router

