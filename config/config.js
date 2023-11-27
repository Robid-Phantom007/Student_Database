const mongoose = require('mongoose');
require('dotenv').config();

const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>
{
  console.log('Database connected successfully')
}).catch((error)=>{
  console.log('Somethimg went wrong', error.message);
})