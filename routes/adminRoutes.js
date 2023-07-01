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
router.post('/user', userController.auth, adminController.createUser)
router.get('/user', userController.auth, adminController.showAllUsers)
router.get('/user/:id', userController.auth, adminController.showUser)
router.put('/user/:id', userController.auth, adminController.updateUser)
router.delete('/user/:id', userController.auth, adminController.deleteUser)

module.exports = router