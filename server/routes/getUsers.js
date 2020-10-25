const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get('/', async (req, res) => {
  let users = await User.find();
  return res.send(users);
});

module.exports = router;
