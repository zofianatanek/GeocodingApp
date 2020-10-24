const express = require('express');
const router = express.Router();
const { createUser, fetchData } = require('../models/user');

router.post('/', (req, res) => {
  createUser(req.body, res);
});

module.exports = router;
