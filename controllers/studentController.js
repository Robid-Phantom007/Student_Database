const studentModel = require('../models/studentModel')

exports.createStudent = async (req, res)=>{
  try{
    const student = await studentModel.create(req.body)
    if(!student){
      res.status(400).json({
        message: 'Error creating student'
      })
    }
    else{
      res.status(201).json({
        message: 'Student created successfully',
        data: student
      })
    }
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
}

exports.getAllStudent = async (req, res)=>{
  try{
    const student = await studentModel.find(req.body)
    if(!student){
      res.status(400).json({
        message: 'student database is empty'
      })
    }
    else{
      res.status(201).json({
        message: 'list of all Student in this database',
        totalLenght: student.length,
        data: student
      })
    }
  }catch(error){
    res.status(500).json({
      message: error.message
    })
  }
}