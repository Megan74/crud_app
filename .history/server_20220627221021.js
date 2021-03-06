const express = require('express');
const dotenv= require('dotenv')
const morgan = require('morgan');
const bodyparser = require('body-parser');


const app = express();

dotenv.config( { path : 'config.env'})
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan('tiny'));


// parse req to body-parser
app.use(bodyparser.urlencoded({ extended : true}));

//set view engine
app.set('view engine', "ejs")

// load assets
app.use("")

 app.get('/',(req,res)=>{
  res.send('Crud application');
})

 app.listen(PORT,()=> { console.log(`Server is running on http://localhost:${PORT}`)});
