require('dotenv').config()
const request = require('supertest')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const server = app.listen(8081, () => {
  console.log('Testing on port 8081')
})
const User = require('../models/user')
let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
  await mongoose.connection.close()
  mongoServer.stop()
  server.close()
})

/* Test for:
* creating a user
* showing all users
* showing a single user
* updating a user
* deleting a user
*/

/* Test for:
* creating a course
* showing all courses
* updating a course
* deleting a course
*/

describe('Test admin endpoints', () => {
    test('It should create a new user', async () => {
        const response = await request(app)
        .set('Authorization', `Bearer ${token} `)
        .post('/users')
        .send({
            firstName: 'Avary',
            lastName: 'Mitchell',
            email: 'ave@gmail.com',
            password: '1',
            role: "admin"
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        expect(response.statusCode).toBe(200)
      })
  })