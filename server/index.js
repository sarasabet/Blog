const PORT = 3001;
const express = require('express');
const morgan = require ('morgan');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
dotenv.config();
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');
const multer = require('multer')
const { Router } = require('express');
const path = require('path')
// to make images folder public 
app.use("/images", express.static(path.join(__dirname, "/images")));;


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

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use(cors()) // CORS middleware useage
app.use(morgan('dev'));

app.use(cors({
  origins: 'http://localhost:3000/',
  optionsSuccessStatus: 200 
}));



app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);



app.listen(PORT , console.log(`Server isslistening on port ${PORT}`))
// https://www.youtube.com/watch?v=OML9f6LXUUs
