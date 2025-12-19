/**URL => endpoint => route
 * Treat With Controller
 */
const express = require('express')
const router = express.Router()
const controller = require('./../controllers/student.controller')
router.route('/student')
    .get(controller.getAllStudents)
    .post(controller.createStudent)
    .patch(controller.updateStudent)

router.route('/student/:id')
    .get(controller.getOneStudent)
    .delete(controller.deleteStudent)


module.exports = router;
