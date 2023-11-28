const express = require('express')
const {createStudent, getAllStudent, getStudent, updateStudent, deleteStudent} = require('../controllers/studentController')
const router = express.Router()

router.post('/create', createStudent)

router.get('/getall',getAllStudent)

router.get('/getone/:ID', getStudent)

router.put('/update/:ID', updateStudent)

router.delete('/delete/:ID', deleteStudent)

module.exports = router