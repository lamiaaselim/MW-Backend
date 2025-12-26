/**URL => endpoint => route
 * Treat With Controller
 */
const express = require('express')
const router = express.Router()
const controller = require('./../controllers/student.controller')
const { protect, admin } = require('./../middlewares/auth.middleware')

router.route('/api/student')
    .get(protect, controller.getAllStudents)
    .post(protect, admin, controller.createStudent)
    .patch(controller.updateStudent)

router.route('/api/student/:id')
    .get(controller.getOneStudent)
    .delete(controller.deleteStudent)

router.route('/view/student')
    .get(controller.getAllStudentsView)


router.route('/view/student/:id')
    .get(controller.getOneStudentView)

module.exports = router;
