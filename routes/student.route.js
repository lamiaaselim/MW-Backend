/**URL => endpoint => route
 * Treat With Controller
 */
const express = require('express')
const router = express.Router()
const controller = require('./../controllers/student.controller')
router.route('/api/student')
    .get(controller.getAllStudents)
    .post(controller.createStudent)
    .patch(controller.updateStudent)

router.route('/api/student/:id')
    .get(controller.getOneStudent)
    .delete(controller.deleteStudent)

router.route('/view/student')
    .get(controller.getAllStudentsView)


router.route('/view/student/:id')
    .get(controller.getOneStudentView)

module.exports = router;
