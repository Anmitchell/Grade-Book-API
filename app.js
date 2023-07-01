const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)
app.use('/users/admins', adminRoutes)
// app.use('/users/students, studentRoutes)

module.exports = app