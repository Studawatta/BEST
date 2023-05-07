const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordCorrect) {
        const token = jwt.sign(
          {
            name: user.username,
          },
          process.env.JWT
        );
        res.json({ status: 'ok', user: token });
      } else {
        res.status(400).json('Wrong password or username!');
      }
    } else {
      res.status(404).json('User not found!');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
