const express = require('express');
const router = express.Router();
const cors = require('cors');
const { User } = require('../models/user');

router.get('/', cors(), async (req, res, next) => {
  let users = await User.find();
  return res.send(users);
});

module.exports = router;
