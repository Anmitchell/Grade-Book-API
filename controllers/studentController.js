const User = require('../models/user')
const Course = require('../models/course')

/*
// students can see all courses they are enrolled in along with assignments and grades for the course
exports.listAllCourses = async (req, res) => {
    try {
        if (req.user.role === 'role') {
            const enrolledCoures = await Course.find({})
            res.json(enrolledCoures)
        }
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
}
*/
