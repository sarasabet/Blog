const router = require('express').Router();
const User = require('../nodels/User');
const bcrypt = require('bcrypt');



//register
router.post("/register", async (req, res) => {
  try {
    // generate 10dg salt
    const salt = await bcrypt.genSalt(10);
    // hash pass with salt
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    const newUSer = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass

    })
    const user = await newUSer.save();
    res.status(200).json(user);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;