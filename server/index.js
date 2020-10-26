const express = require('express');
const app = express();

require('./startup/db');
require('./startup/routes')(app);

// app.options(
//   cors({
//     origin: 'http://localhost:3001/',
//   })
// );

app.get('/', (req, res) => {
  res.send('Welcome to Geocoding App');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
