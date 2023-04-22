const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    const user = await newUser.save();
    res.status(200).json('Registered successfully!');
  } catch (error) {
    res.status(500).json(error);
  }
};
