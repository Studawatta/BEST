const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRoute = require('./routes/auth');

const app = express();

dotenv.config();

const connect = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB!');
  } catch (error) {
    throw error;
  }
};
//middleware
app.use(express.json());

app.use('/api/auth', authRoute);

app.listen(8800, () => {
  connect();
  console.log('server is running');
});
