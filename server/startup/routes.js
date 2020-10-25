const express = require('express');
const addUser = require('../routes/addUser');
const getUsers = require('../routes/getUsers');

module.exports = function (app) {
  app.use(express.json());
  app.use('/addUser', addUser);
  app.use('/getUsers', getUsers);
};
