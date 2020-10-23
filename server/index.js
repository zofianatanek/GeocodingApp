const express = require('express');
const app = express();
require('./startup/db');
require('./models/user');

const users = require('./routes/users');

app.use(express.json());
app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Welcome to Geocoding App');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
