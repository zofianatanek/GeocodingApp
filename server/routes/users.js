const express = require('express');
const router = express.Router();
const { createUser } = require('../models/user');

router.post('/', (req, res) => {
  console.log(req.body);
  createUser(req.body, res);
});

module.exports = router;
