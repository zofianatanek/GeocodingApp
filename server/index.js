const express = require('express');
const app = express();
const cors = require('cors');

require('./startup/db');
require('./startup/routes')(app);
app.options(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Geocoding App');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
