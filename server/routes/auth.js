const router = require('express').Router();
const { register } = require('../controllers/auth');

//REGISTER
router.post('/register', register);

module.exports = router;
