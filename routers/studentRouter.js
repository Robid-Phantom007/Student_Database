const express = require('express')
const {createStudent, getAllStudent} = require('../controllers/studentController')
const router = express.Router()

router.post('/create', createStudent)

router.get('/getall',getAllStudent)

module.exports = router