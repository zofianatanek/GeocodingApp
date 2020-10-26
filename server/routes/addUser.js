const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createUser, User, validate } = require('../models/user');

router.options('*', cors());

router.post('/', async (req, res) => {
  const validation = await validate(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (validation) {
    return res.status(400).send(validation.error.details[0].message);
  } else if (user) {
    return res.status(400).send('Podany e-mail wystęuje w bazie');
  } else {
    createUser(req.body, res);
  }
});

module.exports = router;
