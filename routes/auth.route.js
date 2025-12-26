const express = require('express')
const router = express.Router()
const controller = require('./../controllers/auth.controller')


router.route('/api/register').post(controller.register)
router.route('/api/login').post(controller.login)


module.exports = router