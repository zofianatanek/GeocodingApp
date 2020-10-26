const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.3rz42.mongodb.net/users?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB', err));
