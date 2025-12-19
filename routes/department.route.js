/**URL => endpoint => route
 * Treat With Controller
 */
const express = require('express')
const router = express.Router()

router.route('/department')
    .get((req, res, next) => {
        res.status(200).json({ data: [{ id: 1, name: "OOP" }, { id: 2, name: "OS" }] })
    })
    .post((req, res, next) => {
        res.status(200).json({ data: "Department Added" })
    })
    .patch((req, res, next) => {
        res.status(200).json({ data: "Department Updated" })
    })
    .delete((req, res, next) => {
        res.status(200).json({ data: "Department Deleted" })
    })

module.exports = router;
