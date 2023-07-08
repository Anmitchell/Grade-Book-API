const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const studentRoutes = require('./routes/studentRoutes')

const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users/admins', adminRoutes)
app.use('/users/teachers', teacherRoutes)
app.use('/users/students', studentRoutes)
app.use('/users', userRoutes)

module.exports = app