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

// get a student

exports.getStudent = async(req,res)=>{
  try{
    const studentId = req.params.ID;
  
    const student = await studentModel.findById(studentId);
 if(!student){
    res.status(404).json({
        message:"student not found"
    })
 }else{
    res.status(200).json({
        message:"student found",
        data:student
    })
 }
  }catch(error){
    res.status(404).json({
        message:error
    })
} 
}

//update a student
exports.updateStudent = async(req,res)=>{
    try{
    //track the user id
    const studentId = req.params.ID;

    //track the student with the id gotten
  const student = await studentModel.findById(studentId);

      //const updatedScore = req.body.score ?? student.score;
      const updatedScore = {
        html: req.body.score?.html !== undefined && req.body.score?.html !== '' ? req.body.score.html : 0,
        javascript: req.body.score?.javascript !== undefined ? req.body.score.javascript : 0,
        css: req.body.score?.css !== undefined && req.body.score?.css !== '' ? req.body.score.css : 0,
        node: req.body.score?.css !== undefined && req.body.score?.css !== '' ? req.body.score.css : 0,
    };

    //check for entity and replace with existing data
    const studentData ={
            name:req.body.name ?? student.name,
            stack:req.body.stack ?? student.stack,
            score:updatedScore
        };
        
    //update the student
    const updatedStudent = await studentModel.findByIdAndUpdate(
            studentId, 
            studentData,
        
        {
                new: true,
            });
      //checkfor errors
        if (!updatedStudent){
            res.status(404).json({
                message: `Student with id: ${studentId} is not found`
            });
        }else{
            res.status(200).json({
                message: `Student with id: ${studentId} has been updated`,
                data:updatedStudent,
            });
        }   

    }catch(err){
        res.status(500).json({
            message: err.message});
    } 
}

   //delete the student
exports.deleteStudent = async(req,res)=>{
    try{
     //track the user id
        const studentId = req.params.ID;

    //track the student with the ID gotten
    const student = await studentModel.findById(studentId);
//check for errors
if(!student){
    res.staus(404).json({
        message: `student with id ${studentId} has not been found`
    })
}
//delete the student
await studentModel.findByIdAndDelete(student);
return res.status(200).json({
    message:`student with id ${studentId} has been deleted`,
    data: student,
})

    }catch(error){
        console.log(error);
    }
  }