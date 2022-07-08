const express = require('express');
const dotenv= require('dotenv')
const morgan = require('morgan');
const bodyparser = 

const app = express();

dotenv.config( { path : 'config.env'})
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan('tiny'));

 app.get('/',(req,res)=>{
  res.send('Crud application');
})

 app.listen(PORT,()=> { console.log(`Server is running on http://localhost:${PORT}`)});
