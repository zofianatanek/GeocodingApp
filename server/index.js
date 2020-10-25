const express = require('express');
const app = express();
const axios = require('axios');

require('./startup/db');
require('./models/user');

const addUser = require('./routes/addUser');

app.use(express.json());
app.use('/addUser', addUser);

app.get('/', (req, res) => {
  res.send('Welcome to Geocoding App');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
