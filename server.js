const express = require ('express');
require('./config/config')
require('dotenv').config(); 
const studentRouter = require('./routers/studentRouter')
const app = express();

app.use(express.json());
app.get("/api/v1", (req, res) => {
  res.send("Welcome to the first GIT_Training");
});
app.use('/api/v1', studentRouter)
const PORT = process.env.PORT


app.listen(PORT, ()=>{
  console.log('server is listenning to the port ' +PORT)
})