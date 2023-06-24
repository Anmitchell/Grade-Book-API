const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')

// Index:
router.get('/', userController.auth, userController.ShowAllUsers)

// New - future update!

// Delete
//router.delete('/:id', userController.auth, userController.deleteUser)

// Update
//router.put('/', userController.auth, userController.updateUser)

// Create
router.post('/', userController.createUser)

// Edit - future update!

// Show
//router.get('/:id', userController.showUser)

// Login
router.post('login', userController.loginUser)

// Logout
router.post('logout', userController.auth, userController.logoutUser)

module.exports = router

