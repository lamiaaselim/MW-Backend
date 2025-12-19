/**URL => endpoint => route
 * Treat With Controller
 */
const express = require('express')
const controller = require('./../controllers/department.controller')
const router = express.Router()

router.route('/department')
    .get(controller.getAllDepartments)
    .post(controller.createDepartment)
    .patch(controller.updateDepartment)

router.route('/department/:id')
    .get(controller.getOneDepartment)
    .delete(controller.deleteDepartment)


module.exports = router;
