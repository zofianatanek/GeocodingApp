const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { createUser, User, validate } = require('../models/user');

router.post('/', async (req, res) => {
  const validation = validate(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (validation) {
    res.status(400).send(validation.error.details[0].message);
  } else if (user) {
    return res.status(400).send('Podany e-mail wystęuje w bazie');
  } else {
    createUser(req.body, res);
  }
});

module.exports = router;
