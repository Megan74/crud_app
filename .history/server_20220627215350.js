const express = require('express');
const dotenv= 
const app = express();

const PORT = process.env.PORT || 8080;

 app.get('/',(req,res)=>{
  res.send('Crud application');
})

 app.listen(PORT,()=> { console.log(`Server is running on http://localhost:${PORT}`)});
