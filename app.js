const express = require('express')
const morgan = require('morgan')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const teacherRoutes = require('./routes/teacherRoutes')

const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use('/users', userRoutes)
app.use('/users/admins', adminRoutes)
app.use('/users/teachers', teacherRoutes)
// app.use('/users/students, studentRoutes)

module.exports = app

// token for avary: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGEwYjA0MDcwZTk5YjAyNmE4NDBhNzkiLCJpYXQiOjE2ODgyNTI0OTR9.H7J04gwPC9pEvgoU7K3mK2xa9biXDTtjT4j7ZMUp2ws

// token for taina: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGEwYjFlOWExMzg5NDJiZWQzOTI5ZmMiLCJpYXQiOjE2ODgyNTI5MzJ9.QN9DkQxOiy6mdiRyk1C6fUl-CPtny7WXEdkHzGmCfVY