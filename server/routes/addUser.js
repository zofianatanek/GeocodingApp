const express = require('express');
const router = express.Router();
const cors = require('cors');
const { createUser, User, validate } = require('../models/user');

router.options('*', cors());

router.post('/', cors(), async (req, res, next) => {
  const validation = await validate(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (validation.error) {
    const message = validation.error.details[0].message;
    if (message.includes('is not allowed to be empty')) {
      return res.status(400).send('Należy wypełnić wszystkie pola');
    } else if (
      message.includes('"name"') &&
      message.includes('fails to match the required pattern: /[a-zA-Z]/')
    ) {
      return res.status(400).send('Pole "Imię" może zawierać tylko litery.');
    } else if (
      message.includes('"surname"') &&
      message.includes('Pole "Nazwisko" może zawierać tylko litery.')
    ) {
      return res.status(400).send(validation.error.details[0].message);
    } else if (message === '"email" must be a valid email') {
      return res.status(400).send('Niepoprawny format email.');
    }
  } else if (user) {
    return res.send('Podany e-mail wystęuje w bazie');
  } else {
    createUser(req.body, res);
  }
});

module.exports = router;
