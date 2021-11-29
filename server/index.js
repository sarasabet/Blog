const PORT = 3001;
const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();
const autRoute = require('./routes/auth');
const { Router } = require('express');


dotenv.config();
app.use(express.json());// to send JSON data
// app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));


app.use(cors()) // CORS middleware useage
app.use(morgan('dev'));

app.use(cors({
  origins: 'http://localhost:3000/',
  optionsSuccessStatus: 200 
}));

// app.use('/', (req, res)=>{
//   res.json('here I am!')
// })
app.use('/api/auth', autRoute)

app.listen(PORT , console.log(`Server isslistening on port ${PORT}`))

