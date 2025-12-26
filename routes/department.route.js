/**URL => endpoint => route
 * Treat With Controller
 */
const express = require('express')
const controller = require('./../controllers/department.controller')
const router = express.Router()

router.route('/api/department')
    .get(controller.getAllDepartments)
    .post(controller.createDepartment)
    .patch(controller.updateDepartment)

router.route('/api/department/:id')
    .get(controller.getOneDepartment)
    .delete(controller.deleteDepartment)

router.route('/view/department')
    .get(controller.getAllDepartmentsView)


router.route('/view/department/:id')
    .get(controller.getOneDepartmentView)


module.exports = router;
