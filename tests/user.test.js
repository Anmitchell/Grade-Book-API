require('dotenv').config()
const request = require('supertest')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { MongoMemoryServer } = require('mongodb-memory-server')
const app = require('../app')
const server = app.listen(8080, () => {
  console.log('Testing on port 8080')
})
const User = require('../models/user')
const Course = require('../models/course')
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

describe('Test user endpoints', () => {

  test('It should create a new user', async () => {
    const response = await request(app)
        .post('/users')
        .send({
            schoolId: '',
            firstName: 'Avary',
            lastName: 'Mitchell',
            email: 'ave@gmail.com',
            password: '1',
            role: "admin"
        })
    expect(response.statusCode).toBe(200)
    expect(response.body.user.firstName).toEqual('Avary')
    expect(response.body.user.lastName).toEqual('Mitchell')
    expect(response.body.user.email).toEqual('ave@gmail.com')
    expect(response.body.user.role).toEqual('admin')
    expect(response.body).toHaveProperty('token')
  })

  test('It should login a new user', async () => {
    // create a new user
    const user = new User({
        schoolId: '',
        firstName: 'Jane',
        lastName: 'doe',
        email: 'doe@email.com',
        password: 'janedoepass',
        role: 'teacher'
      })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
      await user.save() // save to database
      const response = await request(app)
        .post('/users/login')
        .send({ email: 'doe@email.com', password: 'janedoepass' 
    })
      expect(response.statusCode).toBe(200)
      expect(response.body.user.firstName).toEqual('Jane')
      expect(response.body.user.lastName).toEqual('doe')
      expect(response.body.user.email).toEqual('doe@email.com')
      expect(response.body.user.role).toEqual('teacher')
      expect(response.body).toHaveProperty('token')
    })

    // password should be updated
    test('It should update a user', async () => {
        const user = new User({
            firstName: 'bland',
            lastName: 'guard',
            email: 'bland@email.com',
            password: 'blandpass',
            role: 'student'
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        const token = await user.generateAuthToken()
        const response = await request(app)
          .put(`/users/${user._id}`)
          .set('Authorization', `Bearer ${token}`)
          .send( {firstName: 'drag', lastName: 'flank'})
          expect(response.statusCode).toBe(200)
          expect(response.body.firstName).toEqual('drag')
          expect(response.body.lastName).toEqual('flank')
          expect(response.body.email).toEqual('bland@email.com')
          expect(response.body.role).toEqual('student')
      })

      test('It should delete a user', async () => {
        const user = new User({
            schoolId: '',
            firstName: 'wild',
            lastName: 'mild',
            email: 'mild@email.com',
            password: 'mild',
            role: 'student'
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        const token = await user.generateAuthToken()
        const response = await request(app)
          .delete(`/users/${user._id}`)
          .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toBe(204)
      })

      test('If user is an admin, it should create a new course', async () => {
        const user = new User({
            firstName: 'Ave',
            lastName: 'Mitch',
            email: 'try@email.com',
            password: 'justdoit',
            role: 'admin'
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        const token = await user.generateAuthToken()
        const response = await request(app)
          .post(`/users/admins/course`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            id: '111-111',
            title: 'linear algebra',
            subject: 'math'
        })
          expect(response.statusCode).toBe(200)
          expect(response.body.id).toBe('111-111')
          expect(response.body.title).toBe('linear algebra')
          expect(response.body.subject).toBe('math')
      })

      test('If user is an admin, it should show all courses', async () => {
        // make a new user who role is admin
        const user = new User({
            firstName: 'pen',
            lastName: 'round',
            email: 'round@email.com',
            password: 'justwrite',
            role: 'admin'
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        const token = await user.generateAuthToken()
        const response = await request(app)
        .get('/users/admins/course')
        .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toBe(200)
        //expect(response.body).toHaveProperty('course') 
      })

      test('If user is an admin, it should update a course', async () => {
        // make a new user who's role is admin
        // make a new course
        // send a request with course id
        const user = new User({
            firstName: 'tret',
            lastName: 'Meechum',
            email: 'meech@email.com',
            password: 'start',
            role: 'admin'
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        const token = await user.generateAuthToken()
        
        const course = new Course({
            id: '123-123',
            title: 'linear algebra',
            subject: 'math'
        })
        await course.save()
        const response = await request(app)
          .put(`/users/admins/course/${course._id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({
            id: '211-111',
            title: 'algebra',
            subject: 'math'
        })
          expect(response.statusCode).toBe(200)
          expect(response.body.id).toBe('211-111')
          expect(response.body.title).toBe('algebra')
          expect(response.body.subject).toBe('math')
      })
      
      test('If user is an admin, it should create a new course', async () => {
        const user = new User({
            firstName: 'web',
            lastName: 'cam',
            email: 'cam@email.com',
            password: 'cammy',
            role: 'admin'
        })
        user.schoolId = user._id // assign mongodb id to schoolId
        user.schoolId = user.schoolId.slice(16) // shorten unique id given by mongodb
        await user.save()
        const token = await user.generateAuthToken()

        const course = new Course({
            id: '123-123',
            title: 'linear algebra',
            subject: 'math'
        })
        await course.save()
        
        const response = await request(app)
          .delete(`/users/admins/course/${course._id}`)
          .set('Authorization', `Bearer ${token}`)
          expect(response.statusCode).toBe(204)
      })
})