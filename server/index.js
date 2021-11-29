const PORT = 3001;
const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');const app = express();

app.use(cors()) // CORS middleware useage
app.use(morgan('dev'));

app.use(cors({
  origins: 'http://localhost:3000/',
  optionsSuccessStatus: 200 
}));

app.use('/', (req, res)=>{
  res.json('here I am!')
})

app.listen(PORT , console.log(`Server isslistening on port ${PORT}`))