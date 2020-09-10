const express = require('express');
const router = express.Router();

const {
  renderLogin,
  login,
  renderSignup,
  signup
} = require('../controllers/user.controller')

router.get('/login', renderLogin);
router.post('/login', login);
router.get('/signup', renderSignup);
router.post('/signup', signup);

module.exports = router;
